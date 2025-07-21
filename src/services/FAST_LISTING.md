# Fast Listing Feature

This feature allows users to quickly create business listings by importing data from popular booking platforms like Booking.com, Airbnb, Hotels.com, etc.

## Features

### 1. **Direct Generation**

Create a listing immediately from a booking URL:

```typescript
import { businessListingService } from "@/services";

const result = await businessListingService.generateFromUrl({
  bookingUrl: "https://www.booking.com/hotel/us/grand-plaza-miami.html",
  businessOwnerId: "user-id-123",
});

if (result.success) {
  console.log("Listing created:", result.data);
}
```

### 2. **Preview Mode**

Extract data and preview before creating:

```typescript
const preview = await businessListingService.previewFromUrl({
  bookingUrl: "https://www.airbnb.com/rooms/12345678",
  businessOwnerId: "user-id-123",
});

if (preview.success) {
  console.log("Preview data:", preview.data);

  // Create from preview after user confirmation
  const listing = await businessListingService.createFromPreview(
    preview.data.previewData,
    "user-id-123"
  );
}
```

### 3. **URL Validation**

Validate URLs before processing:

```typescript
const validation = await businessListingService.validateUrl(
  "https://www.booking.com/hotel/..."
);

if (validation.success && validation.data?.isValid) {
  console.log("Platform:", validation.data.platform);
  // Proceed with generation/preview
}
```

## React Hook Usage

Use the `useFastListing` hook for easy state management:

```typescript
import { useFastListing } from "@/hooks";

const MyComponent = () => {
  const {
    isPreviewing,
    previewData,
    error,
    previewFromUrl,
    createFromPreview,
  } = useFastListing();

  const handlePreview = async () => {
    const success = await previewFromUrl({
      bookingUrl: url,
      businessOwnerId: userId,
    });

    if (success) {
      // Show preview UI
    }
  };

  return (
    <div>
      {isPreviewing && <p>Loading preview...</p>}
      {previewData && <PreviewComponent data={previewData} />}
      {error && <p>Error: {error}</p>}
    </div>
  );
};
```

## React Component Usage

Use the ready-made modal component:

```typescript
import FastListingModal from "@/components/FastListingModal";

const ParentComponent = () => {
  const [showModal, setShowModal] = useState(false);

  const handleSuccess = (listingId: string) => {
    console.log("Listing created:", listingId);
    // Redirect or refresh
  };

  return (
    <div>
      <button onClick={() => setShowModal(true)}>Quick Import</button>

      <FastListingModal
        isOpen={showModal}
        onClose={() => setShowModal(false)}
        onSuccess={handleSuccess}
      />
    </div>
  );
};
```

## API Endpoints

The service calls these backend endpoints:

### Generate from URL (Direct)

```bash
POST /business-listings/generate-from-url
Content-Type: application/json
Authorization: Bearer <token>

{
  "bookingUrl": "https://www.booking.com/hotel/...",
  "businessOwnerId": "user-id"
}
```

### Preview from URL

```bash
POST /business-listings/preview-from-url
Content-Type: application/json
Authorization: Bearer <token>

{
  "bookingUrl": "https://www.airbnb.com/rooms/...",
  "businessOwnerId": "user-id"
}
```

### Validate URL

```bash
POST /business-listings/validate-url
Content-Type: application/json
Authorization: Bearer <token>

{
  "url": "https://www.booking.com/hotel/..."
}
```

### Get Supported Platforms

```bash
GET /business-listings/supported-platforms
Authorization: Bearer <token>
```

## Response Formats

### Preview Response

```typescript
{
  success: true,
  data: {
    previewData: {
      title: "Grand Plaza Hotel",
      description: "Luxury hotel in downtown...",
      category: "Hotel",
      address: "123 Main St",
      city: "Miami",
      country: "United States",
      amenities: ["WiFi", "Pool", "Gym"],
      // ... other fields
    },
    extractedInfo: {
      source: "booking.com",
      confidence: 85,
      images: ["url1", "url2"],
      pricing: {
        priceRange: "$$$",
        currency: "USD"
      }
    },
    suggestedCategory: "Hotel",
    warnings: ["Some amenities could not be detected"]
  }
}
```

### Validation Response

```typescript
{
  success: true,
  data: {
    isValid: true,
    platform: "booking.com",
    reason: null
  }
}
```

## Supported Platforms

The feature supports extracting data from:

- **Booking.com** - Hotels, apartments, vacation rentals
- **Airbnb** - Vacation rentals, experiences
- **Hotels.com** - Hotels and resorts
- **Expedia** - Hotels, flights, packages
- **VRBO** - Vacation rentals
- **Agoda** - Hotels and accommodations
- **TripAdvisor** - Hotels and attractions

## Error Handling

All methods return a consistent `ApiResponse` format:

```typescript
if (!result.success) {
  console.error("Error:", result.error);
  // Handle error in UI
}
```

Common error scenarios:

- Invalid URL format
- Unsupported platform
- Network connection issues
- Rate limiting
- Missing or corrupted data

## Best Practices

1. **Always validate URLs first** before processing
2. **Use preview mode** for better user experience
3. **Handle errors gracefully** with user-friendly messages
4. **Show loading states** during processing
5. **Allow users to edit** extracted data before saving
6. **Implement retry logic** for network failures

## Integration Tips

### Adding to Existing Forms

You can integrate the fast listing feature into your existing business listing form:

```typescript
const BusinessListingPage = () => {
  const [formData, setFormData] = useState(initialFormData);
  const [showFastListing, setShowFastListing] = useState(false);

  const handleFastListingSuccess = (listingId: string) => {
    // Redirect to the created listing or refresh the page
    router.push(`/business-listings/${listingId}`);
  };

  const handleFastListingPreview = (previewData) => {
    // Pre-fill the form with extracted data
    setFormData((prev) => ({
      ...prev,
      ...previewData.previewData,
    }));
    setShowFastListing(false);
  };

  return (
    <div>
      {/* Existing form */}
      <form>
        <button
          type="button"
          onClick={() => setShowFastListing(true)}
          className="mb-4 px-4 py-2 bg-blue-600 text-white rounded"
        >
          Import from Booking Site
        </button>

        {/* Your existing form fields */}
      </form>

      <FastListingModal
        isOpen={showFastListing}
        onClose={() => setShowFastListing(false)}
        onSuccess={handleFastListingSuccess}
        onPreview={handleFastListingPreview} // Custom handler for preview
      />
    </div>
  );
};
```
