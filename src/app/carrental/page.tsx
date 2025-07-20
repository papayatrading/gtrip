"use client";
import React, { useState, useMemo } from "react";
import Image from "next/image";
import Link from "next/link";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

const CarRentalPage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [sortBy, setSortBy] = useState("name");
  const [pickupLocation, setPickupLocation] = useState("");
  const [dropoffLocation, setDropoffLocation] = useState("");
  const [sameLocation, setSameLocation] = useState(true);
  const [pickupDate, setPickupDate] = useState("");
  const [dropoffDate, setDropoffDate] = useState("");
  const [pickupTime, setPickupTime] = useState("10:00");
  const [dropoffTime, setDropoffTime] = useState("10:00");
  const [driverAge, setDriverAge] = useState("30-65");

  const cars = [
    {
      id: 1,
      name: "Toyota Camry",
      type: "Economy",
      image: "/carrental/assistant-is-helping-customer-man-with-woman-white-clothes-are-car-dealership-together.jpg",
      price: 45,
      originalPrice: 65,
      rating: 4.7,
      reviews: 892,
      features: ["Automatic", "5 Seats", "Air Conditioning", "Bluetooth"],
      description: "Reliable and fuel-efficient car perfect for city driving"
    },
    {
      id: 2,
      name: "BMW X5",
      type: "Luxury SUV",
      image: "/carrental/car-headlight-couple-making-deal-with-car-dealer.jpg",
      price: 125,
      originalPrice: 150,
      rating: 4.9,
      reviews: 456,
      features: ["Automatic", "7 Seats", "Leather Interior", "GPS Navigation"],
      description: "Premium SUV with spacious interior and advanced features"
    },
    {
      id: 3,
      name: "Honda Civic",
      type: "Compact",
      image: "/carrental/lateral-view-car-dealer-welcoming-lovely-couple.jpg",
      price: 38,
      originalPrice: 55,
      rating: 4.6,
      reviews: 623,
      features: ["Manual", "5 Seats", "Air Conditioning", "USB Charging"],
      description: "Compact and economical choice for budget-conscious travelers"
    },
    {
      id: 4,
      name: "Mercedes C-Class",
      type: "Luxury",
      image: "/carrental/man-woman-having-business-trip-traveling-by-car.jpg",
      price: 95,
      originalPrice: 120,
      rating: 4.8,
      reviews: 324,
      features: ["Automatic", "5 Seats", "Premium Sound", "Sunroof"],
      description: "Elegant luxury sedan with premium comfort and style"
    },
    {
      id: 5,
      name: "Ford Explorer",
      type: "SUV",
      image: "/carrental/salesman-woman-looking-car-car-showroom.jpg",
      price: 78,
      originalPrice: 95,
      rating: 4.5,
      reviews: 789,
      features: ["Automatic", "7 Seats", "4WD", "Cargo Space"],
      description: "Spacious SUV ideal for family trips and outdoor adventures"
    },
    {
      id: 6,
      name: "Nissan Altima",
      type: "Mid-size",
      image: "/carrental/seller-passes-keys-new-car-young-family-buying-new-car.jpg",
      price: 52,
      originalPrice: 70,
      rating: 4.4,
      reviews: 567,
      features: ["Automatic", "5 Seats", "Backup Camera", "Keyless Entry"],
      description: "Comfortable mid-size sedan with modern safety features"
    },
    {
      id: 7,
      name: "Audi A4",
      type: "Luxury",
      image: "/carrental/woman-choosing-car-car-showroom.jpg",
      price: 89,
      originalPrice: 110,
      rating: 4.7,
      reviews: 234,
      features: ["Automatic", "5 Seats", "Quattro AWD", "Digital Display"],
      description: "Premium sedan combining performance with sophisticated design"
    },
    {
      id: 8,
      name: "Chevrolet Malibu",
      type: "Mid-size",
      image: "/carrental/woman-sitting-red-car-receiving-keys.jpg",
      price: 48,
      originalPrice: 68,
      rating: 4.3,
      reviews: 445,
      features: ["Automatic", "5 Seats", "Apple CarPlay", "Lane Assist"],
      description: "Modern mid-size car with advanced technology and safety features"
    },
    {
      id: 9,
      name: "Range Rover Sport",
      type: "Luxury SUV",
      image: "/carrental/young-couple-choosing-car-car-showroom.jpg",
      price: 165,
      originalPrice: 200,
      rating: 4.9,
      reviews: 178,
      features: ["Automatic", "5 Seats", "Off-road Capable", "Premium Interior"],
      description: "Ultimate luxury SUV for those who demand the finest"
    },
    {
      id: 10,
      name: "Volkswagen Jetta",
      type: "Compact",
      image: "/carrental/young-couple-talking-sales-person-car-showroom.jpg",
      price: 42,
      originalPrice: 58,
      rating: 4.5,
      reviews: 356,
      features: ["Automatic", "5 Seats", "Fuel Efficient", "Safety Features"],
      description: "German engineering in a compact package with excellent fuel economy"
    }
  ];

  const filteredAndSortedCars = useMemo(() => {
    let filtered = cars.filter(car =>
      car.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      car.type.toLowerCase().includes(searchTerm.toLowerCase()) ||
      car.description.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return filtered.sort((a, b) => {
      switch (sortBy) {
        case "price":
          return a.price - b.price;
        case "rating":
          return b.rating - a.rating;
        case "type":
          return a.type.localeCompare(b.type);
        case "name":
        default:
          return a.name.localeCompare(b.name);
      }
    });
  }, [searchTerm, sortBy]);

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'Economy': return '#28a745';
      case 'Compact': return '#17a2b8';
      case 'Mid-size': return '#ffc107';
      case 'Luxury': return '#6f42c1';
      case 'SUV': return '#fd7e14';
      case 'Luxury SUV': return '#dc3545';
      default: return '#6c757d';
    }
  };

  return (
    <div style={{ backgroundColor: "#f8f9fa", minHeight: "100vh" }}>
      <Navbar />
      
      <div style={{
        background: "#dc3545",
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
          Rent Your Perfect Car
        </h1>
        <p style={{
          fontSize: "1.3rem",
          opacity: "0.9",
          maxWidth: "600px",
          margin: "0 auto"
        }}>
          Choose from our wide selection of vehicles for every journey
        </p>
      </div>

      <div style={{
        maxWidth: "1200px",
        margin: "0 auto",
        padding: "2rem"
      }}>
        {/* Booking.com Style Search Bar */}
        <div style={{
          background: "#fff",
          borderRadius: "6px",
          padding: "1rem",
          boxShadow: "0 4px 16px rgba(0,0,0,0.08)",
          border: "2px solid #FEBB02",
          marginBottom: "2rem"
        }}>
          <div style={{
            display: "flex",
            alignItems: "center",
            gap: "0.5rem",
            marginBottom: "1rem"
          }}>
            <div style={{
              width: "16px",
              height: "16px",
              borderRadius: "50%",
              background: "#0071c2",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "#fff",
              fontSize: "10px",
              fontWeight: "bold"
            }}>🚗</div>
            <h3 style={{
              fontSize: "1rem",
              fontWeight: "600",
              color: "#333",
              margin: 0
            }}>Car rentals</h3>
          </div>

          <div style={{
            display: "grid",
            gridTemplateColumns: "1.5fr 1.5fr 1fr 1fr 0.8fr 80px",
            gap: "6px",
            alignItems: "end"
          }}>
            {/* Pickup Location */}
            <div style={{ position: "relative" }}>
              <label style={{
                display: "block",
                fontSize: "0.65rem",
                fontWeight: "600",
                color: "#333",
                marginBottom: "3px",
                textTransform: "uppercase",
                letterSpacing: "0.3px"
              }}>Pick-up</label>
              <div style={{
                position: "relative",
                border: "2px solid #0071c2",
                borderRadius: "3px",
                background: "#fff"
              }}>
                <div style={{
                  position: "absolute",
                  left: "8px",
                  top: "50%",
                  transform: "translateY(-50%)",
                  color: "#0071c2",
                  fontSize: "14px"
                }}>📍</div>
                <input
                  type="text"
                  placeholder="City, airport..."
                  value={pickupLocation}
                  onChange={(e) => setPickupLocation(e.target.value)}
                  style={{
                    width: "100%",
                    padding: "10px 8px 10px 32px",
                    border: "none",
                    outline: "none",
                    fontSize: "12px",
                    borderRadius: "2px"
                  }}
                />
              </div>
            </div>

            {/* Drop-off Location */}
            <div style={{ position: "relative" }}>
              <label style={{
                display: "block",
                fontSize: "0.65rem",
                fontWeight: "600",
                color: "#333",
                marginBottom: "3px",
                textTransform: "uppercase",
                letterSpacing: "0.3px"
              }}>Drop-off</label>
              <div style={{
                position: "relative",
                border: sameLocation ? "2px solid #e0e0e0" : "2px solid #0071c2",
                borderRadius: "3px",
                background: sameLocation ? "#f5f5f5" : "#fff"
              }}>
                <div style={{
                  position: "absolute",
                  left: "8px",
                  top: "50%",
                  transform: "translateY(-50%)",
                  color: sameLocation ? "#999" : "#0071c2",
                  fontSize: "14px"
                }}>📍</div>
                <input
                  type="text"
                  placeholder={sameLocation ? "Same location" : "City, airport..."}
                  value={sameLocation ? "" : dropoffLocation}
                  onChange={(e) => setDropoffLocation(e.target.value)}
                  disabled={sameLocation}
                  style={{
                    width: "100%",
                    padding: "10px 8px 10px 32px",
                    border: "none",
                    outline: "none",
                    fontSize: "12px",
                    borderRadius: "2px",
                    background: "transparent",
                    color: sameLocation ? "#999" : "#333"
                  }}
                />
              </div>
              <div style={{
                display: "flex",
                alignItems: "center",
                gap: "4px",
                marginTop: "4px"
              }}>
                <input
                  type="checkbox"
                  checked={sameLocation}
                  onChange={(e) => setSameLocation(e.target.checked)}
                  style={{ accentColor: "#0071c2", transform: "scale(0.8)" }}
                />
                <span style={{ fontSize: "10px", color: "#666" }}>Same location</span>
              </div>
            </div>

            {/* Pickup Date & Time */}
            <div>
              <label style={{
                display: "block",
                fontSize: "0.65rem",
                fontWeight: "600",
                color: "#333",
                marginBottom: "3px",
                textTransform: "uppercase",
                letterSpacing: "0.3px"
              }}>Pick-up</label>
              <div style={{
                border: "2px solid #0071c2",
                borderRadius: "3px",
                background: "#fff",
                display: "flex"
              }}>
                <input
                  type="date"
                  value={pickupDate}
                  onChange={(e) => setPickupDate(e.target.value)}
                  style={{
                    flex: 1,
                    padding: "10px 8px",
                    border: "none",
                    outline: "none",
                    fontSize: "11px",
                    borderRadius: "2px 0 0 2px"
                  }}
                />
                <select
                  value={pickupTime}
                  onChange={(e) => setPickupTime(e.target.value)}
                  style={{
                    padding: "10px 6px",
                    border: "none",
                    borderLeft: "1px solid #e0e0e0",
                    outline: "none",
                    fontSize: "11px",
                    borderRadius: "0 2px 2px 0",
                    background: "#fff"
                  }}
                >
                  {Array.from({length: 24}, (_, i) => {
                    const hour = i.toString().padStart(2, '0');
                    return (
                      <option key={hour} value={`${hour}:00`}>{hour}:00</option>
                    );
                  })}
                </select>
              </div>
            </div>

            {/* Drop-off Date & Time */}
            <div>
              <label style={{
                display: "block",
                fontSize: "0.65rem",
                fontWeight: "600",
                color: "#333",
                marginBottom: "3px",
                textTransform: "uppercase",
                letterSpacing: "0.3px"
              }}>Drop-off</label>
              <div style={{
                border: "2px solid #0071c2",
                borderRadius: "3px",
                background: "#fff",
                display: "flex"
              }}>
                <input
                  type="date"
                  value={dropoffDate}
                  onChange={(e) => setDropoffDate(e.target.value)}
                  style={{
                    flex: 1,
                    padding: "10px 8px",
                    border: "none",
                    outline: "none",
                    fontSize: "11px",
                    borderRadius: "2px 0 0 2px"
                  }}
                />
                <select
                  value={dropoffTime}
                  onChange={(e) => setDropoffTime(e.target.value)}
                  style={{
                    padding: "10px 6px",
                    border: "none",
                    borderLeft: "1px solid #e0e0e0",
                    outline: "none",
                    fontSize: "11px",
                    borderRadius: "0 2px 2px 0",
                    background: "#fff"
                  }}
                >
                  {Array.from({length: 24}, (_, i) => {
                    const hour = i.toString().padStart(2, '0');
                    return (
                      <option key={hour} value={`${hour}:00`}>{hour}:00</option>
                    );
                  })}
                </select>
              </div>
            </div>

            {/* Driver Age */}
            <div>
              <label style={{
                display: "block",
                fontSize: "0.65rem",
                fontWeight: "600",
                color: "#333",
                marginBottom: "3px",
                textTransform: "uppercase",
                letterSpacing: "0.3px"
              }}>Age</label>
              <select
                value={driverAge}
                onChange={(e) => setDriverAge(e.target.value)}
                style={{
                  width: "100%",
                  padding: "10px 8px",
                  border: "2px solid #0071c2",
                  borderRadius: "3px",
                  outline: "none",
                  fontSize: "11px",
                  background: "#fff"
                }}
              >
                <option value="18-25">18-25</option>
                <option value="26-29">26-29</option>
                <option value="30-65">30-65</option>
                <option value="66-75">66-75</option>
              </select>
            </div>

            {/* Search Button */}
            <button
              style={{
                padding: "10px 12px",
                background: "#0071c2",
                color: "#fff",
                border: "none",
                borderRadius: "3px",
                fontSize: "12px",
                fontWeight: "600",
                cursor: "pointer",
                height: "36px",
                transition: "background 0.2s ease"
              }}
              onMouseOver={(e) => e.currentTarget.style.background = "#005999"}
              onMouseOut={(e) => e.currentTarget.style.background = "#0071c2"}
            >
              Search
            </button>
          </div>
        </div>


        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(380px, 1fr))",
          gap: "2rem"
        }}>
          {filteredAndSortedCars.map((car) => (
            <Link
              key={car.id}
              href={`/carrental/${car.id}`}
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
              <div style={{ position: "relative", height: "220px", overflow: "hidden" }}>
                <Image
                  src={car.image}
                  alt={car.name}
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
                  ★ {car.rating}
                </div>
                <div style={{
                  position: "absolute",
                  top: "1rem",
                  left: "1rem",
                  background: getTypeColor(car.type),
                  color: "#fff",
                  padding: "0.4rem 0.8rem",
                  borderRadius: "15px",
                  fontSize: "0.8rem",
                  fontWeight: "600"
                }}>
                  {car.type}
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
                  {car.reviews} reviews
                </div>
              </div>
              
              <div style={{ padding: "1.5rem" }}>
                <h3 style={{
                  fontSize: "1.4rem",
                  fontWeight: "600",
                  color: "#333",
                  marginBottom: "0.5rem"
                }}>
                  {car.name}
                </h3>
                
                <p style={{
                  color: "#666",
                  fontSize: "0.95rem",
                  marginBottom: "1rem",
                  lineHeight: "1.5"
                }}>
                  {car.description}
                </p>
                
                <div style={{
                  display: "flex",
                  flexWrap: "wrap",
                  gap: "0.5rem",
                  marginBottom: "1rem"
                }}>
                  {car.features.map((feature, index) => (
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
                      {feature}
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
                        ${car.price}
                      </span>
                      <span style={{
                        fontSize: "1rem",
                        color: "#999",
                        textDecoration: "line-through"
                      }}>
                        ${car.originalPrice}
                      </span>
                    </div>
                    <p style={{
                      fontSize: "0.9rem",
                      color: "#666",
                      margin: "0.25rem 0 0 0"
                    }}>
                      per day
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
                    Rent Now
                  </button>
                </div>
              </div>
            </div>
            </Link>
          ))}
        </div>

        {filteredAndSortedCars.length === 0 && (
          <div style={{
            textAlign: "center",
            padding: "3rem",
            background: "#fff",
            borderRadius: "12px",
            boxShadow: "0 4px 20px rgba(0,0,0,0.1)"
          }}>
            <h3 style={{ color: "#666", marginBottom: "1rem" }}>No vehicles found</h3>
            <p style={{ color: "#999" }}>Try adjusting your search criteria</p>
          </div>
        )}
      </div>

      <Footer />
    </div>
  );
};

export default CarRentalPage;