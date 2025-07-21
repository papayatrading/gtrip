"use client";
import React, { useState, useMemo, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import Footer from "../../components/Footer";
import { useBusinessListings } from "@/hooks/useBusinessListings";
import { BusinessListingResponse } from "@/types/businessListing";

const HotelsPage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [sortBy, setSortBy] = useState("name");
  const [selectedCategory, setSelectedCategory] = useState("Hotel");
  const [selectedCity, setSelectedCity] = useState("");

  // Use the new hook to fetch real data - fetch all listings and filter on frontend
  const {
    listings,
    loading,
    error,
    total,
    page,
    totalPages,
    setPage,
    setFilters,
  } = useBusinessListings({
    page: 1,
    limit: 50, // Get more listings to ensure we have hotels
    city: selectedCity || undefined,
  });

  // Filter listings by Hotel category and apply search/sort
  const filteredAndSortedListings = useMemo(() => {
    if (!listings || !Array.isArray(listings)) return [];

    let filtered = listings.filter((listing) => {
      // Filter by hotel category first
      const isHotel =
        listing.category?.toLowerCase() === "hotel" ||
        listing.category?.toLowerCase().includes("hotel") ||
        listing.subcategory?.toLowerCase().includes("hotel") ||
        listing.category?.toLowerCase().includes("accommodation");

      if (!isHotel) return false;

      // Apply search filter
      if (!searchTerm) return true;

      const search = searchTerm.toLowerCase();
      return (
        listing.title?.toLowerCase().includes(search) ||
        listing.city?.toLowerCase().includes(search) ||
        listing.country?.toLowerCase().includes(search) ||
        listing.description?.toLowerCase().includes(search) ||
        listing.address?.toLowerCase().includes(search)
      );
    });

    // Apply sorting
    return filtered.sort((a, b) => {
      switch (sortBy) {
        case "rating":
          return (b.rating || 0) - (a.rating || 0);
        case "reviews":
          return (b.reviewCount || 0) - (a.reviewCount || 0);
        case "name":
        default:
          return a.title.localeCompare(b.title);
      }
    });
  }, [listings, searchTerm, sortBy]);

  // Extract unique cities for filter dropdown
  const availableCities = useMemo(() => {
    if (!listings || !Array.isArray(listings)) return [];

    const cities = listings
      .filter(
        (listing) =>
          listing.category?.toLowerCase() === "hotel" ||
          listing.category?.toLowerCase().includes("hotel") ||
          listing.subcategory?.toLowerCase().includes("hotel") ||
          listing.category?.toLowerCase().includes("accommodation")
      )
      .map((listing) => listing.city)
      .filter(Boolean);
    return [...new Set(cities)].sort();
  }, [listings]);

  // Helper function to parse amenities from string or array
  const parseAmenities = (amenities: any): string[] => {
    if (Array.isArray(amenities)) return amenities;
    if (typeof amenities === "string") {
      try {
        const parsed = JSON.parse(amenities);
        return Array.isArray(parsed) ? parsed : [];
      } catch {
        return [];
      }
    }
    return [];
  };

  // Helper function to get primary image
  const getPrimaryImage = (listing: any): string => {
    // Check for imageUrls first (new format)
    if (
      listing.imageUrls &&
      Array.isArray(listing.imageUrls) &&
      listing.imageUrls.length > 0
    ) {
      return listing.imageUrls[0];
    }
    // Check for images array (API response format)
    if (
      listing.images &&
      Array.isArray(listing.images) &&
      listing.images.length > 0
    ) {
      return listing.images[0];
    }
    // Fallback to placeholder
    return "/hotels/beautiful-luxury-outdoor-swimming-pool-hotel-resort.webp";
  };

  // Helper function to format price range
  const formatPriceRange = (
    priceRange?: string
  ): { price: number; originalPrice: number } => {
    if (!priceRange) return { price: 150, originalPrice: 200 };

    // Handle dollar sign format ($, $$, $$$, $$$$)
    if (priceRange.match(/^\$+$/)) {
      const dollarCount = priceRange.length;
      switch (dollarCount) {
        case 1:
          return { price: 50, originalPrice: 80 };
        case 2:
          return { price: 100, originalPrice: 150 };
        case 3:
          return { price: 200, originalPrice: 280 };
        case 4:
          return { price: 400, originalPrice: 550 };
        default:
          return { price: 150, originalPrice: 200 };
      }
    }

    // Extract numbers from price range (e.g., "$200-$300" -> 200, 300)
    const matches = priceRange.match(/\$?(\d+).*\$?(\d+)?/);
    if (matches) {
      const price = parseInt(matches[1]);
      const originalPrice = matches[2]
        ? parseInt(matches[2])
        : Math.round(price * 1.3);
      return { price, originalPrice };
    }

    return { price: 150, originalPrice: 200 }; // Default fallback
  };

  return (
    <>
      <style jsx>{`
        @keyframes spin {
          0% {
            transform: rotate(0deg);
          }
          100% {
            transform: rotate(360deg);
          }
        }
      `}</style>
      <div style={{ backgroundColor: "#f8f9fa", minHeight: "100vh" }}>
        <div
          style={{
            backgroundImage:
              "linear-gradient(135deg, #0d9488 0%, #115e59 100%)",
            color: "#fff",
            padding: "4rem 2rem 2rem",
            textAlign: "center",
          }}
        >
          <h1
            style={{
              fontSize: "3rem",
              fontWeight: "700",
              marginBottom: "1rem",
              textShadow: "0 2px 4px rgba(0,0,0,0.3)",
            }}
          >
            Find Your Perfect Hotel
          </h1>
          <p
            style={{
              fontSize: "1.3rem",
              opacity: "0.9",
              maxWidth: "600px",
              margin: "0 auto",
            }}
          >
            Discover amazing hotels worldwide with our curated selection
          </p>
        </div>

        <div
          style={{
            maxWidth: "1200px",
            margin: "0 auto",
            padding: "2rem",
          }}
        >
          <div
            style={{
              background: "#fff",
              borderRadius: "12px",
              padding: "2rem",
              marginBottom: "2rem",
              boxShadow: "0 4px 20px rgba(0,0,0,0.1)",
            }}
          >
            <div
              style={{
                display: "flex",
                gap: "1rem",
                flexWrap: "wrap",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <div style={{ flex: "1", minWidth: "300px" }}>
                <input
                  type="text"
                  placeholder="Search hotels by name, location, or description..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  style={{
                    width: "100%",
                    padding: "1rem 1.5rem",
                    fontSize: "1rem",
                    border: "2px solid #e0e0e0",
                    borderRadius: "8px",
                    outline: "none",
                    transition: "border-color 0.2s ease",
                  }}
                  onFocus={(e) => (e.target.style.borderColor = "#0d9488")}
                  onBlur={(e) => (e.target.style.borderColor = "#e0e0e0")}
                />
              </div>

              <div
                style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}
              >
                <label style={{ fontWeight: "600", color: "#333" }}>
                  Sort by:
                </label>
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  style={{
                    padding: "0.75rem 1rem",
                    fontSize: "1rem",
                    border: "2px solid #e0e0e0",
                    borderRadius: "8px",
                    outline: "none",
                    cursor: "pointer",
                    background: "#fff",
                  }}
                >
                  <option value="name">Name</option>
                  <option value="rating">Rating</option>
                  <option value="reviews">Reviews</option>
                </select>
              </div>

              <div
                style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}
              >
                <label style={{ fontWeight: "600", color: "#333" }}>
                  City:
                </label>
                <select
                  value={selectedCity}
                  onChange={(e) => {
                    setSelectedCity(e.target.value);
                    setFilters({
                      city: e.target.value || undefined,
                    });
                  }}
                  style={{
                    padding: "0.75rem 1rem",
                    fontSize: "1rem",
                    border: "2px solid #e0e0e0",
                    borderRadius: "8px",
                    outline: "none",
                    cursor: "pointer",
                    background: "#fff",
                  }}
                >
                  <option value="">All Cities</option>
                  {availableCities.map((city) => (
                    <option key={city} value={city}>
                      {city}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div
              style={{
                marginTop: "1rem",
                fontSize: "0.9rem",
                color: "#666",
              }}
            >
              {loading ? (
                "Loading hotels..."
              ) : error ? (
                <span style={{ color: "#e74c3c" }}>Error: {error}</span>
              ) : (
                `Showing ${filteredAndSortedListings.length} hotels`
              )}
            </div>
          </div>

          {loading ? (
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                padding: "3rem",
                background: "#fff",
                borderRadius: "12px",
                boxShadow: "0 4px 20px rgba(0,0,0,0.1)",
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "1rem",
                  fontSize: "1.1rem",
                  color: "#666",
                }}
              >
                <div
                  style={{
                    width: "20px",
                    height: "20px",
                    border: "2px solid #e0e0e0",
                    borderTop: "2px solid #0d9488",
                    borderRadius: "50%",
                    animation: "spin 1s linear infinite",
                  }}
                />
                Loading hotels...
              </div>
            </div>
          ) : error ? (
            <div
              style={{
                textAlign: "center",
                padding: "3rem",
                background: "#fff",
                borderRadius: "12px",
                boxShadow: "0 4px 20px rgba(0,0,0,0.1)",
              }}
            >
              <h3 style={{ color: "#e74c3c", marginBottom: "1rem" }}>
                Error Loading Hotels
              </h3>
              <p style={{ color: "#999", marginBottom: "1rem" }}>{error}</p>
              <button
                onClick={() => window.location.reload()}
                style={{
                  background: "#0d9488",
                  color: "#fff",
                  border: "none",
                  borderRadius: "8px",
                  padding: "0.75rem 2rem",
                  fontSize: "1rem",
                  fontWeight: "600",
                  cursor: "pointer",
                }}
              >
                Try Again
              </button>
            </div>
          ) : (
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(380px, 1fr))",
                gap: "2rem",
              }}
            >
              {filteredAndSortedListings.map((listing) => {
                const { price, originalPrice } = formatPriceRange(
                  listing.priceRange
                );
                return (
                  <Link
                    key={listing.id}
                    href={`/hotel/${listing.id}`}
                    style={{ textDecoration: "none", color: "inherit" }}
                  >
                    <div
                      style={{
                        background: "#fff",
                        borderRadius: "12px",
                        overflow: "hidden",
                        boxShadow: "0 4px 20px rgba(0,0,0,0.1)",
                        transition: "transform 0.3s ease, box-shadow 0.3s ease",
                        cursor: "pointer",
                        border: "1px solid #e0e0e0",
                      }}
                      onMouseOver={(e) => {
                        e.currentTarget.style.transform = "translateY(-5px)";
                        e.currentTarget.style.boxShadow =
                          "0 8px 30px rgba(0,0,0,0.15)";
                      }}
                      onMouseOut={(e) => {
                        e.currentTarget.style.transform = "translateY(0)";
                        e.currentTarget.style.boxShadow =
                          "0 4px 20px rgba(0,0,0,0.1)";
                      }}
                    >
                      <div
                        style={{
                          position: "relative",
                          height: "220px",
                          overflow: "hidden",
                        }}
                      >
                        <Image
                          src={getPrimaryImage(listing)}
                          alt={listing.title}
                          fill
                          style={{ objectFit: "cover" }}
                        />
                        <div
                          style={{
                            position: "absolute",
                            top: "1rem",
                            right: "1rem",
                            background: "#0d9488",
                            color: "#fff",
                            padding: "0.5rem 1rem",
                            borderRadius: "20px",
                            fontSize: "0.9rem",
                            fontWeight: "600",
                          }}
                        >
                          ★ {listing.rating ? listing.rating.toFixed(1) : "4.5"}
                        </div>
                        <div
                          style={{
                            position: "absolute",
                            top: "1rem",
                            left: "1rem",
                            background: "rgba(0,0,0,0.7)",
                            color: "#fff",
                            padding: "0.5rem 1rem",
                            borderRadius: "20px",
                            fontSize: "0.8rem",
                            fontWeight: "500",
                          }}
                        >
                          {listing.reviewCount || 0} reviews
                        </div>
                        {(listing.verified || listing.isVerified) && (
                          <div
                            style={{
                              position: "absolute",
                              bottom: "1rem",
                              right: "1rem",
                              background: "#10B981",
                              color: "#fff",
                              padding: "0.25rem 0.75rem",
                              borderRadius: "15px",
                              fontSize: "0.7rem",
                              fontWeight: "600",
                            }}
                          >
                            ✓ Verified
                          </div>
                        )}
                      </div>

                      <div style={{ padding: "1.5rem" }}>
                        <h3
                          style={{
                            fontSize: "1.4rem",
                            fontWeight: "600",
                            color: "#333",
                            marginBottom: "0.5rem",
                          }}
                        >
                          {listing.title}
                        </h3>

                        <p
                          style={{
                            color: "#999",
                            fontSize: "0.95rem",
                            marginBottom: "0.5rem",
                          }}
                        >
                          📍 {listing.city}, {listing.country}
                        </p>

                        <p
                          style={{
                            color: "#666",
                            fontSize: "0.95rem",
                            marginBottom: "1rem",
                            lineHeight: "1.5",
                            display: "-webkit-box",
                            WebkitLineClamp: 2,
                            WebkitBoxOrient: "vertical",
                            overflow: "hidden",
                          }}
                        >
                          {listing.description}
                        </p>

                        <div
                          style={{
                            display: "flex",
                            flexWrap: "wrap",
                            gap: "0.5rem",
                            marginBottom: "1rem",
                          }}
                        >
                          {parseAmenities(listing.amenities)
                            .slice(0, 4)
                            .map((amenity, index) => (
                              <span
                                key={index}
                                style={{
                                  background: "#f0f0f0",
                                  color: "#666",
                                  padding: "0.3rem 0.7rem",
                                  borderRadius: "15px",
                                  fontSize: "0.8rem",
                                  fontWeight: "500",
                                }}
                              >
                                {amenity}
                              </span>
                            ))}
                          {parseAmenities(listing.amenities).length > 4 && (
                            <span
                              style={{
                                background: "#f0fdfa",
                                color: "#0d9488",
                                padding: "0.3rem 0.7rem",
                                borderRadius: "15px",
                                fontSize: "0.8rem",
                                fontWeight: "500",
                              }}
                            >
                              +{parseAmenities(listing.amenities).length - 4}{" "}
                              more
                            </span>
                          )}
                        </div>

                        <div
                          style={{
                            display: "flex",
                            justifyContent: "space-between",
                            alignItems: "center",
                            marginTop: "1rem",
                          }}
                        >
                          <div>
                            <div
                              style={{
                                display: "flex",
                                alignItems: "baseline",
                                gap: "0.5rem",
                              }}
                            >
                              <span
                                style={{
                                  fontSize: "1.4rem",
                                  fontWeight: "700",
                                  color: "#0d9488",
                                }}
                              >
                                ${price}
                              </span>
                              {originalPrice > price && (
                                <span
                                  style={{
                                    fontSize: "1rem",
                                    color: "#999",
                                    textDecoration: "line-through",
                                  }}
                                >
                                  ${originalPrice}
                                </span>
                              )}
                            </div>
                            <p
                              style={{
                                fontSize: "0.9rem",
                                color: "#666",
                                margin: "0.25rem 0 0 0",
                              }}
                            >
                              per night
                            </p>
                          </div>

                          <button
                            style={{
                              background: "#0d9488",
                              color: "#fff",
                              border: "none",
                              borderRadius: "8px",
                              padding: "0.7rem 1.5rem",
                              fontWeight: "600",
                              cursor: "pointer",
                              fontSize: "0.95rem",
                              transition: "background 0.2s ease",
                            }}
                            onMouseOver={(e) =>
                              (e.currentTarget.style.background = "#E6315A")
                            }
                            onMouseOut={(e) =>
                              (e.currentTarget.style.background = "#0d9488")
                            }
                          >
                            View Details
                          </button>
                        </div>
                      </div>
                    </div>
                  </Link>
                );
              })}
            </div>
          )}

          {!loading && !error && filteredAndSortedListings.length === 0 && (
            <div
              style={{
                textAlign: "center",
                padding: "3rem",
                background: "#fff",
                borderRadius: "12px",
                boxShadow: "0 4px 20px rgba(0,0,0,0.1)",
              }}
            >
              <h3 style={{ color: "#666", marginBottom: "1rem" }}>
                No hotels found
              </h3>
              <p style={{ color: "#999" }}>
                Try adjusting your search criteria or filters
              </p>
            </div>
          )}

          {/* Customer Reviews Section */}
          <div
            style={{
              background: "#fff",
              borderRadius: "12px",
              padding: "2rem",
              marginTop: "3rem",
              boxShadow: "0 4px 20px rgba(0,0,0,0.1)",
            }}
          >
            <h2
              style={{
                fontSize: "2rem",
                fontWeight: "700",
                color: "#333",
                marginBottom: "2rem",
                textAlign: "center",
              }}
            >
              What Our Guests Say
            </h2>

            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
                gap: "2rem",
              }}
            >
              {[
                {
                  name: "Sarah Johnson",
                  location: "New York, USA",
                  rating: 5,
                  review:
                    "Amazing experience! The hotel was clean, staff was friendly, and the location was perfect for exploring the city.",
                  date: "2 weeks ago",
                  avatar: "👩‍💼",
                },
                {
                  name: "Marco Silva",
                  location: "São Paulo, Brazil",
                  rating: 5,
                  review:
                    "Excellent service and beautiful rooms. The booking process was smooth and hassle-free. Highly recommend!",
                  date: "1 month ago",
                  avatar: "👨‍💻",
                },
                {
                  name: "Emma Chen",
                  location: "Singapore",
                  rating: 4,
                  review:
                    "Great selection of hotels and competitive prices. The customer support team was very helpful when I had questions.",
                  date: "3 weeks ago",
                  avatar: "👩‍🎓",
                },
              ].map((review, index) => (
                <div
                  key={index}
                  style={{
                    background: "#f8f9fa",
                    borderRadius: "12px",
                    padding: "1.5rem",
                    border: "1px solid #e0e0e0",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      marginBottom: "1rem",
                    }}
                  >
                    <div
                      style={{
                        width: "50px",
                        height: "50px",
                        borderRadius: "50%",
                        background: "linear-gradient(135deg, #667eea, #764ba2)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        fontSize: "1.5rem",
                        marginRight: "1rem",
                      }}
                    >
                      {review.avatar}
                    </div>
                    <div>
                      <h4
                        style={{
                          fontSize: "1.1rem",
                          fontWeight: "600",
                          color: "#333",
                          margin: "0 0 0.25rem 0",
                        }}
                      >
                        {review.name}
                      </h4>
                      <p
                        style={{
                          fontSize: "0.9rem",
                          color: "#666",
                          margin: 0,
                        }}
                      >
                        {review.location}
                      </p>
                    </div>
                  </div>

                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      marginBottom: "1rem",
                    }}
                  >
                    {[...Array(5)].map((_, i) => (
                      <span
                        key={i}
                        style={{
                          color: i < review.rating ? "#FFD700" : "#e0e0e0",
                          fontSize: "1.2rem",
                          marginRight: "0.25rem",
                        }}
                      >
                        ★
                      </span>
                    ))}
                    <span
                      style={{
                        fontSize: "0.9rem",
                        color: "#666",
                        marginLeft: "0.5rem",
                      }}
                    >
                      {review.date}
                    </span>
                  </div>

                  <p
                    style={{
                      fontSize: "1rem",
                      color: "#555",
                      lineHeight: "1.5",
                      margin: 0,
                    }}
                  >
                    "{review.review}"
                  </p>
                </div>
              ))}
            </div>

            <div
              style={{
                textAlign: "center",
                marginTop: "2rem",
              }}
            >
              <button
                style={{
                  background: "#0d9488",
                  color: "#fff",
                  border: "none",
                  borderRadius: "8px",
                  padding: "0.75rem 2rem",
                  fontSize: "1rem",
                  fontWeight: "600",
                  cursor: "pointer",
                  transition: "background 0.2s ease",
                }}
                onMouseOver={(e) =>
                  (e.currentTarget.style.background = "#E6315A")
                }
                onMouseOut={(e) =>
                  (e.currentTarget.style.background = "#0d9488")
                }
              >
                Read More Reviews
              </button>
            </div>
          </div>
        </div>

        <Footer />
      </div>
    </>
  );
};

export default HotelsPage;
