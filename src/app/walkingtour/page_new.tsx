"use client";
import React, { useState, useMemo } from "react";
import Image from "next/image";
import Link from "next/link";
import Footer from "../../components/Footer";

const WalkingTourPage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [sortBy, setSortBy] = useState("name");

  // Walking tour search states
  const [location, setLocation] = useState("");
  const [selectedDate, setSelectedDate] = useState("");
  const [tourType, setTourType] = useState("");

  const walkingTours = [
    {
      id: 1,
      name: "Family Adventure Explorer",
      location: "Barcelona, Spain",
      image: "/walkingtour/family-enjoying-trip-their-holidays.webp",
      price: 45,
      originalPrice: 60,
      duration: "3 hours",
      category: "Family",
      rating: 4.8,
      reviews: 324,
      highlights: [
        "Kid-Friendly Routes",
        "Interactive Games",
        "Photo Stops",
        "Local Snacks",
      ],
      description:
        "Perfect family walking tour with engaging activities and safe routes for all ages",
    },
    {
      id: 2,
      name: "Navigation & Discovery Walk",
      location: "Prague, Czech Republic",
      image: "/walkingtour/friends-searching-direction.webp",
      price: 35,
      originalPrice: 50,
      duration: "2.5 hours",
      category: "Explorer",
      rating: 4.6,
      reviews: 287,
      highlights: [
        "Map Reading Skills",
        "Hidden Gems",
        "Local Secrets",
        "Navigation Tips",
      ],
      description:
        "Learn navigation skills while discovering Prague's hidden treasures and secret spots",
    },
    {
      id: 3,
      name: "Backpacker Adventure Tour",
      location: "Amsterdam, Netherlands",
      image: "/walkingtour/friends-travel-backpacker-adventure-concept.webp",
      price: 25,
      originalPrice: 40,
      duration: "4 hours",
      category: "Adventure",
      rating: 4.9,
      reviews: 456,
      highlights: [
        "Budget Travel Tips",
        "Backpacker Spots",
        "Local Markets",
        "Free Activities",
      ],
      description:
        "Ultimate backpacker guide to Amsterdam with budget-friendly spots and travel hacks",
    },
    {
      id: 4,
      name: "Historic Streets Explorer",
      location: "Rome, Italy",
      image: "/walkingtour/friends-walking-street-with-map.webp",
      price: 55,
      originalPrice: 75,
      duration: "3.5 hours",
      category: "Historic",
      rating: 4.7,
      reviews: 612,
      highlights: [
        "Ancient Streets",
        "Roman History",
        "Archaeological Sites",
        "Expert Guide",
      ],
      description:
        "Walk through Rome's ancient streets with detailed historical insights and expert commentary",
    },
    {
      id: 5,
      name: "Group Exploration Tour",
      location: "Paris, France",
      image: "/walkingtour/group-friends-searching-location-map.webp",
      price: 40,
      originalPrice: 55,
      duration: "2 hours",
      category: "Group",
      rating: 4.5,
      reviews: 298,
      highlights: [
        "Group Activities",
        "Team Building",
        "Social Experience",
        "Photo Opportunities",
      ],
      description:
        "Join fellow travelers for a fun group exploration of Paris's most iconic landmarks",
    },
    {
      id: 6,
      name: "Photography Walking Tour",
      location: "Tokyo, Japan",
      image: "/walkingtour/man-taking-shot-tourists.webp",
      price: 65,
      originalPrice: 85,
      duration: "4 hours",
      category: "Photography",
      rating: 4.8,
      reviews: 234,
      highlights: [
        "Photography Tips",
        "Best Photo Spots",
        "Professional Guide",
        "Equipment Provided",
      ],
      description:
        "Capture Tokyo's beauty with professional photography guidance and insider locations",
    },
  ];

  const filteredTours = useMemo(() => {
    return walkingTours
      .filter((tour) =>
        tour.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        tour.location.toLowerCase().includes(searchTerm.toLowerCase()) ||
        tour.category.toLowerCase().includes(searchTerm.toLowerCase())
      )
      .sort((a, b) => {
        switch (sortBy) {
          case "price":
            return a.price - b.price;
          case "rating":
            return b.rating - a.rating;
          case "reviews":
            return b.reviews - a.reviews;
          default:
            return a.name.localeCompare(b.name);
        }
      });
  }, [searchTerm, sortBy]);

  const getCategoryColor = (category: string) => {
    switch (category) {
      case "Family":
        return "#10b981";
      case "Historic":
        return "#f59e0b";
      case "Adventure":
        return "#ef4444";
      case "Cultural":
        return "#8b5cf6";
      case "Group":
        return "#06b6d4";
      case "Explorer":
        return "#f97316";
      case "Photography":
        return "#ec4899";
      default:
        return "#6b7280";
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Modern Teal Hero Section */}
      <div className="relative bg-gradient-to-br from-teal-600 via-teal-700 to-teal-800 text-white">
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 tracking-tight">
            Walking Tours & City Exploration
          </h1>
          <p className="text-xl md:text-2xl text-teal-100 max-w-3xl mx-auto leading-relaxed">
            Discover cities on foot with expert guides and unique local experiences
          </p>
          {/* Decorative elements */}
          <div className="absolute top-10 left-10 w-32 h-32 bg-teal-500/20 rounded-full blur-xl"></div>
          <div className="absolute bottom-10 right-10 w-24 h-24 bg-teal-400/20 rounded-full blur-xl"></div>
        </div>
      </div>

      {/* Modern Search Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-white rounded-2xl shadow-xl p-8 -mt-16 relative z-10 border border-gray-200/50">
          <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Find Your Perfect Walking Tour</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
            {/* Location */}
            <div className="lg:col-span-2">
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Location
              </label>
              <div className="relative">
                <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-teal-600">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  </svg>
                </div>
                <input
                  type="text"
                  placeholder="City, attraction, or tour name..."
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 transition-colors duration-200"
                />
              </div>
            </div>

            {/* Date */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Date
              </label>
              <input
                type="date"
                value={selectedDate}
                onChange={(e) => setSelectedDate(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 transition-colors duration-200"
              />
            </div>

            {/* Search Button */}
            <div className="flex items-end">
              <button className="w-full bg-teal-600 hover:bg-teal-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors duration-200 shadow-lg hover:shadow-xl">
                Search Tours
              </button>
            </div>
          </div>

          {/* Search and Sort */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Search Tours
              </label>
              <input
                type="text"
                placeholder="Search by name, location, or category..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 transition-colors duration-200"
              />
            </div>
            
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Sort By
              </label>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 transition-colors duration-200"
              >
                <option value="name">Name</option>
                <option value="price">Price</option>
                <option value="rating">Rating</option>
                <option value="reviews">Reviews</option>
              </select>
            </div>
          </div>
        </div>

        {/* Modern Tours Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {filteredTours.map((tour) => (
            <Link
              key={tour.id}
              href={`/walkingtour/${tour.id}`}
              className="group block"
            >
              <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden group-hover:scale-105">
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src={tour.image}
                    alt={tour.name}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  {/* Price Badge */}
                  <div className="absolute top-4 right-4 bg-teal-600 text-white px-3 py-1.5 rounded-full text-sm font-semibold shadow-lg">
                    ${tour.price}
                  </div>
                  {/* Original Price */}
                  {tour.originalPrice > tour.price && (
                    <div className="absolute top-4 right-16 bg-white/90 text-gray-600 px-2 py-1 rounded-full text-xs line-through">
                      ${tour.originalPrice}
                    </div>
                  )}
                  {/* Category Badge */}
                  <div 
                    className="absolute top-4 left-4 text-white px-3 py-1.5 rounded-full text-sm font-semibold shadow-lg"
                    style={{ backgroundColor: getCategoryColor(tour.category) }}
                  >
                    {tour.category}
                  </div>
                  {/* Duration Badge */}
                  <div className="absolute bottom-4 left-4 bg-black/70 text-white px-3 py-1.5 rounded-full text-sm font-medium backdrop-blur-sm">
                    {tour.duration}
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-teal-700 transition-colors duration-200">
                    {tour.name}
                  </h3>

                  <p className="text-gray-500 text-sm mb-2 flex items-center">
                    <svg className="w-4 h-4 mr-1.5 text-teal-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    </svg>
                    {tour.location}
                  </p>

                  <p className="text-gray-600 text-sm mb-4 line-clamp-2 leading-relaxed">
                    {tour.description}
                  </p>

                  {/* Highlights */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {tour.highlights.slice(0, 2).map((highlight, idx) => (
                      <span
                        key={idx}
                        className="bg-teal-50 text-teal-700 px-2 py-1 rounded-md text-xs font-medium"
                      >
                        {highlight}
                      </span>
                    ))}
                  </div>

                  <div className="flex justify-between items-center pt-4 border-t border-gray-100">
                    <div>
                      <div className="text-2xl font-bold text-teal-600">
                        ${tour.price}
                      </div>
                      <div className="text-xs text-gray-500 flex items-center">
                        <svg className="w-3 h-3 mr-1 text-yellow-400" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                        </svg>
                        {tour.reviews} reviews (★{tour.rating})
                      </div>
                    </div>
                    <div className="bg-teal-600 hover:bg-teal-700 text-white px-4 py-2 rounded-lg font-semibold transition-all duration-200 shadow-lg hover:shadow-xl text-sm">
                      Book Tour
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Modern Reviews Section */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mt-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Walking Tour Reviews
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                name: "Emma Johnson",
                location: "London, UK",
                rating: 5,
                review:
                  "Amazing walking tour experience! Our guide was knowledgeable and the pace was perfect. Discovered so many hidden gems.",
                date: "1 week ago",
                avatar: "👩‍🦰",
              },
              {
                name: "Marco Rodriguez",
                location: "Barcelona, Spain",
                rating: 5,
                review:
                  "Fantastic family tour! Kids were engaged throughout and we learned so much about the city's history and culture.",
                date: "2 weeks ago",
                avatar: "👨‍👩‍👧‍👦",
              },
              {
                name: "Chen Wei",
                location: "Singapore",
                rating: 4,
                review:
                  "Great value for money. The tour covered all major attractions and the guide shared interesting local stories.",
                date: "1 month ago",
                avatar: "👨‍💼",
              },
            ].map((review, index) => (
              <div
                key={index}
                className="bg-gray-50 rounded-xl p-6 border border-gray-200 hover:shadow-lg transition-shadow duration-200"
              >
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-teal-600 to-teal-700 rounded-full flex items-center justify-center text-xl mr-4">
                    {review.avatar}
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900">
                      {review.name}
                    </h4>
                    <p className="text-sm text-gray-600">
                      {review.location}
                    </p>
                  </div>
                </div>

                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <span
                      key={i}
                      className={`text-lg mr-1 ${
                        i < review.rating ? "text-yellow-400" : "text-gray-300"
                      }`}
                    >
                      ★
                    </span>
                  ))}
                  <span className="text-sm text-gray-500 ml-2">
                    {review.date}
                  </span>
                </div>

                <p className="text-gray-700 leading-relaxed">
                  "{review.review}"
                </p>
              </div>
            ))}
          </div>

          <div className="text-center mt-8">
            <button className="bg-teal-600 hover:bg-teal-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors duration-200 shadow-lg hover:shadow-xl">
              Read More Reviews
            </button>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default WalkingTourPage;
