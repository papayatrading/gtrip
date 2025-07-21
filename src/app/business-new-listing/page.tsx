"use client";

import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "@/context/AuthContext";
import Link from "next/link";
import { businessListingService } from "@/services";
import { ListingFormData } from "@/types/businessListing";
import FastListingModal from "@/components/FastListingModal";

const BusinessNewListing = () => {
  const { user, isAuthenticated, loading } = useAuth();
  const router = useRouter();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showFastListingModal, setShowFastListingModal] = useState(false);
  const [formData, setFormData] = useState<ListingFormData>({
    title: "",
    description: "",
    category: "",
    subcategory: "",
    address: "",
    city: "",
    country: "",
    zipCode: "",
    phoneNumber: "",
    email: "",
    website: "",
    priceRange: "",
    amenities: [],
    images: [],
    imageUrls: [],
    tags: [],
    socialMedia: {
      facebook: "",
      instagram: "",
      twitter: "",
      linkedin: "",
    },
    policies: {
      cancellationPolicy: "",
      checkInTime: "",
      checkOutTime: "",
      ageRestriction: "",
      petPolicy: "",
    },
    operatingHours: {
      monday: { open: "09:00", close: "17:00", closed: false },
      tuesday: { open: "09:00", close: "17:00", closed: false },
      wednesday: { open: "09:00", close: "17:00", closed: false },
      thursday: { open: "09:00", close: "17:00", closed: false },
      friday: { open: "09:00", close: "17:00", closed: false },
      saturday: { open: "09:00", close: "17:00", closed: false },
      sunday: { open: "09:00", close: "17:00", closed: true },
    },
    specialOffers: "",
    capacity: undefined,
    languages: [],
  });

  useEffect(() => {
    if (!loading && !isAuthenticated) {
      router.push("/login");
    } else if (!loading && isAuthenticated && user?.type !== "business") {
      router.push("/dashboard");
    }
  }, [loading, isAuthenticated, user, router]);

  const categories = [
    "Hotel",
    "Restaurant",
    "Activity",
    "Tour Guide",
    "Spa",
    "Car Rental",
    "Walking Tour",
    "Entertainment",
    "Shopping",
    "Transportation",
    "Other",
  ];

  const subcategoriesByCategory: Record<string, string[]> = {
    Hotel: [
      "Luxury Hotel",
      "Boutique Hotel",
      "Budget Hotel",
      "Resort",
      "Hostel",
      "Bed & Breakfast",
      "Vacation Rental",
    ],
    Restaurant: [
      "Fine Dining",
      "Casual Dining",
      "Fast Food",
      "Cafe",
      "Bar",
      "Food Truck",
      "Buffet",
      "Local Cuisine",
    ],
    Activity: [
      "Adventure",
      "Cultural",
      "Nature",
      "Sports",
      "Water Sports",
      "Winter Sports",
      "Outdoor",
      "Indoor",
    ],
    "Tour Guide": [
      "City Tours",
      "Historical Tours",
      "Food Tours",
      "Adventure Tours",
      "Cultural Tours",
      "Private Tours",
    ],
    Spa: [
      "Day Spa",
      "Medical Spa",
      "Resort Spa",
      "Wellness Center",
      "Massage Therapy",
      "Beauty Salon",
    ],
    "Car Rental": [
      "Economy",
      "Luxury",
      "SUV",
      "Van",
      "Motorcycle",
      "Electric Vehicle",
    ],
    "Walking Tour": [
      "Historical",
      "Food & Drink",
      "Architecture",
      "Photography",
      "Ghost Tours",
      "Art & Culture",
    ],
    Entertainment: [
      "Theater",
      "Cinema",
      "Live Music",
      "Comedy Club",
      "Casino",
      "Night Club",
      "Museum",
    ],
    Shopping: [
      "Mall",
      "Boutique",
      "Market",
      "Souvenir Shop",
      "Local Crafts",
      "Department Store",
    ],
    Transportation: [
      "Airport Transfer",
      "Public Transport",
      "Taxi Service",
      "Bus Tours",
      "Boat Tours",
    ],
    Other: ["Services", "Educational", "Religious", "Medical", "Business"],
  };

  const languages = [
    "English",
    "Spanish",
    "French",
    "German",
    "Italian",
    "Portuguese",
    "Chinese",
    "Japanese",
    "Korean",
    "Arabic",
    "Russian",
    "Dutch",
    "Polish",
    "Turkish",
    "Hindi",
  ];

  const cancellationPolicies = [
    "Free cancellation up to 24 hours",
    "Free cancellation up to 48 hours",
    "Free cancellation up to 7 days",
    "Non-refundable",
    "Partial refund available",
    "Contact for cancellation policy",
  ];

  const priceRanges = ["$", "$$", "$$$", "$$$$"];

  const commonAmenities = [
    "WiFi",
    "Parking",
    "Air Conditioning",
    "Swimming Pool",
    "Gym",
    "Restaurant",
    "Bar",
    "Spa",
    "Business Center",
    "Pet Friendly",
    "Room Service",
    "Concierge",
    "Wheelchair Accessible",
    "Non-smoking",
  ];

  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value, type } = e.target;

    if (type === "number") {
      setFormData((prev) => ({
        ...prev,
        [name]: value === "" ? undefined : Number(value),
      }));
    } else {
      setFormData((prev) => ({
        ...prev,
        [name]: value,
      }));
    }
  };

  const handleNestedInputChange = (
    section: keyof Pick<ListingFormData, "socialMedia" | "policies">,
    field: string,
    value: string
  ) => {
    setFormData((prev) => ({
      ...prev,
      [section]: {
        ...prev[section],
        [field]: value,
      },
    }));
  };

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(e.target.files || []);
    setFormData((prev) => ({
      ...prev,
      images: [...prev.images, ...files],
    }));
  };

  const removeImage = (index: number) => {
    setFormData((prev) => ({
      ...prev,
      images: prev.images.filter((_, i) => i !== index),
    }));
  };

  const handleTagsChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const tags = e.target.value
      .split(",")
      .map((tag) => tag.trim())
      .filter((tag) => tag);
    setFormData((prev) => ({
      ...prev,
      tags,
    }));
  };

  const handleLanguageToggle = (language: string) => {
    setFormData((prev) => ({
      ...prev,
      languages: prev.languages.includes(language)
        ? prev.languages.filter((l) => l !== language)
        : [...prev.languages, language],
    }));
  };

  const handleAmenityToggle = (amenity: string) => {
    setFormData((prev) => ({
      ...prev,
      amenities: prev.amenities.includes(amenity)
        ? prev.amenities.filter((a) => a !== amenity)
        : [...prev.amenities, amenity],
    }));
  };

  const handleOperatingHoursChange = (
    day: keyof ListingFormData["operatingHours"],
    field: "open" | "close" | "closed",
    value: string | boolean
  ) => {
    setFormData((prev) => ({
      ...prev,
      operatingHours: {
        ...prev.operatingHours,
        [day]: {
          ...prev.operatingHours[day],
          [field]: value,
        },
      },
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      if (!user?.id) {
        throw new Error("User not authenticated");
      }

      console.log("Submitting listing:", formData);

      // Use the service to create the listing
      const result = await businessListingService.createListing(
        formData,
        user.id
      );

      if (!result.success) {
        throw new Error(result.error || "Failed to create listing");
      }

      console.log("Listing created successfully:", result.data);

      // Redirect to listings page on success
      router.push("/business-listings");
    } catch (error) {
      console.error("Error creating listing:", error);
      // Handle error (show toast, etc.)
      alert(
        error instanceof Error
          ? error.message
          : "Failed to create listing. Please try again."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  // Fast Listing Handlers
  const handleFastListingSuccess = (listingId: string) => {
    console.log("Fast listing created successfully:", listingId);
    setShowFastListingModal(false);
    // Redirect to the newly created listing or listings page
    router.push("/business-listings");
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-red-600 mx-auto"></div>
          <p className="mt-4 text-gray-600">Loading...</p>
        </div>
      </div>
    );
  }

  if (!isAuthenticated || user?.type !== "business") {
    return null; // Will redirect in useEffect
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-50">
      {/* Header with Apple-style backdrop blur */}
      <div className="sticky top-0 z-50 backdrop-blur-xl bg-white/80 border-b border-gray-200/50">
        <div className="max-w-5xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <Link
                href="/business-listings"
                className="inline-flex items-center text-gray-600 hover:text-gray-900 transition-colors duration-200"
              >
                <svg
                  className="w-5 h-5 mr-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 19l-7-7 7-7"
                  />
                </svg>
                Back
              </Link>
              <div className="h-6 w-px bg-gray-300"></div>
              <div>
                <h1 className="text-2xl font-semibold text-gray-900 tracking-tight">
                  Create New Listing
                </h1>
                <p className="text-sm text-gray-500 font-medium">
                  Add your business to our platform
                </p>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <Link
                href="/business-listings"
                className="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 border border-gray-300 rounded-lg transition-all duration-200 hover:shadow-sm"
              >
                Cancel
              </Link>
              <button
                type="submit"
                form="listing-form"
                disabled={isSubmitting}
                className="inline-flex items-center px-6 py-2 text-sm font-medium text-white bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 rounded-lg transition-all duration-200 shadow-sm hover:shadow-md disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <>
                    <svg
                      className="animate-spin -ml-1 mr-2 h-4 w-4 text-white"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      ></circle>
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                      ></path>
                    </svg>
                    Creating...
                  </>
                ) : (
                  "Create Listing"
                )}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-5xl mx-auto px-6 py-8">
        <div className="bg-white rounded-2xl shadow-xl shadow-gray-200/20 overflow-hidden border border-gray-200/50">
          {/* Progress indicator */}
          <div className="px-8 py-6 bg-gradient-to-r from-gray-50 to-white border-b border-gray-100">
            <div className="flex items-center space-x-2">
              <div className="flex items-center space-x-1">
                <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                <div className="w-2 h-2 bg-gray-300 rounded-full"></div>
                <div className="w-2 h-2 bg-gray-300 rounded-full"></div>
              </div>
              <span className="text-sm font-medium text-gray-600">
                Step 1 of 3
              </span>
            </div>
          </div>

          <form
            id="listing-form"
            onSubmit={handleSubmit}
            className="divide-y divide-gray-100"
          >
            {/* Basic Information */}
            <div className="px-8 py-8">
              <div className="mb-8">
                <div className="flex items-center justify-between mb-6">
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                      Basic Information
                    </h3>
                    <p className="text-sm text-gray-600">
                      Tell us about your business and what makes it unique.
                    </p>
                  </div>
                  <button
                    type="button"
                    onClick={() => setShowFastListingModal(true)}
                    className="inline-flex items-center px-4 py-2 text-sm font-medium text-blue-700 bg-blue-50 hover:bg-blue-100 border border-blue-200 rounded-lg transition-all duration-200 hover:shadow-sm"
                  >
                    <svg
                      className="w-4 h-4 mr-2"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"
                      />
                    </svg>
                    Quick Import from Booking.com
                  </button>
                </div>
              </div>

              <div className="space-y-6">
                <div>
                  <label
                    htmlFor="title"
                    className="block text-sm font-semibold text-gray-800 mb-3"
                  >
                    Business Title *
                  </label>
                  <input
                    type="text"
                    name="title"
                    id="title"
                    required
                    value={formData.title}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 text-gray-900 bg-white border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 placeholder-gray-400 text-base"
                    placeholder="Enter your business name"
                  />
                </div>

                <div>
                  <label
                    htmlFor="description"
                    className="block text-sm font-semibold text-gray-800 mb-3"
                  >
                    Description *
                  </label>
                  <textarea
                    name="description"
                    id="description"
                    rows={4}
                    required
                    value={formData.description}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 text-gray-900 bg-white border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 placeholder-gray-400 text-base resize-none"
                    placeholder="Describe your business, what you offer, and what makes you special..."
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label
                      htmlFor="category"
                      className="block text-sm font-semibold text-gray-800 mb-3"
                    >
                      Category *
                    </label>
                    <div className="relative">
                      <select
                        name="category"
                        id="category"
                        required
                        value={formData.category}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 text-gray-900 bg-white border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 appearance-none text-base"
                      >
                        <option value="">Select a category</option>
                        {categories.map((category) => (
                          <option key={category} value={category}>
                            {category}
                          </option>
                        ))}
                      </select>
                      <div className="absolute inset-y-0 right-3 flex items-center pointer-events-none">
                        <svg
                          className="w-5 h-5 text-gray-400"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M19 9l-7 7-7-7"
                          />
                        </svg>
                      </div>
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="subcategory"
                      className="block text-sm font-semibold text-gray-800 mb-3"
                    >
                      Subcategory
                    </label>
                    <div className="relative">
                      <select
                        name="subcategory"
                        id="subcategory"
                        value={formData.subcategory}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 text-gray-900 bg-white border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 appearance-none text-base disabled:bg-gray-50 disabled:text-gray-500"
                        disabled={!formData.category}
                      >
                        <option value="">Select a subcategory</option>
                        {formData.category &&
                          subcategoriesByCategory[formData.category]?.map(
                            (subcategory) => (
                              <option key={subcategory} value={subcategory}>
                                {subcategory}
                              </option>
                            )
                          )}
                      </select>
                      <div className="absolute inset-y-0 right-3 flex items-center pointer-events-none">
                        <svg
                          className="w-5 h-5 text-gray-400"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M19 9l-7 7-7-7"
                          />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="priceRange"
                    className="block text-sm font-semibold text-gray-800 mb-3"
                  >
                    Price Range
                  </label>
                  <div className="grid grid-cols-4 gap-3">
                    {priceRanges.map((range) => (
                      <button
                        key={range}
                        type="button"
                        onClick={() =>
                          setFormData((prev) => ({
                            ...prev,
                            priceRange: prev.priceRange === range ? "" : range,
                          }))
                        }
                        className={`px-4 py-3 text-center font-medium rounded-xl border-2 transition-all duration-200 ${
                          formData.priceRange === range
                            ? "bg-blue-50 border-blue-500 text-blue-700"
                            : "bg-white border-gray-200 text-gray-700 hover:border-gray-300 hover:bg-gray-50"
                        }`}
                      >
                        {range}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Location Information */}
            <div className="px-8 py-8">
              <div className="mb-8">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Location
                </h3>
                <p className="text-sm text-gray-600">
                  Help customers find you with accurate location details.
                </p>
              </div>

              <div className="space-y-6">
                <div>
                  <label
                    htmlFor="address"
                    className="block text-sm font-semibold text-gray-800 mb-3"
                  >
                    Street Address *
                  </label>
                  <input
                    type="text"
                    name="address"
                    id="address"
                    required
                    value={formData.address}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 text-gray-900 bg-white border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 placeholder-gray-400 text-base"
                    placeholder="123 Business Street"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div>
                    <label
                      htmlFor="city"
                      className="block text-sm font-semibold text-gray-800 mb-3"
                    >
                      City *
                    </label>
                    <input
                      type="text"
                      name="city"
                      id="city"
                      required
                      value={formData.city}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 text-gray-900 bg-white border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 placeholder-gray-400 text-base"
                      placeholder="City"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="country"
                      className="block text-sm font-semibold text-gray-800 mb-3"
                    >
                      Country *
                    </label>
                    <input
                      type="text"
                      name="country"
                      id="country"
                      required
                      value={formData.country}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 text-gray-900 bg-white border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 placeholder-gray-400 text-base"
                      placeholder="Country"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="zipCode"
                      className="block text-sm font-semibold text-gray-800 mb-3"
                    >
                      Zip Code
                    </label>
                    <input
                      type="text"
                      name="zipCode"
                      id="zipCode"
                      value={formData.zipCode}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 text-gray-900 bg-white border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 placeholder-gray-400 text-base"
                      placeholder="12345"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Information */}
            <div className="px-8 py-8">
              <div className="mb-8">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Contact Information
                </h3>
                <p className="text-sm text-gray-600">
                  Make it easy for customers to reach you.
                </p>
              </div>

              <div className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label
                      htmlFor="phoneNumber"
                      className="block text-sm font-semibold text-gray-800 mb-3"
                    >
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      name="phoneNumber"
                      id="phoneNumber"
                      value={formData.phoneNumber}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 text-gray-900 bg-white border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 placeholder-gray-400 text-base"
                      placeholder="+1 (555) 123-4567"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-semibold text-gray-800 mb-3"
                    >
                      Email Address
                    </label>
                    <input
                      type="email"
                      name="email"
                      id="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 text-gray-900 bg-white border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 placeholder-gray-400 text-base"
                      placeholder="business@example.com"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="website"
                    className="block text-sm font-semibold text-gray-800 mb-3"
                  >
                    Website
                  </label>
                  <input
                    type="url"
                    name="website"
                    id="website"
                    value={formData.website}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 text-gray-900 bg-white border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 placeholder-gray-400 text-base"
                    placeholder="https://www.yourbusiness.com"
                  />
                </div>
              </div>
            </div>

            {/* Social Media & Policies */}
            <div className="px-8 py-8">
              <div className="mb-8">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Social Media & Policies
                </h3>
                <p className="text-sm text-gray-600">
                  Connect your social media accounts and set business policies.
                </p>
              </div>

              <div className="space-y-8">
                {/* Social Media */}
                <div>
                  <h4 className="text-lg font-semibold text-gray-800 mb-4">
                    Social Media Links
                  </h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label
                        htmlFor="facebook"
                        className="block text-sm font-semibold text-gray-800 mb-3"
                      >
                        Facebook
                      </label>
                      <input
                        type="url"
                        name="facebook"
                        id="facebook"
                        value={formData.socialMedia.facebook}
                        onChange={(e) =>
                          handleNestedInputChange(
                            "socialMedia",
                            "facebook",
                            e.target.value
                          )
                        }
                        className="w-full px-4 py-3 text-gray-900 bg-white border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 placeholder-gray-400 text-base"
                        placeholder="https://facebook.com/yourbusiness"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="instagram"
                        className="block text-sm font-semibold text-gray-800 mb-3"
                      >
                        Instagram
                      </label>
                      <input
                        type="url"
                        name="instagram"
                        id="instagram"
                        value={formData.socialMedia.instagram}
                        onChange={(e) =>
                          handleNestedInputChange(
                            "socialMedia",
                            "instagram",
                            e.target.value
                          )
                        }
                        className="w-full px-4 py-3 text-gray-900 bg-white border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 placeholder-gray-400 text-base"
                        placeholder="https://instagram.com/yourbusiness"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="twitter"
                        className="block text-sm font-semibold text-gray-800 mb-3"
                      >
                        Twitter
                      </label>
                      <input
                        type="url"
                        name="twitter"
                        id="twitter"
                        value={formData.socialMedia.twitter}
                        onChange={(e) =>
                          handleNestedInputChange(
                            "socialMedia",
                            "twitter",
                            e.target.value
                          )
                        }
                        className="w-full px-4 py-3 text-gray-900 bg-white border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 placeholder-gray-400 text-base"
                        placeholder="https://twitter.com/yourbusiness"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="linkedin"
                        className="block text-sm font-semibold text-gray-800 mb-3"
                      >
                        LinkedIn
                      </label>
                      <input
                        type="url"
                        name="linkedin"
                        id="linkedin"
                        value={formData.socialMedia.linkedin}
                        onChange={(e) =>
                          handleNestedInputChange(
                            "socialMedia",
                            "linkedin",
                            e.target.value
                          )
                        }
                        className="w-full px-4 py-3 text-gray-900 bg-white border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 placeholder-gray-400 text-base"
                        placeholder="https://linkedin.com/company/yourbusiness"
                      />
                    </div>
                  </div>
                </div>

                {/* Policies */}
                <div>
                  <h4 className="text-lg font-semibold text-gray-800 mb-4">
                    Business Policies
                  </h4>
                  <div className="space-y-6">
                    <div>
                      <label
                        htmlFor="cancellationPolicy"
                        className="block text-sm font-semibold text-gray-800 mb-3"
                      >
                        Cancellation Policy
                      </label>
                      <div className="relative">
                        <select
                          name="cancellationPolicy"
                          id="cancellationPolicy"
                          value={formData.policies.cancellationPolicy}
                          onChange={(e) =>
                            handleNestedInputChange(
                              "policies",
                              "cancellationPolicy",
                              e.target.value
                            )
                          }
                          className="w-full px-4 py-3 text-gray-900 bg-white border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 appearance-none text-base"
                        >
                          <option value="">Select cancellation policy</option>
                          {cancellationPolicies.map((policy) => (
                            <option key={policy} value={policy}>
                              {policy}
                            </option>
                          ))}
                        </select>
                        <div className="absolute inset-y-0 right-3 flex items-center pointer-events-none">
                          <svg
                            className="w-5 h-5 text-gray-400"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M19 9l-7 7-7-7"
                            />
                          </svg>
                        </div>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label
                          htmlFor="checkInTime"
                          className="block text-sm font-semibold text-gray-800 mb-3"
                        >
                          Check-in Time
                        </label>
                        <input
                          type="time"
                          name="checkInTime"
                          id="checkInTime"
                          value={formData.policies.checkInTime}
                          onChange={(e) =>
                            handleNestedInputChange(
                              "policies",
                              "checkInTime",
                              e.target.value
                            )
                          }
                          className="w-full px-4 py-3 text-gray-900 bg-white border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 text-base"
                        />
                      </div>

                      <div>
                        <label
                          htmlFor="checkOutTime"
                          className="block text-sm font-semibold text-gray-800 mb-3"
                        >
                          Check-out Time
                        </label>
                        <input
                          type="time"
                          name="checkOutTime"
                          id="checkOutTime"
                          value={formData.policies.checkOutTime}
                          onChange={(e) =>
                            handleNestedInputChange(
                              "policies",
                              "checkOutTime",
                              e.target.value
                            )
                          }
                          className="w-full px-4 py-3 text-gray-900 bg-white border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 text-base"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label
                          htmlFor="ageRestriction"
                          className="block text-sm font-semibold text-gray-800 mb-3"
                        >
                          Age Restriction
                        </label>
                        <input
                          type="text"
                          name="ageRestriction"
                          id="ageRestriction"
                          value={formData.policies.ageRestriction}
                          onChange={(e) =>
                            handleNestedInputChange(
                              "policies",
                              "ageRestriction",
                              e.target.value
                            )
                          }
                          className="w-full px-4 py-3 text-gray-900 bg-white border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 placeholder-gray-400 text-base"
                          placeholder="e.g., 18+ only"
                        />
                      </div>

                      <div>
                        <label
                          htmlFor="petPolicy"
                          className="block text-sm font-semibold text-gray-800 mb-3"
                        >
                          Pet Policy
                        </label>
                        <input
                          type="text"
                          name="petPolicy"
                          id="petPolicy"
                          value={formData.policies.petPolicy}
                          onChange={(e) =>
                            handleNestedInputChange(
                              "policies",
                              "petPolicy",
                              e.target.value
                            )
                          }
                          className="w-full px-4 py-3 text-gray-900 bg-white border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 placeholder-gray-400 text-base"
                          placeholder="e.g., Pets allowed with restrictions"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Amenities */}
            <div className="px-8 py-8">
              <div className="mb-8">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Amenities & Features
                </h3>
                <p className="text-sm text-gray-600">
                  Select the amenities and features your business offers.
                </p>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
                {commonAmenities.map((amenity) => (
                  <label key={amenity} className="relative">
                    <input
                      type="checkbox"
                      checked={formData.amenities.includes(amenity)}
                      onChange={() => handleAmenityToggle(amenity)}
                      className="sr-only peer"
                    />
                    <div className="px-4 py-3 bg-white border-2 border-gray-200 rounded-xl cursor-pointer transition-all duration-200 peer-checked:border-blue-500 peer-checked:bg-blue-50 hover:border-gray-300 hover:bg-gray-50">
                      <span className="text-sm font-medium text-gray-700 peer-checked:text-blue-700">
                        {amenity}
                      </span>
                    </div>
                  </label>
                ))}
              </div>
            </div>

            {/* Additional Information */}
            <div className="px-8 py-8">
              <div className="mb-8">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Additional Details
                </h3>
                <p className="text-sm text-gray-600">
                  Provide more information about your business.
                </p>
              </div>

              <div className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label
                      htmlFor="capacity"
                      className="block text-sm font-semibold text-gray-800 mb-3"
                    >
                      Capacity
                    </label>
                    <input
                      type="number"
                      name="capacity"
                      id="capacity"
                      value={formData.capacity || ""}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 text-gray-900 bg-white border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 placeholder-gray-400 text-base"
                      placeholder="Maximum number of guests"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="tags"
                      className="block text-sm font-semibold text-gray-800 mb-3"
                    >
                      Tags
                    </label>
                    <input
                      type="text"
                      name="tags"
                      id="tags"
                      value={formData.tags.join(", ")}
                      onChange={handleTagsChange}
                      className="w-full px-4 py-3 text-gray-900 bg-white border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 placeholder-gray-400 text-base"
                      placeholder="luxury, romantic, family-friendly"
                    />
                    <p className="text-xs text-gray-500 mt-2">
                      Separate tags with commas
                    </p>
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="specialOffers"
                    className="block text-sm font-semibold text-gray-800 mb-3"
                  >
                    Special Offers
                  </label>
                  <textarea
                    name="specialOffers"
                    id="specialOffers"
                    rows={4}
                    value={formData.specialOffers}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 text-gray-900 bg-white border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 placeholder-gray-400 text-base resize-none"
                    placeholder="Describe any current promotions, discounts, or special packages..."
                  />
                </div>
              </div>
            </div>

            {/* Languages */}
            <div className="px-8 py-8">
              <div className="mb-8">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Languages Spoken
                </h3>
                <p className="text-sm text-gray-600">
                  Select the languages your staff can communicate in.
                </p>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3">
                {languages.map((language) => (
                  <label key={language} className="relative">
                    <input
                      type="checkbox"
                      checked={formData.languages.includes(language)}
                      onChange={() => handleLanguageToggle(language)}
                      className="sr-only peer"
                    />
                    <div className="px-3 py-2 bg-white border-2 border-gray-200 rounded-lg cursor-pointer transition-all duration-200 peer-checked:border-blue-500 peer-checked:bg-blue-50 hover:border-gray-300 hover:bg-gray-50">
                      <span className="text-sm font-medium text-gray-700 peer-checked:text-blue-700">
                        {language}
                      </span>
                    </div>
                  </label>
                ))}
              </div>
            </div>
            <div className="px-8 py-8">
              <div className="mb-8">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Photos
                </h3>
                <p className="text-sm text-gray-600">
                  Upload high-quality photos to showcase your business.
                </p>
              </div>

              <div className="space-y-6">
                <div className="border-2 border-dashed border-gray-200 rounded-2xl p-8 text-center hover:border-gray-300 transition-colors duration-200">
                  <input
                    type="file"
                    multiple
                    accept="image/*"
                    onChange={handleImageUpload}
                    className="hidden"
                    id="image-upload"
                  />
                  <label
                    htmlFor="image-upload"
                    className="cursor-pointer block"
                  >
                    <div className="mx-auto w-16 h-16 bg-blue-50 rounded-full flex items-center justify-center mb-4">
                      <svg
                        className="w-8 h-8 text-blue-600"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M12 4v16m8-8H4"
                        />
                      </svg>
                    </div>
                    <p className="text-lg font-medium text-gray-900 mb-2">
                      Upload Images
                    </p>
                    <p className="text-sm text-gray-500">
                      Drag and drop your images here, or click to browse
                    </p>
                    <p className="text-xs text-gray-400 mt-2">
                      PNG, JPG, GIF up to 10MB each
                    </p>
                  </label>
                </div>

                {formData.images.length > 0 && (
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {formData.images.map((file, index) => (
                      <div key={index} className="relative group">
                        <img
                          src={URL.createObjectURL(file)}
                          alt={`Preview ${index + 1}`}
                          className="w-full h-32 object-cover rounded-xl"
                        />
                        <button
                          type="button"
                          onClick={() => removeImage(index)}
                          className="absolute -top-2 -right-2 w-7 h-7 bg-red-500 text-white rounded-full flex items-center justify-center text-sm hover:bg-red-600 transition-colors duration-200 opacity-0 group-hover:opacity-100"
                        >
                          ×
                        </button>
                        {index === 0 && (
                          <div className="absolute bottom-2 left-2 px-2 py-1 bg-blue-600 text-white text-xs font-medium rounded-lg">
                            Primary
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>

            {/* Operating Hours */}
            <div className="px-8 py-8">
              <div className="mb-8">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Operating Hours
                </h3>
                <p className="text-sm text-gray-600">
                  Set your business hours for each day of the week.
                </p>
              </div>

              <div className="space-y-4">
                {Object.entries(formData.operatingHours).map(([day, hours]) => (
                  <div
                    key={day}
                    className="flex flex-col sm:flex-row sm:items-center gap-4 p-4 bg-gray-50 rounded-xl"
                  >
                    <div className="w-24">
                      <span className="text-sm font-semibold text-gray-800 capitalize">
                        {day}
                      </span>
                    </div>

                    <label className="flex items-center">
                      <input
                        type="checkbox"
                        checked={hours.closed}
                        onChange={(e) =>
                          handleOperatingHoursChange(
                            day as keyof ListingFormData["operatingHours"],
                            "closed",
                            e.target.checked
                          )
                        }
                        className="w-4 h-4 text-blue-600 bg-white border-gray-300 rounded focus:ring-blue-500 focus:ring-2"
                      />
                      <span className="ml-2 text-sm font-medium text-gray-700">
                        Closed
                      </span>
                    </label>

                    {!hours.closed && (
                      <div className="flex items-center gap-3">
                        <input
                          type="time"
                          value={hours.open}
                          onChange={(e) =>
                            handleOperatingHoursChange(
                              day as keyof ListingFormData["operatingHours"],
                              "open",
                              e.target.value
                            )
                          }
                          className="px-3 py-2 text-sm text-gray-900 bg-white border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        />
                        <span className="text-sm text-gray-500 font-medium">
                          to
                        </span>
                        <input
                          type="time"
                          value={hours.close}
                          onChange={(e) =>
                            handleOperatingHoursChange(
                              day as keyof ListingFormData["operatingHours"],
                              "close",
                              e.target.value
                            )
                          }
                          className="px-3 py-2 text-sm text-gray-900 bg-white border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        />
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
            {/* Submit Button */}
            <div className="px-8 py-8 bg-gray-50 border-t border-gray-200">
              <div className="flex flex-col sm:flex-row gap-4 justify-end">
                <button
                  type="button"
                  onClick={() => router.push("/dashboard")}
                  className="px-6 py-3 text-gray-700 bg-white border border-gray-300 rounded-xl hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 transition-all duration-200 font-medium"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={loading}
                  className="px-8 py-3 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-xl hover:from-blue-700 hover:to-blue-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-all duration-200 font-semibold disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center min-w-[140px]"
                >
                  {loading ? (
                    <>
                      <svg
                        className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                        ></circle>
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                        ></path>
                      </svg>
                      Creating...
                    </>
                  ) : (
                    "Create Business Listing"
                  )}
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>

      {/* Fast Listing Modal */}
      <FastListingModal
        isOpen={showFastListingModal}
        onClose={() => setShowFastListingModal(false)}
        onSuccess={handleFastListingSuccess}
      />
    </div>
  );
};

export default BusinessNewListing;
