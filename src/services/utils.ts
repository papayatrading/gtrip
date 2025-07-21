/**
 * Utility functions for common operations
 */

/**
 * Format form data for API submission
 */
export const formatFormDataForSubmission = (
  formData: Record<string, any>,
  additionalFields?: Record<string, any>
): FormData => {
  const submitData = new FormData();

  // Add form fields
  Object.entries(formData).forEach(([key, value]) => {
    if (key === "images" && Array.isArray(value)) {
      // Handle file uploads separately
      value.forEach((file: File) => {
        submitData.append("images", file);
      });
    } else if (typeof value === "object" && value !== null) {
      submitData.append(key, JSON.stringify(value));
    } else if (value !== undefined && value !== null) {
      submitData.append(key, value.toString());
    }
  });

  // Add additional fields
  if (additionalFields) {
    Object.entries(additionalFields).forEach(([key, value]) => {
      if (value !== undefined && value !== null) {
        submitData.append(key, value.toString());
      }
    });
  }

  return submitData;
};

/**
 * Handle API errors consistently
 */
export const handleApiError = (error: any, defaultMessage: string = "An error occurred"): string => {
  if (error?.response?.data?.message) {
    return error.response.data.message;
  }
  if (error?.message) {
    return error.message;
  }
  return defaultMessage;
};

/**
 * Format currency for display
 */
export const formatCurrency = (amount: number, currency: string = "USD"): string => {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency,
  }).format(amount);
};

/**
 * Validate email format
 */
export const isValidEmail = (email: string): boolean => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

/**
 * Validate URL format
 */
export const isValidUrl = (url: string): boolean => {
  try {
    new URL(url);
    return true;
  } catch {
    return false;
  }
};

/**
 * Slugify string for URLs
 */
export const slugify = (text: string): string => {
  return text
    .toLowerCase()
    .replace(/[^\w\s-]/g, "")
    .replace(/[\s_-]+/g, "-")
    .replace(/^-+|-+$/g, "");
};

/**
 * Truncate text to specified length
 */
export const truncateText = (text: string, maxLength: number): string => {
  if (text.length <= maxLength) return text;
  return text.substring(0, maxLength).replace(/\s+\S*$/, "") + "...";
};

/**
 * Format date for display
 */
export const formatDate = (date: string | Date, options?: Intl.DateTimeFormatOptions): string => {
  const defaultOptions: Intl.DateTimeFormatOptions = {
    year: "numeric",
    month: "long",
    day: "numeric",
  };

  return new Intl.DateTimeFormat("en-US", { ...defaultOptions, ...options }).format(
    new Date(date)
  );
};

/**
 * Debounce function calls
 */
export const debounce = <T extends (...args: any[]) => any>(
  func: T,
  delay: number
): ((...args: Parameters<T>) => void) => {
  let timeoutId: NodeJS.Timeout;
  return (...args: Parameters<T>) => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => func(...args), delay);
  };
};

/**
 * Check if the code is running on the client side
 */
export const isClient = (): boolean => {
  return typeof window !== "undefined";
};

/**
 * Get value from localStorage safely
 */
export const getFromLocalStorage = (key: string, defaultValue: any = null): any => {
  if (!isClient()) return defaultValue;
  
  try {
    const item = localStorage.getItem(key);
    return item ? JSON.parse(item) : defaultValue;
  } catch {
    return defaultValue;
  }
};

/**
 * Set value to localStorage safely
 */
export const setToLocalStorage = (key: string, value: any): void => {
  if (!isClient()) return;
  
  try {
    localStorage.setItem(key, JSON.stringify(value));
  } catch (error) {
    console.error("Failed to save to localStorage:", error);
  }
};

/**
 * Remove item from localStorage safely
 */
export const removeFromLocalStorage = (key: string): void => {
  if (!isClient()) return;
  
  try {
    localStorage.removeItem(key);
  } catch (error) {
    console.error("Failed to remove from localStorage:", error);
  }
};
