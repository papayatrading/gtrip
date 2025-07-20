"use client";
import React, { useState, useMemo } from "react";
import Image from "next/image";
import Link from "next/link";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

const WalkingTourPage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [sortBy, setSortBy] = useState("name");
  
  // Walking tour search states
  const [location, setLocation] = useState("");
  const [selectedDate, setSelectedDate] = useState("");
  const [selectedTime, setSelectedTime] = useState("09:00");
  const [tourType, setTourType] = useState("");
  const [guests, setGuests] = useState("2");

  const walkingTours = [
    {
      id: 1,
      name: "Family Adventure Explorer",
      location: "Barcelona, Spain",
      image: "/walkingtour/family-enjoying-trip-their-holidays.jpg",
      price: 45,
      originalPrice: 60,
      duration: "3 hours",
      category: "Family",
      rating: 4.8,
      reviews: 324,
      highlights: ["Kid-Friendly Routes", "Interactive Games", "Photo Stops", "Local Snacks"],
      description: "Perfect family walking tour with engaging activities and safe routes for all ages"
    },
    {
      id: 2,
      name: "Navigation & Discovery Walk",
      location: "Prague, Czech Republic",
      image: "/walkingtour/friends-searching-direction.jpg",
      price: 35,
      originalPrice: 50,
      duration: "2.5 hours",
      category: "Explorer",
      rating: 4.6,
      reviews: 287,
      highlights: ["Map Reading Skills", "Hidden Gems", "Local Secrets", "Navigation Tips"],
      description: "Learn navigation skills while discovering Prague's hidden treasures and secret spots"
    },
    {
      id: 3,
      name: "Backpacker Adventure Tour",
      location: "Amsterdam, Netherlands",
      image: "/walkingtour/friends-travel-backpacker-adventure-concept.jpg",
      price: 25,
      originalPrice: 40,
      duration: "4 hours",
      category: "Adventure",
      rating: 4.9,
      reviews: 456,
      highlights: ["Budget Travel Tips", "Backpacker Spots", "Local Markets", "Free Activities"],
      description: "Ultimate backpacker guide to Amsterdam with budget-friendly spots and travel hacks"
    },
    {
      id: 4,
      name: "Historic Streets Explorer",
      location: "Rome, Italy",
      image: "/walkingtour/friends-walking-street-with-map.jpg",
      price: 55,
      originalPrice: 75,
      duration: "3.5 hours",
      category: "Historic",
      rating: 4.7,
      reviews: 612,
      highlights: ["Ancient Streets", "Roman History", "Archaeological Sites", "Expert Guide"],
      description: "Walk through Rome's ancient streets with detailed historical insights and expert commentary"
    },
    {
      id: 5,
      name: "Group Discovery Experience",
      location: "Paris, France",
      image: "/walkingtour/group-friends-searching-location-map.jpg",
      price: 40,
      originalPrice: 55,
      duration: "3 hours",
      category: "Group",
      rating: 4.5,
      reviews: 398,
      highlights: ["Team Building", "Group Activities", "Social Experience", "Local Insights"],
      description: "Perfect group walking tour with team activities and social exploration of Paris"
    },
    {
      id: 6,
      name: "Welcome City Introduction",
      location: "Vienna, Austria",
      image: "/walkingtour/lateral-view-car-dealer-welcoming-lovely-couple.jpg",
      price: 30,
      originalPrice: 45,
      duration: "2 hours",
      category: "Introduction",
      rating: 4.4,
      reviews: 234,
      highlights: ["City Overview", "Welcome Package", "Orientation", "Basic Info"],
      description: "Perfect introduction to Vienna with welcome orientation and city overview"
    },
    {
      id: 7,
      name: "Photography Walking Tour",
      location: "Lisbon, Portugal",
      image: "/walkingtour/man-taking-shot-tourists.jpg",
      price: 50,
      originalPrice: 70,
      duration: "4 hours",
      category: "Photography",
      rating: 4.9,
      reviews: 567,
      highlights: ["Photo Techniques", "Best Spots", "Professional Tips", "Equipment Advice"],
      description: "Learn photography while exploring Lisbon's most photogenic locations with expert guidance"
    }
  ];

  const filteredAndSortedTours = useMemo(() => {
    let filtered = walkingTours.filter(tour =>
      tour.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      tour.location.toLowerCase().includes(searchTerm.toLowerCase()) ||
      tour.category.toLowerCase().includes(searchTerm.toLowerCase()) ||
      tour.description.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return filtered.sort((a, b) => {
      switch (sortBy) {
        case "price":
          return a.price - b.price;
        case "rating":
          return b.rating - a.rating;
        case "duration":
          return parseFloat(a.duration) - parseFloat(b.duration);
        case "name":
        default:
          return a.name.localeCompare(b.name);
      }
    });
  }, [searchTerm, sortBy]);

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'Family': return '#28a745';
      case 'Explorer': return '#17a2b8';
      case 'Adventure': return '#fd7e14';
      case 'Historic': return '#6f42c1';
      case 'Group': return '#20c997';
      case 'Introduction': return '#6c757d';
      case 'Photography': return '#e83e8c';
      default: return '#6c757d';
    }
  };

  return (
    <div style={{ backgroundColor: "#f8f9fa", minHeight: "100vh" }}>
      <Navbar />
      
      <div style={{
        background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
        color: "#fff",
        padding: "4rem 2rem 2rem",
        textAlign: "center"
      }}>
        <h1 style={{
          fontSize: "3rem",
          fontWeight: "700",
          marginBottom: "1rem",
          textShadow: "0 2px 4px rgba(0,0,0,0.3)"
        }}>
          Walking Tours & City Exploration
        </h1>
        <p style={{
          fontSize: "1.3rem",
          opacity: "0.9",
          maxWidth: "600px",
          margin: "0 auto"
        }}>
          Discover cities on foot with expert guides and unique local experiences
        </p>
      </div>

      {/* Walking Tour Search Bar */}
      <div style={{
        maxWidth: "1200px",
        margin: "0 auto",
        padding: "2rem"
      }}>
        <div style={{
          background: "#fff",
          borderRadius: "12px",
          padding: "2rem",
          boxShadow: "0 8px 32px rgba(0,0,0,0.15)",
          border: "3px solid #667eea",
          marginBottom: "3rem"
        }}>
          <div style={{
            display: "flex",
            alignItems: "center",
            gap: "1rem",
            marginBottom: "1.5rem"
          }}>
            <div style={{
              width: "24px",
              height: "24px",
              borderRadius: "50%",
              background: "linear-gradient(135deg, #667eea, #764ba2)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "#fff",
              fontSize: "14px",
              fontWeight: "bold"
            }}>🚶</div>
            <h2 style={{
              fontSize: "1.4rem",
              fontWeight: "600",
              color: "#333",
              margin: 0
            }}>Find Your Perfect Walking Tour</h2>
          </div>

          <div style={{
            display: "grid",
            gridTemplateColumns: "2fr 1.5fr 1fr 1fr 120px",
            gap: "12px",
            alignItems: "end"
          }}>
            {/* Location */}
            <div style={{ position: "relative" }}>
              <label style={{
                display: "block",
                fontSize: "0.75rem",
                fontWeight: "600",
                color: "#333",
                marginBottom: "6px",
                textTransform: "uppercase",
                letterSpacing: "0.5px"
              }}>Location</label>
              <div style={{
                position: "relative",
                border: "3px solid #667eea",
                borderRadius: "6px",
                background: "#fff"
              }}>
                <div style={{
                  position: "absolute",
                  left: "14px",
                  top: "50%",
                  transform: "translateY(-50%)",
                  color: "#667eea",
                  fontSize: "18px"
                }}>📍</div>
                <input
                  type="text"
                  placeholder="City, attraction, or tour name..."
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                  style={{
                    width: "100%",
                    padding: "16px 14px 16px 50px",
                    border: "none",
                    outline: "none",
                    fontSize: "14px",
                    borderRadius: "4px"
                  }}
                />
              </div>
            </div>

            {/* Date & Time */}
            <div>
              <label style={{
                display: "block",
                fontSize: "0.75rem",
                fontWeight: "600",
                color: "#333",
                marginBottom: "6px",
                textTransform: "uppercase",
                letterSpacing: "0.5px"
              }}>Date & Time</label>
              <div style={{
                border: "3px solid #667eea",
                borderRadius: "6px",
                background: "#fff",
                display: "flex"
              }}>
                <input
                  type="date"
                  value={selectedDate}
                  onChange={(e) => setSelectedDate(e.target.value)}
                  style={{
                    flex: 1,
                    padding: "16px 12px",
                    border: "none",
                    outline: "none",
                    fontSize: "14px",
                    borderRadius: "4px 0 0 4px"
                  }}
                />
                <select
                  value={selectedTime}
                  onChange={(e) => setSelectedTime(e.target.value)}
                  style={{
                    padding: "16px 10px",
                    border: "none",
                    borderLeft: "1px solid #e0e0e0",
                    outline: "none",
                    fontSize: "14px",
                    borderRadius: "0 4px 4px 0",
                    background: "#fff"
                  }}
                >
                  {Array.from({length: 12}, (_, i) => {
                    const hour = (i + 8).toString().padStart(2, '0');
                    return (
                      <option key={hour} value={`${hour}:00`}>{hour}:00</option>
                    );
                  })}
                </select>
              </div>
            </div>

            {/* Tour Type */}
            <div>
              <label style={{
                display: "block",
                fontSize: "0.75rem",
                fontWeight: "600",
                color: "#333",
                marginBottom: "6px",
                textTransform: "uppercase",
                letterSpacing: "0.5px"
              }}>Tour Type</label>
              <select
                value={tourType}
                onChange={(e) => setTourType(e.target.value)}
                style={{
                  width: "100%",
                  padding: "16px 12px",
                  border: "3px solid #667eea",
                  borderRadius: "6px",
                  outline: "none",
                  fontSize: "14px",
                  background: "#fff"
                }}
              >
                <option value="">Any Type</option>
                <option value="family">Family Tours</option>
                <option value="historic">Historic Tours</option>
                <option value="adventure">Adventure Tours</option>
                <option value="photography">Photography Tours</option>
                <option value="food">Food Tours</option>
                <option value="cultural">Cultural Tours</option>
              </select>
            </div>

            {/* Guests */}
            <div>
              <label style={{
                display: "block",
                fontSize: "0.75rem",
                fontWeight: "600",
                color: "#333",
                marginBottom: "6px",
                textTransform: "uppercase",
                letterSpacing: "0.5px"
              }}>Guests</label>
              <select
                value={guests}
                onChange={(e) => setGuests(e.target.value)}
                style={{
                  width: "100%",
                  padding: "16px 12px",
                  border: "3px solid #667eea",
                  borderRadius: "6px",
                  outline: "none",
                  fontSize: "14px",
                  background: "#fff"
                }}
              >
                <option value="1">1 Guest</option>
                <option value="2">2 Guests</option>
                <option value="3">3 Guests</option>
                <option value="4">4 Guests</option>
                <option value="5">5+ Guests</option>
              </select>
            </div>

            {/* Search Button */}
            <button
              style={{
                padding: "16px 20px",
                background: "linear-gradient(135deg, #667eea, #764ba2)",
                color: "#fff",
                border: "none",
                borderRadius: "6px",
                fontSize: "16px",
                fontWeight: "600",
                cursor: "pointer",
                height: "54px",
                transition: "all 0.2s ease",
                boxShadow: "0 4px 15px rgba(102, 126, 234, 0.3)"
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.background = "linear-gradient(135deg, #5a6fd8, #6a42a0)";
                e.currentTarget.style.transform = "translateY(-2px)";
                e.currentTarget.style.boxShadow = "0 6px 20px rgba(102, 126, 234, 0.4)";
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.background = "linear-gradient(135deg, #667eea, #764ba2)";
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow = "0 4px 15px rgba(102, 126, 234, 0.3)";
              }}
            >
              Search Tours
            </button>
          </div>

          {/* Quick Filters */}
          <div style={{
            marginTop: "1.5rem",
            paddingTop: "1.5rem",
            borderTop: "1px solid #e0e0e0"
          }}>
            <div style={{
              display: "flex",
              alignItems: "center",
              gap: "1rem",
              flexWrap: "wrap"
            }}>
              <span style={{
                fontSize: "0.9rem",
                fontWeight: "600",
                color: "#666"
              }}>Popular:</span>
              {[
                "Historic Tours",
                "Food & Culture",
                "Photography Walks",
                "Family Friendly",
                "Hidden Gems"
              ].map((filter, index) => (
                <button
                  key={index}
                  style={{
                    padding: "0.5rem 1rem",
                    background: "#f0f4ff",
                    color: "#667eea",
                    border: "2px solid #667eea",
                    borderRadius: "20px",
                    fontSize: "0.8rem",
                    fontWeight: "500",
                    cursor: "pointer",
                    transition: "all 0.2s ease"
                  }}
                  onMouseOver={(e) => {
                    e.currentTarget.style.background = "#667eea";
                    e.currentTarget.style.color = "#fff";
                  }}
                  onMouseOut={(e) => {
                    e.currentTarget.style.background = "#f0f4ff";
                    e.currentTarget.style.color = "#667eea";
                  }}
                >
                  {filter}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div style={{
        maxWidth: "1200px",
        margin: "0 auto",
        padding: "2rem"
      }}>
        <div style={{
          background: "#fff",
          borderRadius: "12px",
          padding: "2rem",
          marginBottom: "2rem",
          boxShadow: "0 4px 20px rgba(0,0,0,0.1)"
        }}>
          <div style={{
            display: "flex",
            gap: "1rem",
            flexWrap: "wrap",
            alignItems: "center",
            justifyContent: "space-between"
          }}>
            <div style={{ flex: "1", minWidth: "300px" }}>
              <input
                type="text"
                placeholder="Search tours by name, location, or category..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                style={{
                  width: "100%",
                  padding: "1rem 1.5rem",
                  fontSize: "1rem",
                  border: "2px solid #e0e0e0",
                  borderRadius: "8px",
                  outline: "none",
                  transition: "border-color 0.2s ease"
                }}
                onFocus={(e) => e.target.style.borderColor = "#667eea"}
                onBlur={(e) => e.target.style.borderColor = "#e0e0e0"}
              />
            </div>
            
            <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
              <label style={{ fontWeight: "600", color: "#333" }}>Sort by:</label>
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
                  background: "#fff"
                }}
              >
                <option value="name">Name</option>
                <option value="price">Price</option>
                <option value="rating">Rating</option>
                <option value="duration">Duration</option>
              </select>
            </div>
          </div>
          
          <div style={{
            marginTop: "1rem",
            fontSize: "0.9rem",
            color: "#666"
          }}>
            Showing {filteredAndSortedTours.length} of {walkingTours.length} walking tours
          </div>
        </div>

        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(380px, 1fr))",
          gap: "2rem"
        }}>
          {filteredAndSortedTours.map((tour) => (
            <Link
              key={tour.id}
              href={`/walkingtour/${tour.id}`}
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
                  src={tour.image}
                  alt={tour.name}
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
                  ★ {tour.rating}
                </div>
                <div style={{
                  position: "absolute",
                  top: "1rem",
                  left: "1rem",
                  background: getCategoryColor(tour.category),
                  color: "#fff",
                  padding: "0.4rem 0.8rem",
                  borderRadius: "15px",
                  fontSize: "0.8rem",
                  fontWeight: "600"
                }}>
                  {tour.category}
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
                  {tour.duration}
                </div>
                <div style={{
                  position: "absolute",
                  bottom: "1rem",
                  right: "1rem",
                  background: "rgba(0,0,0,0.7)",
                  color: "#fff",
                  padding: "0.4rem 0.8rem",
                  borderRadius: "15px",
                  fontSize: "0.8rem",
                  fontWeight: "500"
                }}>
                  {tour.reviews} reviews
                </div>
              </div>
              
              <div style={{ padding: "1.5rem" }}>
                <h3 style={{
                  fontSize: "1.4rem",
                  fontWeight: "600",
                  color: "#333",
                  marginBottom: "0.5rem"
                }}>
                  {tour.name}
                </h3>
                
                <p style={{
                  color: "#999",
                  fontSize: "0.95rem",
                  marginBottom: "0.5rem"
                }}>
                  📍 {tour.location}
                </p>
                
                <p style={{
                  color: "#666",
                  fontSize: "0.95rem",
                  marginBottom: "1rem",
                  lineHeight: "1.5"
                }}>
                  {tour.description}
                </p>
                
                <div style={{
                  display: "flex",
                  flexWrap: "wrap",
                  gap: "0.5rem",
                  marginBottom: "1rem"
                }}>
                  {tour.highlights.map((highlight, index) => (
                    <span
                      key={index}
                      style={{
                        background: "#f0f0f0",
                        color: "#666",
                        padding: "0.3rem 0.7rem",
                        borderRadius: "15px",
                        fontSize: "0.8rem",
                        fontWeight: "500"
                      }}
                    >
                      {highlight}
                    </span>
                  ))}
                </div>
                
                <div style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  marginTop: "1rem"
                }}>
                  <div>
                    <div style={{ display: "flex", alignItems: "baseline", gap: "0.5rem" }}>
                      <span style={{
                        fontSize: "1.4rem",
                        fontWeight: "700",
                        color: "#FF385C"
                      }}>
                        ${tour.price}
                      </span>
                      <span style={{
                        fontSize: "1rem",
                        color: "#999",
                        textDecoration: "line-through"
                      }}>
                        ${tour.originalPrice}
                      </span>
                    </div>
                    <p style={{
                      fontSize: "0.9rem",
                      color: "#666",
                      margin: "0.25rem 0 0 0"
                    }}>
                      per person
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
                    Book Tour
                  </button>
                </div>
              </div>
            </div>
            </Link>
          ))}
        </div>

        {filteredAndSortedTours.length === 0 && (
          <div style={{
            textAlign: "center",
            padding: "3rem",
            background: "#fff",
            borderRadius: "12px",
            boxShadow: "0 4px 20px rgba(0,0,0,0.1)"
          }}>
            <h3 style={{ color: "#666", marginBottom: "1rem" }}>No walking tours found</h3>
            <p style={{ color: "#999" }}>Try adjusting your search criteria</p>
          </div>
        )}
      </div>

      <Footer />
    </div>
  );
};

export default WalkingTourPage;