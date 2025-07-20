"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import Footer from "../../../components/Footer";

interface WalkingTourDetailsPageProps {
  params: Promise<{ id: string }>;
}

const WalkingTourDetailsPage: React.FC<WalkingTourDetailsPageProps> = async ({
  params,
}) => {
  const { id } = await params;
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
      longDescription:
        "Embark on a delightful family-friendly walking adventure through the charming streets of Barcelona. This carefully designed tour includes interactive games for children, educational storytelling, and plenty of photo opportunities at iconic landmarks. Our experienced guides know how to keep both kids and adults engaged while exploring the city's rich history and culture. The route is specifically chosen to be safe and manageable for families with children of all ages.",
      included: [
        "Professional family guide",
        "Interactive activity booklets",
        "Local snack sampling",
        "Photo assistance",
        "Safety equipment for children",
      ],
      schedule: [
        "10:00 AM - Meet at Gothic Quarter",
        "10:30 AM - Interactive history games",
        "11:30 AM - Local market visit",
        "12:30 PM - Snack break in park",
        "1:00 PM - Tour concludes",
      ],
      requirements: [
        "Suitable for all ages",
        "Comfortable walking shoes",
        "Weather-appropriate clothing",
      ],
      meetingPoint:
        "Barcelona Gothic Quarter, Plaça de la Seu, 08002 Barcelona, Spain",
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
      longDescription:
        "Master the art of urban navigation while exploring Prague's most enchanting hidden corners. This unique walking tour combines practical navigation skills with the discovery of secret courtyards, hidden gardens, and local favorite spots that most tourists never find. Learn to read city maps like a local, understand Prague's layout, and discover navigation techniques that will serve you well in any city you visit.",
      included: [
        "Navigation guidebook",
        "City map and compass",
        "Expert local guide",
        "Access to hidden locations",
        "Navigation skills certificate",
      ],
      schedule: [
        "2:00 PM - Meet at Old Town Square",
        "2:15 PM - Basic navigation lesson",
        "3:00 PM - Hidden courtyard exploration",
        "3:45 PM - Secret garden visit",
        "4:30 PM - Tour ends with skills recap",
      ],
      requirements: [
        "Basic English proficiency",
        "Comfortable walking shoes",
        "Interest in learning new skills",
      ],
      meetingPoint:
        "Old Town Square, Astronomical Clock, Prague 1, Czech Republic",
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
      longDescription:
        "Perfect for budget-conscious travelers, this comprehensive walking tour reveals Amsterdam's best-kept secrets for backpackers. Discover affordable eateries, free attractions, budget accommodation tips, and money-saving strategies. Learn how to experience the city like a local without breaking the bank. Our guide shares insider knowledge about free museums, happy hour spots, and hidden gems that only experienced backpackers know about.",
      included: [
        "Backpacker guidebook",
        "Discount card for local spots",
        "Budget travel tips sheet",
        "Free sample tastings",
        "Hostel recommendations",
      ],
      schedule: [
        "11:00 AM - Meet at Central Station",
        "11:30 AM - Free attractions tour",
        "1:00 PM - Budget lunch spots",
        "2:30 PM - Local markets exploration",
        "3:00 PM - Money-saving tips session",
      ],
      requirements: [
        "Backpacking experience helpful",
        "Comfortable walking shoes",
        "Open mind for budget travel",
      ],
      meetingPoint:
        "Amsterdam Central Station, Main Entrance, 1012 AB Amsterdam, Netherlands",
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
      longDescription:
        "Step back in time as you walk through Rome's most historically significant streets and alleyways. This immersive tour combines archaeological insights with captivating storytelling, bringing ancient Rome to life. Explore hidden archaeological sites, ancient Roman roads, and discover layers of history beneath your feet. Our expert historian guides provide in-depth commentary about Roman civilization, architecture, and daily life in the eternal city.",
      included: [
        "Expert historian guide",
        "Archaeological site access",
        "Historical timeline booklet",
        "Ancient map reproduction",
        "Audio headsets for clear hearing",
      ],
      schedule: [
        "9:00 AM - Meet at Roman Forum",
        "9:30 AM - Ancient road exploration",
        "11:00 AM - Hidden archaeological sites",
        "12:00 PM - Historical storytelling session",
        "12:30 PM - Tour concludes near Colosseum",
      ],
      requirements: [
        "Interest in ancient history",
        "Moderate walking ability",
        "Sun protection recommended",
      ],
      meetingPoint:
        "Roman Forum Main Entrance, Via della Salara Vecchia, 5/6, 00186 Roma RM, Italy",
    },
    {
      id: 5,
      name: "Group Discovery Experience",
      location: "Paris, France",
      image: "/walkingtour/group-friends-searching-location-map.webp",
      price: 40,
      originalPrice: 55,
      duration: "3 hours",
      category: "Group",
      rating: 4.5,
      reviews: 398,
      highlights: [
        "Team Building",
        "Group Activities",
        "Social Experience",
        "Local Insights",
      ],
      description:
        "Perfect group walking tour with team activities and social exploration of Paris",
      longDescription:
        "Designed specifically for groups of friends, colleagues, or travel companions, this interactive walking tour of Paris combines sightseeing with team-building activities. Participate in group challenges, collaborative photo missions, and social games while exploring iconic Parisian neighborhoods. This tour encourages group bonding while discovering the city's culture, cuisine, and hidden gems through fun, engaging activities.",
      included: [
        "Group activity coordinator",
        "Team challenge materials",
        "Group photo session",
        "Local food tastings",
        "Souvenir group map",
      ],
      schedule: [
        "2:00 PM - Meet at Eiffel Tower",
        "2:30 PM - Group icebreaker activities",
        "3:30 PM - Collaborative city exploration",
        "4:30 PM - Team photo challenges",
        "5:00 PM - Celebration at local café",
      ],
      requirements: [
        "Minimum 4 people per group",
        "Enthusiastic participation",
        "Basic French phrases helpful",
      ],
      meetingPoint: "Eiffel Tower, Champ de Mars, 75007 Paris, France",
    },
    {
      id: 6,
      name: "Welcome City Introduction",
      location: "Vienna, Austria",
      image:
        "/walkingtour/lateral-view-car-dealer-welcoming-lovely-couple.webp",
      price: 30,
      originalPrice: 45,
      duration: "2 hours",
      category: "Introduction",
      rating: 4.4,
      reviews: 234,
      highlights: [
        "City Overview",
        "Welcome Package",
        "Orientation",
        "Basic Info",
      ],
      description:
        "Perfect introduction to Vienna with welcome orientation and city overview",
      longDescription:
        "Ideal for first-time visitors to Vienna, this welcoming orientation tour provides essential city knowledge and practical information. Get oriented with the city layout, learn about public transportation, discover where to find the best coffee houses, and receive insider tips for making the most of your Vienna stay. This gentle introduction sets you up for success in exploring Austria's beautiful capital city.",
      included: [
        "Welcome information package",
        "City orientation map",
        "Public transport guide",
        "Restaurant recommendations",
        "Emergency contact information",
      ],
      schedule: [
        "10:00 AM - Meet at St. Stephen's Cathedral",
        "10:15 AM - City layout orientation",
        "11:00 AM - Transportation overview",
        "11:30 AM - Local tips and recommendations",
        "12:00 PM - Q&A session",
      ],
      requirements: [
        "First-time visitors preferred",
        "Basic German phrases helpful",
        "Comfortable walking shoes",
      ],
      meetingPoint:
        "St. Stephen's Cathedral, Stephansplatz 3, 1010 Vienna, Austria",
    },
    {
      id: 7,
      name: "Photography Walking Tour",
      location: "Lisbon, Portugal",
      image: "/walkingtour/man-taking-shot-tourists.webp",
      price: 50,
      originalPrice: 70,
      duration: "4 hours",
      category: "Photography",
      rating: 4.9,
      reviews: 567,
      highlights: [
        "Photo Techniques",
        "Best Spots",
        "Professional Tips",
        "Equipment Advice",
      ],
      description:
        "Learn photography while exploring Lisbon's most photogenic locations with expert guidance",
      longDescription:
        "Combine your passion for photography with exploration of Lisbon's most stunning and photogenic locations. Led by a professional photographer, this tour teaches composition techniques, lighting principles, and camera settings while visiting the city's most Instagram-worthy spots. Whether you're using a smartphone or professional camera, you'll learn valuable skills while capturing beautiful memories of Lisbon's colorful neighborhoods, historic architecture, and scenic viewpoints.",
      included: [
        "Professional photography guide",
        "Photography tips handbook",
        "Access to exclusive viewpoints",
        "Photo editing basics session",
        "Digital photo sharing",
      ],
      schedule: [
        "8:00 AM - Meet at Miradouro da Senhora do Monte",
        "8:30 AM - Golden hour photography",
        "10:00 AM - Historic neighborhoods",
        "11:30 AM - Architecture photography",
        "12:00 PM - Photo review and tips",
      ],
      requirements: [
        "Camera or smartphone required",
        "Basic photography interest",
        "Comfortable walking shoes",
      ],
      meetingPoint:
        "Miradouro da Senhora do Monte, Largo Monte, 1170-253 Lisboa, Portugal",
    },
  ];

  const tour = walkingTours.find((t) => t.id === parseInt(id));

  if (!tour) {
    return (
      <div style={{ backgroundColor: "#f8f9fa", minHeight: "100vh" }}>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            minHeight: "60vh",
            textAlign: "center",
          }}
        >
          <h1 style={{ fontSize: "2rem", color: "#333", marginBottom: "1rem" }}>
            Walking Tour Not Found
          </h1>
          <p style={{ color: "#666", marginBottom: "2rem" }}>
            The walking tour you're looking for doesn't exist.
          </p>
          <Link
            href="/walkingtour"
            style={{
              background: "#FF0000",
              color: "#fff",
              textDecoration: "none",
              padding: "1rem 2rem",
              borderRadius: "8px",
              fontWeight: "600",
            }}
          >
            Back to Walking Tours
          </Link>
        </div>
        <Footer />
      </div>
    );
  }

  const getCategoryColor = (category: string) => {
    switch (category) {
      case "Family":
        return "#28a745";
      case "Explorer":
        return "#17a2b8";
      case "Adventure":
        return "#fd7e14";
      case "Historic":
        return "#6f42c1";
      case "Group":
        return "#20c997";
      case "Introduction":
        return "#6c757d";
      case "Photography":
        return "#e83e8c";
      default:
        return "#6c757d";
    }
  };

  return (
    <div style={{ backgroundColor: "#f8f9fa", minHeight: "100vh" }}>
      <div style={{ position: "relative", height: "60vh", overflow: "hidden" }}>
        <Image
          src={tour.image}
          alt={tour.name}
          fill
          style={{ objectFit: "cover" }}
        />
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background:
              "linear-gradient(to bottom, rgba(255,0,0,0.3), rgba(220,20,60,0.6))",
            display: "flex",
            alignItems: "flex-end",
            padding: "3rem 2rem",
          }}
        >
          <div style={{ maxWidth: "1200px", margin: "0 auto", width: "100%" }}>
            <div style={{ marginBottom: "1rem" }}>
              <Link
                href="/walkingtour"
                style={{
                  color: "#fff",
                  textDecoration: "none",
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "0.5rem",
                  padding: "0.5rem 1rem",
                  background: "rgba(255,255,255,0.2)",
                  borderRadius: "20px",
                  fontSize: "0.9rem",
                }}
              >
                ← Back to Walking Tours
              </Link>
            </div>
            <h1
              style={{
                color: "#fff",
                fontSize: "3.5rem",
                fontWeight: "700",
                marginBottom: "1rem",
                textShadow: "0 2px 4px rgba(0,0,0,0.5)",
              }}
            >
              {tour.name}
            </h1>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "2rem",
                flexWrap: "wrap",
              }}
            >
              <div
                style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}
              >
                <span style={{ color: "#fff", fontSize: "1.1rem" }}>📍</span>
                <span style={{ color: "#fff", fontSize: "1.1rem" }}>
                  {tour.location}
                </span>
              </div>
              <div
                style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}
              >
                <span style={{ color: "#fff", fontSize: "1.1rem" }}>⭐</span>
                <span style={{ color: "#fff", fontSize: "1.1rem" }}>
                  {tour.rating} ({tour.reviews} reviews)
                </span>
              </div>
              <div
                style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}
              >
                <span style={{ color: "#fff", fontSize: "1.1rem" }}>⏱️</span>
                <span style={{ color: "#fff", fontSize: "1.1rem" }}>
                  {tour.duration}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "3rem 2rem",
        }}
      >
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "2fr 1fr",
            gap: "3rem",
          }}
        >
          <div>
            <div
              style={{
                background: "#fff",
                borderRadius: "12px",
                padding: "2rem",
                marginBottom: "2rem",
                boxShadow: "0 4px 20px rgba(0,0,0,0.1)",
              }}
            >
              <h2
                style={{
                  fontSize: "1.8rem",
                  fontWeight: "600",
                  color: "#333",
                  marginBottom: "1rem",
                }}
              >
                Tour Overview
              </h2>
              <p
                style={{
                  fontSize: "1.1rem",
                  lineHeight: "1.7",
                  color: "#555",
                  marginBottom: "2rem",
                }}
              >
                {tour.longDescription}
              </p>

              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "1rem",
                  marginBottom: "2rem",
                }}
              >
                <div
                  style={{
                    background: getCategoryColor(tour.category),
                    color: "#fff",
                    padding: "0.5rem 1rem",
                    borderRadius: "20px",
                    fontSize: "0.9rem",
                    fontWeight: "600",
                  }}
                >
                  {tour.category}
                </div>
                <div
                  style={{
                    background: "#f8f9fa",
                    color: "#333",
                    padding: "0.5rem 1rem",
                    borderRadius: "20px",
                    fontSize: "0.9rem",
                    fontWeight: "500",
                  }}
                >
                  {tour.duration}
                </div>
              </div>

              <h3
                style={{
                  fontSize: "1.4rem",
                  fontWeight: "600",
                  color: "#333",
                  marginBottom: "1rem",
                }}
              >
                Tour Highlights
              </h3>
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
                  gap: "1rem",
                }}
              >
                {tour.highlights.map((highlight, index) => (
                  <div
                    key={index}
                    style={{
                      background: "#f8f9fa",
                      padding: "1rem",
                      borderRadius: "8px",
                      border: "1px solid #e0e0e0",
                    }}
                  >
                    <span
                      style={{
                        fontSize: "1rem",
                        color: "#333",
                        fontWeight: "500",
                      }}
                    >
                      ✓ {highlight}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div
              style={{
                background: "#fff",
                borderRadius: "12px",
                padding: "2rem",
                marginBottom: "2rem",
                boxShadow: "0 4px 20px rgba(0,0,0,0.1)",
              }}
            >
              <h3
                style={{
                  fontSize: "1.4rem",
                  fontWeight: "600",
                  color: "#333",
                  marginBottom: "1rem",
                }}
              >
                What's Included
              </h3>
              <ul style={{ listStyle: "none", padding: 0 }}>
                {tour.included.map((item, index) => (
                  <li
                    key={index}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "0.5rem",
                      marginBottom: "0.5rem",
                      fontSize: "1rem",
                      color: "#555",
                    }}
                  >
                    <span style={{ color: "#28a745", fontWeight: "bold" }}>
                      ✓
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div
              style={{
                background: "#fff",
                borderRadius: "12px",
                padding: "2rem",
                marginBottom: "2rem",
                boxShadow: "0 4px 20px rgba(0,0,0,0.1)",
              }}
            >
              <h3
                style={{
                  fontSize: "1.4rem",
                  fontWeight: "600",
                  color: "#333",
                  marginBottom: "1rem",
                }}
              >
                Tour Schedule
              </h3>
              <div>
                {tour.schedule.map((item, index) => (
                  <div
                    key={index}
                    style={{
                      display: "flex",
                      alignItems: "flex-start",
                      gap: "1rem",
                      marginBottom: "1rem",
                      padding: "1rem",
                      background: "#f8f9fa",
                      borderRadius: "8px",
                    }}
                  >
                    <div
                      style={{
                        width: "30px",
                        height: "30px",
                        borderRadius: "50%",
                        background: "#FF0000",
                        color: "#fff",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        fontSize: "0.8rem",
                        fontWeight: "600",
                        flexShrink: 0,
                      }}
                    >
                      {index + 1}
                    </div>
                    <span style={{ fontSize: "1rem", color: "#555" }}>
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div
              style={{
                background: "#fff",
                borderRadius: "12px",
                padding: "2rem",
                boxShadow: "0 4px 20px rgba(0,0,0,0.1)",
              }}
            >
              <h3
                style={{
                  fontSize: "1.4rem",
                  fontWeight: "600",
                  color: "#333",
                  marginBottom: "1rem",
                }}
              >
                Requirements & Meeting Point
              </h3>
              <div style={{ marginBottom: "2rem" }}>
                <h4
                  style={{
                    fontSize: "1.1rem",
                    fontWeight: "600",
                    color: "#333",
                    marginBottom: "0.5rem",
                  }}
                >
                  Requirements:
                </h4>
                <ul style={{ listStyle: "none", padding: 0 }}>
                  {tour.requirements.map((req, index) => (
                    <li
                      key={index}
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "0.5rem",
                        marginBottom: "0.5rem",
                        fontSize: "1rem",
                        color: "#555",
                      }}
                    >
                      <span style={{ color: "#ffc107" }}>!</span>
                      {req}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h4
                  style={{
                    fontSize: "1.1rem",
                    fontWeight: "600",
                    color: "#333",
                    marginBottom: "0.5rem",
                  }}
                >
                  Meeting Point:
                </h4>
                <p
                  style={{
                    fontSize: "1rem",
                    color: "#555",
                    lineHeight: "1.5",
                  }}
                >
                  📍 {tour.meetingPoint}
                </p>
              </div>
            </div>
          </div>

          <div>
            <div
              style={{
                background: "#fff",
                borderRadius: "12px",
                padding: "2rem",
                marginBottom: "2rem",
                boxShadow: "0 4px 20px rgba(0,0,0,0.1)",
                position: "sticky",
                top: "2rem",
              }}
            >
              <div style={{ marginBottom: "2rem" }}>
                <div
                  style={{
                    display: "flex",
                    alignItems: "baseline",
                    gap: "1rem",
                    marginBottom: "1rem",
                  }}
                >
                  <span
                    style={{
                      fontSize: "2rem",
                      fontWeight: "700",
                      color: "#FF0000",
                    }}
                  >
                    ${tour.price}
                  </span>
                  <span
                    style={{
                      fontSize: "1.2rem",
                      color: "#999",
                      textDecoration: "line-through",
                    }}
                  >
                    ${tour.originalPrice}
                  </span>
                </div>
                <p
                  style={{
                    fontSize: "0.9rem",
                    color: "#666",
                    margin: 0,
                  }}
                >
                  per person
                </p>
              </div>

              <div style={{ marginBottom: "2rem" }}>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "0.5rem",
                    marginBottom: "1rem",
                  }}
                >
                  <span style={{ fontSize: "1.2rem" }}>⭐</span>
                  <span style={{ fontSize: "1.1rem", fontWeight: "600" }}>
                    {tour.rating}
                  </span>
                  <span style={{ fontSize: "0.9rem", color: "#666" }}>
                    ({tour.reviews} reviews)
                  </span>
                </div>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "0.5rem",
                    marginBottom: "1rem",
                  }}
                >
                  <span style={{ fontSize: "1.2rem" }}>⏱️</span>
                  <span style={{ fontSize: "1rem" }}>{tour.duration}</span>
                </div>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "0.5rem",
                  }}
                >
                  <span style={{ fontSize: "1.2rem" }}>👥</span>
                  <span style={{ fontSize: "1rem" }}>{tour.category} Tour</span>
                </div>
              </div>

              <button
                style={{
                  width: "100%",
                  background: "#FF0000",
                  color: "#fff",
                  border: "none",
                  borderRadius: "8px",
                  padding: "1rem",
                  fontSize: "1.1rem",
                  fontWeight: "600",
                  cursor: "pointer",
                  marginBottom: "1rem",
                  transition: "background 0.2s ease",
                }}
                onMouseOver={(e) =>
                  (e.currentTarget.style.background = "#DC143C")
                }
                onMouseOut={(e) =>
                  (e.currentTarget.style.background = "#FF0000")
                }
              >
                Book This Tour
              </button>

              <button
                style={{
                  width: "100%",
                  background: "transparent",
                  color: "#FF0000",
                  border: "2px solid #FF0000",
                  borderRadius: "8px",
                  padding: "1rem",
                  fontSize: "1rem",
                  fontWeight: "600",
                  cursor: "pointer",
                  transition: "all 0.2s ease",
                }}
                onMouseOver={(e) => {
                  e.currentTarget.style.background = "#FF0000";
                  e.currentTarget.style.color = "#fff";
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.background = "transparent";
                  e.currentTarget.style.color = "#FF0000";
                }}
              >
                Add to Wishlist
              </button>

              <div
                style={{
                  marginTop: "2rem",
                  padding: "1rem",
                  background: "#f8f9fa",
                  borderRadius: "8px",
                }}
              >
                <h4
                  style={{
                    fontSize: "1rem",
                    fontWeight: "600",
                    color: "#333",
                    marginBottom: "0.5rem",
                  }}
                >
                  Free Cancellation
                </h4>
                <p
                  style={{
                    fontSize: "0.9rem",
                    color: "#666",
                    margin: 0,
                  }}
                >
                  Cancel up to 24 hours before the tour for a full refund
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default WalkingTourDetailsPage;
