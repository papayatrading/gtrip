import { apiService, ApiResponse } from './apiService';

export interface LoginCredentials {
  email: string;
  password: string;
  userType: 'regular' | 'business';
}

export interface RegisterCredentials {
  name: string;
  email: string;
  password: string;
  userType: 'regular' | 'business';
  businessName?: string;
  address?: string;
  phoneNumber?: string;
  taxId?: string;
}

export interface User {
  id: string;
  name: string;
  email: string;
  type: 'regular' | 'business';
  businessName?: string;
  address?: string;
  phoneNumber?: string;
  taxId?: string;
  verified?: boolean;
  createdAt: string;
  updatedAt: string;
}

export interface AuthResponse {
  user: User;
  token: string;
}

class AuthService {
  /**
   * Login user
   */
  async login(credentials: LoginCredentials): Promise<ApiResponse<AuthResponse>> {
    const result = await apiService.post<AuthResponse>('/auth/login', credentials);
    
    if (result.success && result.data) {
      // Store token in localStorage
      localStorage.setItem('token', result.data.token);
    }
    
    return result;
  }

  /**
   * Register new user
   */
  async register(credentials: RegisterCredentials): Promise<ApiResponse<AuthResponse>> {
    const result = await apiService.post<AuthResponse>('/auth/register', credentials);
    
    if (result.success && result.data) {
      // Store token in localStorage
      localStorage.setItem('token', result.data.token);
    }
    
    return result;
  }

  /**
   * Logout user
   */
  async logout(): Promise<void> {
    try {
      await apiService.post('/auth/logout', {});
    } catch (error) {
      console.error('Logout error:', error);
    } finally {
      // Always remove token from localStorage
      localStorage.removeItem('token');
    }
  }

  /**
   * Get current user profile
   */
  async getCurrentUser(): Promise<ApiResponse<User>> {
    return apiService.get<User>('/auth/me');
  }

  /**
   * Update user profile
   */
  async updateProfile(data: Partial<User>): Promise<ApiResponse<User>> {
    return apiService.patch<User>('/auth/profile', data);
  }

  /**
   * Change password
   */
  async changePassword(data: {
    currentPassword: string;
    newPassword: string;
  }): Promise<ApiResponse<void>> {
    return apiService.patch<void>('/auth/change-password', data);
  }

  /**
   * Request password reset
   */
  async requestPasswordReset(email: string): Promise<ApiResponse<void>> {
    return apiService.post<void>('/auth/forgot-password', { email });
  }

  /**
   * Reset password with token
   */
  async resetPassword(data: {
    token: string;
    newPassword: string;
  }): Promise<ApiResponse<void>> {
    return apiService.post<void>('/auth/reset-password', data);
  }

  /**
   * Verify email with token
   */
  async verifyEmail(token: string): Promise<ApiResponse<void>> {
    return apiService.post<void>('/auth/verify-email', { token });
  }

  /**
   * Resend email verification
   */
  async resendEmailVerification(): Promise<ApiResponse<void>> {
    return apiService.post<void>('/auth/resend-verification', {});
  }

  /**
   * Check if user is authenticated
   */
  isAuthenticated(): boolean {
    return apiService.isAuthenticated();
  }

  /**
   * Get stored token
   */
  getToken(): string | null {
    if (typeof window !== 'undefined') {
      return localStorage.getItem('token');
    }
    return null;
  }

  /**
   * Remove stored token
   */
  removeToken(): void {
    if (typeof window !== 'undefined') {
      localStorage.removeItem('token');
    }
  }
}

// Export a singleton instance
export const authService = new AuthService();
export default authService;
