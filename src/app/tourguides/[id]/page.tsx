"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import Footer from "../../../components/Footer";

interface TourGuideDetailsPageProps {
  params: { id: string };
}

const TourGuideDetailsPage: React.FC<TourGuideDetailsPageProps> = ({
  params,
}) => {
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
        "Sarah and Michael are a dynamic duo who specialize in creating unforgettable family experiences. With over 8 years of experience guiding families through Barcelona and surrounding areas, they know exactly how to keep both kids and adults engaged. Their tours combine education with entertainment, featuring interactive storytelling, hands-on activities, and carefully planned routes that accommodate strollers and tired little feet. They understand the unique challenges of traveling with children and have perfected the art of making cultural experiences accessible and exciting for the whole family.",
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
      certifications: [
        "Certified Family Tourism Guide",
        "First Aid Certified",
        "Child Safety Training",
      ],
      tourAreas: [
        "Gothic Quarter",
        "Park Güell",
        "Sagrada Familia",
        "Picasso Museum",
        "Beach Areas",
      ],
      pricing: {
        halfDay: 150,
        fullDay: 280,
        hourly: 75,
        groupDiscount: "10% off for groups of 6+",
      },
      testimonials: [
        {
          name: "Jennifer Wilson",
          review:
            "Sarah and Michael made our family trip to Barcelona absolutely magical! Our 6 and 9-year-old were engaged the entire time.",
          rating: 5,
          date: "2 weeks ago",
        },
        {
          name: "Marco Rossi",
          review:
            "Perfect guides for families. They knew exactly how to explain the history in a way that kept our kids interested.",
          rating: 5,
          date: "1 month ago",
        },
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
        "Our team of young, passionate guides brings energy and enthusiasm to every tour. Perfect for backpackers, young travelers, and anyone looking for an authentic, off-the-beaten-path experience. They know all the hidden gems, best budget spots, and can show you Prague like a local. Their tours often include surprise stops, local hangouts, and insider tips for budget travel. The team consists of local Prague natives who grew up exploring every corner of the city and are excited to share their discoveries with fellow adventure seekers.",
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
      certifications: [
        "Adventure Tourism Certified",
        "Photography Guide License",
        "Local Area Expert",
      ],
      tourAreas: [
        "Old Town",
        "Lesser Town",
        "Vyšehrad",
        "Wenceslas Square",
        "Local Neighborhoods",
      ],
      pricing: {
        halfDay: 130,
        fullDay: 240,
        hourly: 65,
        groupDiscount: "15% off for groups of 8+",
      },
      testimonials: [
        {
          name: "Alex Johnson",
          review:
            "These guys showed me Prague like no guidebook ever could! Found amazing spots I never would have discovered.",
          rating: 5,
          date: "1 week ago",
        },
        {
          name: "Emma Davis",
          review:
            "Perfect for young travelers! Great energy and knew all the best budget spots.",
          rating: 5,
          date: "3 weeks ago",
        },
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
        "Marco is a certified historian with a PhD in Roman History and over 12 years of experience guiding visitors through the eternal city. His tours are like stepping back in time, as he brings ancient Rome to life with captivating stories, archaeological insights, and access to exclusive historical sites. Marco's passion for history is infectious, making even the most reluctant history student fascinated by Rome's incredible past. He has published several articles on Roman archaeology and frequently lectures at universities across Europe.",
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
      certifications: [
        "PhD in Roman History",
        "Licensed Tour Guide",
        "Archaeological Site Access",
        "University Lecturer",
      ],
      tourAreas: [
        "Colosseum",
        "Roman Forum",
        "Palatine Hill",
        "Vatican Museums",
        "Pantheon",
        "Baths of Caracalla",
      ],
      pricing: {
        halfDay: 190,
        fullDay: 350,
        hourly: 95,
        groupDiscount: "12% off for groups of 10+",
      },
      testimonials: [
        {
          name: "Dr. Patricia Smith",
          review:
            "Marco's expertise is unparalleled. As a fellow academic, I was impressed by his deep knowledge and engaging presentation.",
          rating: 5,
          date: "5 days ago",
        },
        {
          name: "Robert Chen",
          review:
            "Brought Roman history to life in ways I never imagined possible. Absolutely brilliant guide!",
          rating: 5,
          date: "2 weeks ago",
        },
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
        "Elena brings Vienna's rich cultural heritage to life through her expert knowledge of classical music, imperial history, and Austrian traditions. As a former music conservatory student and cultural historian, she offers unique insights into Vienna's role as the cultural capital of Europe. Her tours often include visits to concert halls, art galleries, and traditional coffee houses where you'll learn about Viennese culture from an insider's perspective. Elena has connections throughout Vienna's cultural scene and can arrange special access to performances and exhibitions.",
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
      certifications: [
        "Cultural Heritage Guide",
        "Music History Specialist",
        "Art Gallery Certified",
      ],
      tourAreas: [
        "Historic Center",
        "Schönbrunn Palace",
        "Belvedere Palace",
        "State Opera",
        "Kunsthistorisches Museum",
      ],
      pricing: {
        halfDay: 160,
        fullDay: 300,
        hourly: 80,
        groupDiscount: "8% off for groups of 6+",
      },
      testimonials: [
        {
          name: "Maria Schneider",
          review:
            "Elena's passion for Viennese culture is contagious. Learned so much about music and art history!",
          rating: 5,
          date: "1 week ago",
        },
        {
          name: "James Miller",
          review:
            "Perfect cultural immersion. The coffee house visits were a highlight!",
          rating: 4,
          date: "10 days ago",
        },
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
        "Anna specializes in teaching visitors how to navigate like a local. Her tours go beyond typical sightseeing to include practical skills like using public transport, finding the best local markets, and discovering neighborhoods that tourists rarely visit. Perfect for first-time visitors who want to feel confident exploring on their own after the tour. Anna's background in urban planning gives her unique insights into how cities work and develop. She's particularly skilled at helping visitors understand London's complex geography and transportation systems.",
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
      certifications: [
        "Urban Planning Degree",
        "London Transport Expert",
        "Local Area Specialist",
      ],
      tourAreas: [
        "Central London",
        "East London",
        "South Bank",
        "Camden",
        "Notting Hill",
        "Greenwich",
      ],
      pricing: {
        halfDay: 170,
        fullDay: 320,
        hourly: 85,
        groupDiscount: "10% off for groups of 5+",
      },
      testimonials: [
        {
          name: "Sarah Williams",
          review:
            "Anna taught me to navigate London like a pro! So confident exploring on my own now.",
          rating: 5,
          date: "4 days ago",
        },
        {
          name: "Tom Anderson",
          review:
            "Perfect orientation tour. Found neighborhoods I never would have discovered otherwise.",
          rating: 5,
          date: "1 week ago",
        },
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
        "Sophie believes every traveler is unique and deserves a personalized experience. She takes time to understand your interests, preferences, and travel style before creating a completely customized tour just for you. Whether you're interested in fashion, food, art, or history, Sophie crafts each tour to match your passions. Her attention to detail and personal touch have made her one of Paris's most sought-after private guides. Sophie has an extensive network of contacts throughout Paris, from boutique owners to chef friends, allowing her to create truly exclusive experiences.",
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
      certifications: [
        "Personal Guide Certified",
        "Luxury Tourism Specialist",
        "Custom Experience Designer",
      ],
      tourAreas: [
        "Entire Paris",
        "Versailles",
        "Giverny",
        "Fontainebleau",
        "Custom Locations",
      ],
      pricing: {
        halfDay: 270,
        fullDay: 450,
        hourly: 90,
        groupDiscount: "Private rates only",
      },
      testimonials: [
        {
          name: "Victoria Chang",
          review:
            "Sophie created the perfect Paris experience just for me! Every detail was thoughtfully planned.",
          rating: 5,
          date: "3 days ago",
        },
        {
          name: "David Brown",
          review:
            "Incredible personalized service. Sophie understood exactly what we wanted to see and do.",
          rating: 5,
          date: "1 week ago",
        },
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
        "David understands the challenges of budget travel and has mastered the art of showing visitors amazing experiences without breaking the bank. His tours focus on free attractions, affordable dining options, and budget-friendly activities that still provide authentic Amsterdam experiences. As a former backpacker himself, David knows exactly what budget travelers need and want from their visit to Amsterdam. He's particularly good at connecting with young travelers and creating a fun, social atmosphere during tours.",
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
      certifications: [
        "Budget Tourism Specialist",
        "Backpacker Guide Certified",
        "Youth Travel Expert",
      ],
      tourAreas: [
        "Jordaan",
        "Red Light District",
        "Vondelpark",
        "Museum Quarter",
        "Alternative Areas",
      ],
      pricing: {
        halfDay: 140,
        fullDay: 250,
        hourly: 70,
        groupDiscount: "20% off for groups of 10+",
      },
      testimonials: [
        {
          name: "Jake Martinez",
          review:
            "Perfect for budget travelers! David showed me how to experience Amsterdam without spending a fortune.",
          rating: 5,
          date: "6 days ago",
        },
        {
          name: "Lisa Park",
          review:
            "Great energy and knows all the best budget spots. Saved me so much money!",
          rating: 4,
          date: "2 weeks ago",
        },
      ],
    },
  ];

  const guide = tourGuides.find((g) => g.id === parseInt(params.id));

  if (!guide) {
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
            Tour Guide Not Found
          </h1>
          <p style={{ color: "#666", marginBottom: "2rem" }}>
            The tour guide you're looking for doesn't exist.
          </p>
          <Link
            href="/tourguides"
            style={{
              background: "#667eea",
              color: "#fff",
              textDecoration: "none",
              padding: "1rem 2rem",
              borderRadius: "8px",
              fontWeight: "600",
            }}
          >
            Back to Tour Guides
          </Link>
        </div>
        <Footer />
      </div>
    );
  }

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

  return (
    <div style={{ backgroundColor: "#f8f9fa", minHeight: "100vh" }}>
      <div style={{ position: "relative", height: "60vh", overflow: "hidden" }}>
        <Image
          src={guide.image}
          alt={guide.name}
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
              "linear-gradient(to bottom, rgba(102,126,234,0.3), rgba(118,75,162,0.6))",
            display: "flex",
            alignItems: "flex-end",
            padding: "3rem 2rem",
          }}
        >
          <div style={{ maxWidth: "1200px", margin: "0 auto", width: "100%" }}>
            <div style={{ marginBottom: "1rem" }}>
              <Link
                href="/tourguides"
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
                ← Back to Tour Guides
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
              {guide.name}
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
                  {guide.location}
                </span>
              </div>
              <div
                style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}
              >
                <span style={{ color: "#fff", fontSize: "1.1rem" }}>⭐</span>
                <span style={{ color: "#fff", fontSize: "1.1rem" }}>
                  {guide.rating} ({guide.reviews} reviews)
                </span>
              </div>
              <div
                style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}
              >
                <span style={{ color: "#fff", fontSize: "1.1rem" }}>🎓</span>
                <span style={{ color: "#fff", fontSize: "1.1rem" }}>
                  {guide.experience} experience
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
                About Your Guide
              </h2>
              <p
                style={{
                  fontSize: "1.1rem",
                  lineHeight: "1.7",
                  color: "#555",
                  marginBottom: "2rem",
                }}
              >
                {guide.longDescription}
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
                    background: getSpecialtyColor(guide.specialty),
                    color: "#fff",
                    padding: "0.5rem 1rem",
                    borderRadius: "20px",
                    fontSize: "0.9rem",
                    fontWeight: "600",
                  }}
                >
                  {guide.specialty}
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
                  {guide.experience} Experience
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
                Specializations
              </h3>
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
                  gap: "1rem",
                }}
              >
                {guide.specializations.map((specialization, index) => (
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
                      ✓ {specialization}
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
                Tour Areas & Types
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
                  Areas Covered:
                </h4>
                <div
                  style={{
                    display: "flex",
                    flexWrap: "wrap",
                    gap: "0.5rem",
                  }}
                >
                  {guide.tourAreas.map((area, index) => (
                    <span
                      key={index}
                      style={{
                        background: "#e3f2fd",
                        color: "#1976d2",
                        padding: "0.3rem 0.8rem",
                        borderRadius: "15px",
                        fontSize: "0.9rem",
                        fontWeight: "500",
                      }}
                    >
                      {area}
                    </span>
                  ))}
                </div>
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
                  Tour Types:
                </h4>
                <div
                  style={{
                    display: "flex",
                    flexWrap: "wrap",
                    gap: "0.5rem",
                  }}
                >
                  {guide.tourTypes.map((type, index) => (
                    <span
                      key={index}
                      style={{
                        background: "#f3e5f5",
                        color: "#7b1fa2",
                        padding: "0.3rem 0.8rem",
                        borderRadius: "15px",
                        fontSize: "0.9rem",
                        fontWeight: "500",
                      }}
                    >
                      {type}
                    </span>
                  ))}
                </div>
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
                Certifications & Qualifications
              </h3>
              <ul style={{ listStyle: "none", padding: 0 }}>
                {guide.certifications.map((cert, index) => (
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
                      🏆
                    </span>
                    {cert}
                  </li>
                ))}
              </ul>
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
                Recent Reviews
              </h3>
              <div>
                {guide.testimonials.map((testimonial, index) => (
                  <div
                    key={index}
                    style={{
                      background: "#f8f9fa",
                      borderRadius: "8px",
                      padding: "1.5rem",
                      marginBottom: "1rem",
                      border: "1px solid #e0e0e0",
                    }}
                  >
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                        marginBottom: "0.5rem",
                      }}
                    >
                      <h4
                        style={{
                          fontSize: "1.1rem",
                          fontWeight: "600",
                          color: "#333",
                          margin: 0,
                        }}
                      >
                        {testimonial.name}
                      </h4>
                      <div
                        style={{
                          display: "flex",
                          alignItems: "center",
                          gap: "0.5rem",
                        }}
                      >
                        <div>
                          {[...Array(5)].map((_, i) => (
                            <span
                              key={i}
                              style={{
                                color:
                                  i < testimonial.rating
                                    ? "#FFD700"
                                    : "#e0e0e0",
                                fontSize: "1rem",
                              }}
                            >
                              ★
                            </span>
                          ))}
                        </div>
                        <span
                          style={{
                            fontSize: "0.9rem",
                            color: "#666",
                          }}
                        >
                          {testimonial.date}
                        </span>
                      </div>
                    </div>
                    <p
                      style={{
                        fontSize: "1rem",
                        color: "#555",
                        lineHeight: "1.5",
                        margin: 0,
                      }}
                    >
                      "{testimonial.review}"
                    </p>
                  </div>
                ))}
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
                <h3
                  style={{
                    fontSize: "1.3rem",
                    fontWeight: "600",
                    color: "#333",
                    marginBottom: "1rem",
                  }}
                >
                  Pricing
                </h3>
                <div style={{ marginBottom: "1rem" }}>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      marginBottom: "0.5rem",
                    }}
                  >
                    <span style={{ color: "#666" }}>Hourly Rate:</span>
                    <span style={{ fontWeight: "600", color: "#333" }}>
                      ${guide.pricing.hourly}
                    </span>
                  </div>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      marginBottom: "0.5rem",
                    }}
                  >
                    <span style={{ color: "#666" }}>Half Day (4hrs):</span>
                    <span style={{ fontWeight: "600", color: "#333" }}>
                      ${guide.pricing.halfDay}
                    </span>
                  </div>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      marginBottom: "0.5rem",
                    }}
                  >
                    <span style={{ color: "#666" }}>Full Day (8hrs):</span>
                    <span style={{ fontWeight: "600", color: "#333" }}>
                      ${guide.pricing.fullDay}
                    </span>
                  </div>
                  <div
                    style={{
                      fontSize: "0.9rem",
                      color: "#28a745",
                      marginTop: "0.5rem",
                      fontWeight: "500",
                    }}
                  >
                    {guide.pricing.groupDiscount}
                  </div>
                </div>
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
                    {guide.rating}
                  </span>
                  <span style={{ fontSize: "0.9rem", color: "#666" }}>
                    ({guide.reviews} reviews)
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
                  <span style={{ fontSize: "1.2rem" }}>🗣️</span>
                  <span style={{ fontSize: "1rem" }}>
                    {guide.languages.join(", ")}
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
                  <span style={{ fontSize: "1.2rem" }}>👥</span>
                  <span style={{ fontSize: "1rem" }}>{guide.groupSize}</span>
                </div>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "0.5rem",
                  }}
                >
                  <span style={{ fontSize: "1.2rem" }}>🕐</span>
                  <span style={{ fontSize: "1rem" }}>{guide.availability}</span>
                </div>
              </div>

              <button
                style={{
                  width: "100%",
                  background: "#667eea",
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
                  (e.currentTarget.style.background = "#5a6fd8")
                }
                onMouseOut={(e) =>
                  (e.currentTarget.style.background = "#667eea")
                }
              >
                Book This Guide
              </button>

              <button
                style={{
                  width: "100%",
                  background: "transparent",
                  color: "#667eea",
                  border: "2px solid #667eea",
                  borderRadius: "8px",
                  padding: "1rem",
                  fontSize: "1rem",
                  fontWeight: "600",
                  cursor: "pointer",
                  transition: "all 0.2s ease",
                }}
                onMouseOver={(e) => {
                  e.currentTarget.style.background = "#667eea";
                  e.currentTarget.style.color = "#fff";
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.background = "transparent";
                  e.currentTarget.style.color = "#667eea";
                }}
              >
                Send Message
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
                  Flexible Booking
                </h4>
                <p
                  style={{
                    fontSize: "0.9rem",
                    color: "#666",
                    margin: 0,
                  }}
                >
                  Free cancellation up to 48 hours before your tour
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

export default TourGuideDetailsPage;
