// Simple test to verify our services are working
import { businessListingService } from './businessListingService';
import { authService } from './authService';
import { apiService } from './apiService';

// This file just checks that all imports work correctly
console.log('Services loaded successfully:');
console.log('✅ Business Listing Service:', typeof businessListingService);
console.log('✅ Auth Service:', typeof authService);
console.log('✅ API Service:', typeof apiService);

export {};
