export interface ApiResponse<T = any> {
  success: boolean;
  data?: T;
  message?: string;
  error?: string;
}

export interface ApiError {
  message: string;
  statusCode?: number;
  details?: any;
}

class ApiService {
  private baseUrl: string;

  constructor() {
    this.baseUrl = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:4005';
  }

  /**
   * Get authentication token from localStorage
   */
  private getAuthToken(): string | null {
    if (typeof window !== 'undefined') {
      return localStorage.getItem('token');
    }
    return null;
  }

  /**
   * Create headers for API requests
   */
  private createHeaders(includeContentType: boolean = true): Record<string, string> {
    const headers: Record<string, string> = {};
    
    if (includeContentType) {
      headers['Content-Type'] = 'application/json';
    }

    const token = this.getAuthToken();
    if (token) {
      headers['Authorization'] = `Bearer ${token}`;
    }

    return headers;
  }

  /**
   * Create authorization headers only (for FormData requests)
   */
  getAuthHeaders(): Record<string, string> {
    const token = this.getAuthToken();
    return token ? { Authorization: `Bearer ${token}` } : {};
  }

  /**
   * Handle API response
   */
  private async handleResponse<T>(response: Response): Promise<ApiResponse<T>> {
    try {
      const result = await response.json();

      if (!response.ok) {
        return {
          success: false,
          error: result.message || `HTTP ${response.status}: ${response.statusText}`,
        };
      }

      return {
        success: true,
        data: result,
      };
    } catch (error) {
      return {
        success: false,
        error: error instanceof Error ? error.message : 'Failed to parse response',
      };
    }
  }

  /**
   * Generic GET request
   */
  async get<T>(endpoint: string, params?: Record<string, any>): Promise<ApiResponse<T>> {
    try {
      const queryParams = new URLSearchParams();
      
      if (params) {
        Object.entries(params).forEach(([key, value]) => {
          if (value !== undefined && value !== null) {
            if (Array.isArray(value)) {
              value.forEach(item => queryParams.append(key, item.toString()));
            } else {
              queryParams.append(key, value.toString());
            }
          }
        });
      }

      const url = `${this.baseUrl}${endpoint}${queryParams.toString() ? `?${queryParams.toString()}` : ''}`;
      
      const response = await fetch(url, {
        method: 'GET',
        headers: this.createHeaders(),
      });

      return this.handleResponse<T>(response);
    } catch (error) {
      console.error(`Error in GET ${endpoint}:`, error);
      return {
        success: false,
        error: error instanceof Error ? error.message : 'Network error occurred',
      };
    }
  }

  /**
   * Generic POST request
   */
  async post<T>(endpoint: string, data: any): Promise<ApiResponse<T>> {
    try {
      const response = await fetch(`${this.baseUrl}${endpoint}`, {
        method: 'POST',
        headers: this.createHeaders(),
        body: JSON.stringify(data),
      });

      return this.handleResponse<T>(response);
    } catch (error) {
      console.error(`Error in POST ${endpoint}:`, error);
      return {
        success: false,
        error: error instanceof Error ? error.message : 'Network error occurred',
      };
    }
  }

  /**
   * POST request with FormData (for file uploads)
   */
  async postFormData<T>(endpoint: string, formData: FormData): Promise<ApiResponse<T>> {
    try {
      const response = await fetch(`${this.baseUrl}${endpoint}`, {
        method: 'POST',
        headers: this.getAuthHeaders(), // Don't include Content-Type for FormData
        body: formData,
      });

      return this.handleResponse<T>(response);
    } catch (error) {
      console.error(`Error in POST ${endpoint}:`, error);
      return {
        success: false,
        error: error instanceof Error ? error.message : 'Network error occurred',
      };
    }
  }

  /**
   * Generic PATCH request
   */
  async patch<T>(endpoint: string, data: any): Promise<ApiResponse<T>> {
    try {
      const response = await fetch(`${this.baseUrl}${endpoint}`, {
        method: 'PATCH',
        headers: this.createHeaders(),
        body: JSON.stringify(data),
      });

      return this.handleResponse<T>(response);
    } catch (error) {
      console.error(`Error in PATCH ${endpoint}:`, error);
      return {
        success: false,
        error: error instanceof Error ? error.message : 'Network error occurred',
      };
    }
  }

  /**
   * PATCH request with FormData (for file uploads)
   */
  async patchFormData<T>(endpoint: string, formData: FormData): Promise<ApiResponse<T>> {
    try {
      const response = await fetch(`${this.baseUrl}${endpoint}`, {
        method: 'PATCH',
        headers: this.getAuthHeaders(), // Don't include Content-Type for FormData
        body: formData,
      });

      return this.handleResponse<T>(response);
    } catch (error) {
      console.error(`Error in PATCH ${endpoint}:`, error);
      return {
        success: false,
        error: error instanceof Error ? error.message : 'Network error occurred',
      };
    }
  }

  /**
   * Generic PUT request
   */
  async put<T>(endpoint: string, data: any): Promise<ApiResponse<T>> {
    try {
      const response = await fetch(`${this.baseUrl}${endpoint}`, {
        method: 'PUT',
        headers: this.createHeaders(),
        body: JSON.stringify(data),
      });

      return this.handleResponse<T>(response);
    } catch (error) {
      console.error(`Error in PUT ${endpoint}:`, error);
      return {
        success: false,
        error: error instanceof Error ? error.message : 'Network error occurred',
      };
    }
  }

  /**
   * Generic DELETE request
   */
  async delete<T>(endpoint: string): Promise<ApiResponse<T>> {
    try {
      const response = await fetch(`${this.baseUrl}${endpoint}`, {
        method: 'DELETE',
        headers: this.createHeaders(),
      });

      return this.handleResponse<T>(response);
    } catch (error) {
      console.error(`Error in DELETE ${endpoint}:`, error);
      return {
        success: false,
        error: error instanceof Error ? error.message : 'Network error occurred',
      };
    }
  }

  /**
   * Get base URL for API
   */
  getBaseUrl(): string {
    return this.baseUrl;
  }

  /**
   * Check if user is authenticated
   */
  isAuthenticated(): boolean {
    return !!this.getAuthToken();
  }
}

// Export a singleton instance
export const apiService = new ApiService();
export default apiService;
