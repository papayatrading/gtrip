"use client";
import React, { useState, useMemo } from "react";
import Image from "next/image";
import Link from "next/link";
import Footer from "../../components/Footer";

const SpaPage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [sortBy, setSortBy] = useState("name");

  // Spa booking search states
  const [location, setLocation] = useState("");
  const [selectedDate, setSelectedDate] = useState("");
  const [selectedTime, setSelectedTime] = useState("10:00");
  const [treatmentType, setTreatmentType] = useState("");
  const [guests, setGuests] = useState("1");

  const spas = [
    {
      id: 1,
      name: "Serenity Stone Therapy",
      location: "Bali, Indonesia",
      image: "/spa/arrangement-with-spa-stones-lit-candles.webp",
      price: 120,
      originalPrice: 150,
      duration: "90 minutes",
      category: "Hot Stone",
      rating: 4.9,
      reviews: 456,
      treatments: [
        "Hot Stone Massage",
        "Aromatherapy",
        "Meditation",
        "Herbal Tea",
      ],
      description:
        "Experience deep relaxation with heated volcanic stones and aromatic oils",
    },
    {
      id: 2,
      name: "Radiant Facial Retreat",
      location: "Santorini, Greece",
      image:
        "/spa/attractive-african-woman-enjoying-face-massage-spa-salon.webp",
      price: 85,
      originalPrice: 110,
      duration: "60 minutes",
      category: "Facial",
      rating: 4.8,
      reviews: 623,
      treatments: [
        "Deep Cleansing Facial",
        "Anti-aging Treatment",
        "Hydrating Mask",
        "Face Massage",
      ],
      description:
        "Rejuvenate your skin with our signature facial treatments and premium skincare",
    },
    {
      id: 3,
      name: "Nordic Sauna Experience",
      location: "Helsinki, Finland",
      image: "/spa/close-up-man-relaxing-sauna.webp",
      price: 65,
      originalPrice: 85,
      duration: "45 minutes",
      category: "Sauna",
      rating: 4.7,
      reviews: 342,
      treatments: [
        "Traditional Sauna",
        "Steam Bath",
        "Cold Plunge",
        "Relaxation Area",
      ],
      description:
        "Authentic Finnish sauna experience with traditional heat therapy and cooling rituals",
    },
    {
      id: 4,
      name: "Russian Banya Therapy",
      location: "Moscow, Russia",
      image:
        "/spa/man-getting-back-massage-with-oak-broom-bath-spa-hammam-russian-bathhouse-therapy.webp",
      price: 95,
      originalPrice: 125,
      duration: "75 minutes",
      category: "Banya",
      rating: 4.6,
      reviews: 234,
      treatments: [
        "Oak Broom Massage",
        "Steam Room",
        "Traditional Banya",
        "Ice Bath",
      ],
      description:
        "Traditional Russian banya experience with therapeutic oak branch treatments",
    },
    {
      id: 5,
      name: "Maldives Paradise Spa",
      location: "Maldives",
      image: "/spa/modern-spa-massage-room-maldives-resort.webp",
      price: 180,
      originalPrice: 220,
      duration: "120 minutes",
      category: "Luxury",
      rating: 5.0,
      reviews: 189,
      treatments: [
        "Ocean View Massage",
        "Couples Treatment",
        "Body Wrap",
        "Champagne Service",
      ],
      description:
        "Ultimate luxury spa experience with panoramic ocean views and world-class treatments",
    },
    {
      id: 6,
      name: "African Healing Sanctuary",
      location: "Cape Town, South Africa",
      image:
        "/spa/tender-african-woman-smiling-enjoying-massage-with-closed-eyes-spa-resort.webp",
      price: 110,
      originalPrice: 140,
      duration: "90 minutes",
      category: "Therapeutic",
      rating: 4.8,
      reviews: 367,
      treatments: [
        "African Healing Massage",
        "Marula Oil Treatment",
        "Rooibos Wrap",
        "Sound Healing",
      ],
      description:
        "Experience traditional African healing techniques with indigenous botanicals and therapies",
    },
    {
      id: 7,
      name: "Tibetan Sound Healing",
      location: "Dharamshala, India",
      image:
        "/spa/woman-performs-tibetan-ritual-with-sound-bells-concept-therapy.webp",
      price: 75,
      originalPrice: 100,
      duration: "60 minutes",
      category: "Sound Therapy",
      rating: 4.9,
      reviews: 278,
      treatments: [
        "Singing Bowl Therapy",
        "Meditation",
        "Chakra Balancing",
        "Tibetan Massage",
      ],
      description:
        "Harmonize your energy with ancient Tibetan sound healing and meditation practices",
    },
    {
      id: 8,
      name: "Luxury Facial Studio",
      location: "Paris, France",
      image: "/spa/woman-tower-making-facial-mask-bathroom-photo.webp",
      price: 140,
      originalPrice: 175,
      duration: "75 minutes",
      category: "Premium Facial",
      rating: 4.7,
      reviews: 445,
      treatments: [
        "Gold Facial",
        "Caviar Treatment",
        "LED Light Therapy",
        "Oxygen Infusion",
      ],
      description:
        "Indulge in Parisian luxury with premium skincare treatments and cutting-edge technology",
    },
    {
      id: 9,
      name: "Marble Sanctuary Retreat",
      location: "Tuscany, Italy",
      image: "/spa/woman-white-bathrobe-standing-bath-marble-rock.webp",
      price: 160,
      originalPrice: 200,
      duration: "105 minutes",
      category: "Luxury Retreat",
      rating: 4.8,
      reviews: 234,
      treatments: [
        "Marble Stone Therapy",
        "Tuscan Olive Oil Massage",
        "Wine Bath",
        "Vineyard Views",
      ],
      description:
        "Luxurious retreat in marble-clad sanctuary with organic Tuscan treatments and vineyard vistas",
    },
  ];

  const filteredAndSortedSpas = useMemo(() => {
    let filtered = spas.filter(
      (spa) =>
        spa.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        spa.location.toLowerCase().includes(searchTerm.toLowerCase()) ||
        spa.category.toLowerCase().includes(searchTerm.toLowerCase()) ||
        spa.description.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return filtered.sort((a, b) => {
      switch (sortBy) {
        case "price":
          return a.price - b.price;
        case "rating":
          return b.rating - a.rating;
        case "duration":
          return parseInt(a.duration) - parseInt(b.duration);
        case "name":
        default:
          return a.name.localeCompare(b.name);
      }
    });
  }, [searchTerm, sortBy]);

  const getCategoryColor = (category: string) => {
    switch (category) {
      case "Hot Stone":
        return "#8B4513";
      case "Facial":
        return "#FFB6C1";
      case "Sauna":
        return "#FF6347";
      case "Banya":
        return "#4682B4";
      case "Luxury":
        return "#DAA520";
      case "Therapeutic":
        return "#228B22";
      case "Sound Therapy":
        return "#9370DB";
      case "Premium Facial":
        return "#FF69B4";
      case "Luxury Retreat":
        return "#DC143C";
      default:
        return "#6c757d";
    }
  };

  return (
    <div style={{ backgroundColor: "#f8f9fa", minHeight: "100vh" }}>
      <div
        style={{
          background: "#dc3545",
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
          Relax & Rejuvenate – Book Your Escape Today
        </h1>
        <p
          style={{
            fontSize: "1.3rem",
            opacity: "0.9",
            maxWidth: "600px",
            margin: "0 auto",
          }}
        >
          Discover world-class spa treatments and wellness experiences
        </p>
      </div>

      {/* Spa Booking Search Bar */}
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
            boxShadow: "0 8px 32px rgba(0,0,0,0.15)",
            border: "3px solid #9370DB",
            marginBottom: "3rem",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "1rem",
              marginBottom: "1.5rem",
            }}
          >
            <div
              style={{
                width: "24px",
                height: "24px",
                borderRadius: "50%",
                background: "linear-gradient(135deg, #9370DB, #663399)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "#fff",
                fontSize: "14px",
                fontWeight: "bold",
              }}
            >
              🧘
            </div>
            <h2
              style={{
                fontSize: "1.4rem",
                fontWeight: "600",
                color: "#333",
                margin: 0,
              }}
            >
              Find Your Perfect Spa Experience
            </h2>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "2fr 1.5fr 1fr 1fr 120px",
              gap: "12px",
              alignItems: "end",
            }}
          >
            {/* Location */}
            <div style={{ position: "relative" }}>
              <label
                style={{
                  display: "block",
                  fontSize: "0.75rem",
                  fontWeight: "600",
                  color: "#333",
                  marginBottom: "6px",
                  textTransform: "uppercase",
                  letterSpacing: "0.5px",
                }}
              >
                Location
              </label>
              <div
                style={{
                  position: "relative",
                  border: "3px solid #9370DB",
                  borderRadius: "6px",
                  background: "#fff",
                }}
              >
                <div
                  style={{
                    position: "absolute",
                    left: "14px",
                    top: "50%",
                    transform: "translateY(-50%)",
                    color: "#9370DB",
                    fontSize: "18px",
                  }}
                >
                  📍
                </div>
                <input
                  type="text"
                  placeholder="City, spa name, or hotel..."
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                  style={{
                    width: "100%",
                    padding: "16px 14px 16px 50px",
                    border: "none",
                    outline: "none",
                    fontSize: "14px",
                    borderRadius: "4px",
                  }}
                />
              </div>
            </div>

            {/* Date & Time */}
            <div>
              <label
                style={{
                  display: "block",
                  fontSize: "0.75rem",
                  fontWeight: "600",
                  color: "#333",
                  marginBottom: "6px",
                  textTransform: "uppercase",
                  letterSpacing: "0.5px",
                }}
              >
                Date & Time
              </label>
              <div
                style={{
                  border: "3px solid #9370DB",
                  borderRadius: "6px",
                  background: "#fff",
                  display: "flex",
                }}
              >
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
                    borderRadius: "4px 0 0 4px",
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
                    background: "#fff",
                  }}
                >
                  {Array.from({ length: 12 }, (_, i) => {
                    const hour = (i + 9).toString().padStart(2, "0");
                    return (
                      <option key={hour} value={`${hour}:00`}>
                        {hour}:00
                      </option>
                    );
                  })}
                </select>
              </div>
            </div>

            {/* Treatment Type */}
            <div>
              <label
                style={{
                  display: "block",
                  fontSize: "0.75rem",
                  fontWeight: "600",
                  color: "#333",
                  marginBottom: "6px",
                  textTransform: "uppercase",
                  letterSpacing: "0.5px",
                }}
              >
                Treatment
              </label>
              <select
                value={treatmentType}
                onChange={(e) => setTreatmentType(e.target.value)}
                style={{
                  width: "100%",
                  padding: "16px 12px",
                  border: "3px solid #9370DB",
                  borderRadius: "6px",
                  outline: "none",
                  fontSize: "14px",
                  background: "#fff",
                }}
              >
                <option value="">Any Treatment</option>
                <option value="massage">Massage</option>
                <option value="facial">Facial</option>
                <option value="body-treatment">Body Treatment</option>
                <option value="sauna">Sauna & Steam</option>
                <option value="wellness">Wellness Package</option>
                <option value="couples">Couples Treatment</option>
              </select>
            </div>

            {/* Guests */}
            <div>
              <label
                style={{
                  display: "block",
                  fontSize: "0.75rem",
                  fontWeight: "600",
                  color: "#333",
                  marginBottom: "6px",
                  textTransform: "uppercase",
                  letterSpacing: "0.5px",
                }}
              >
                Guests
              </label>
              <select
                value={guests}
                onChange={(e) => setGuests(e.target.value)}
                style={{
                  width: "100%",
                  padding: "16px 12px",
                  border: "3px solid #9370DB",
                  borderRadius: "6px",
                  outline: "none",
                  fontSize: "14px",
                  background: "#fff",
                }}
              >
                <option value="1">1 Guest</option>
                <option value="2">2 Guests</option>
                <option value="3">3 Guests</option>
                <option value="4">4+ Guests</option>
              </select>
            </div>

            {/* Search Button */}
            <button
              style={{
                padding: "16px 20px",
                background: "linear-gradient(135deg, #9370DB, #663399)",
                color: "#fff",
                border: "none",
                borderRadius: "6px",
                fontSize: "16px",
                fontWeight: "600",
                cursor: "pointer",
                height: "54px",
                transition: "all 0.2s ease",
                boxShadow: "0 4px 15px rgba(147, 112, 219, 0.3)",
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.background =
                  "linear-gradient(135deg, #8A2BE2, #4B0082)";
                e.currentTarget.style.transform = "translateY(-2px)";
                e.currentTarget.style.boxShadow =
                  "0 6px 20px rgba(147, 112, 219, 0.4)";
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.background =
                  "linear-gradient(135deg, #9370DB, #663399)";
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow =
                  "0 4px 15px rgba(147, 112, 219, 0.3)";
              }}
            >
              Search Spas
            </button>
          </div>

          {/* Quick Filters */}
          <div
            style={{
              marginTop: "1.5rem",
              paddingTop: "1.5rem",
              borderTop: "1px solid #e0e0e0",
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "1rem",
                flexWrap: "wrap",
              }}
            >
              <span
                style={{
                  fontSize: "0.9rem",
                  fontWeight: "600",
                  color: "#666",
                }}
              >
                Popular:
              </span>
              {[
                "Hot Stone Massage",
                "Couples Spa",
                "Day Spa Package",
                "Facial Treatment",
                "Wellness Retreat",
              ].map((filter, index) => (
                <button
                  key={index}
                  style={{
                    padding: "0.5rem 1rem",
                    background: "#f8f5ff",
                    color: "#9370DB",
                    border: "2px solid #9370DB",
                    borderRadius: "20px",
                    fontSize: "0.8rem",
                    fontWeight: "500",
                    cursor: "pointer",
                    transition: "all 0.2s ease",
                  }}
                  onMouseOver={(e) => {
                    e.currentTarget.style.background = "#9370DB";
                    e.currentTarget.style.color = "#fff";
                  }}
                  onMouseOut={(e) => {
                    e.currentTarget.style.background = "#f8f5ff";
                    e.currentTarget.style.color = "#9370DB";
                  }}
                >
                  {filter}
                </button>
              ))}
            </div>
          </div>
        </div>
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
                placeholder="Search spas by name, location, or treatment type..."
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
                <option value="duration">Duration</option>
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
            Showing {filteredAndSortedSpas.length} of {spas.length} spa
            experiences
          </div>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(380px, 1fr))",
            gap: "2rem",
          }}
        >
          {filteredAndSortedSpas.map((spa) => (
            <Link
              key={spa.id}
              href={`/spa/${spa.id}`}
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
                    height: "240px",
                    overflow: "hidden",
                  }}
                >
                  <Image
                    src={spa.image}
                    alt={spa.name}
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
                    ★ {spa.rating}
                  </div>
                  <div
                    style={{
                      position: "absolute",
                      top: "1rem",
                      left: "1rem",
                      background: getCategoryColor(spa.category),
                      color: "#fff",
                      padding: "0.4rem 0.8rem",
                      borderRadius: "15px",
                      fontSize: "0.8rem",
                      fontWeight: "600",
                    }}
                  >
                    {spa.category}
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
                    {spa.duration}
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
                    {spa.reviews} reviews
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
                    {spa.name}
                  </h3>

                  <p
                    style={{
                      color: "#999",
                      fontSize: "0.95rem",
                      marginBottom: "0.5rem",
                    }}
                  >
                    📍 {spa.location}
                  </p>

                  <p
                    style={{
                      color: "#666",
                      fontSize: "0.95rem",
                      marginBottom: "1rem",
                      lineHeight: "1.5",
                    }}
                  >
                    {spa.description}
                  </p>

                  <div
                    style={{
                      display: "flex",
                      flexWrap: "wrap",
                      gap: "0.5rem",
                      marginBottom: "1rem",
                    }}
                  >
                    {spa.treatments.map((treatment, index) => (
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
                        {treatment}
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
                          ${spa.price}
                        </span>
                        <span
                          style={{
                            fontSize: "1rem",
                            color: "#999",
                            textDecoration: "line-through",
                          }}
                        >
                          ${spa.originalPrice}
                        </span>
                      </div>
                      <p
                        style={{
                          fontSize: "0.9rem",
                          color: "#666",
                          margin: "0.25rem 0 0 0",
                        }}
                      >
                        per session
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
                      Book Now
                    </button>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {filteredAndSortedSpas.length === 0 && (
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
              No spa treatments found
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
            Spa Reviews
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
                name: "Isabella Taylor",
                location: "Beverly Hills, USA",
                rating: 5,
                review:
                  "Absolutely divine spa experience! The treatments were luxurious and the staff was incredibly professional. Perfect for relaxation.",
                date: "4 days ago",
                avatar: "💆‍♀️",
              },
              {
                name: "Rajesh Patel",
                location: "Mumbai, India",
                rating: 5,
                review:
                  "Outstanding spa services with authentic treatments. The ambiance was serene and the therapists were highly skilled.",
                date: "1 week ago",
                avatar: "🧘‍♂️",
              },
              {
                name: "Olivia Schmidt",
                location: "Zurich, Switzerland",
                rating: 4,
                review:
                  "Wonderful spa facilities and excellent customer service. The booking process was seamless and the treatments exceeded expectations.",
                date: "10 days ago",
                avatar: "🌸",
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
                      background: "linear-gradient(135deg, #FF385C, #E6315A)",
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

export default SpaPage;
