# Backend Setup Instructions for Business Listings

## 📋 Overview

This guide provides complete backend setup instructions for the enhanced business listings feature, including database schema, API endpoints, file upload handling, and deployment considerations.

## 🗄️ Database Setup

### Option 1: Using Prisma (Recommended)

1. **Install Prisma:**

```bash
npm install prisma @prisma/client
npm install -D prisma
```

2. **Initialize Prisma:**

```bash
npx prisma init
```

3. **Setup Environment Variables:**
   Create/update `.env.local`:

```env
# Database
DATABASE_URL="postgresql://username:password@localhost:5432/gtrip_db"

# JWT Secret
JWT_SECRET="your-super-secret-jwt-key-here"

# File Upload (AWS S3)
AWS_ACCESS_KEY_ID="your-aws-access-key"
AWS_SECRET_ACCESS_KEY="your-aws-secret-key"
AWS_S3_BUCKET_NAME="gtrip-listings-images"
AWS_REGION="us-east-1"

# Alternative: Cloudinary
CLOUDINARY_CLOUD_NAME="your-cloud-name"
CLOUDINARY_API_KEY="your-api-key"
CLOUDINARY_API_SECRET="your-api-secret"
```

4. **Run Migrations:**

```bash
npx prisma migrate dev --name init
npx prisma generate
```

5. **Seed Database:**

```bash
npx prisma db seed
```

### Option 2: Direct SQL Setup

1. **Create Database:**

```sql
CREATE DATABASE gtrip_db;
```

2. **Run Schema:**
   Execute the provided `database/schema.sql` file in your database.

## 🔧 Required Dependencies

Add these to your `package.json`:

```bash
# Core dependencies
npm install @prisma/client
npm install bcryptjs jsonwebtoken
npm install multer sharp

# File upload options
npm install aws-sdk  # For AWS S3
# OR
npm install cloudinary  # For Cloudinary

# Validation
npm install zod
npm install @hookform/resolvers

# Additional utilities
npm install uuid
npm install date-fns
```

## 📁 File Upload Setup

### Option 1: AWS S3 Setup

Create `src/lib/aws-s3.ts`:

```typescript
import AWS from "aws-sdk";

const s3 = new AWS.S3({
  accessKeyId: process.env.AWS_ACCESS_KEY_ID,
  secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
  region: process.env.AWS_REGION,
});

export async function uploadToS3(
  file: File,
  fileName: string
): Promise<string> {
  const params = {
    Bucket: process.env.AWS_S3_BUCKET_NAME!,
    Key: `listings/${fileName}`,
    Body: Buffer.from(await file.arrayBuffer()),
    ContentType: file.type,
    ACL: "public-read",
  };

  const result = await s3.upload(params).promise();
  return result.Location;
}

export async function deleteFromS3(fileUrl: string): Promise<void> {
  const key = fileUrl.split("/").slice(-2).join("/"); // Extract key from URL
  const params = {
    Bucket: process.env.AWS_S3_BUCKET_NAME!,
    Key: key,
  };

  await s3.deleteObject(params).promise();
}
```

### Option 2: Cloudinary Setup

Create `src/lib/cloudinary.ts`:

```typescript
import { v2 as cloudinary } from "cloudinary";

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

export async function uploadToCloudinary(
  file: File,
  folder: string = "listings"
): Promise<string> {
  const bytes = await file.arrayBuffer();
  const buffer = Buffer.from(bytes);

  return new Promise((resolve, reject) => {
    cloudinary.uploader
      .upload_stream(
        {
          folder,
          resource_type: "auto",
          transformation: [
            { width: 1200, height: 800, crop: "limit" },
            { quality: "auto" },
            { format: "webp" },
          ],
        },
        (error, result) => {
          if (error) reject(error);
          else resolve(result!.secure_url);
        }
      )
      .end(buffer);
  });
}
```

## 🔐 Authentication Setup

Create `src/lib/auth.ts`:

```typescript
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";

export interface JWTPayload {
  userId: string;
  email: string;
  userType: "regular" | "business";
}

export function generateToken(payload: JWTPayload): string {
  return jwt.sign(payload, process.env.JWT_SECRET!, { expiresIn: "7d" });
}

export function verifyToken(token: string): JWTPayload {
  return jwt.verify(token, process.env.JWT_SECRET!) as JWTPayload;
}

export async function hashPassword(password: string): Promise<string> {
  return bcrypt.hash(password, 12);
}

export async function comparePassword(
  password: string,
  hash: string
): Promise<boolean> {
  return bcrypt.compare(password, hash);
}

export function extractTokenFromHeader(
  authHeader: string | null
): string | null {
  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    return null;
  }
  return authHeader.substring(7);
}
```

## 📝 API Endpoints Structure

### Enhanced API Routes

Create `src/app/api/business-listings/[id]/route.ts`:

```typescript
import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { verifyToken } from "@/lib/auth";

// GET /api/business-listings/[id] - Get specific listing
export async function GET(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const listing = await prisma.businessListing.findUnique({
      where: { id: params.id },
      include: {
        amenities: { include: { amenity: true } },
        images: true,
        tags: { include: { tag: true } },
        socialMedia: true,
        policies: true,
        operatingHours: true,
        languages: { include: { language: true } },
        reviews: {
          include: { user: { select: { name: true } } },
          orderBy: { createdAt: "desc" },
          take: 10,
        },
      },
    });

    if (!listing) {
      return NextResponse.json({ error: "Listing not found" }, { status: 404 });
    }

    return NextResponse.json({ listing });
  } catch (error) {
    console.error("Error fetching listing:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}

// PUT /api/business-listings/[id] - Update listing
export async function PUT(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  // Implementation for updating listings
}

// DELETE /api/business-listings/[id] - Delete listing
export async function DELETE(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  // Implementation for deleting listings
}
```

### Search and Filter API

Create `src/app/api/search/listings/route.ts`:

```typescript
import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);

  const query = searchParams.get("q");
  const category = searchParams.get("category");
  const city = searchParams.get("city");
  const country = searchParams.get("country");
  const priceRange = searchParams.get("priceRange");
  const amenities = searchParams.get("amenities")?.split(",");
  const tags = searchParams.get("tags")?.split(",");
  const page = parseInt(searchParams.get("page") || "1");
  const limit = parseInt(searchParams.get("limit") || "12");

  try {
    const where: any = {
      status: "PUBLISHED",
      AND: [],
    };

    if (query) {
      where.AND.push({
        OR: [
          { title: { contains: query, mode: "insensitive" } },
          { description: { contains: query, mode: "insensitive" } },
          { city: { contains: query, mode: "insensitive" } },
        ],
      });
    }

    if (category) where.category = category;
    if (city) where.city = { contains: city, mode: "insensitive" };
    if (country) where.country = { contains: country, mode: "insensitive" };
    if (priceRange) where.priceRange = priceRange;

    if (amenities?.length) {
      where.AND.push({
        amenities: {
          some: {
            amenity: {
              name: { in: amenities },
            },
          },
        },
      });
    }

    if (tags?.length) {
      where.AND.push({
        tags: {
          some: {
            tag: {
              name: { in: tags },
            },
          },
        },
      });
    }

    const [listings, total] = await Promise.all([
      prisma.businessListing.findMany({
        where,
        include: {
          images: { where: { isPrimary: true }, take: 1 },
          amenities: { include: { amenity: true } },
          tags: { include: { tag: true } },
          reviews: {
            select: { rating: true },
          },
        },
        orderBy: { createdAt: "desc" },
        skip: (page - 1) * limit,
        take: limit,
      }),
      prisma.businessListing.count({ where }),
    ]);

    return NextResponse.json({
      listings,
      pagination: {
        page,
        limit,
        total,
        pages: Math.ceil(total / limit),
      },
    });
  } catch (error) {
    console.error("Error searching listings:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
```

## 🌐 Environment Setup

### Development Environment

1. **Local Database:**

```bash
# PostgreSQL with Docker
docker run --name gtrip-postgres -e POSTGRES_PASSWORD=password -e POSTGRES_DB=gtrip_db -p 5432:5432 -d postgres:14

# MySQL with Docker
docker run --name gtrip-mysql -e MYSQL_ROOT_PASSWORD=password -e MYSQL_DATABASE=gtrip_db -p 3306:3306 -d mysql:8
```

2. **Environment Variables (.env.local):**

```env
DATABASE_URL="postgresql://postgres:password@localhost:5432/gtrip_db"
JWT_SECRET="dev-secret-key-change-in-production"
NEXTAUTH_SECRET="nextauth-secret-key"
NEXTAUTH_URL="http://localhost:3000"
```

### Production Environment

1. **Database Options:**

   - **Supabase** (PostgreSQL): Easy setup with built-in auth
   - **PlanetScale** (MySQL): Serverless with branching
   - **AWS RDS**: Full control, any SQL database
   - **Vercel Postgres**: Integrated with Vercel hosting

2. **File Storage:**

   - **AWS S3**: Industry standard, cost-effective
   - **Cloudinary**: Image optimization included
   - **Vercel Blob**: Integrated with Vercel

3. **Deployment:**
   - **Vercel**: Seamless Next.js deployment
   - **AWS Amplify**: Full-stack AWS solution
   - **Railway**: Simple deployment platform

## 🧪 Testing Setup

Create `src/lib/test-utils.ts`:

```typescript
import { prisma } from "./prisma";

export async function createTestListing(businessOwnerId: string) {
  return prisma.businessListing.create({
    data: {
      businessOwnerId,
      title: "Test Hotel",
      description: "A beautiful test hotel",
      category: "Hotel",
      address: "123 Test Street",
      city: "Test City",
      country: "Test Country",
      status: "PUBLISHED",
    },
  });
}

export async function cleanupTestData() {
  await prisma.booking.deleteMany();
  await prisma.listingReview.deleteMany();
  await prisma.businessListing.deleteMany();
  await prisma.user.deleteMany();
}
```

## 📊 Analytics and Monitoring

1. **Database Monitoring:**

   - Query performance tracking
   - Connection pool monitoring
   - Slow query identification

2. **API Monitoring:**

   - Response time tracking
   - Error rate monitoring
   - Usage analytics

3. **File Upload Monitoring:**
   - Upload success rates
   - Storage usage tracking
   - Image optimization metrics

## 🔒 Security Considerations

1. **Input Validation:**

   - Use Zod for request validation
   - Sanitize file uploads
   - Rate limiting on API endpoints

2. **Authentication:**

   - JWT token expiration
   - Refresh token implementation
   - Role-based access control

3. **File Security:**
   - File type validation
   - File size limits
   - Virus scanning for uploads

## 🚀 Deployment Checklist

- [ ] Environment variables configured
- [ ] Database migrations run
- [ ] File upload service configured
- [ ] JWT secrets set
- [ ] CORS policies configured
- [ ] Rate limiting implemented
- [ ] Error monitoring setup
- [ ] Backup strategy implemented
- [ ] SSL certificates configured
- [ ] CDN setup for images

## 📚 Additional Resources

- [Prisma Documentation](https://www.prisma.io/docs)
- [Next.js API Routes](https://nextjs.org/docs/api-routes/introduction)
- [AWS S3 Setup Guide](https://docs.aws.amazon.com/s3/)
- [Cloudinary Documentation](https://cloudinary.com/documentation)
- [JWT Best Practices](https://auth0.com/blog/a-look-at-the-latest-draft-for-jwt-bcp/)

## 🐛 Common Issues and Solutions

1. **Database Connection Issues:**

   - Check DATABASE_URL format
   - Verify database server is running
   - Check firewall settings

2. **File Upload Problems:**

   - Verify AWS/Cloudinary credentials
   - Check file size limits
   - Validate file types

3. **Authentication Errors:**
   - Verify JWT_SECRET is set
   - Check token expiration
   - Validate token format

This setup provides a robust, scalable backend for the enhanced business listings feature with proper security, validation, and monitoring capabilities.
