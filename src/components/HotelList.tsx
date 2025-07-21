"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";

const HotelList: React.FC = () => {
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

  return (
    <section
      style={{
        padding: "4rem 2rem",
        maxWidth: "1200px",
        margin: "0 auto",
      }}
    >
      <div
        style={{
          textAlign: "center",
          marginBottom: "3rem",
        }}
      >
        <h2
          style={{
            fontSize: "2.5rem",
            fontWeight: "700",
            color: "#333",
            marginBottom: "1rem",
          }}
        >
          Featured Hotels
        </h2>
        <p
          style={{
            fontSize: "1.2rem",
            color: "#666",
            maxWidth: "600px",
            margin: "0 auto",
          }}
        >
          Discover our handpicked selection of premium hotels worldwide
        </p>
      </div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(380px, 1fr))",
          gap: "2rem",
          marginTop: "2rem",
        }}
      >
        {hotels.map((hotel) => (
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
                e.currentTarget.style.boxShadow = "0 8px 30px rgba(0,0,0,0.15)";
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow = "0 4px 20px rgba(0,0,0,0.1)";
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
                    background: "#0d9488",
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
                          color: "#0d9488",
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
                      (e.currentTarget.style.background = "#0f766e")
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
        ))}
      </div>
    </section>
  );
};

export default HotelList;
