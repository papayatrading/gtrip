import { useState, useEffect, useCallback } from 'react';
import { BusinessListingResponse } from '@/types/businessListing';
import { businessListingService, PaginatedListingsParams, PaginatedListingsResponse } from '@/services/businessListingService';

interface UseBusinessListingsState {
  listings: BusinessListingResponse[];
  loading: boolean;
  error: string | null;
  total: number;
  page: number;
  limit: number;
  totalPages: number;
}

interface UseBusinessListingsReturn extends UseBusinessListingsState {
  fetchListings: (params?: PaginatedListingsParams) => Promise<void>;
  setPage: (page: number) => void;
  setFilters: (filters: { category?: string; city?: string }) => void;
  refresh: () => Promise<void>;
}

export const useBusinessListings = (initialParams?: PaginatedListingsParams): UseBusinessListingsReturn => {
  const [state, setState] = useState<UseBusinessListingsState>({
    listings: [],
    loading: true,
    error: null,
    total: 0,
    page: initialParams?.page || 1,
    limit: initialParams?.limit || 10,
    totalPages: 0,
  });

  const [filters, setFiltersState] = useState<{ category?: string; city?: string }>({
    category: initialParams?.category,
    city: initialParams?.city,
  });

  const fetchListings = useCallback(async (params?: PaginatedListingsParams) => {
    setState(prev => ({ ...prev, loading: true, error: null }));

    try {
      const response = await businessListingService.getPaginatedListings(params);
      
      if (response.success && response.data) {
        // Handle the actual API response structure
        // The response.data contains the listings directly or in a nested structure
        let listings: BusinessListingResponse[] = [];
        let total = 0;
        let page = params?.page || 1;
        let limit = params?.limit || 10;
        let totalPages = 1;

        if (Array.isArray(response.data)) {
          // Direct array response
          listings = response.data;
          total = response.data.length;
          totalPages = Math.ceil(total / limit);
        } else if (response.data.listings && Array.isArray(response.data.listings)) {
          // Response has listings property
          listings = response.data.listings;
          total = response.data.total || response.data.listings.length;
          page = response.data.page || page;
          limit = response.data.limit || limit;
          totalPages = response.data.totalPages || Math.ceil(total / limit);
        } else if (response.data.data && Array.isArray(response.data.data)) {
          // Paginated response structure
          const { data, total: responseTotal, page: responsePage, limit: responseLimit, totalPages: responseTotalPages } = response.data;
          listings = data;
          total = responseTotal;
          page = responsePage;
          limit = responseLimit;
          totalPages = responseTotalPages;
        }

        setState(prev => ({
          ...prev,
          listings,
          total,
          page,
          limit,
          totalPages,
          loading: false,
        }));
      } else {
        setState(prev => ({
          ...prev,
          error: response.error || 'Failed to fetch listings',
          loading: false,
        }));
      }
    } catch (error) {
      setState(prev => ({
        ...prev,
        error: error instanceof Error ? error.message : 'Failed to fetch listings',
        loading: false,
      }));
    }
  }, []);

  const setPage = useCallback((page: number) => {
    setState(prev => ({ ...prev, page }));
    fetchListings({ ...filters, page, limit: state.limit });
  }, [filters, state.limit, fetchListings]);

  const setFilters = useCallback((newFilters: { category?: string; city?: string }) => {
    setFiltersState(newFilters);
    setState(prev => ({ ...prev, page: 1 }));
    fetchListings({ ...newFilters, page: 1, limit: state.limit });
  }, [state.limit, fetchListings]);

  const refresh = useCallback(() => {
    return fetchListings({ ...filters, page: state.page, limit: state.limit });
  }, [filters, state.page, state.limit, fetchListings]);

  useEffect(() => {
    fetchListings(initialParams);
  }, []);

  return {
    ...state,
    fetchListings,
    setPage,
    setFilters,
    refresh,
  };
};
