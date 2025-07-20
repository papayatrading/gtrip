export type UserType = 'regular' | 'business';

export interface User {
  id: string;
  email: string;
  name: string;
  type?: UserType; // API returns 'type' not 'userType'
  businessName?: string;
  address?: string; // Changed from businessAddress
  phoneNumber?: string; // Changed from businessPhone
  taxId?: string;
  isVerified?: boolean;
}

export interface AuthState {
  user: User | null;
  token: string | null;
  isAuthenticated: boolean;
  loading: boolean;
  error: string | null;
}

export interface LoginCredentials {
  email: string;
  password: string;
  userType?: UserType; // Used locally for routing to correct endpoint
}

export interface RegisterCredentials {
  email: string;
  name: string;
  password: string;
  userType?: UserType; // Used locally for routing to correct endpoint
  businessName?: string;
  address?: string; // Changed from businessAddress
  phoneNumber?: string; // Changed from businessPhone
  taxId?: string;
  isVerified?: boolean;
}

export interface AuthResponse {
  access_token: string; // Changed from token to access_token
  user: User;
}
