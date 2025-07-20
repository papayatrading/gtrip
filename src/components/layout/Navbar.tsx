"use client";

import React, { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { useAuth } from "@/context/AuthContext";

// Define navigation menu structure with groups
interface NavItem {
  name: string;
  href: string;
}

interface NavGroup {
  name: string;
  href?: string;
  isGroup: boolean;
  items?: NavItem[];
}

const navigationGroups: NavGroup[] = [
  {
    name: "Home",
    href: "/",
    isGroup: false,
  },
  {
    name: "Accommodations",
    isGroup: true,
    items: [{ name: "Hotels", href: "/hotel" }],
  },
  {
    name: "Activities & Tours",
    isGroup: true,
    items: [
      { name: "Activities", href: "/activities" },
      { name: "Walking Tours", href: "/walkingtour" },
      { name: "Tour Guides", href: "/tourguides" },
    ],
  },
  {
    name: "Services",
    isGroup: true,
    items: [
      { name: "Restaurants", href: "/restaurants" },
      { name: "Spa", href: "/spa" },
      { name: "Car Rental", href: "/carrental" },
    ],
  },
];

const Navbar: React.FC = () => {
  const { isAuthenticated, user, logout } = useAuth();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isCurrencyDropdownOpen, setIsCurrencyDropdownOpen] = useState(false);
  const [isLanguageDropdownOpen, setIsLanguageDropdownOpen] = useState(false);
  const [activeMenuGroup, setActiveMenuGroup] = useState<string | null>(null);
  // Ref for tracking clicks outside dropdowns
  const dropdownRefs = useRef<{
    [key: string]: React.RefObject<HTMLDivElement | null>;
  }>({});
  // Initialize refs for each navigation group
  useEffect(() => {
    navigationGroups.forEach((group) => {
      if (group.isGroup) {
        dropdownRefs.current[group.name] = React.createRef<HTMLDivElement>();
      }
    });
  }, []);

  // Handle click outside to close dropdowns
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      // Close profile dropdown if clicked outside
      if (
        isDropdownOpen &&
        !(event.target as Element).closest("#user-menu-dropdown")
      ) {
        setIsDropdownOpen(false);
      }

      // Close group dropdowns if clicked outside
      if (activeMenuGroup && dropdownRefs.current[activeMenuGroup]?.current) {
        if (
          !dropdownRefs.current[activeMenuGroup].current?.contains(
            event.target as Node
          )
        ) {
          setActiveMenuGroup(null);
        }
      }

      // Close currency dropdown if clicked outside
      if (
        isCurrencyDropdownOpen &&
        !(event.target as Element).closest("#currency-dropdown")
      ) {
        setIsCurrencyDropdownOpen(false);
      }

      // Close language dropdown if clicked outside
      if (
        isLanguageDropdownOpen &&
        !(event.target as Element).closest("#language-dropdown")
      ) {
        setIsLanguageDropdownOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [
    isDropdownOpen,
    activeMenuGroup,
    isCurrencyDropdownOpen,
    isLanguageDropdownOpen,
  ]);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const toggleMenuGroup = (groupName: string) => {
    setActiveMenuGroup(activeMenuGroup === groupName ? null : groupName);
  };

  return (
    <nav className="bg-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex">
            <div className="flex-shrink-0 flex items-center">
              <Link href="/" className="text-red-600 font-bold text-2xl">
                GTRIP
              </Link>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:ml-6 md:flex md:space-x-2 lg:space-x-4">
              {navigationGroups.map((group) => (
                <div
                  key={group.name}
                  className="relative"
                  ref={
                    group.isGroup ? dropdownRefs.current[group.name] : undefined
                  }
                >
                  {group.isGroup ? (
                    <>
                      <button
                        className={`border-transparent text-gray-500 hover:border-red-500 hover:text-red-700 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium ${
                          activeMenuGroup === group.name
                            ? "text-red-700 border-red-500"
                            : ""
                        }`}
                        onClick={() => toggleMenuGroup(group.name)}
                        aria-expanded={activeMenuGroup === group.name}
                      >
                        {group.name}
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-4 w-4 ml-1"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M19 9l-7 7-7-7"
                          />
                        </svg>
                      </button>
                      {/* Group Dropdown */}
                      {activeMenuGroup === group.name && group.items && (
                        <div className="absolute left-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none z-10">
                          <div
                            className="py-1"
                            role="menu"
                            aria-orientation="vertical"
                          >
                            {group.items.map((item) => (
                              <Link
                                key={item.name}
                                href={item.href}
                                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                                onClick={() => setActiveMenuGroup(null)}
                              >
                                {item.name}
                              </Link>
                            ))}
                          </div>
                        </div>
                      )}
                    </>
                  ) : (
                    <Link
                      href={group.href || "/"}
                      className="border-transparent text-gray-500 hover:border-red-500 hover:text-red-700 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium"
                    >
                      {group.name}
                    </Link>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Right side menu - desktop */}
          <div className="hidden md:ml-6 md:flex md:items-center">
            <div className="flex items-center space-x-4 mr-4">
              <Link
                href="/list-property"
                className="text-gray-500 hover:text-red-700 px-3 py-2 rounded-md text-sm font-medium"
              >
                List your property
              </Link>

              {/* Currency Dropdown */}
              <div className="relative" id="currency-dropdown">
                <button
                  className="text-gray-500 hover:text-red-700 px-3 py-2 rounded-md text-sm font-medium flex items-center"
                  onClick={() =>
                    setIsCurrencyDropdownOpen(!isCurrencyDropdownOpen)
                  }
                >
                  <span>USD</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4 ml-1"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>
                {isCurrencyDropdownOpen && (
                  <div className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none z-10">
                    <div
                      className="py-1"
                      role="menu"
                      aria-orientation="vertical"
                    >
                      <button
                        onClick={() => setIsCurrencyDropdownOpen(false)}
                        className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                      >
                        USD
                      </button>
                      <button
                        onClick={() => setIsCurrencyDropdownOpen(false)}
                        className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                      >
                        EUR
                      </button>
                      <button
                        onClick={() => setIsCurrencyDropdownOpen(false)}
                        className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                      >
                        GBP
                      </button>
                      <button
                        onClick={() => setIsCurrencyDropdownOpen(false)}
                        className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                      >
                        AED
                      </button>
                    </div>
                  </div>
                )}
              </div>

              {/* Language Dropdown */}
              <div className="relative" id="language-dropdown">
                <button
                  className="text-gray-500 hover:text-red-700 px-3 py-2 rounded-md text-sm font-medium flex items-center"
                  onClick={() =>
                    setIsLanguageDropdownOpen(!isLanguageDropdownOpen)
                  }
                >
                  <span>English</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4 ml-1"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>
                {isLanguageDropdownOpen && (
                  <div className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none z-10">
                    <div
                      className="py-1"
                      role="menu"
                      aria-orientation="vertical"
                    >
                      <button
                        onClick={() => setIsLanguageDropdownOpen(false)}
                        className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                      >
                        English
                      </button>
                      <button
                        onClick={() => setIsLanguageDropdownOpen(false)}
                        className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                      >
                        Arabic
                      </button>
                      <button
                        onClick={() => setIsLanguageDropdownOpen(false)}
                        className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                      >
                        French
                      </button>
                      <button
                        onClick={() => setIsLanguageDropdownOpen(false)}
                        className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                      >
                        Spanish
                      </button>
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* User Menu - desktop */}
            {isAuthenticated ? (
              <div className="ml-3 relative" id="user-menu-dropdown">
                <div>
                  <button
                    onClick={toggleDropdown}
                    className="flex text-sm border-2 border-transparent rounded-full focus:outline-none focus:border-gray-300 transition duration-150 ease-in-out"
                    id="user-menu"
                    aria-expanded={isDropdownOpen}
                    aria-haspopup="true"
                  >
                    <span className="sr-only">Open user menu</span>
                    <div className="h-8 w-8 rounded-full bg-red-600 flex items-center justify-center text-white">
                      {user?.name.charAt(0).toUpperCase()}
                    </div>
                  </button>
                </div>

                {isDropdownOpen && (
                  <div
                    className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none z-10"
                    role="menu"
                    aria-orientation="vertical"
                    aria-labelledby="user-menu"
                  >
                    {" "}
                    <div className="px-4 py-2 text-sm text-gray-700 border-b">
                      {user?.name}
                      {user?.type === "business" && (
                        <div className="text-xs text-gray-500 mt-1">
                          {user?.businessName}
                        </div>
                      )}
                    </div>{" "}
                    <Link
                      href={
                        user?.type === "business"
                          ? "/business-profile"
                          : "/profile"
                      }
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                      role="menuitem"
                      onClick={() => setIsDropdownOpen(false)}
                    >
                      Your Profile
                    </Link>{" "}
                    <Link
                      href={
                        user?.type === "business"
                          ? "/business-dashboard"
                          : "/dashboard"
                      }
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                      role="menuitem"
                      onClick={() => setIsDropdownOpen(false)}
                    >
                      Dashboard
                    </Link>
                    {user?.type === "business" ? (
                      <Link
                        href="/business-listings"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                        role="menuitem"
                        onClick={() => setIsDropdownOpen(false)}
                      >
                        Manage Listings
                      </Link>
                    ) : (
                      <Link
                        href="/bookings"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                        role="menuitem"
                        onClick={() => setIsDropdownOpen(false)}
                      >
                        Your Bookings
                      </Link>
                    )}
                    <button
                      onClick={() => {
                        logout();
                        setIsDropdownOpen(false);
                      }}
                      className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                      role="menuitem"
                    >
                      Sign out
                    </button>
                  </div>
                )}
              </div>
            ) : (
              <div className="flex items-center space-x-4">
                <Link
                  href="/login"
                  className="text-gray-500 hover:text-red-700 px-3 py-2 rounded-md text-sm font-medium"
                >
                  Log in
                </Link>
                <Link
                  href="/signup"
                  className="bg-red-600 text-white hover:bg-red-700 px-3 py-2 rounded-md text-sm font-medium"
                >
                  Sign up
                </Link>
              </div>
            )}
          </div>

          {/* Mobile menu button */}
          <div className="-mr-2 flex items-center md:hidden">
            <button
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-red-500"
              aria-expanded={isMobileMenuOpen}
              onClick={toggleMobileMenu}
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className={`${isMobileMenuOpen ? "hidden" : "block"} h-6 w-6`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
              <svg
                className={`${isMobileMenuOpen ? "block" : "hidden"} h-6 w-6`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white">
          <div className="pt-2 pb-3 space-y-1">
            {/* Render all navigation items in mobile menu */}
            <Link
              href="/"
              className="block pl-3 pr-4 py-2 border-l-4 border-transparent text-gray-500 hover:bg-gray-50 hover:border-red-300 hover:text-red-600 text-base font-medium"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Home
            </Link>

            {/* Mobile navigation groups */}
            {navigationGroups
              .filter((group) => group.isGroup)
              .map((group) => (
                <div key={group.name} className="border-l-4 border-transparent">
                  <div className="pl-3 pr-4 py-2 text-gray-500 font-medium text-base">
                    {group.name}
                  </div>
                  {group.items && (
                    <div className="pl-6 space-y-1">
                      {" "}
                      {group.items.map((item) => (
                        <Link
                          key={item.name}
                          href={item.href}
                          className="block pl-3 pr-4 py-2 border-l-4 border-transparent text-gray-500 hover:bg-gray-50 hover:border-red-300 hover:text-red-600 text-sm"
                          onClick={() => setIsMobileMenuOpen(false)}
                        >
                          {item.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}

            <Link
              href="/list-property"
              className="block pl-3 pr-4 py-2 border-l-4 border-transparent text-gray-500 hover:bg-gray-50 hover:border-red-300 hover:text-red-600 text-base font-medium"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              List your property
            </Link>

            {/* Currency and Language options for mobile */}
            <div className="pl-3 pr-4 py-2 border-l-4 border-transparent">
              <div className="text-gray-500 font-medium">Language: English</div>
              <div className="grid grid-cols-2 gap-2 mt-2">
                <button className="text-sm text-gray-500 hover:text-red-600 text-left">
                  English
                </button>
                <button className="text-sm text-gray-500 hover:text-red-600 text-left">
                  Arabic
                </button>
                <button className="text-sm text-gray-500 hover:text-red-600 text-left">
                  French
                </button>
                <button className="text-sm text-gray-500 hover:text-red-600 text-left">
                  Spanish
                </button>
              </div>
            </div>

            <div className="pl-3 pr-4 py-2 border-l-4 border-transparent">
              <div className="text-gray-500 font-medium">Currency: USD</div>
              <div className="grid grid-cols-2 gap-2 mt-2">
                <button className="text-sm text-gray-500 hover:text-red-600 text-left">
                  USD
                </button>
                <button className="text-sm text-gray-500 hover:text-red-600 text-left">
                  EUR
                </button>
                <button className="text-sm text-gray-500 hover:text-red-600 text-left">
                  GBP
                </button>
                <button className="text-sm text-gray-500 hover:text-red-600 text-left">
                  AED
                </button>
              </div>
            </div>
          </div>

          {/* User section in mobile menu */}
          <div className="pt-4 pb-3 border-t border-gray-200">
            {isAuthenticated ? (
              <>
                <div className="flex items-center px-4">
                  <div className="flex-shrink-0">
                    <div className="h-10 w-10 rounded-full bg-red-600 flex items-center justify-center text-white">
                      {user?.name.charAt(0).toUpperCase()}
                    </div>
                  </div>
                  <div className="ml-3">
                    <div className="text-base font-medium text-gray-800">
                      {user?.name}
                    </div>
                    <div className="text-sm font-medium text-gray-500">
                      {user?.email}
                    </div>
                  </div>
                </div>
                <div className="mt-3 space-y-1">
                  <Link
                    href="/profile"
                    className="block px-4 py-2 text-base font-medium text-gray-500 hover:text-gray-800 hover:bg-gray-100"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Your Profile
                  </Link>
                  <Link
                    href="/bookings"
                    className="block px-4 py-2 text-base font-medium text-gray-500 hover:text-gray-800 hover:bg-gray-100"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Your Bookings
                  </Link>
                  <button
                    onClick={() => {
                      logout();
                      setIsMobileMenuOpen(false);
                    }}
                    className="block w-full text-left px-4 py-2 text-base font-medium text-gray-500 hover:text-gray-800 hover:bg-gray-100"
                  >
                    Sign out
                  </button>
                </div>
              </>
            ) : (
              <div className="mt-3 space-y-1 px-4">
                <Link
                  href="/login"
                  className="block px-4 py-2 text-base font-medium text-gray-500 hover:text-gray-800 hover:bg-gray-100"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Log in
                </Link>
                <Link
                  href="/signup"
                  className="block px-4 py-2 text-base font-medium text-gray-500 hover:text-gray-800 hover:bg-gray-100 bg-transparent"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Sign up
                </Link>
              </div>
            )}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
