import { ListingFormData, BusinessListingResponse, SearchBusinessListingsParams, GetBusinessListingsParams } from '@/types/businessListing';
import { apiService, ApiResponse } from './apiService';

export interface CreateListingRequest extends Omit<ListingFormData, 'images'> {
  businessOwnerId: string;
  images?: File[];
}

export interface GenerateFromUrlRequest {
  bookingUrl: string;
  businessOwnerId: string;
}

export interface PreviewFromUrlRequest {
  bookingUrl: string;
  businessOwnerId: string;
}

export interface PreviewListingResponse {
  previewData: Partial<ListingFormData>;
  confidence: number; // 0-100 confidence score of extraction
  manualReviewRequired: boolean;
  suggestions: string[];
  message: string;
}

export interface PaginatedListingsParams {
  page?: number;
  limit?: number;
  category?: string;
  city?: string;
}

export interface PaginatedListingsResponse {
  data: BusinessListingResponse[];
  total: number;
  page: number;
  limit: number;
  totalPages: number;
}

class BusinessListingService {
  /**
   * Create a new business listing
   */
  async createListing(formData: ListingFormData, businessOwnerId: string): Promise<ApiResponse<BusinessListingResponse>> {
    try {
      // Create FormData for file upload
      const submitData = new FormData();

      // Add text fields
      Object.entries(formData).forEach(([key, value]) => {
        if (key === "images") {
          // Handle file uploads separately
          formData.images.forEach((file: File) => {
            submitData.append("images", file);
          });
        } else if (typeof value === "object" && value !== null) {
          submitData.append(key, JSON.stringify(value));
        } else if (value !== undefined && value !== null) {
          submitData.append(key, value.toString());
        }
      });

      // Add business owner ID
      submitData.append("businessOwnerId", businessOwnerId);

      return apiService.postFormData<BusinessListingResponse>('/business-listings', submitData);
    } catch (error) {
      console.error("Error creating listing:", error);
      return {
        success: false,
        error: error instanceof Error ? error.message : "Network error occurred",
      };
    }
  }

  /**
   * Get all business listings
   */
  async getListings(params?: GetBusinessListingsParams): Promise<ApiResponse<BusinessListingResponse[]>> {
    return apiService.get<BusinessListingResponse[]>('/business-listings', params);
  }

  /**
   * Get paginated business listings with optional filters
   */
  async getPaginatedListings(params?: PaginatedListingsParams): Promise<ApiResponse<PaginatedListingsResponse>> {
    const queryParams = new URLSearchParams();
    
    if (params?.page) queryParams.append('page', params.page.toString());
    if (params?.limit) queryParams.append('limit', params.limit.toString());
    if (params?.category) queryParams.append('category', params.category);
    if (params?.city) queryParams.append('city', params.city);

    const queryString = queryParams.toString();
    const url = queryString ? `/business-listings?${queryString}` : '/business-listings';
    
    return apiService.get<PaginatedListingsResponse>(url);
  }

  /**
   * Get a single business listing by ID
   */
  async getListingById(id: string): Promise<ApiResponse<BusinessListingResponse>> {
    return apiService.get<BusinessListingResponse>(`/business-listings/${id}`);
  }

  /**
   * Update a business listing
   */
  async updateListing(id: string, formData: Partial<ListingFormData>): Promise<ApiResponse<BusinessListingResponse>> {
    try {
      // Create FormData for file upload
      const submitData = new FormData();

      // Add text fields
      Object.entries(formData).forEach(([key, value]) => {
        if (key === "images" && Array.isArray(value)) {
          // Handle file uploads separately
          value.forEach((file) => {
            if (file instanceof File) {
              submitData.append("images", file);
            }
          });
        } else if (typeof value === "object" && value !== null) {
          submitData.append(key, JSON.stringify(value));
        } else if (value !== undefined && value !== null) {
          submitData.append(key, value.toString());
        }
      });

      return apiService.patchFormData<BusinessListingResponse>(`/business-listings/${id}`, submitData);
    } catch (error) {
      console.error("Error updating listing:", error);
      return {
        success: false,
        error: error instanceof Error ? error.message : "Network error occurred",
      };
    }
  }

  /**
   * Delete a business listing
   */
  async deleteListing(id: string): Promise<ApiResponse<void>> {
    return apiService.delete<void>(`/business-listings/${id}`);
  }

  /**
   * Get business listings for the current user (business owner)
   */
  async getMyListings(): Promise<ApiResponse<BusinessListingResponse[]>> {
    return apiService.get<BusinessListingResponse[]>('/business-listings/my-listings');
  }

  /**
   * Search business listings
   */
  async searchListings(query: SearchBusinessListingsParams): Promise<ApiResponse<BusinessListingResponse[]>> {
    return apiService.get<BusinessListingResponse[]>('/business-listings/search', query);
  }

  /**
   * Generate a business listing from a booking URL (Booking.com, Airbnb, etc.)
   * This creates and saves the listing directly
   */
  async generateFromUrl(request: GenerateFromUrlRequest): Promise<ApiResponse<BusinessListingResponse>> {
    try {
      return apiService.post<BusinessListingResponse>('/business-listings/generate-from-url', request);
    } catch (error) {
      console.error("Error generating listing from URL:", error);
      return {
        success: false,
        error: error instanceof Error ? error.message : "Failed to generate listing from URL",
      };
    }
  }

  /**
   * Preview a business listing from a booking URL without saving
   * This extracts data and returns it for user review before submission
   */
  async previewFromUrl(request: PreviewFromUrlRequest): Promise<ApiResponse<PreviewListingResponse>> {
    try {
      return apiService.post<PreviewListingResponse>('/business-listings/preview-from-url', request);
    } catch (error) {
      console.error("Error previewing listing from URL:", error);
      return {
        success: false,
        error: error instanceof Error ? error.message : "Failed to preview listing from URL",
      };
    }
  }

  /**
   * Create a listing from preview data
   * Use this after getting preview data and user confirmation
   */
  async createFromPreview(previewData: Partial<ListingFormData>, businessOwnerId: string): Promise<ApiResponse<BusinessListingResponse>> {
    try {
      // Convert partial preview data to full form data with defaults
      const fullFormData: ListingFormData = {
        title: previewData.title || '',
        description: previewData.description || '',
        category: previewData.category || '',
        subcategory: previewData.subcategory || '',
        address: previewData.address || '',
        city: previewData.city || '',
        country: previewData.country || '',
        zipCode: previewData.zipCode || '',
        latitude: previewData.latitude,
        longitude: previewData.longitude,
        phoneNumber: previewData.phoneNumber || '',
        email: previewData.email || '',
        website: previewData.website || '',
        priceRange: previewData.priceRange || '',
        amenities: previewData.amenities || [],
        images: previewData.images || [],
        imageUrls: previewData.imageUrls || [],
        tags: previewData.tags || [],
        socialMedia: previewData.socialMedia || {
          facebook: '',
          instagram: '',
          twitter: '',
          linkedin: '',
        },
        policies: previewData.policies || {
          cancellationPolicy: '',
          checkInTime: '',
          checkOutTime: '',
          ageRestriction: '',
          petPolicy: '',
        },
        operatingHours: previewData.operatingHours || {
          monday: { open: "09:00", close: "17:00", closed: false },
          tuesday: { open: "09:00", close: "17:00", closed: false },
          wednesday: { open: "09:00", close: "17:00", closed: false },
          thursday: { open: "09:00", close: "17:00", closed: false },
          friday: { open: "09:00", close: "17:00", closed: false },
          saturday: { open: "09:00", close: "17:00", closed: false },
          sunday: { open: "09:00", close: "17:00", closed: true },
        },
        specialOffers: previewData.specialOffers || '',
        capacity: previewData.capacity,
        languages: previewData.languages || [],
      };

      return this.createListing(fullFormData, businessOwnerId);
    } catch (error) {
      console.error("Error creating listing from preview:", error);
      return {
        success: false,
        error: error instanceof Error ? error.message : "Failed to create listing from preview data",
      };
    }
  }

  /**
   * Get supported booking platforms
   */
  async getSupportedPlatforms(): Promise<ApiResponse<string[]>> {
    try {
      return apiService.get<string[]>('/business-listings/supported-platforms');
    } catch (error) {
      console.error("Error fetching supported platforms:", error);
      return {
        success: false,
        error: error instanceof Error ? error.message : "Failed to fetch supported platforms",
      };
    }
  }

  /**
   * Validate a booking URL before processing
   */
  async validateUrl(url: string): Promise<ApiResponse<{ isValid: boolean; platform?: string; reason?: string }>> {
    try {
      return apiService.post<{ isValid: boolean; platform?: string; reason?: string }>('/business-listings/validate-url', { url });
    } catch (error) {
      console.error("Error validating URL:", error);
      return {
        success: false,
        error: error instanceof Error ? error.message : "Failed to validate URL",
      };
    }
  }
}

// Export a singleton instance
export const businessListingService = new BusinessListingService();
export default businessListingService;
