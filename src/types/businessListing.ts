export interface ListingFormData {
  title: string;
  description: string;
  category: string;
  subcategory: string;
  address: string;
  city: string;
  country: string;
  zipCode: string;
  latitude?: number;
  longitude?: number;
  phoneNumber: string;
  email: string;
  website: string;
  priceRange: string;
  amenities: string[];
  images: File[];
  imageUrls: string[];
  tags: string[];
  socialMedia: {
    facebook?: string;
    instagram?: string;
    twitter?: string;
    linkedin?: string;
  };
  policies: {
    cancellationPolicy: string;
    checkInTime?: string;
    checkOutTime?: string;
    ageRestriction?: string;
    petPolicy?: string;
  };
  operatingHours: {
    monday: { open: string; close: string; closed: boolean };
    tuesday: { open: string; close: string; closed: boolean };
    wednesday: { open: string; close: string; closed: boolean };
    thursday: { open: string; close: string; closed: boolean };
    friday: { open: string; close: string; closed: boolean };
    saturday: { open: string; close: string; closed: boolean };
    sunday: { open: string; close: string; closed: boolean };
  };
  specialOffers?: string;
  capacity?: number;
  languages: string[];
}

export interface BusinessListing extends Omit<ListingFormData, 'images'> {
  id: string;
  businessOwnerId: string;
  imageUrls: string[];
  createdAt: string;
  updatedAt: string;
  status: 'active' | 'inactive' | 'pending' | 'rejected';
  rating?: number;
  reviewCount?: number;
  verified?: boolean;
}

export interface BusinessListingResponse {
  id: string;
  title: string;
  description: string;
  category: string;
  subcategory?: string;
  address: string;
  city: string;
  country: string;
  zipCode?: string;
  latitude?: number;
  longitude?: number;
  phoneNumber?: string;
  email?: string;
  website?: string;
  priceRange?: string;
  amenities: string | string[];
  imageUrls?: string[];
  images?: string[];
  tags: string | string[];
  socialMedia: string | {
    facebook?: string;
    instagram?: string;
    twitter?: string;
    linkedin?: string;
  };
  policies: string | {
    cancellationPolicy?: string;
    checkInTime?: string;
    checkOutTime?: string;
    ageRestriction?: string;
    petPolicy?: string;
  };
  operatingHours: string | {
    monday: { open: string; close: string; closed: boolean };
    tuesday: { open: string; close: string; closed: boolean };
    wednesday: { open: string; close: string; closed: boolean };
    thursday: { open: string; close: string; closed: boolean };
    friday: { open: string; close: string; closed: boolean };
    saturday: { open: string; close: string; closed: boolean };
    sunday: { open: string; close: string; closed: boolean };
  };
  specialOffers?: string;
  capacity?: number;
  languages: string | string[];
  businessOwnerId: string;
  status?: 'active' | 'inactive' | 'pending' | 'rejected';
  isActive?: boolean;
  rating?: number;
  reviewCount?: number;
  verified?: boolean;
  isVerified?: boolean;
  createdAt: string;
  updatedAt: string;
  businessOwner?: {
    id: number;
    email: string;
    name: string;
    businessName: string;
  };
}

export interface SearchBusinessListingsParams {
  search?: string;
  category?: string;
  city?: string;
  country?: string;
  priceRange?: string;
  amenities?: string[];
  tags?: string[];
  limit?: number;
  offset?: number;
}

export interface GetBusinessListingsParams {
  category?: string;
  city?: string;
  limit?: number;
  offset?: number;
}

export interface FastListingRequest {
  bookingUrl: string;
  businessOwnerId: string;
}

export interface PreviewListingData {
  previewData: Partial<ListingFormData>;
  extractedInfo: {
    source: string;
    title?: string;
    description?: string;
    images?: string[];
    amenities?: string[];
    location?: {
      address?: string;
      city?: string;
      country?: string;
    };
    pricing?: {
      priceRange?: string;
      currency?: string;
    };
    contact?: {
      phone?: string;
      email?: string;
      website?: string;
    };
  };
  confidence: number;
  suggestedCategory?: string;
  warnings?: string[];
}

export interface SupportedPlatform {
  name: string;
  domain: string;
  supported: boolean;
  features: string[];
}
