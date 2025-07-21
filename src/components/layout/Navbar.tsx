"use client";

import React, { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { useAuth } from "@/context/AuthContext";

// Navigation structure with corporate hierarchy
interface NavItem {
  name: string;
  href: string;
  description?: string;
}

interface NavGroup {
  name: string;
  href?: string;
  isGroup: boolean;
  items?: NavItem[];
  icon?: string;
}

const navigationGroups: NavGroup[] = [
  {
    name: "Home",
    href: "/",
    isGroup: false,
  },
  {
    name: "Stay",
    isGroup: true,
    icon: "🏨",
    items: [
      { name: "Hotels", href: "/hotel", description: "Luxury accommodations worldwide" }
    ],
  },
  {
    name: "Experiences",
    isGroup: true,
    icon: "✨",
    items: [
      { name: "Activities", href: "/activities", description: "Curated local experiences" },
      { name: "Tours", href: "/walkingtour", description: "Guided walking adventures" },
      { name: "Guides", href: "/tourguides", description: "Expert local guides" },
    ],
  },
  {
    name: "Services",
    isGroup: true,
    icon: "🛎️",
    items: [
      { name: "Dining", href: "/restaurants", description: "Fine dining experiences" },
      { name: "Wellness", href: "/spa", description: "Spa and wellness services" },
      { name: "Transport", href: "/carrental", description: "Premium car rentals" },
    ],
  },
];

const Navbar: React.FC = () => {
  const { isAuthenticated, user, logout } = useAuth();
  
  // Corporate-level state management
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  
  const dropdownRefs = useRef<{ [key: string]: React.RefObject<HTMLDivElement | null> }>({});
  
  // Enhanced scroll detection for navbar adaptation
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Initialize dropdown refs
  useEffect(() => {
    navigationGroups.forEach((group) => {
      if (group.isGroup) {
        dropdownRefs.current[group.name] = React.createRef<HTMLDivElement>();
      }
    });
  }, []);

  // Enhanced click outside detection
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (activeDropdown && dropdownRefs.current[activeDropdown]?.current) {
        if (!dropdownRefs.current[activeDropdown].current?.contains(event.target as Node)) {
          setActiveDropdown(null);
        }
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [activeDropdown]);

  const toggleDropdown = (groupName: string) => {
    setActiveDropdown(activeDropdown === groupName ? null : groupName);
  };

  const closeAllDropdowns = () => {
    setActiveDropdown(null);
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      {/* Apple-style CSS definitions */}
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=SF+Pro+Display:wght@300;400;500;600;700;800;900&display=swap');
        
        .navbar-apple {
          font-family: 'SF Pro Display', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
        }
        
        @keyframes slideDown {
          from {
            opacity: 0;
            transform: translateY(-8px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes slideUp {
          from {
            opacity: 1;
            transform: translateY(0);
          }
          to {
            opacity: 0;
            transform: translateY(-8px);
          }
        }
        
        @keyframes scaleIn {
          from {
            opacity: 0;
            transform: scale(0.95);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }
        
        .dropdown-enter {
          animation: slideDown 0.2s cubic-bezier(0.25, 0.46, 0.45, 0.94);
        }
        
        .apple-blur {
          backdrop-filter: saturate(180%) blur(20px);
          -webkit-backdrop-filter: saturate(180%) blur(20px);
        }
        
        .text-shadow-sm {
          text-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
        }
      `}</style>

      {/* Main Navigation Bar */}
      <nav className={`navbar-apple fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'apple-blur bg-white/80 border-b border-gray-200/50 shadow-sm' 
          : 'bg-white/95 apple-blur'
      }`}>
        
        {/* Container */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            
            {/* Logo Section */}
            <div className="flex items-center">
              <Link href="/" className="flex items-center space-x-3 group" onClick={closeAllDropdowns}>
                {/* Modern Teal Logo */}
                <div className="relative">
                  <div className="w-8 h-8 bg-gradient-to-br from-teal-600 to-teal-800 rounded-xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-105">
                    <span className="text-white font-bold text-lg">G</span>
                  </div>
                </div>
                
                {/* Brand Name */}
                <div className="hidden sm:block">
                  <span className="text-xl font-semibold text-gray-900 tracking-tight">
                    GTRIP
                  </span>
                </div>
              </Link>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-1">
              {navigationGroups.map((group) => (
                <div
                  key={group.name}
                  className="relative"
                  ref={group.isGroup ? dropdownRefs.current[group.name] : undefined}
                >
                  {group.isGroup ? (
                    <>
                      {/* Dropdown Trigger */}
                      <button
                        className={`flex items-center px-3 py-2 text-sm font-medium rounded-lg transition-all duration-200 ${
                          activeDropdown === group.name
                            ? 'text-teal-700 bg-teal-50'
                            : 'text-gray-600 hover:text-teal-700 hover:bg-teal-50/70'
                        }`}
                        onClick={() => toggleDropdown(group.name)}
                        aria-expanded={activeDropdown === group.name}
                      >
                        <span>{group.name}</span>
                        <svg
                          className={`ml-1 h-4 w-4 transition-transform duration-200 ${
                            activeDropdown === group.name ? 'rotate-180' : ''
                          }`}
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          strokeWidth={2}
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                        </svg>
                      </button>

                      {/* Corporate Dropdown Menu */}
                      {activeDropdown === group.name && group.items && (
                        <div className="absolute top-full left-0 mt-2 w-80 dropdown-enter">
                          <div className="apple-blur bg-white/95 rounded-2xl shadow-lg ring-1 ring-black/5 border border-gray-200/50 overflow-hidden">
                            
                            {/* Dropdown Header */}
                            <div className="px-6 py-4 border-b border-gray-100/80">
                              <div className="flex items-center space-x-2">
                                <span className="text-lg">{group.icon}</span>
                                <h3 className="text-sm font-semibold text-gray-900 tracking-tight">
                                  {group.name}
                                </h3>
                              </div>
                            </div>
                            
                            {/* Menu Items */}
                            <div className="py-2">
                              {group.items.map((item) => (
                                <Link
                                  key={item.name}
                                  href={item.href}
                                  className="group flex items-start px-6 py-3 hover:bg-teal-50 transition-colors duration-150"
                                  onClick={closeAllDropdowns}
                                >
                                  <div className="flex-1">
                                    <div className="text-sm font-medium text-gray-900 group-hover:text-teal-800">
                                      {item.name}
                                    </div>
                                    {item.description && (
                                      <div className="mt-1 text-xs text-gray-500 group-hover:text-teal-600">
                                        {item.description}
                                      </div>
                                    )}
                                  </div>
                                  <svg
                                    className="mt-0.5 h-4 w-4 text-gray-400 group-hover:text-teal-600 transition-colors duration-150"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    strokeWidth={2}
                                  >
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                                  </svg>
                                </Link>
                              ))}
                            </div>
                          </div>
                        </div>
                      )}
                    </>
                  ) : (
                    <Link
                      href={group.href || "/"}
                      className="px-3 py-2 text-sm font-medium text-gray-600 hover:text-teal-700 hover:bg-teal-50 rounded-lg transition-all duration-200"
                      onClick={closeAllDropdowns}
                    >
                      {group.name}
                    </Link>
                  )}
                </div>
              ))}
            </div>

            {/* Right Side Actions */}
            <div className="flex items-center space-x-3">
              
              {/* List Property Button */}
              <Link
                href="/list-property"
                className="hidden sm:flex items-center px-4 py-2 text-sm font-medium text-gray-600 hover:text-teal-700 hover:bg-teal-50 rounded-lg transition-all duration-200"
                onClick={closeAllDropdowns}
              >
                <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                </svg>
                <span>List Property</span>
              </Link>

              {/* User Menu */}
              {isAuthenticated ? (
                <div className="relative">
                  <button
                    className="flex items-center space-x-2 px-3 py-2 rounded-lg hover:bg-teal-50 transition-all duration-200 group"
                    onClick={() => toggleDropdown('user')}
                  >
                    {/* Avatar */}
                    <div className="w-7 h-7 bg-gradient-to-br from-teal-600 to-teal-800 rounded-full flex items-center justify-center text-white text-sm font-semibold shadow-sm group-hover:shadow-md transition-shadow duration-200">
                      {user?.name.charAt(0).toUpperCase()}
                    </div>
                    
                    {/* User Info */}
                    <div className="hidden lg:block text-left">
                      <div className="text-sm font-medium text-gray-900 truncate max-w-32">
                        {user?.name}
                      </div>
                      {user?.type === "business" && (
                        <div className="text-xs text-gray-500">Business</div>
                      )}
                    </div>
                    
                    <svg
                      className={`h-4 w-4 text-gray-400 transition-transform duration-200 ${
                        activeDropdown === 'user' ? 'rotate-180' : ''
                      }`}
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>

                  {/* User Dropdown */}
                  {activeDropdown === 'user' && (
                    <div className="absolute right-0 top-full mt-2 w-64 dropdown-enter">
                      <div className="apple-blur bg-white/95 rounded-2xl shadow-lg ring-1 ring-black/5 border border-gray-200/50 overflow-hidden">
                        
                        {/* User Header */}
                        <div className="px-4 py-3 border-b border-gray-100/80">
                          <div className="flex items-center space-x-3">
                            <div className="w-10 h-10 bg-gradient-to-br from-teal-600 to-teal-800 rounded-xl flex items-center justify-center text-white font-semibold shadow-sm">
                              {user?.name.charAt(0).toUpperCase()}
                            </div>
                            <div className="flex-1 min-w-0">
                              <div className="text-sm font-semibold text-gray-900 truncate">
                                {user?.name}
                              </div>
                              <div className="text-xs text-gray-500 truncate">
                                {user?.email}
                              </div>
                              {user?.type === "business" && (
                                <div className="text-xs text-teal-600 font-medium">
                                  {user?.businessName}
                                </div>
                              )}
                            </div>
                          </div>
                        </div>
                        
                        {/* Menu Items */}
                        <div className="py-1">
                          {[
                            {
                              href: user?.type === "business" ? "/business-profile" : "/profile",
                              icon: "M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z",
                              label: "Profile"
                            },
                            {
                              href: user?.type === "business" ? "/business-dashboard" : "/dashboard",
                              icon: "M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z",
                              label: "Dashboard"
                            },
                            ...(user?.type === "business" ? [{
                              href: "/business-listings",
                              icon: "M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4",
                              label: "Listings"
                            }] : [{
                              href: "/bookings",
                              icon: "M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z",
                              label: "Bookings"
                            }])
                          ].map((item) => (
                            <Link
                              key={item.href}
                              href={item.href}
                              className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-teal-50 hover:text-teal-800 transition-colors duration-150"
                              onClick={closeAllDropdowns}
                            >
                              <svg className="w-4 h-4 mr-3 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                                <path strokeLinecap="round" strokeLinejoin="round" d={item.icon} />
                              </svg>
                              {item.label}
                            </Link>
                          ))}
                          
                          <div className="border-t border-gray-100 my-1"></div>
                          
                          <button
                            onClick={() => {
                              logout();
                              closeAllDropdowns();
                            }}
                            className="flex items-center w-full px-4 py-2 text-sm text-gray-700 hover:bg-teal-50 hover:text-teal-800 transition-colors duration-150"
                          >
                            <svg className="w-4 h-4 mr-3 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                              <path strokeLinecap="round" strokeLinejoin="round" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
                            </svg>
                            Sign Out
                          </button>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              ) : (
                <div className="flex items-center space-x-2">
                  <Link
                    href="/login"
                    className="px-4 py-2 text-sm font-medium text-gray-600 hover:text-teal-700 hover:bg-teal-50 rounded-lg transition-all duration-200"
                    onClick={closeAllDropdowns}
                  >
                    Sign In
                  </Link>
                  <Link
                    href="/signup"
                    className="px-4 py-2 text-sm font-semibold text-white bg-teal-600 hover:bg-teal-700 rounded-lg transition-all duration-200 shadow-sm hover:shadow-md"
                    onClick={closeAllDropdowns}
                  >
                    Get Started
                  </Link>
                </div>
              )}

              {/* Mobile Menu Button */}
              <button
                type="button"
                className="md:hidden inline-flex items-center justify-center p-2 rounded-lg text-gray-400 hover:text-teal-600 hover:bg-teal-50 transition-colors duration-200"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                aria-expanded={isMobileMenuOpen}
              >
                <span className="sr-only">Open menu</span>
                <svg
                  className={`${isMobileMenuOpen ? 'hidden' : 'block'} h-5 w-5`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
                <svg
                  className={`${isMobileMenuOpen ? 'block' : 'hidden'} h-5 w-5`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden apple-blur bg-white/95 border-t border-gray-200/50">
            <div className="px-4 pt-2 pb-3 space-y-1">
              
              {/* Mobile Navigation Items */}
              <Link
                href="/"
                className="block px-3 py-2 text-base font-medium text-gray-600 hover:text-teal-700 hover:bg-teal-50 rounded-lg transition-colors duration-200"
                onClick={closeAllDropdowns}
              >
                Home
              </Link>
              
              {navigationGroups.filter(group => group.isGroup).map((group) => (
                <div key={group.name} className="space-y-1">
                  <div className="px-3 py-2 text-sm font-semibold text-gray-500 uppercase tracking-wide">
                    {group.name}
                  </div>
                  {group.items?.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      className="block px-3 py-2 pl-6 text-base font-medium text-gray-600 hover:text-gray-900 hover:bg-gray-50 rounded-lg transition-colors duration-200"
                      onClick={closeAllDropdowns}
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              ))}
              
              <Link
                href="/list-property"
                className="block px-3 py-2 text-base font-medium text-gray-600 hover:text-teal-700 hover:bg-teal-50 rounded-lg transition-colors duration-200"
                onClick={closeAllDropdowns}
              >
                List Property
              </Link>
            </div>
            
            {/* Mobile User Section */}
            {isAuthenticated ? (
              <div className="pt-4 pb-3 border-t border-gray-200">
                <div className="flex items-center px-4 mb-3">
                  <div className="w-10 h-10 bg-gradient-to-br from-teal-600 to-teal-800 rounded-xl flex items-center justify-center text-white font-semibold shadow-sm">
                    {user?.name.charAt(0).toUpperCase()}
                  </div>
                  <div className="ml-3">
                    <div className="text-base font-medium text-gray-800">{user?.name}</div>
                    <div className="text-sm text-gray-500">{user?.email}</div>
                  </div>
                </div>
                <div className="space-y-1 px-4">
                  <Link
                    href={user?.type === "business" ? "/business-profile" : "/profile"}
                    className="block px-3 py-2 text-base font-medium text-gray-600 hover:text-teal-700 hover:bg-teal-50 rounded-lg transition-colors duration-200"
                    onClick={closeAllDropdowns}
                  >
                    Profile
                  </Link>
                  <Link
                    href={user?.type === "business" ? "/business-dashboard" : "/dashboard"}
                    className="block px-3 py-2 text-base font-medium text-gray-600 hover:text-teal-700 hover:bg-teal-50 rounded-lg transition-colors duration-200"
                    onClick={closeAllDropdowns}
                  >
                    Dashboard
                  </Link>
                  <button
                    onClick={() => {
                      logout();
                      closeAllDropdowns();
                    }}
                    className="block w-full text-left px-3 py-2 text-base font-medium text-gray-600 hover:text-teal-700 hover:bg-teal-50 rounded-lg transition-colors duration-200"
                  >
                    Sign Out
                  </button>
                </div>
              </div>
            ) : (
              <div className="pt-4 pb-3 border-t border-gray-200 px-4 space-y-2">
                <Link
                  href="/login"
                  className="block w-full text-center px-4 py-2 text-base font-medium text-gray-600 hover:text-teal-700 hover:bg-teal-50 rounded-lg transition-colors duration-200"
                  onClick={closeAllDropdowns}
                >
                  Sign In
                </Link>
                <Link
                  href="/signup"
                  className="block w-full text-center px-4 py-2 text-base font-semibold text-white bg-teal-600 hover:bg-teal-700 rounded-lg transition-colors duration-200"
                  onClick={closeAllDropdowns}
                >
                  Get Started
                </Link>
              </div>
            )}
          </div>
        )}
      </nav>
      
      {/* Backdrop for mobile menu */}
      {isMobileMenuOpen && (
        <div 
          className="fixed inset-0 bg-black/20 z-40 md:hidden"
          onClick={closeAllDropdowns}
        />
      )}
    </>
  );
};

export default Navbar;