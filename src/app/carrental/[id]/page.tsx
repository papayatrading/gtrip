"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import Footer from "../../../components/Footer";

interface CarRentalDetailsPageProps {
  params: { id: string };
}

const CarRentalDetailsPage: React.FC<CarRentalDetailsPageProps> = ({
  params,
}) => {
  const cars = [
    {
      id: 1,
      name: "Toyota Camry",
      type: "Economy",
      image:
        "/carrental/assistant-is-helping-customer-man-with-woman-white-clothes-are-car-dealership-together.webp",
      price: 45,
      originalPrice: 65,
      rating: 4.7,
      reviews: 892,
      features: ["Automatic", "5 Seats", "Air Conditioning", "Bluetooth"],
      description: "Reliable and fuel-efficient car perfect for city driving",
      longDescription:
        "The Toyota Camry is a dependable mid-size sedan that combines comfort with fuel efficiency. Perfect for business trips or family vacations, this vehicle offers a smooth driving experience with modern amenities. The spacious interior provides comfort for up to 5 passengers, while the efficient engine ensures excellent fuel economy for your journey.",
      specifications: {
        engine: "2.5L 4-Cylinder",
        transmission: "Automatic CVT",
        fuelType: "Gasoline",
        mpg: "32 city / 41 highway",
        doors: "4 doors",
        luggage: "2 large bags, 2 small bags",
      },
      included: [
        "Unlimited mileage",
        "Basic insurance",
        "24/7 roadside assistance",
        "Free cancellation",
        "Additional driver",
      ],
      requirements: [
        "Valid driver's license",
        "Minimum age 21",
        "Credit card required",
        "Clean driving record",
      ],
      pickupLocations: [
        "Airport Terminal 1",
        "Downtown Location",
        "Hotel District",
        "Train Station",
      ],
    },
    {
      id: 2,
      name: "BMW X5",
      type: "Luxury SUV",
      image: "/carrental/car-headlight-couple-making-deal-with-car-dealer.webp",
      price: 125,
      originalPrice: 150,
      rating: 4.9,
      reviews: 456,
      features: ["Automatic", "7 Seats", "Leather Interior", "GPS Navigation"],
      description: "Premium SUV with spacious interior and advanced features",
      longDescription:
        "Experience luxury and performance with the BMW X5. This premium SUV combines elegant design with cutting-edge technology and exceptional comfort. With seating for up to 7 passengers and advanced safety features, it's perfect for larger groups or families who want to travel in style and comfort.",
      specifications: {
        engine: "3.0L Turbocharged I6",
        transmission: "8-Speed Automatic",
        fuelType: "Gasoline",
        mpg: "22 city / 29 highway",
        doors: "4 doors",
        luggage: "4 large bags, 4 small bags",
      },
      included: [
        "Unlimited mileage",
        "Premium insurance",
        "24/7 concierge service",
        "GPS navigation",
        "Additional driver",
      ],
      requirements: [
        "Valid driver's license",
        "Minimum age 25",
        "Credit card required",
        "Premium driving record",
      ],
      pickupLocations: [
        "Airport VIP Terminal",
        "Luxury Car Center",
        "Downtown Premium",
        "Resort Location",
      ],
    },
    {
      id: 3,
      name: "Honda Civic",
      type: "Compact",
      image: "/carrental/lateral-view-car-dealer-welcoming-lovely-couple.webp",
      price: 38,
      originalPrice: 55,
      rating: 4.6,
      reviews: 623,
      features: ["Manual", "5 Seats", "Air Conditioning", "USB Charging"],
      description:
        "Compact and economical choice for budget-conscious travelers",
      longDescription:
        "The Honda Civic offers exceptional value for money with its compact design and excellent fuel efficiency. Ideal for city exploration and short trips, this reliable vehicle provides comfortable seating for up to 5 passengers while maintaining low operating costs and easy maneuverability in urban environments.",
      specifications: {
        engine: "2.0L 4-Cylinder",
        transmission: "6-Speed Manual",
        fuelType: "Gasoline",
        mpg: "31 city / 40 highway",
        doors: "4 doors",
        luggage: "1 large bag, 3 small bags",
      },
      included: [
        "Unlimited mileage",
        "Basic insurance",
        "24/7 roadside assistance",
        "Free cancellation",
      ],
      requirements: [
        "Valid driver's license",
        "Minimum age 18",
        "Credit card or debit card",
        "Basic driving record",
      ],
      pickupLocations: [
        "Economy Car Center",
        "Budget Terminal",
        "City Center",
        "Student District",
      ],
    },
    {
      id: 4,
      name: "Mercedes C-Class",
      type: "Luxury",
      image: "/carrental/man-woman-having-business-trip-traveling-by-car.webp",
      price: 95,
      originalPrice: 120,
      rating: 4.8,
      reviews: 324,
      features: ["Automatic", "5 Seats", "Premium Sound", "Sunroof"],
      description: "Elegant luxury sedan with premium comfort and style",
      longDescription:
        "The Mercedes C-Class represents the pinnacle of luxury sedan driving. With its sophisticated design, premium materials, and advanced technology, this vehicle offers an unparalleled driving experience. Perfect for business travel or special occasions where you want to make a lasting impression.",
      specifications: {
        engine: "2.0L Turbocharged I4",
        transmission: "9-Speed Automatic",
        fuelType: "Gasoline",
        mpg: "24 city / 35 highway",
        doors: "4 doors",
        luggage: "3 large bags, 2 small bags",
      },
      included: [
        "Unlimited mileage",
        "Premium insurance",
        "Luxury concierge",
        "Premium sound system",
        "Additional driver",
      ],
      requirements: [
        "Valid driver's license",
        "Minimum age 25",
        "Credit card required",
        "Clean driving record",
      ],
      pickupLocations: [
        "Premium Terminal",
        "Business District",
        "Luxury Hotels",
        "Executive Center",
      ],
    },
    {
      id: 5,
      name: "Ford Explorer",
      type: "SUV",
      image: "/carrental/salesman-woman-looking-car-car-showroom.webp",
      price: 78,
      originalPrice: 95,
      rating: 4.5,
      reviews: 789,
      features: ["Automatic", "7 Seats", "4WD", "Cargo Space"],
      description: "Spacious SUV ideal for family trips and outdoor adventures",
      longDescription:
        "The Ford Explorer is built for adventure and family travel. With its robust 4WD system and spacious interior, this SUV can handle both city streets and off-road terrain. The generous cargo space and comfortable seating for up to 7 passengers make it perfect for family vacations and group trips.",
      specifications: {
        engine: "3.3L Hybrid V6",
        transmission: "10-Speed Automatic",
        fuelType: "Hybrid",
        mpg: "27 city / 29 highway",
        doors: "4 doors",
        luggage: "6 large bags, 4 small bags",
      },
      included: [
        "Unlimited mileage",
        "Comprehensive insurance",
        "GPS navigation",
        "Roadside assistance",
        "Additional driver",
      ],
      requirements: [
        "Valid driver's license",
        "Minimum age 23",
        "Credit card required",
        "SUV driving experience",
      ],
      pickupLocations: [
        "Family Car Center",
        "Adventure Hub",
        "Suburban Location",
        "Outdoor Gear Center",
      ],
    },
    {
      id: 6,
      name: "Nissan Altima",
      type: "Mid-size",
      image:
        "/carrental/seller-passes-keys-new-car-young-family-buying-new-car.webp",
      price: 52,
      originalPrice: 70,
      rating: 4.4,
      reviews: 567,
      features: ["Automatic", "5 Seats", "Backup Camera", "Keyless Entry"],
      description: "Comfortable mid-size sedan with modern safety features",
      longDescription:
        "The Nissan Altima strikes the perfect balance between comfort, efficiency, and modern technology. This mid-size sedan offers a smooth ride with advanced safety features and user-friendly technology. Ideal for longer trips where comfort and reliability are paramount.",
      specifications: {
        engine: "2.5L 4-Cylinder",
        transmission: "CVT Automatic",
        fuelType: "Gasoline",
        mpg: "28 city / 39 highway",
        doors: "4 doors",
        luggage: "2 large bags, 3 small bags",
      },
      included: [
        "Unlimited mileage",
        "Standard insurance",
        "Safety features",
        "Roadside assistance",
        "Additional driver",
      ],
      requirements: [
        "Valid driver's license",
        "Minimum age 21",
        "Credit card required",
        "Clean driving record",
      ],
      pickupLocations: [
        "Standard Terminal",
        "City Center",
        "Business District",
        "Hotel Pickup",
      ],
    },
    {
      id: 7,
      name: "Audi A4",
      type: "Luxury",
      image: "/carrental/woman-choosing-car-car-showroom.webp",
      price: 89,
      originalPrice: 110,
      rating: 4.7,
      reviews: 234,
      features: ["Automatic", "5 Seats", "Quattro AWD", "Digital Display"],
      description:
        "Premium sedan combining performance with sophisticated design",
      longDescription:
        "The Audi A4 delivers German engineering excellence with its perfect blend of performance, luxury, and technology. The legendary Quattro all-wheel drive system provides superior handling in all weather conditions, while the refined interior offers premium comfort and cutting-edge digital features.",
      specifications: {
        engine: "2.0L Turbocharged I4",
        transmission: "7-Speed S tronic",
        fuelType: "Gasoline",
        mpg: "25 city / 34 highway",
        doors: "4 doors",
        luggage: "3 large bags, 2 small bags",
      },
      included: [
        "Unlimited mileage",
        "Premium insurance",
        "Quattro AWD",
        "Digital cockpit",
        "Additional driver",
      ],
      requirements: [
        "Valid driver's license",
        "Minimum age 25",
        "Credit card required",
        "Premium driving record",
      ],
      pickupLocations: [
        "Premium Terminal",
        "Audi Dealership",
        "Luxury District",
        "Business Center",
      ],
    },
    {
      id: 8,
      name: "Chevrolet Malibu",
      type: "Mid-size",
      image: "/carrental/woman-sitting-red-car-receiving-keys.webp",
      price: 48,
      originalPrice: 68,
      rating: 4.3,
      reviews: 445,
      features: ["Automatic", "5 Seats", "Apple CarPlay", "Lane Assist"],
      description:
        "Modern mid-size car with advanced technology and safety features",
      longDescription:
        "The Chevrolet Malibu represents modern automotive technology with its comprehensive suite of safety features and connectivity options. With Apple CarPlay integration and advanced driver assistance systems, this sedan makes every journey safer and more enjoyable.",
      specifications: {
        engine: "1.5L Turbocharged I4",
        transmission: "CVT Automatic",
        fuelType: "Gasoline",
        mpg: "29 city / 36 highway",
        doors: "4 doors",
        luggage: "2 large bags, 3 small bags",
      },
      included: [
        "Unlimited mileage",
        "Technology package",
        "Safety features",
        "Roadside assistance",
        "Additional driver",
      ],
      requirements: [
        "Valid driver's license",
        "Minimum age 21",
        "Credit card required",
        "Clean driving record",
      ],
      pickupLocations: [
        "Tech Center",
        "Modern Terminal",
        "City Location",
        "Innovation Hub",
      ],
    },
    {
      id: 9,
      name: "Range Rover Sport",
      type: "Luxury SUV",
      image: "/carrental/young-couple-choosing-car-car-showroom.webp",
      price: 165,
      originalPrice: 200,
      rating: 4.9,
      reviews: 178,
      features: [
        "Automatic",
        "5 Seats",
        "Off-road Capable",
        "Premium Interior",
      ],
      description: "Ultimate luxury SUV for those who demand the finest",
      longDescription:
        "The Range Rover Sport represents the pinnacle of luxury SUV engineering. Combining legendary off-road capability with supreme on-road refinement, this vehicle offers an unmatched driving experience. Perfect for those who refuse to compromise between luxury and adventure.",
      specifications: {
        engine: "3.0L Supercharged V6",
        transmission: "8-Speed Automatic",
        fuelType: "Gasoline",
        mpg: "20 city / 25 highway",
        doors: "4 doors",
        luggage: "5 large bags, 3 small bags",
      },
      included: [
        "Unlimited mileage",
        "Ultra-premium insurance",
        "Concierge service",
        "Off-road capability",
        "White-glove service",
      ],
      requirements: [
        "Valid driver's license",
        "Minimum age 30",
        "Premium credit card",
        "Luxury vehicle experience",
      ],
      pickupLocations: [
        "Exclusive Terminal",
        "Range Rover Showroom",
        "Ultra-Luxury Center",
        "VIP Location",
      ],
    },
    {
      id: 10,
      name: "Volkswagen Jetta",
      type: "Compact",
      image: "/carrental/young-couple-talking-sales-person-car-showroom.webp",
      price: 42,
      originalPrice: 58,
      rating: 4.5,
      reviews: 356,
      features: ["Automatic", "5 Seats", "Fuel Efficient", "Safety Features"],
      description:
        "German engineering in a compact package with excellent fuel economy",
      longDescription:
        "The Volkswagen Jetta showcases German engineering excellence in a compact, efficient package. Known for its solid build quality and excellent fuel economy, this sedan provides a refined driving experience that's both practical and enjoyable for everyday use and longer journeys.",
      specifications: {
        engine: "1.4L Turbocharged I4",
        transmission: "8-Speed Automatic",
        fuelType: "Gasoline",
        mpg: "30 city / 40 highway",
        doors: "4 doors",
        luggage: "2 large bags, 2 small bags",
      },
      included: [
        "Unlimited mileage",
        "German engineering",
        "Safety package",
        "Roadside assistance",
        "Additional driver",
      ],
      requirements: [
        "Valid driver's license",
        "Minimum age 20",
        "Credit card required",
        "Clean driving record",
      ],
      pickupLocations: [
        "European Car Center",
        "Efficiency Terminal",
        "Compact Location",
        "Green Travel Hub",
      ],
    },
  ];

  const car = cars.find((c) => c.id === parseInt(params.id));

  if (!car) {
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
            Car Not Found
          </h1>
          <p style={{ color: "#666", marginBottom: "2rem" }}>
            The vehicle you're looking for doesn't exist.
          </p>
          <Link
            href="/carrental"
            style={{
              background: "#FF385C",
              color: "#fff",
              textDecoration: "none",
              padding: "1rem 2rem",
              borderRadius: "8px",
              fontWeight: "600",
            }}
          >
            Back to Car Rentals
          </Link>
        </div>
        <Footer />
      </div>
    );
  }

  const getTypeColor = (type: string) => {
    switch (type) {
      case "Economy":
        return "#28a745";
      case "Compact":
        return "#17a2b8";
      case "Mid-size":
        return "#ffc107";
      case "Luxury":
        return "#6f42c1";
      case "SUV":
        return "#fd7e14";
      case "Luxury SUV":
        return "#dc3545";
      default:
        return "#6c757d";
    }
  };

  return (
    <div style={{ backgroundColor: "#f8f9fa", minHeight: "100vh" }}>
      <div style={{ position: "relative", height: "60vh", overflow: "hidden" }}>
        <Image
          src={car.image}
          alt={car.name}
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
              "linear-gradient(to bottom, rgba(0,0,0,0.3), rgba(0,0,0,0.6))",
            display: "flex",
            alignItems: "flex-end",
            padding: "3rem 2rem",
          }}
        >
          <div style={{ maxWidth: "1200px", margin: "0 auto", width: "100%" }}>
            <div style={{ marginBottom: "1rem" }}>
              <Link
                href="/carrental"
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
                ← Back to Car Rentals
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
              {car.name}
            </h1>
            <div
              style={{
                display: "flex",
                gap: "2rem",
                alignItems: "center",
                flexWrap: "wrap",
              }}
            >
              <div
                style={{
                  background: getTypeColor(car.type),
                  color: "#fff",
                  padding: "0.5rem 1rem",
                  borderRadius: "20px",
                  fontSize: "0.9rem",
                  fontWeight: "600",
                }}
              >
                {car.type}
              </div>
              <div
                style={{
                  background: "#FF385C",
                  color: "#fff",
                  padding: "0.5rem 1rem",
                  borderRadius: "20px",
                  fontSize: "0.9rem",
                  fontWeight: "600",
                }}
              >
                ★ {car.rating} ({car.reviews} reviews)
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
            alignItems: "start",
          }}
        >
          <div>
            <section style={{ marginBottom: "3rem" }}>
              <h2
                style={{
                  fontSize: "2rem",
                  fontWeight: "600",
                  color: "#333",
                  marginBottom: "1rem",
                }}
              >
                About This Vehicle
              </h2>
              <p
                style={{
                  fontSize: "1.1rem",
                  lineHeight: "1.7",
                  color: "#666",
                  marginBottom: "1.5rem",
                }}
              >
                {car.longDescription}
              </p>
            </section>

            <section style={{ marginBottom: "3rem" }}>
              <h3
                style={{
                  fontSize: "1.5rem",
                  fontWeight: "600",
                  color: "#333",
                  marginBottom: "1rem",
                }}
              >
                Vehicle Specifications
              </h3>
              <div
                style={{
                  background: "#fff",
                  borderRadius: "8px",
                  padding: "1.5rem",
                  boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
                  display: "grid",
                  gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
                  gap: "1rem",
                }}
              >
                {Object.entries(car.specifications).map(([key, value]) => (
                  <div
                    key={key}
                    style={{
                      padding: "0.75rem",
                      border: "1px solid #e0e0e0",
                      borderRadius: "6px",
                    }}
                  >
                    <div
                      style={{
                        fontSize: "0.8rem",
                        fontWeight: "600",
                        color: "#666",
                        textTransform: "uppercase",
                        marginBottom: "0.25rem",
                      }}
                    >
                      {key
                        .replace(/([A-Z])/g, " $1")
                        .replace(/^./, (str) => str.toUpperCase())}
                    </div>
                    <div
                      style={{
                        fontSize: "1rem",
                        color: "#333",
                        fontWeight: "500",
                      }}
                    >
                      {value}
                    </div>
                  </div>
                ))}
              </div>
            </section>

            <section style={{ marginBottom: "3rem" }}>
              <h3
                style={{
                  fontSize: "1.5rem",
                  fontWeight: "600",
                  color: "#333",
                  marginBottom: "1rem",
                }}
              >
                What's Included
              </h3>
              <ul
                style={{
                  listStyle: "none",
                  padding: 0,
                  display: "grid",
                  gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
                  gap: "0.5rem",
                }}
              >
                {car.included.map((item, index) => (
                  <li
                    key={index}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "0.5rem",
                      color: "#666",
                      fontSize: "1rem",
                      padding: "0.5rem",
                    }}
                  >
                    <span style={{ color: "#28a745" }}>✓</span>
                    {item}
                  </li>
                ))}
              </ul>
            </section>

            <section style={{ marginBottom: "3rem" }}>
              <h3
                style={{
                  fontSize: "1.5rem",
                  fontWeight: "600",
                  color: "#333",
                  marginBottom: "1rem",
                }}
              >
                Rental Requirements
              </h3>
              <ul
                style={{
                  listStyle: "none",
                  padding: 0,
                  display: "flex",
                  flexDirection: "column",
                  gap: "0.5rem",
                }}
              >
                {car.requirements.map((req, index) => (
                  <li
                    key={index}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "0.5rem",
                      color: "#666",
                      fontSize: "1rem",
                      padding: "0.5rem",
                    }}
                  >
                    <span style={{ color: "#ffc107" }}>⚠</span>
                    {req}
                  </li>
                ))}
              </ul>
            </section>

            <section>
              <h3
                style={{
                  fontSize: "1.5rem",
                  fontWeight: "600",
                  color: "#333",
                  marginBottom: "1rem",
                }}
              >
                Pickup Locations
              </h3>
              <div
                style={{
                  background: "#fff",
                  borderRadius: "8px",
                  padding: "1rem",
                  boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
                }}
              >
                {car.pickupLocations.map((location, index) => (
                  <div
                    key={index}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "1rem",
                      padding: "0.75rem 0",
                      borderBottom:
                        index < car.pickupLocations.length - 1
                          ? "1px solid #eee"
                          : "none",
                    }}
                  >
                    <div
                      style={{
                        width: "8px",
                        height: "8px",
                        borderRadius: "50%",
                        background: "#0071c2",
                      }}
                    ></div>
                    <span style={{ color: "#666" }}>📍 {location}</span>
                  </div>
                ))}
              </div>
            </section>
          </div>

          <div style={{ position: "sticky", top: "2rem" }}>
            <div
              style={{
                background: "#fff",
                borderRadius: "12px",
                padding: "2rem",
                boxShadow: "0 4px 20px rgba(0,0,0,0.1)",
                border: "1px solid #e0e0e0",
              }}
            >
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "baseline",
                  marginBottom: "1rem",
                }}
              >
                <div>
                  <span
                    style={{
                      fontSize: "2rem",
                      fontWeight: "700",
                      color: "#FF385C",
                    }}
                  >
                    ${car.price}
                  </span>
                  <span
                    style={{
                      fontSize: "1rem",
                      color: "#999",
                      textDecoration: "line-through",
                      marginLeft: "0.5rem",
                    }}
                  >
                    ${car.originalPrice}
                  </span>
                </div>
              </div>
              <p
                style={{
                  fontSize: "0.9rem",
                  color: "#666",
                  marginBottom: "1rem",
                }}
              >
                per day
              </p>

              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "0.5rem",
                  marginBottom: "2rem",
                  padding: "1rem",
                  background: "#f8f9fa",
                  borderRadius: "8px",
                }}
              >
                <span style={{ color: "#FF385C" }}>★</span>
                <span style={{ fontWeight: "600", color: "#333" }}>
                  {car.rating}
                </span>
                <span style={{ color: "#666" }}>({car.reviews} reviews)</span>
              </div>

              <div style={{ marginBottom: "1.5rem" }}>
                <label
                  style={{
                    display: "block",
                    fontWeight: "600",
                    color: "#333",
                    marginBottom: "0.5rem",
                  }}
                >
                  Pick-up Date
                </label>
                <input
                  type="date"
                  style={{
                    width: "100%",
                    padding: "0.75rem",
                    border: "2px solid #e0e0e0",
                    borderRadius: "8px",
                    fontSize: "1rem",
                    outline: "none",
                  }}
                />
              </div>

              <div style={{ marginBottom: "1.5rem" }}>
                <label
                  style={{
                    display: "block",
                    fontWeight: "600",
                    color: "#333",
                    marginBottom: "0.5rem",
                  }}
                >
                  Drop-off Date
                </label>
                <input
                  type="date"
                  style={{
                    width: "100%",
                    padding: "0.75rem",
                    border: "2px solid #e0e0e0",
                    borderRadius: "8px",
                    fontSize: "1rem",
                    outline: "none",
                  }}
                />
              </div>

              <div style={{ marginBottom: "2rem" }}>
                <label
                  style={{
                    display: "block",
                    fontWeight: "600",
                    color: "#333",
                    marginBottom: "0.5rem",
                  }}
                >
                  Pickup Location
                </label>
                <select
                  style={{
                    width: "100%",
                    padding: "0.75rem",
                    border: "2px solid #e0e0e0",
                    borderRadius: "8px",
                    fontSize: "1rem",
                    outline: "none",
                    background: "#fff",
                  }}
                >
                  {car.pickupLocations.map((location, index) => (
                    <option key={index} value={location}>
                      {location}
                    </option>
                  ))}
                </select>
              </div>

              <button
                style={{
                  width: "100%",
                  background: "#FF385C",
                  color: "#fff",
                  border: "none",
                  borderRadius: "8px",
                  padding: "1rem",
                  fontSize: "1.1rem",
                  fontWeight: "600",
                  cursor: "pointer",
                  transition: "background 0.2s ease",
                  marginBottom: "1rem",
                }}
                onMouseOver={(e) =>
                  (e.currentTarget.style.background = "#E6315A")
                }
                onMouseOut={(e) =>
                  (e.currentTarget.style.background = "#FF385C")
                }
              >
                Reserve Now
              </button>

              <p
                style={{
                  textAlign: "center",
                  color: "#666",
                  fontSize: "0.9rem",
                  margin: 0,
                }}
              >
                Free cancellation up to 48 hours before pickup
              </p>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default CarRentalDetailsPage;
