"use client";
import React, { useState, useMemo } from "react";
import Image from "next/image";
import Link from "next/link";
import Footer from "../../components/Footer";

const TourGuidesPage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [sortBy, setSortBy] = useState("name");
  const [selectedSpecialty, setSelectedSpecialty] = useState("");

  const tourGuides = [
    {
      id: 1,
      name: "Sarah & Michael Chen",
      location: "Barcelona, Spain",
      image: "/tourguides/couple-family-traveling-together.jpg",
      rating: 4.9,
      reviews: 456,
      price: 75,
      experience: "8 years",
      specialty: "Family Tours",
      languages: ["English", "Spanish", "Mandarin"],
      description:
        "Expert family tour guides specializing in kid-friendly adventures and cultural experiences",
      longDescription:
        "Sarah and Michael are a dynamic duo who specialize in creating unforgettable family experiences. With over 8 years of experience guiding families through Barcelona and surrounding areas, they know exactly how to keep both kids and adults engaged. Their tours combine education with entertainment, featuring interactive storytelling, hands-on activities, and carefully planned routes that accommodate strollers and tired little feet.",
      specializations: [
        "Kid-friendly routes",
        "Educational storytelling",
        "Photo assistance",
        "Local family spots",
        "Safety-first approach",
      ],
      availability: "Daily 9 AM - 6 PM",
      groupSize: "Up to 8 people",
      tourTypes: [
        "City Walking Tours",
        "Cultural Experiences",
        "Food Tours",
        "Historical Sites",
      ],
    },
    {
      id: 2,
      name: "Adventure Seekers Group",
      location: "Prague, Czech Republic",
      image:
        "/tourguides/friends-travelers-with-backpacks-smiling-looking-route-map-street.jpg",
      rating: 4.8,
      reviews: 324,
      price: 65,
      experience: "6 years",
      specialty: "Adventure Tours",
      languages: ["English", "Czech", "German"],
      description:
        "Young, energetic guides perfect for backpackers and adventure enthusiasts",
      longDescription:
        "Our team of young, passionate guides brings energy and enthusiasm to every tour. Perfect for backpackers, young travelers, and anyone looking for an authentic, off-the-beaten-path experience. They know all the hidden gems, best budget spots, and can show you Prague like a local. Their tours often include surprise stops, local hangouts, and insider tips for budget travel.",
      specializations: [
        "Hidden gems discovery",
        "Budget travel tips",
        "Local hangout spots",
        "Photography guidance",
        "Backpacker-friendly routes",
      ],
      availability: "Daily 10 AM - 8 PM",
      groupSize: "Up to 12 people",
      tourTypes: [
        "Adventure Tours",
        "Photography Tours",
        "Nightlife Tours",
        "Local Experiences",
      ],
    },
    {
      id: 3,
      name: "Marco Rodriguez",
      location: "Rome, Italy",
      image:
        "/tourguides/handsome-tourist-man-look-map-while-pointing-finger-direction-destination-travel-concep.jpg",
      rating: 4.9,
      reviews: 623,
      price: 95,
      experience: "12 years",
      specialty: "Historical Tours",
      languages: ["English", "Italian", "French", "Portuguese"],
      description:
        "Professional historian and expert guide with deep knowledge of Roman culture and history",
      longDescription:
        "Marco is a certified historian with a PhD in Roman History and over 12 years of experience guiding visitors through the eternal city. His tours are like stepping back in time, as he brings ancient Rome to life with captivating stories, archaeological insights, and access to exclusive historical sites. Marco's passion for history is infectious, making even the most reluctant history student fascinated by Rome's incredible past.",
      specializations: [
        "Ancient Roman history",
        "Archaeological insights",
        "Exclusive site access",
        "Academic expertise",
        "Multilingual storytelling",
      ],
      availability: "Monday-Saturday 8 AM - 6 PM",
      groupSize: "Up to 15 people",
      tourTypes: [
        "Historical Tours",
        "Archaeological Tours",
        "Cultural Heritage",
        "Educational Tours",
      ],
    },
    {
      id: 4,
      name: "Elena Kowalski",
      location: "Vienna, Austria",
      image: "/tourguides/hipster-man-looking-map-with-magnifying-glass.jpg",
      rating: 4.7,
      reviews: 289,
      price: 80,
      experience: "5 years",
      specialty: "Cultural Tours",
      languages: ["English", "German", "Polish", "Russian"],
      description:
        "Cultural specialist with expertise in European art, music, and traditions",
      longDescription:
        "Elena brings Vienna's rich cultural heritage to life through her expert knowledge of classical music, imperial history, and Austrian traditions. As a former music conservatory student and cultural historian, she offers unique insights into Vienna's role as the cultural capital of Europe. Her tours often include visits to concert halls, art galleries, and traditional coffee houses where you'll learn about Viennese culture from an insider's perspective.",
      specializations: [
        "Classical music history",
        "Imperial Austrian culture",
        "Art and architecture",
        "Traditional coffee culture",
        "Concert hall access",
      ],
      availability: "Tuesday-Sunday 9 AM - 7 PM",
      groupSize: "Up to 10 people",
      tourTypes: [
        "Cultural Tours",
        "Music Tours",
        "Art Tours",
        "Architectural Tours",
      ],
    },
    {
      id: 5,
      name: "Anna Thompson",
      location: "London, UK",
      image: "/tourguides/woman-holding-map-train-station-tourism-concept.jpg",
      rating: 4.8,
      reviews: 445,
      price: 85,
      experience: "7 years",
      specialty: "Urban Navigation",
      languages: ["English", "French", "Spanish"],
      description:
        "Expert in helping visitors navigate complex city systems and discover local gems",
      longDescription:
        "Anna specializes in teaching visitors how to navigate like a local. Her tours go beyond typical sightseeing to include practical skills like using public transport, finding the best local markets, and discovering neighborhoods that tourists rarely visit. Perfect for first-time visitors who want to feel confident exploring on their own after the tour. Anna's background in urban planning gives her unique insights into how cities work and develop.",
      specializations: [
        "Public transport mastery",
        "Local market discovery",
        "Neighborhood exploration",
        "Navigation skills",
        "Urban planning insights",
      ],
      availability: "Daily 8 AM - 8 PM",
      groupSize: "Up to 8 people",
      tourTypes: [
        "Orientation Tours",
        "Local Discovery",
        "Transportation Tours",
        "Neighborhood Walks",
      ],
    },
    {
      id: 6,
      name: "Sophie Laurent",
      location: "Paris, France",
      image: "/tourguides/young-pretty-traveler-woman-with-diary.jpg",
      rating: 4.9,
      reviews: 567,
      price: 90,
      experience: "9 years",
      specialty: "Personalized Tours",
      languages: ["English", "French", "Italian"],
      description:
        "Specialist in creating custom, personalized tour experiences tailored to individual interests",
      longDescription:
        "Sophie believes every traveler is unique and deserves a personalized experience. She takes time to understand your interests, preferences, and travel style before creating a completely customized tour just for you. Whether you're interested in fashion, food, art, or history, Sophie crafts each tour to match your passions. Her attention to detail and personal touch have made her one of Paris's most sought-after private guides.",
      specializations: [
        "Custom itinerary planning",
        "Personal interest matching",
        "Flexible scheduling",
        "Private experiences",
        "Detailed consultation",
      ],
      availability: "By appointment only",
      groupSize: "Up to 6 people",
      tourTypes: [
        "Private Tours",
        "Custom Experiences",
        "Special Interest Tours",
        "VIP Tours",
      ],
    },
    {
      id: 7,
      name: "David Kim",
      location: "Amsterdam, Netherlands",
      image: "/tourguides/young-traveler-man-with-map-leather-bag.jpg",
      rating: 4.6,
      reviews: 378,
      price: 70,
      experience: "4 years",
      specialty: "Budget Tours",
      languages: ["English", "Dutch", "Korean"],
      description:
        "Young guide specializing in budget-friendly tours and backpacker experiences",
      longDescription:
        "David understands the challenges of budget travel and has mastered the art of showing visitors amazing experiences without breaking the bank. His tours focus on free attractions, affordable dining options, and budget-friendly activities that still provide authentic Amsterdam experiences. As a former backpacker himself, David knows exactly what budget travelers need and want from their visit to Amsterdam.",
      specializations: [
        "Free attraction tours",
        "Budget dining spots",
        "Backpacker hostels",
        "Money-saving tips",
        "Student discounts",
      ],
      availability: "Daily 11 AM - 7 PM",
      groupSize: "Up to 15 people",
      tourTypes: [
        "Budget Tours",
        "Free Walking Tours",
        "Student Tours",
        "Backpacker Experiences",
      ],
    },
  ];

  const filteredAndSortedGuides = useMemo(() => {
    let filtered = tourGuides.filter(
      (guide) =>
        guide.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        guide.location.toLowerCase().includes(searchTerm.toLowerCase()) ||
        guide.specialty.toLowerCase().includes(searchTerm.toLowerCase()) ||
        guide.description.toLowerCase().includes(searchTerm.toLowerCase())
    );

    if (selectedSpecialty) {
      filtered = filtered.filter(
        (guide) => guide.specialty === selectedSpecialty
      );
    }

    return filtered.sort((a, b) => {
      switch (sortBy) {
        case "price":
          return a.price - b.price;
        case "rating":
          return b.rating - a.rating;
        case "experience":
          return parseInt(b.experience) - parseInt(a.experience);
        case "name":
        default:
          return a.name.localeCompare(b.name);
      }
    });
  }, [searchTerm, selectedSpecialty, sortBy]);

  const getSpecialtyColor = (specialty: string) => {
    switch (specialty) {
      case "Family Tours":
        return "#28a745";
      case "Adventure Tours":
        return "#fd7e14";
      case "Historical Tours":
        return "#6f42c1";
      case "Cultural Tours":
        return "#17a2b8";
      case "Urban Navigation":
        return "#20c997";
      case "Personalized Tours":
        return "#e83e8c";
      case "Budget Tours":
        return "#ffc107";
      default:
        return "#6c757d";
    }
  };

  const specialties = [...new Set(tourGuides.map((guide) => guide.specialty))];

  return (
    <div style={{ backgroundColor: "#f8f9fa", minHeight: "100vh" }}>
      <div
        style={{
          background: "linear-gradient(135deg, #FF0000 0%, #DC143C 100%)",
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
          Professional Tour Guides
        </h1>
        <p
          style={{
            fontSize: "1.3rem",
            opacity: "0.9",
            maxWidth: "600px",
            margin: "0 auto",
          }}
        >
          Connect with expert local guides for personalized and unforgettable
          travel experiences
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
              display: "grid",
              gridTemplateColumns: "2fr 1fr 1fr 1fr",
              gap: "1rem",
              alignItems: "end",
              marginBottom: "1rem",
            }}
          >
            <div>
              <label
                style={{
                  display: "block",
                  fontSize: "0.9rem",
                  fontWeight: "600",
                  color: "#333",
                  marginBottom: "0.5rem",
                }}
              >
                Search Guides
              </label>
              <input
                type="text"
                placeholder="Search by name, location, or specialty..."
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

            <div>
              <label
                style={{
                  display: "block",
                  fontSize: "0.9rem",
                  fontWeight: "600",
                  color: "#333",
                  marginBottom: "0.5rem",
                }}
              >
                Specialty
              </label>
              <select
                value={selectedSpecialty}
                onChange={(e) => setSelectedSpecialty(e.target.value)}
                style={{
                  width: "100%",
                  padding: "1rem",
                  fontSize: "1rem",
                  border: "2px solid #e0e0e0",
                  borderRadius: "8px",
                  outline: "none",
                  background: "#fff",
                  cursor: "pointer",
                }}
              >
                <option value="">All Specialties</option>
                {specialties.map((specialty) => (
                  <option key={specialty} value={specialty}>
                    {specialty}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label
                style={{
                  display: "block",
                  fontSize: "0.9rem",
                  fontWeight: "600",
                  color: "#333",
                  marginBottom: "0.5rem",
                }}
              >
                Sort By
              </label>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                style={{
                  width: "100%",
                  padding: "1rem",
                  fontSize: "1rem",
                  border: "2px solid #e0e0e0",
                  borderRadius: "8px",
                  outline: "none",
                  background: "#fff",
                  cursor: "pointer",
                }}
              >
                <option value="name">Name</option>
                <option value="price">Price</option>
                <option value="rating">Rating</option>
                <option value="experience">Experience</option>
              </select>
            </div>

            <button
              style={{
                padding: "1rem 2rem",
                background: "linear-gradient(135deg, #667eea, #764ba2)",
                color: "#fff",
                border: "none",
                borderRadius: "8px",
                fontSize: "1rem",
                fontWeight: "600",
                cursor: "pointer",
                transition: "all 0.2s ease",
                boxShadow: "0 4px 15px rgba(102, 126, 234, 0.3)",
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.background =
                  "linear-gradient(135deg, #5a6fd8, #6a42a0)";
                e.currentTarget.style.transform = "translateY(-2px)";
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.background =
                  "linear-gradient(135deg, #667eea, #764ba2)";
                e.currentTarget.style.transform = "translateY(0)";
              }}
            >
              Search Guides
            </button>
          </div>

          <div
            style={{
              fontSize: "0.9rem",
              color: "#666",
            }}
          >
            Showing {filteredAndSortedGuides.length} of {tourGuides.length} tour
            guides
          </div>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(380px, 1fr))",
            gap: "2rem",
          }}
        >
          {filteredAndSortedGuides.map((guide) => (
            <Link
              key={guide.id}
              href={`/tourguides/${guide.id}`}
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
                    height: "250px",
                    overflow: "hidden",
                  }}
                >
                  <Image
                    src={guide.image}
                    alt={guide.name}
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
                    ★ {guide.rating}
                  </div>
                  <div
                    style={{
                      position: "absolute",
                      top: "1rem",
                      left: "1rem",
                      background: getSpecialtyColor(guide.specialty),
                      color: "#fff",
                      padding: "0.4rem 0.8rem",
                      borderRadius: "15px",
                      fontSize: "0.8rem",
                      fontWeight: "600",
                    }}
                  >
                    {guide.specialty}
                  </div>
                  <div
                    style={{
                      position: "absolute",
                      bottom: "1rem",
                      left: "1rem",
                      background: "rgba(0,0,0,0.7)",
                      color: "#fff",
                      padding: "0.4rem 0.8rem",
                      borderRadius: "15px",
                      fontSize: "0.8rem",
                      fontWeight: "500",
                    }}
                  >
                    {guide.experience} experience
                  </div>
                  <div
                    style={{
                      position: "absolute",
                      bottom: "1rem",
                      right: "1rem",
                      background: "rgba(0,0,0,0.7)",
                      color: "#fff",
                      padding: "0.4rem 0.8rem",
                      borderRadius: "15px",
                      fontSize: "0.8rem",
                      fontWeight: "500",
                    }}
                  >
                    {guide.reviews} reviews
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
                    {guide.name}
                  </h3>

                  <p
                    style={{
                      color: "#999",
                      fontSize: "0.95rem",
                      marginBottom: "0.5rem",
                    }}
                  >
                    📍 {guide.location}
                  </p>

                  <p
                    style={{
                      color: "#666",
                      fontSize: "0.95rem",
                      marginBottom: "1rem",
                      lineHeight: "1.5",
                    }}
                  >
                    {guide.description}
                  </p>

                  <div
                    style={{
                      display: "flex",
                      flexWrap: "wrap",
                      gap: "0.5rem",
                      marginBottom: "1rem",
                    }}
                  >
                    <div
                      style={{
                        background: "#f0f0f0",
                        color: "#666",
                        padding: "0.3rem 0.7rem",
                        borderRadius: "15px",
                        fontSize: "0.8rem",
                        fontWeight: "500",
                      }}
                    >
                      🗣️ {guide.languages.join(", ")}
                    </div>
                    <div
                      style={{
                        background: "#f0f0f0",
                        color: "#666",
                        padding: "0.3rem 0.7rem",
                        borderRadius: "15px",
                        fontSize: "0.8rem",
                        fontWeight: "500",
                      }}
                    >
                      👥 {guide.groupSize}
                    </div>
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
                      <span
                        style={{
                          fontSize: "1.4rem",
                          fontWeight: "700",
                          color: "#FF385C",
                        }}
                      >
                        ${guide.price}
                      </span>
                      <span
                        style={{
                          fontSize: "0.9rem",
                          color: "#666",
                          marginLeft: "0.25rem",
                        }}
                      >
                        per hour
                      </span>
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
                      Book Guide
                    </button>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {filteredAndSortedGuides.length === 0 && (
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
              No tour guides found
            </h3>
            <p style={{ color: "#999" }}>Try adjusting your search criteria</p>
          </div>
        )}

        {/* Why Choose Our Guides Section */}
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
            Why Choose Our Professional Guides?
          </h2>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
              gap: "2rem",
            }}
          >
            {[
              {
                icon: "🎓",
                title: "Expert Knowledge",
                description:
                  "All our guides are certified professionals with deep local knowledge and expertise in their specializations.",
              },
              {
                icon: "🌟",
                title: "Personalized Experience",
                description:
                  "Each tour is tailored to your interests, pace, and preferences for a truly unique experience.",
              },
              {
                icon: "🛡️",
                title: "Safety First",
                description:
                  "Our guides prioritize your safety and are trained in first aid and emergency procedures.",
              },
              {
                icon: "💬",
                title: "Multilingual",
                description:
                  "Communicate comfortably with guides who speak multiple languages fluently.",
              },
            ].map((benefit, index) => (
              <div
                key={index}
                style={{
                  textAlign: "center",
                  padding: "1.5rem",
                  background: "#f8f9fa",
                  borderRadius: "12px",
                  border: "1px solid #e0e0e0",
                }}
              >
                <div
                  style={{
                    fontSize: "3rem",
                    marginBottom: "1rem",
                  }}
                >
                  {benefit.icon}
                </div>
                <h3
                  style={{
                    fontSize: "1.2rem",
                    fontWeight: "600",
                    color: "#333",
                    marginBottom: "0.5rem",
                  }}
                >
                  {benefit.title}
                </h3>
                <p
                  style={{
                    fontSize: "1rem",
                    color: "#666",
                    lineHeight: "1.5",
                    margin: 0,
                  }}
                >
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default TourGuidesPage;
