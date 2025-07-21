"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { BusinessListingResponse } from "@/types/businessListing";
import { businessListingService } from "@/services/businessListingService";

interface HotelDetailsProps {
  params: Promise<{
    id: string;
  }>;
}

const HotelDetails: React.FC<HotelDetailsProps> = ({ params }) => {
  const [hotel, setHotel] = useState<BusinessListingResponse | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [resolvedParams, setResolvedParams] = useState<{ id: string } | null>(null);

  useEffect(() => {
    params.then(setResolvedParams);
  }, [params]);

  useEffect(() => {
    if (resolvedParams?.id) {
      fetchHotel(resolvedParams.id);
    }
  }, [resolvedParams]);

  const fetchHotel = async (id: string) => {
    setLoading(true);
    setError(null);
    
    try {
      const response = await businessListingService.getListingById(id);
      
      if (response.success && response.data) {
        setHotel(response.data);
      } else {
        setError(response.error || 'Failed to fetch hotel details');
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to fetch hotel details');
    } finally {
      setLoading(false);
    }
  };

  // Helper functions
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

  const parsePolicies = (policies: any) => {
    if (typeof policies === "string") {
      try {
        return JSON.parse(policies);
      } catch {
        return {};
      }
    }
    return policies || {};
  };

  const getPrimaryImage = (listing: BusinessListingResponse): string => {
    if (listing.images && Array.isArray(listing.images) && listing.images.length > 0) {
      return listing.images[0];
    }
    return "/hotels/beautiful-luxury-outdoor-swimming-pool-hotel-resort.webp";
  };

  const formatPriceRange = (priceRange?: string): { price: number; originalPrice: number } => {
    if (!priceRange) return { price: 150, originalPrice: 200 };

    if (priceRange.match(/^\$+$/)) {
      const dollarCount = priceRange.length;
      switch (dollarCount) {
        case 1: return { price: 50, originalPrice: 80 };
        case 2: return { price: 100, originalPrice: 150 };
        case 3: return { price: 200, originalPrice: 280 };
        case 4: return { price: 400, originalPrice: 550 };
        default: return { price: 150, originalPrice: 200 };
      }
    }

    const matches = priceRange.match(/\$?(\d+).*\$?(\d+)?/);
    if (matches) {
      const price = parseInt(matches[1]);
      const originalPrice = matches[2] ? parseInt(matches[2]) : Math.round(price * 1.3);
      return { price, originalPrice };
    }

    return { price: 150, originalPrice: 200 };
  };

  if (loading) {
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
          <div style={{ textAlign: "center", padding: "4rem 2rem" }}>
            <div style={{ display: "flex", justifyContent: "center", alignItems: "center", gap: "1rem" }}>
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
              <span style={{ color: "#666", fontSize: "1.1rem" }}>Loading hotel details...</span>
            </div>
          </div>
        </div>
      </>
    );
  }

  if (error || !hotel) {
    return (
      <div style={{ backgroundColor: "#f8f9fa", minHeight: "100vh" }}>
        <div style={{ textAlign: "center", padding: "4rem 2rem" }}>
          <h1 style={{ color: "#333", fontSize: "2rem", marginBottom: "1rem" }}>
            {error ? "Error Loading Hotel" : "Hotel Not Found"}
          </h1>
          {error && (
            <p style={{ color: "#e74c3c", marginBottom: "1rem" }}>{error}</p>
          )}
          <Link
            href="/hotel"
            style={{
              color: "#0d9488",
              textDecoration: "none",
              fontSize: "1.1rem",
            }}
          >
            ← Back to Hotels
          </Link>
        </div>
      </div>
    );
  }

  const amenities = parseAmenities(hotel.amenities);
  const policies = parsePolicies(hotel.policies);
  const { price, originalPrice } = formatPriceRange(hotel.priceRange);

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
        <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "2rem" }}>
          <Link
            href="/hotel"
            style={{
              color: "#0d9488",
              textDecoration: "none",
              fontSize: "1rem",
              marginBottom: "2rem",
              display: "inline-block",
            }}
          >
            ← Back to Hotels
          </Link>

          <div
            style={{
              background: "#fff",
              borderRadius: "12px",
              overflow: "hidden",
              boxShadow: "0 8px 32px rgba(0,0,0,0.1)",
              marginBottom: "2rem",
            }}
          >
            <div style={{ position: "relative", height: "400px" }}>
              <Image
                src={getPrimaryImage(hotel)}
                alt={hotel.title}
                fill
                style={{ objectFit: "cover" }}
              />
              <div
                style={{
                  position: "absolute",
                  top: "2rem",
                  right: "2rem",
                  background: "#0d9488",
                  color: "#fff",
                  padding: "1rem 1.5rem",
                  borderRadius: "25px",
                  fontSize: "1.1rem",
                  fontWeight: "600",
                }}
              >
                ★ {hotel.rating ? hotel.rating.toFixed(1) : "4.5"} ({hotel.reviewCount || 0} reviews)
              </div>
            </div>

            <div style={{ padding: "2rem" }}>
              <div style={{ marginBottom: "2rem" }}>
                <h1
                  style={{
                    fontSize: "2.5rem",
                    fontWeight: "700",
                    color: "#333",
                    marginBottom: "0.5rem",
                  }}
                >
                  {hotel.title}
                </h1>
                <p
                  style={{
                    color: "#666",
                    fontSize: "1.2rem",
                    marginBottom: "1rem",
                  }}
                >
                  📍 {hotel.address}, {hotel.city}, {hotel.country}
                </p>

                <div
                  style={{
                    display: "flex",
                    alignItems: "baseline",
                    gap: "1rem",
                    marginBottom: "2rem",
                  }}
                >
                  <span
                    style={{
                      fontSize: "2.5rem",
                      fontWeight: "700",
                      color: "#0d9488",
                    }}
                  >
                    ${price}
                  </span>
                  {originalPrice > price && (
                    <span
                      style={{
                        fontSize: "1.5rem",
                        color: "#999",
                        textDecoration: "line-through",
                      }}
                    >
                      ${originalPrice}
                    </span>
                  )}
                  <span
                    style={{
                      fontSize: "1.2rem",
                      color: "#666",
                    }}
                  >
                    per night
                  </span>
                </div>
              </div>

              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "2fr 1fr",
                  gap: "3rem",
                }}
              >
                <div>
                  <h3
                    style={{
                      fontSize: "1.5rem",
                      fontWeight: "600",
                      color: "#333",
                      marginBottom: "1rem",
                    }}
                  >
                    About This Hotel
                  </h3>
                  <p
                    style={{
                      color: "#666",
                      fontSize: "1.1rem",
                      lineHeight: "1.6",
                      marginBottom: "2rem",
                    }}
                  >
                    {hotel.description}
                  </p>

                  <h3
                    style={{
                      fontSize: "1.5rem",
                      fontWeight: "600",
                      color: "#333",
                      marginBottom: "1rem",
                    }}
                  >
                    Amenities
                  </h3>
                  <div
                    style={{
                      display: "grid",
                      gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
                      gap: "0.5rem",
                      marginBottom: "2rem",
                    }}
                  >
                    {amenities.map((amenity, index) => (
                      <div
                        key={index}
                        style={{
                          background: "#f8f9fa",
                          color: "#333",
                          padding: "0.7rem 1rem",
                          borderRadius: "8px",
                          fontSize: "1rem",
                          border: "1px solid #e9ecef",
                        }}
                      >
                        ✓ {amenity}
                      </div>
                    ))}
                  </div>

                  <h3
                    style={{
                      fontSize: "1.5rem",
                      fontWeight: "600",
                      color: "#333",
                      marginBottom: "1rem",
                    }}
                  >
                    Policies
                  </h3>
                  <ul
                    style={{
                      color: "#666",
                      fontSize: "1rem",
                      lineHeight: "1.6",
                      paddingLeft: "1.5rem",
                    }}
                  >
                    {policies.cancellationPolicy && (
                      <li style={{ marginBottom: "0.5rem" }}>
                        Cancellation: {policies.cancellationPolicy}
                      </li>
                    )}
                    {policies.petPolicy && (
                      <li style={{ marginBottom: "0.5rem" }}>
                        Pet Policy: {policies.petPolicy}
                      </li>
                    )}
                    {policies.ageRestriction && (
                      <li style={{ marginBottom: "0.5rem" }}>
                        Age Restriction: {policies.ageRestriction}
                      </li>
                    )}
                  </ul>
                </div>

                <div
                  style={{
                    background: "#f8f9fa",
                    padding: "2rem",
                    borderRadius: "12px",
                    height: "fit-content",
                  }}
                >
                  <h3
                    style={{
                      fontSize: "1.3rem",
                      fontWeight: "600",
                      color: "#333",
                      marginBottom: "1.5rem",
                    }}
                  >
                    Booking Information
                  </h3>

                  <div style={{ marginBottom: "1.5rem" }}>
                    <p style={{ color: "#666", marginBottom: "0.5rem" }}>
                      Check-in: {policies.checkInTime || "3:00 PM"}
                    </p>
                    <p style={{ color: "#666", marginBottom: "0.5rem" }}>
                      Check-out: {policies.checkOutTime || "11:00 AM"}
                    </p>
                  </div>

                  <button
                    style={{
                      background: "#0d9488",
                      color: "#fff",
                      border: "none",
                      borderRadius: "8px",
                      padding: "1rem 2rem",
                      fontWeight: "600",
                      cursor: "pointer",
                      fontSize: "1.1rem",
                      width: "100%",
                      marginBottom: "1rem",
                    }}
                  >
                    Book Now - ${price}/night
                  </button>

                  <button
                    style={{
                      background: "transparent",
                      color: "#0d9488",
                      border: "2px solid #0d9488",
                      borderRadius: "8px",
                      padding: "1rem 2rem",
                      fontWeight: "600",
                      cursor: "pointer",
                      fontSize: "1rem",
                      width: "100%",
                    }}
                  >
                    Add to Wishlist
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HotelDetails;