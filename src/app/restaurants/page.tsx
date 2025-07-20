"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import AvailabilitySearch from "../../components/AvailabilitySearch";

const RestaurantsPage: React.FC = () => {
  const restaurants = [
    {
      id: 1,
      name: "The Grand Dining Room",
      location: "Downtown Manhattan",
      image: "/Restaurants/restaurant-hall-classic-style-with-green-wooden-chairs-curtains.jpg",
      cuisine: "Fine Dining",
      rating: 4.9,
      reviews: 456,
      description: "Elegant dining experience with classic European cuisine and impeccable service"
    },
    {
      id: 2,
      name: "Thai Garden Restaurant",
      location: "Bangkok District", 
      image: "/Restaurants/interior-thai-restaurant.jpg",
      cuisine: "Thai",
      rating: 4.8,
      reviews: 789,
      description: "Authentic Thai flavors in a traditional setting with fresh ingredients"
    },
    {
      id: 3,
      name: "Modern Cafe Bistro",
      location: "Arts Quarter",
      image: "/Restaurants/interior-modern-cafe-where-is-no-people-artificial-lighting.jpg",
      cuisine: "Contemporary",
      rating: 4.6,
      reviews: 342,
      description: "Contemporary dining with artisanal coffee and innovative dishes"
    },
    {
      id: 4,
      name: "The Brick House",
      location: "Historic District",
      image: "/Restaurants/restaurant-hall-with-red-brick-walls-wooden-tables-pipes-ceiling.jpg",
      cuisine: "American",
      rating: 4.7,
      reviews: 523,
      description: "Rustic charm meets modern cuisine in this industrial-style restaurant"
    },
    {
      id: 5,
      name: "Coastal Dining",
      location: "Harbor View",
      image: "/Restaurants/restaurant-hall-with-turquoise-chairs-white-walls-french-windows-curtains.jpg",
      cuisine: "Seafood",
      rating: 4.8,
      reviews: 387,
      description: "Fresh seafood with stunning harbor views and elegant coastal atmosphere"
    },
    {
      id: 6,
      name: "The Happy Table",
      location: "Community Center",
      image: "/Restaurants/happy-waiter-serving-food-group-cheerful-friends-pub.jpg",
      cuisine: "Pub Food",
      rating: 4.5,
      reviews: 298,
      description: "Friendly pub atmosphere with hearty meals and craft beverages"
    },
    {
      id: 7,
      name: "Elegant Evenings",
      location: "Uptown",
      image: "/Restaurants/sunlit-restaurant-table-with-elegant-glassware-decor-warm-cozy-ambiance.jpg",
      cuisine: "French",
      rating: 4.9,
      reviews: 234,
      description: "Sophisticated French cuisine with an extensive wine selection"
    },
    {
      id: 8,
      name: "Turkish Delights",
      location: "Cultural District",
      image: "/Restaurants/traditional-turkish-cuisine.jpg",
      cuisine: "Turkish",
      rating: 4.7,
      reviews: 445,
      description: "Traditional Turkish dishes with authentic spices and warm hospitality"
    },
    {
      id: 9,
      name: "The Classic Table",
      location: "City Center",
      image: "/Restaurants/dining-table-with-chairs-tableware.jpg",
      cuisine: "Continental",
      rating: 4.6,
      reviews: 356,
      description: "Classic continental cuisine in an intimate dining setting"
    },
    {
      id: 10,
      name: "Fine Dining Experience",
      location: "Hotel District",
      image: "/Restaurants/restaurant-interior.jpg",
      cuisine: "Gourmet",
      rating: 4.9,
      reviews: 189,
      description: "Premium gourmet experience with chef's tasting menu and wine pairings"
    }
  ];

  const getCuisineColor = (cuisine: string) => {
    switch (cuisine) {
      case 'Fine Dining': return '#8B4513';
      case 'Thai': return '#FF6B35';
      case 'Contemporary': return '#6C5CE7';
      case 'American': return '#2E86AB';
      case 'Seafood': return '#0984E3';
      case 'Pub Food': return '#00B894';
      case 'French': return '#E17055';
      case 'Turkish': return '#E84393';
      case 'Continental': return '#A29BFE';
      case 'Gourmet': return '#FDCB6E';
      default: return '#6c757d';
    }
  };

  return (
    <div style={{ backgroundColor: "#f8f9fa", minHeight: "100vh" }}>
      <Navbar />
      
      <div style={{
        background: "#FF385C",
        color: "#fff",
        padding: "4rem 2rem 2rem 2rem",
        textAlign: "center"
      }}>
        <h1 style={{
          fontSize: "3rem",
          fontWeight: "700",
          marginBottom: "1rem"
        }}>
          Restaurants & Dining
        </h1>
        <p style={{
          fontSize: "1.3rem",
          maxWidth: "600px",
          margin: "0 auto",
          opacity: "0.95"
        }}>
          Discover exceptional dining experiences and culinary delights around the world
        </p>
      </div>

      <div style={{
        maxWidth: "1200px",
        margin: "0 auto",
        padding: "2rem"
      }}>
        <AvailabilitySearch 
          destinationLabel="Restaurant or Destination:" 
          showRoomCount={false} 
          showDates={false} 
          showGuests={false}
          size="small"
        />
      </div>

      <div style={{
        maxWidth: "1200px",
        margin: "0 auto",
        padding: "4rem 2rem"
      }}>
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(380px, 1fr))",
          gap: "2rem"
        }}>
          {restaurants.map((restaurant) => (
            <Link
              key={restaurant.id}
              href={`/restaurants/${restaurant.id}`}
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
                  border: "1px solid #e0e0e0"
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
              <div style={{ position: "relative", height: "240px", overflow: "hidden" }}>
                <Image
                  src={restaurant.image}
                  alt={restaurant.name}
                  fill
                  style={{ objectFit: "cover" }}
                />
                <div style={{
                  position: "absolute",
                  top: "1rem",
                  right: "1rem",
                  background: "#FF385C",
                  color: "#fff",
                  padding: "0.5rem 1rem",
                  borderRadius: "20px",
                  fontSize: "0.9rem",
                  fontWeight: "600"
                }}>
                  ★ {restaurant.rating}
                </div>
                <div style={{
                  position: "absolute",
                  top: "1rem",
                  left: "1rem",
                  background: getCuisineColor(restaurant.cuisine),
                  color: "#fff",
                  padding: "0.4rem 0.8rem",
                  borderRadius: "15px",
                  fontSize: "0.8rem",
                  fontWeight: "600"
                }}>
                  {restaurant.cuisine}
                </div>
              </div>
              
              <div style={{ padding: "1.5rem" }}>
                <h3 style={{
                  fontSize: "1.4rem",
                  fontWeight: "600",
                  color: "#333",
                  marginBottom: "0.5rem"
                }}>
                  {restaurant.name}
                </h3>
                
                <p style={{
                  color: "#999",
                  fontSize: "0.95rem",
                  marginBottom: "0.5rem"
                }}>
                  📍 {restaurant.location}
                </p>
                
                <p style={{
                  color: "#666",
                  fontSize: "0.95rem",
                  marginBottom: "1rem",
                  lineHeight: "1.5"
                }}>
                  {restaurant.description}
                </p>
                
                <div style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  marginTop: "1rem"
                }}>
                  <div style={{
                    fontSize: "1rem",
                    color: "#666",
                    display: "flex",
                    alignItems: "center",
                    gap: "0.5rem"
                  }}>
                    <span style={{ color: "#FF385C" }}>★</span>
                    <span style={{ fontWeight: "600" }}>{restaurant.rating}</span>
                    <span>({restaurant.reviews} reviews)</span>
                  </div>
                  
                  <button style={{
                    background: "#FF385C",
                    color: "#fff",
                    border: "none",
                    borderRadius: "8px",
                    padding: "0.7rem 1.5rem",
                    fontWeight: "600",
                    cursor: "pointer",
                    fontSize: "0.95rem",
                    transition: "background 0.2s ease"
                  }}
                  onMouseOver={(e) => e.currentTarget.style.background = "#E6315A"}
                  onMouseOut={(e) => e.currentTarget.style.background = "#FF385C"}
                  >
                    View Details
                  </button>
                </div>
              </div>
            </div>
            </Link>
          ))}
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default RestaurantsPage;