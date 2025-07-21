import { useState } from 'react';
import { businessListingService } from '@/services';
import type { PreviewListingResponse, GenerateFromUrlRequest, PreviewFromUrlRequest } from '@/services/businessListingService';
import type { BusinessListingResponse, ListingFormData } from '@/types/businessListing';

export interface UseFastListingState {
  isGenerating: boolean;
  isPreviewing: boolean;
  isValidating: boolean;
  isCreating: boolean;
  previewData: PreviewListingResponse | null;
  generatedListing: BusinessListingResponse | null;
  error: string | null;
  validationResult: { isValid: boolean; platform?: string; reason?: string } | null;
}

export interface UseFastListingActions {
  generateFromUrl: (request: GenerateFromUrlRequest) => Promise<boolean>;
  previewFromUrl: (request: PreviewFromUrlRequest) => Promise<boolean>;
  createFromPreview: (businessOwnerId: string) => Promise<boolean>;
  validateUrl: (url: string) => Promise<boolean>;
  clearError: () => void;
  clearPreview: () => void;
  clearAll: () => void;
}

export interface UseFastListingReturn extends UseFastListingState, UseFastListingActions {}

/**
 * React hook for managing fast listing creation from booking URLs
 */
export const useFastListing = (): UseFastListingReturn => {
  const [state, setState] = useState<UseFastListingState>({
    isGenerating: false,
    isPreviewing: false,
    isValidating: false,
    isCreating: false,
    previewData: null,
    generatedListing: null,
    error: null,
    validationResult: null,
  });

  const clearError = () => {
    setState(prev => ({ ...prev, error: null }));
  };

  const clearPreview = () => {
    setState(prev => ({ 
      ...prev, 
      previewData: null, 
      error: null,
      validationResult: null 
    }));
  };

  const clearAll = () => {
    setState({
      isGenerating: false,
      isPreviewing: false,
      isValidating: false,
      isCreating: false,
      previewData: null,
      generatedListing: null,
      error: null,
      validationResult: null,
    });
  };

  const generateFromUrl = async (request: GenerateFromUrlRequest): Promise<boolean> => {
    setState(prev => ({ 
      ...prev, 
      isGenerating: true, 
      error: null, 
      generatedListing: null 
    }));

    try {
      const result = await businessListingService.generateFromUrl(request);
      
      if (result.success && result.data) {
        setState(prev => ({ 
          ...prev, 
          isGenerating: false, 
          generatedListing: result.data!,
          error: null 
        }));
        return true;
      } else {
        setState(prev => ({ 
          ...prev, 
          isGenerating: false, 
          error: result.error || 'Failed to generate listing' 
        }));
        return false;
      }
    } catch (error) {
      setState(prev => ({ 
        ...prev, 
        isGenerating: false, 
        error: error instanceof Error ? error.message : 'Network error occurred' 
      }));
      return false;
    }
  };

  const previewFromUrl = async (request: PreviewFromUrlRequest): Promise<boolean> => {
    setState(prev => ({ 
      ...prev, 
      isPreviewing: true, 
      error: null, 
      previewData: null 
    }));

    try {
      const result = await businessListingService.previewFromUrl(request);
      
      if (result.success && result.data) {
        setState(prev => ({ 
          ...prev, 
          isPreviewing: false, 
          previewData: result.data!,
          error: null 
        }));
        return true;
      } else {
        setState(prev => ({ 
          ...prev, 
          isPreviewing: false, 
          error: result.error || 'Failed to preview listing' 
        }));
        return false;
      }
    } catch (error) {
      setState(prev => ({ 
        ...prev, 
        isPreviewing: false, 
        error: error instanceof Error ? error.message : 'Network error occurred' 
      }));
      return false;
    }
  };

  const createFromPreview = async (businessOwnerId: string): Promise<boolean> => {
    if (!state.previewData) {
      setState(prev => ({ 
        ...prev, 
        error: 'No preview data available' 
      }));
      return false;
    }

    setState(prev => ({ 
      ...prev, 
      isCreating: true, 
      error: null, 
      generatedListing: null 
    }));

    try {
      const result = await businessListingService.createFromPreview(
        state.previewData.previewData, 
        businessOwnerId
      );
      
      if (result.success && result.data) {
        setState(prev => ({ 
          ...prev, 
          isCreating: false, 
          generatedListing: result.data!,
          error: null 
        }));
        return true;
      } else {
        setState(prev => ({ 
          ...prev, 
          isCreating: false, 
          error: result.error || 'Failed to create listing from preview' 
        }));
        return false;
      }
    } catch (error) {
      setState(prev => ({ 
        ...prev, 
        isCreating: false, 
        error: error instanceof Error ? error.message : 'Network error occurred' 
      }));
      return false;
    }
  };

  const validateUrl = async (url: string): Promise<boolean> => {
    setState(prev => ({ 
      ...prev, 
      isValidating: true, 
      error: null, 
      validationResult: null 
    }));

    try {
      const result = await businessListingService.validateUrl(url);
      
      if (result.success && result.data) {
        setState(prev => ({ 
          ...prev, 
          isValidating: false, 
          validationResult: result.data!,
          error: null 
        }));
        return result.data.isValid;
      } else {
        setState(prev => ({ 
          ...prev, 
          isValidating: false, 
          error: result.error || 'Failed to validate URL' 
        }));
        return false;
      }
    } catch (error) {
      setState(prev => ({ 
        ...prev, 
        isValidating: false, 
        error: error instanceof Error ? error.message : 'Network error occurred' 
      }));
      return false;
    }
  };

  return {
    ...state,
    generateFromUrl,
    previewFromUrl,
    createFromPreview,
    validateUrl,
    clearError,
    clearPreview,
    clearAll,
  };
};

export default useFastListing;
