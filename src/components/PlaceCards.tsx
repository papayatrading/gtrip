"use client";
import React from "react";
import Image from "next/image";

const PlaceCards: React.FC = () => {
  const places = [
    {
      id: 1,
      name: "Paris, France",
      description: "The City of Light with iconic landmarks",
      image: "/images/hero1.webp",
      price: "From $120/night",
      rating: 4.8,
      properties: "2,847 properties",
    },
    {
      id: 2,
      name: "Tokyo, Japan",
      description: "Modern metropolis meets traditional culture",
      image: "/images/hero2.webp",
      price: "From $95/night",
      rating: 4.7,
      properties: "1,923 properties",
    },
    {
      id: 3,
      name: "New York, USA",
      description: "The city that never sleeps",
      image: "/images/hero1.webp",
      price: "From $180/night",
      rating: 4.6,
      properties: "3,156 properties",
    },
    {
      id: 4,
      name: "London, UK",
      description: "Historic charm with modern attractions",
      image: "/images/hero2.webp",
      price: "From $140/night",
      rating: 4.7,
      properties: "2,234 properties",
    },
    {
      id: 5,
      name: "Barcelona, Spain",
      description: "Mediterranean coast meets stunning architecture",
      image: "/images/hero1.webp",
      price: "From $85/night",
      rating: 4.8,
      properties: "1,678 properties",
    },
    {
      id: 6,
      name: "Bali, Indonesia",
      description: "Tropical paradise with rich culture",
      image: "/images/hero2.webp",
      price: "From $65/night",
      rating: 4.9,
      properties: "987 properties",
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
          Popular Destinations
        </h2>
        <p
          style={{
            fontSize: "1.2rem",
            color: "#666",
            maxWidth: "600px",
            margin: "0 auto",
          }}
        >
          Discover amazing places around the world with unbeatable prices
        </p>
      </div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(350px, 1fr))",
          gap: "2rem",
          marginTop: "2rem",
        }}
      >
        {places.map((place) => (
          <div
            key={place.id}
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
                height: "200px",
                overflow: "hidden",
              }}
            >
              <Image
                src={place.image}
                alt={place.name}
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
                ★ {place.rating}
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
                {place.name}
              </h3>

              <p
                style={{
                  color: "#666",
                  fontSize: "1rem",
                  marginBottom: "1rem",
                  lineHeight: "1.5",
                }}
              >
                {place.description}
              </p>

              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  marginTop: "1rem",
                }}
              >
                <div>
                  <p
                    style={{
                      fontSize: "1.1rem",
                      fontWeight: "600",
                      color: "#0d9488",
                      margin: "0",
                    }}
                  >
                    {place.price}
                  </p>
                  <p
                    style={{
                      fontSize: "0.9rem",
                      color: "#999",
                      margin: "0.25rem 0 0 0",
                    }}
                  >
                    {place.properties}
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
                  Explore
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PlaceCards;
