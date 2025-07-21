# Services Layer

This directory contains all the service classes responsible for handling API communication and business logic.

## Structure

- `apiService.ts` - Base API service with common HTTP methods
- `authService.ts` - Authentication-related API calls
- `businessListingService.ts` - Business listing management
- `utils.ts` - Common utility functions
- `index.ts` - Export all services

## Usage

### API Service

The base service that handles all HTTP requests:

```typescript
import { apiService } from "@/services";

// GET request
const result = await apiService.get("/endpoint");

// POST request
const result = await apiService.post("/endpoint", data);

// File upload
const formData = new FormData();
formData.append("file", file);
const result = await apiService.postFormData("/upload", formData);
```

### Auth Service

Handles user authentication:

```typescript
import { authService } from "@/services";

// Login
const result = await authService.login({
  email: "user@example.com",
  password: "password",
  userType: "business",
});

// Register
const result = await authService.register({
  name: "John Doe",
  email: "user@example.com",
  password: "password",
  userType: "business",
});

// Get current user
const user = await authService.getCurrentUser();
```

### Business Listing Service

Manages business listings:

```typescript
import { businessListingService } from "@/services";

// Create listing
const result = await businessListingService.createListing(formData, userId);

// Get all listings
const listings = await businessListingService.getListings();

// Search listings
const searchResults = await businessListingService.searchListings({
  category: "Hotel",
  city: "New York",
});
```

### Utilities

Common helper functions:

```typescript
import { formatCurrency, isValidEmail, debounce } from "@/services";

// Format currency
const price = formatCurrency(100); // "$100.00"

// Validate email
const isValid = isValidEmail("user@example.com"); // true

// Debounce function
const debouncedSearch = debounce(searchFunction, 300);
```

## Configuration

Set your API base URL in `.env.local`:

```env
NEXT_PUBLIC_API_URL=http://localhost:4005
```

## Error Handling

All services return a consistent response format:

```typescript
interface ApiResponse<T> {
  success: boolean;
  data?: T;
  message?: string;
  error?: string;
}
```

Example usage:

```typescript
const result = await businessListingService.createListing(data, userId);

if (result.success) {
  console.log("Success:", result.data);
} else {
  console.error("Error:", result.error);
}
```

## Authentication

Services automatically include JWT tokens in requests when available. Tokens are stored in localStorage and managed by the auth service.

## File Uploads

For endpoints that accept file uploads, use FormData:

```typescript
const formData = new FormData();
formData.append("images", file1);
formData.append("images", file2);
formData.append("title", "Business Name");

const result = await businessListingService.createListing(formData, userId);
```
