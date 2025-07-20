"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import AvailabilitySearch from "../../components/AvailabilitySearch";

const ActivitiesPage: React.FC = () => {
  const activities = [
    {
      id: 1,
      name: "White Water Rafting",
      location: "Colorado Rapids",
      image: "/activities/nature-will-offer-some-best-adventures-shot-group-young-male-friends-white-water-rafting.jpg",
      price: 89,
      duration: "4 hours",
      difficulty: "Moderate",
      rating: 4.8,
      reviews: 342,
      description: "Experience the thrill of navigating rushing rapids with professional guides"
    },
    {
      id: 2,
      name: "Scuba Diving",
      location: "Great Barrier Reef",
      image: "/activities/underwater-portrait-scuba-diver-exploring-sea-world.jpg",
      price: 155,
      duration: "6 hours",
      difficulty: "Beginner",
      rating: 4.9,
      reviews: 789,
      description: "Explore the underwater world and discover marine life in crystal clear waters"
    },
    {
      id: 3,
      name: "Skydiving",
      location: "Nevada Desert",
      image: "/activities/people-skydiving-landscape.jpg",
      price: 299,
      duration: "3 hours",
      difficulty: "Advanced",
      rating: 4.7,
      reviews: 156,
      description: "Feel the ultimate adrenaline rush with a tandem skydive from 15,000 feet"
    },
    {
      id: 4,
      name: "Mountain Skiing",
      location: "Swiss Alps",
      image: "/activities/low-angle-view-people-skiing-snow.jpg",
      price: 125,
      duration: "Full day",
      difficulty: "Intermediate",
      rating: 4.6,
      reviews: 523,
      description: "Ski down pristine slopes with breathtaking mountain views"
    },
    {
      id: 5,
      name: "ATV Sand Dunes",
      location: "Dubai Desert",
      image: "/activities/teen-riding-atv-sand-dunes-making-turn-sand.jpg",
      price: 75,
      duration: "2 hours",
      difficulty: "Easy",
      rating: 4.5,
      reviews: 287,
      description: "Race through golden sand dunes on powerful all-terrain vehicles"
    },
    {
      id: 6,
      name: "Rock Climbing",
      location: "Yosemite Valley",
      image: "/activities/beautiful-top-angle-shot-people-doing-extreme-sports-river-ina-stony-mountain.jpg",
      price: 110,
      duration: "5 hours",
      difficulty: "Intermediate",
      rating: 4.7,
      reviews: 198,
      description: "Challenge yourself on world-class climbing routes with expert instruction"
    }
  ];

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'Easy': return '#28a745';
      case 'Beginner': return '#28a745';
      case 'Moderate': return '#ffc107';
      case 'Intermediate': return '#fd7e14';
      case 'Advanced': return '#dc3545';
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
          Entertainment, excitement & more
        </h1>
        <p style={{
          fontSize: "1.3rem",
          maxWidth: "600px",
          margin: "0 auto",
          opacity: "0.95"
        }}>
          Discover thrilling experiences and unforgettable adventures around the world
        </p>
      </div>

      <div style={{
        maxWidth: "1200px",
        margin: "0 auto",
        padding: "2rem"
      }}>
        <AvailabilitySearch destinationLabel="Destination:" showRoomCount={false} showDates={false} />
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
          {activities.map((activity) => (
            <Link
              key={activity.id}
              href={`/activities/${activity.id}`}
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
                  src={activity.image}
                  alt={activity.name}
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
                  ★ {activity.rating}
                </div>
                <div style={{
                  position: "absolute",
                  top: "1rem",
                  left: "1rem",
                  background: getDifficultyColor(activity.difficulty),
                  color: "#fff",
                  padding: "0.4rem 0.8rem",
                  borderRadius: "15px",
                  fontSize: "0.8rem",
                  fontWeight: "600"
                }}>
                  {activity.difficulty}
                </div>
                <div style={{
                  position: "absolute",
                  bottom: "1rem",
                  left: "1rem",
                  background: "rgba(0,0,0,0.7)",
                  color: "#fff",
                  padding: "0.4rem 0.8rem",
                  borderRadius: "15px",
                  fontSize: "0.8rem",
                  fontWeight: "500"
                }}>
                  {activity.duration}
                </div>
              </div>
              
              <div style={{ padding: "1.5rem" }}>
                <h3 style={{
                  fontSize: "1.4rem",
                  fontWeight: "600",
                  color: "#333",
                  marginBottom: "0.5rem"
                }}>
                  {activity.name}
                </h3>
                
                <p style={{
                  color: "#999",
                  fontSize: "0.95rem",
                  marginBottom: "0.5rem"
                }}>
                  📍 {activity.location}
                </p>
                
                <p style={{
                  color: "#666",
                  fontSize: "0.95rem",
                  marginBottom: "1rem",
                  lineHeight: "1.5"
                }}>
                  {activity.description}
                </p>
                
                <div style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  marginTop: "1rem"
                }}>
                  <div>
                    <div style={{
                      fontSize: "1.4rem",
                      fontWeight: "700",
                      color: "#FF385C",
                      marginBottom: "0.25rem"
                    }}>
                      ${activity.price}
                    </div>
                    <p style={{
                      fontSize: "0.85rem",
                      color: "#999",
                      margin: 0
                    }}>
                      {activity.reviews} reviews
                    </p>
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
                    Book Now
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

export default ActivitiesPage;