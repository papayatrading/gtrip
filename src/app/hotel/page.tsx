"use client";
import React, { useState, useMemo } from "react";
import Image from "next/image";
import Link from "next/link";
import Footer from "../../components/Footer";

const HotelsPage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [sortBy, setSortBy] = useState("name");

  const hotels = [
    {
      id: 1,
      name: "Grand Palace Hotel Paris",
      location: "Paris, France",
      image: "/hotels/beautiful-luxury-outdoor-swimming-pool-hotel-resort.webp",
      price: 245,
      originalPrice: 320,
      rating: 4.8,
      reviews: 1247,
      amenities: ["Free WiFi", "Pool", "Spa", "Restaurant"],
      description:
        "Luxury hotel in the heart of Paris with stunning city views",
    },
    {
      id: 2,
      name: "Tokyo Bay Resort",
      location: "Tokyo, Japan",
      image: "/hotels/rooftop-pool-showcasing-panoramic-views.webp",
      price: 189,
      originalPrice: 250,
      rating: 4.7,
      reviews: 892,
      amenities: ["Free WiFi", "Gym", "Business Center", "Bar"],
      description: "Modern hotel with panoramic views of Tokyo Bay",
    },
    {
      id: 3,
      name: "Manhattan Plaza Hotel",
      location: "New York, USA",
      image:
        "/hotels/detailed-view-hotels-restaurant-with-fine-dining-setups-service.webp",
      price: 298,
      originalPrice: 380,
      rating: 4.6,
      reviews: 2156,
      amenities: ["Free WiFi", "Concierge", "Restaurant", "Valet"],
      description: "Iconic hotel in the heart of Manhattan",
    },
    {
      id: 4,
      name: "London Bridge Suites",
      location: "London, UK",
      image:
        "/hotels/popular-resort-amara-dolce-vita-luxury-hotel-with-pools-water-parks-recreational-area-along-sea-coast-turkey-sunset-tekirova-kemer.webp",
      price: 210,
      originalPrice: 275,
      rating: 4.7,
      reviews: 1598,
      amenities: ["Free WiFi", "Tea Service", "Gym", "Restaurant"],
      description: "Elegant suites near London's famous landmarks",
    },
    {
      id: 5,
      name: "Barcelona Beach Resort",
      location: "Barcelona, Spain",
      image: "/hotels/rear-view-man-standing-sea-against-sky.webp",
      price: 156,
      originalPrice: 195,
      rating: 4.8,
      reviews: 967,
      amenities: ["Free WiFi", "Beach Access", "Pool", "Spa"],
      description: "Beachfront resort with Mediterranean charm",
    },
    {
      id: 6,
      name: "Bali Tropical Villa",
      location: "Bali, Indonesia",
      image: "/hotels/beautiful-luxury-outdoor-swimming-pool-hotel-resort.webp",
      price: 89,
      originalPrice: 120,
      rating: 4.9,
      reviews: 743,
      amenities: ["Free WiFi", "Pool", "Spa", "Garden"],
      description: "Peaceful villa surrounded by tropical gardens",
    },
  ];

  const filteredAndSortedHotels = useMemo(() => {
    let filtered = hotels.filter(
      (hotel) =>
        hotel.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        hotel.location.toLowerCase().includes(searchTerm.toLowerCase()) ||
        hotel.description.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return filtered.sort((a, b) => {
      switch (sortBy) {
        case "price":
          return a.price - b.price;
        case "rating":
          return b.rating - a.rating;
        case "name":
        default:
          return a.name.localeCompare(b.name);
      }
    });
  }, [searchTerm, sortBy]);

  return (
    <div style={{ backgroundColor: "#f8f9fa", minHeight: "100vh" }}>
      <div
        style={{
          backgroundImage: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
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
                onFocus={(e) => (e.target.style.borderColor = "#667eea")}
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
                <option value="price">Price</option>
                <option value="rating">Rating</option>
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
            Showing {filteredAndSortedHotels.length} of {hotels.length} hotels
          </div>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(380px, 1fr))",
            gap: "2rem",
          }}
        >
          {filteredAndSortedHotels.map((hotel) => (
            <Link
              key={hotel.id}
              href={`/hotel/${hotel.id}`}
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
                    src={hotel.image}
                    alt={hotel.name}
                    fill
                    style={{ objectFit: "cover" }}
                  />
                  <div
                    style={{
                      position: "absolute",
                      top: "1rem",
                      right: "1rem",
                      background: "#FF385C",
                      color: "#fff",
                      padding: "0.5rem 1rem",
                      borderRadius: "20px",
                      fontSize: "0.9rem",
                      fontWeight: "600",
                    }}
                  >
                    ★ {hotel.rating}
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
                    {hotel.reviews} reviews
                  </div>
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
                    {hotel.name}
                  </h3>

                  <p
                    style={{
                      color: "#999",
                      fontSize: "0.95rem",
                      marginBottom: "0.5rem",
                    }}
                  >
                    📍 {hotel.location}
                  </p>

                  <p
                    style={{
                      color: "#666",
                      fontSize: "0.95rem",
                      marginBottom: "1rem",
                      lineHeight: "1.5",
                    }}
                  >
                    {hotel.description}
                  </p>

                  <div
                    style={{
                      display: "flex",
                      flexWrap: "wrap",
                      gap: "0.5rem",
                      marginBottom: "1rem",
                    }}
                  >
                    {hotel.amenities.map((amenity, index) => (
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
                            color: "#FF385C",
                          }}
                        >
                          ${hotel.price}
                        </span>
                        <span
                          style={{
                            fontSize: "1rem",
                            color: "#999",
                            textDecoration: "line-through",
                          }}
                        >
                          ${hotel.originalPrice}
                        </span>
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
                        background: "#FF385C",
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
                        (e.currentTarget.style.background = "#FF385C")
                      }
                    >
                      View Details
                    </button>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {filteredAndSortedHotels.length === 0 && (
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
            <p style={{ color: "#999" }}>Try adjusting your search criteria</p>
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
                background: "#FF385C",
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
              onMouseOut={(e) => (e.currentTarget.style.background = "#FF385C")}
            >
              Read More Reviews
            </button>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default HotelsPage;
