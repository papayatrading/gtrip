"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import Footer from "../../../components/Footer";

interface RestaurantDetailsPageProps {
  params: { id: string };
}

const RestaurantDetailsPage: React.FC<RestaurantDetailsPageProps> = ({
  params,
}) => {
  const restaurants = [
    {
      id: 1,
      name: "Bella Vista Ristorante",
      location: "Rome, Italy",
      image: "/Restaurants/dining-table-with-chairs-tableware.webp",
      cuisine: "Italian",
      rating: 4.8,
      reviews: 1247,
      description: "Authentic Italian dining with panoramic city views",
      longDescription:
        "Experience the finest Italian cuisine at Bella Vista Ristorante, where traditional recipes meet modern presentation. Our chef-driven menu features locally sourced ingredients and time-honored cooking techniques passed down through generations. With stunning panoramic views of Rome's historic skyline, every meal becomes a memorable experience that captures the essence of Italian hospitality and culinary excellence.",
      atmosphere: "Elegant Fine Dining",
      openHours: {
        monday: "12:00 PM - 10:00 PM",
        tuesday: "12:00 PM - 10:00 PM",
        wednesday: "12:00 PM - 10:00 PM",
        thursday: "12:00 PM - 10:00 PM",
        friday: "12:00 PM - 11:00 PM",
        saturday: "12:00 PM - 11:00 PM",
        sunday: "12:00 PM - 9:00 PM",
      },
      specialties: [
        "Homemade Pasta",
        "Wood-fired Pizza",
        "Tiramisu",
        "Wine Selection",
      ],
      amenities: [
        "Outdoor Seating",
        "Private Dining",
        "Wine Cellar",
        "Valet Parking",
      ],
      address: "Via dei Condotti 123, Rome, Italy 00187",
      phone: "+39 06 1234 5678",
      website: "www.bellavista-rome.com",
      dietaryOptions: ["Vegetarian", "Gluten-Free", "Vegan Options"],
      reservationPolicy:
        "Reservations recommended, especially for weekend dining",
      dresscode: "Smart Casual to Business Attire",
    },
    {
      id: 2,
      name: "The Jolly Tavern",
      location: "London, England",
      image:
        "/Restaurants/happy-waiter-serving-food-group-cheerful-friends-pub.webp",
      cuisine: "British Pub",
      rating: 4.6,
      reviews: 892,
      description: "Traditional British pub with hearty meals and craft ales",
      longDescription:
        "Step into The Jolly Tavern, a quintessential British pub that embodies centuries of tradition and hospitality. Our warm, welcoming atmosphere features exposed wooden beams, cozy fireplaces, and friendly service that makes every guest feel like family. Enjoy our extensive selection of craft ales, traditional pub fare, and live entertainment in an authentic setting that captures the heart of British social culture.",
      atmosphere: "Traditional Pub",
      openHours: {
        monday: "11:00 AM - 11:00 PM",
        tuesday: "11:00 AM - 11:00 PM",
        wednesday: "11:00 AM - 11:00 PM",
        thursday: "11:00 AM - 12:00 AM",
        friday: "11:00 AM - 1:00 AM",
        saturday: "10:00 AM - 1:00 AM",
        sunday: "10:00 AM - 10:00 PM",
      },
      specialties: [
        "Fish & Chips",
        "Bangers & Mash",
        "Shepherd's Pie",
        "Craft Ales",
      ],
      amenities: [
        "Live Music",
        "Sports Viewing",
        "Beer Garden",
        "Private Events",
      ],
      address: "42 High Street, Camden, London NW1 7HB",
      phone: "+44 20 7123 4567",
      website: "www.jollytavern-london.co.uk",
      dietaryOptions: ["Vegetarian", "Gluten-Free"],
      reservationPolicy:
        "Walk-ins welcome, reservations accepted for groups of 6+",
      dresscode: "Casual",
    },
    {
      id: 3,
      name: "Modern Café Milano",
      location: "Milan, Italy",
      image:
        "/Restaurants/interior-modern-cafe-where-is-no-people-artificial-lighting.webp",
      cuisine: "Modern European",
      rating: 4.7,
      reviews: 634,
      description:
        "Contemporary café with artisanal coffee and innovative dishes",
      longDescription:
        "Modern Café Milano redefines the traditional café experience with its sleek, contemporary design and innovative culinary approach. Our expert baristas craft exceptional coffee using premium beans, while our kitchen creates modern European dishes that blend classic techniques with contemporary flair. The minimalist yet warm interior provides the perfect setting for business meetings, casual dining, or simply enjoying the finest coffee in Milan.",
      atmosphere: "Modern Casual",
      openHours: {
        monday: "7:00 AM - 9:00 PM",
        tuesday: "7:00 AM - 9:00 PM",
        wednesday: "7:00 AM - 9:00 PM",
        thursday: "7:00 AM - 9:00 PM",
        friday: "7:00 AM - 10:00 PM",
        saturday: "8:00 AM - 10:00 PM",
        sunday: "8:00 AM - 8:00 PM",
      },
      specialties: [
        "Artisan Coffee",
        "Avocado Toast",
        "Quinoa Bowls",
        "Pastries",
      ],
      amenities: ["Free WiFi", "Laptop Friendly", "Takeaway", "Catering"],
      address: "Via Brera 45, Milan, Italy 20121",
      phone: "+39 02 8765 4321",
      website: "www.moderncafemilano.it",
      dietaryOptions: ["Vegetarian", "Vegan", "Gluten-Free", "Keto"],
      reservationPolicy: "No reservations needed, first-come first-served",
      dresscode: "Casual",
    },
    {
      id: 4,
      name: "Thai Garden Palace",
      location: "Bangkok, Thailand",
      image: "/Restaurants/interior-thai-restaurant.webp",
      cuisine: "Thai",
      rating: 4.9,
      reviews: 1456,
      description: "Authentic Thai cuisine in a traditional garden setting",
      longDescription:
        "Thai Garden Palace offers an authentic culinary journey through Thailand's rich gastronomic heritage. Set in a beautifully landscaped traditional Thai garden, our restaurant features ornate décor, serene water features, and an atmosphere that transports you to the heart of Thailand. Our skilled chefs prepare each dish using traditional recipes, fresh herbs, and authentic spices imported directly from Thailand, ensuring every bite delivers genuine Thai flavors.",
      atmosphere: "Traditional Thai Garden",
      openHours: {
        monday: "11:30 AM - 10:00 PM",
        tuesday: "11:30 AM - 10:00 PM",
        wednesday: "11:30 AM - 10:00 PM",
        thursday: "11:30 AM - 10:00 PM",
        friday: "11:30 AM - 10:30 PM",
        saturday: "11:30 AM - 10:30 PM",
        sunday: "11:30 AM - 9:30 PM",
      },
      specialties: [
        "Pad Thai",
        "Green Curry",
        "Tom Yum Soup",
        "Mango Sticky Rice",
      ],
      amenities: [
        "Garden Seating",
        "Cultural Shows",
        "Private Rooms",
        "Cooking Classes",
      ],
      address: "123 Sukhumvit Road, Bangkok, Thailand 10110",
      phone: "+66 2 123 4567",
      website: "www.thaigardenpalace.com",
      dietaryOptions: ["Vegetarian", "Vegan", "Gluten-Free", "Spice Levels"],
      reservationPolicy: "Reservations recommended for dinner service",
      dresscode: "Smart Casual",
    },
    {
      id: 5,
      name: "Heritage Dining Hall",
      location: "Edinburgh, Scotland",
      image:
        "/Restaurants/restaurant-hall-classic-style-with-green-wooden-chairs-curtains.webp",
      cuisine: "Scottish",
      rating: 4.5,
      reviews: 723,
      description: "Classic Scottish dining in a historic Victorian setting",
      longDescription:
        "Heritage Dining Hall celebrates Scotland's culinary traditions in a magnificent Victorian setting. Our historic dining room features original architectural details, period furnishings, and an atmosphere steeped in Scottish heritage. We specialize in traditional Scottish cuisine made with locally sourced ingredients including fresh Scottish salmon, Highland beef, and seasonal produce from local farms, all prepared with modern techniques while honoring traditional flavors.",
      atmosphere: "Historic Elegant",
      openHours: {
        monday: "5:00 PM - 10:00 PM",
        tuesday: "5:00 PM - 10:00 PM",
        wednesday: "5:00 PM - 10:00 PM",
        thursday: "5:00 PM - 10:00 PM",
        friday: "5:00 PM - 11:00 PM",
        saturday: "12:00 PM - 11:00 PM",
        sunday: "12:00 PM - 9:00 PM",
      },
      specialties: [
        "Haggis",
        "Scottish Salmon",
        "Shortbread",
        "Whisky Selection",
      ],
      amenities: [
        "Whisky Tasting",
        "Private Events",
        "Historic Tours",
        "Gift Shop",
      ],
      address: "Royal Mile 78, Edinburgh, Scotland EH1 1LB",
      phone: "+44 131 234 5678",
      website: "www.heritagedining-edinburgh.co.uk",
      dietaryOptions: ["Vegetarian", "Gluten-Free"],
      reservationPolicy: "Advance reservations strongly recommended",
      dresscode: "Business Casual to Formal",
    },
    {
      id: 6,
      name: "Industrial Bistro",
      location: "New York, USA",
      image:
        "/Restaurants/restaurant-hall-with-red-brick-walls-wooden-tables-pipes-ceiling.webp",
      cuisine: "American Fusion",
      rating: 4.4,
      reviews: 1089,
      description: "Industrial-chic bistro with contemporary American cuisine",
      longDescription:
        "Industrial Bistro brings together the best of contemporary American cuisine in a striking industrial-chic setting. Our exposed brick walls, steel fixtures, and modern artistic touches create a sophisticated yet comfortable atmosphere. Our chef-driven menu features locally sourced ingredients prepared with innovative techniques, offering a fresh take on American classics while incorporating global influences for a truly unique dining experience.",
      atmosphere: "Industrial Chic",
      openHours: {
        monday: "5:00 PM - 10:00 PM",
        tuesday: "5:00 PM - 10:00 PM",
        wednesday: "5:00 PM - 10:00 PM",
        thursday: "5:00 PM - 10:00 PM",
        friday: "5:00 PM - 11:00 PM",
        saturday: "11:00 AM - 11:00 PM",
        sunday: "11:00 AM - 9:00 PM",
      },
      specialties: [
        "Craft Burgers",
        "Artisan Steaks",
        "Farm Salads",
        "Craft Cocktails",
      ],
      amenities: ["Full Bar", "Brunch", "Private Dining", "Chef's Table"],
      address: "456 Broadway, SoHo, New York, NY 10013",
      phone: "+1 (212) 555-0123",
      website: "www.industrialbistro-nyc.com",
      dietaryOptions: ["Vegetarian", "Vegan", "Gluten-Free", "Keto"],
      reservationPolicy: "Reservations recommended, walk-ins welcome at bar",
      dresscode: "Smart Casual",
    },
    {
      id: 7,
      name: "Coastal Breeze",
      location: "Santorini, Greece",
      image:
        "/Restaurants/restaurant-hall-with-turquoise-chairs-white-walls-french-windows-curtains.webp",
      cuisine: "Mediterranean",
      rating: 4.8,
      reviews: 567,
      description: "Mediterranean seafood with stunning ocean views",
      longDescription:
        "Coastal Breeze captures the essence of Mediterranean dining with its breathtaking ocean views and fresh, vibrant cuisine. Our whitewashed dining room opens to panoramic vistas of the Aegean Sea, creating a serene atmosphere that perfectly complements our menu of fresh seafood, local vegetables, and traditional Greek specialties. Every dish is prepared with locally sourced ingredients and inspired by generations of Mediterranean culinary tradition.",
      atmosphere: "Coastal Mediterranean",
      openHours: {
        monday: "12:00 PM - 11:00 PM",
        tuesday: "12:00 PM - 11:00 PM",
        wednesday: "12:00 PM - 11:00 PM",
        thursday: "12:00 PM - 11:00 PM",
        friday: "12:00 PM - 12:00 AM",
        saturday: "12:00 PM - 12:00 AM",
        sunday: "12:00 PM - 10:00 PM",
      },
      specialties: ["Grilled Octopus", "Moussaka", "Fresh Fish", "Greek Wine"],
      amenities: [
        "Ocean View",
        "Terrace Dining",
        "Wine Tasting",
        "Sunset Views",
      ],
      address: "Oia Village, Santorini, Greece 84702",
      phone: "+30 22860 71234",
      website: "www.coastalbreeze-santorini.gr",
      dietaryOptions: ["Vegetarian", "Vegan", "Gluten-Free", "Pescatarian"],
      reservationPolicy: "Reservations essential, especially for sunset dining",
      dresscode: "Resort Casual",
    },
    {
      id: 8,
      name: "Grand Brasserie",
      location: "Paris, France",
      image: "/Restaurants/restaurant-interior (1).webp",
      cuisine: "French",
      rating: 4.7,
      reviews: 934,
      description: "Classic French brasserie with timeless elegance",
      longDescription:
        "Grand Brasserie embodies the quintessential Parisian dining experience with its classic Art Deco design and authentic French cuisine. Our meticulously crafted menu features traditional French dishes prepared with the finest ingredients and time-honored techniques. The elegant atmosphere, complete with marble tables, vintage mirrors, and attentive service, creates the perfect setting for experiencing the sophisticated charm of Parisian gastronomy.",
      atmosphere: "Classic Parisian",
      openHours: {
        monday: "7:00 AM - 11:00 PM",
        tuesday: "7:00 AM - 11:00 PM",
        wednesday: "7:00 AM - 11:00 PM",
        thursday: "7:00 AM - 11:00 PM",
        friday: "7:00 AM - 12:00 AM",
        saturday: "7:00 AM - 12:00 AM",
        sunday: "8:00 AM - 10:00 PM",
      },
      specialties: [
        "Coq au Vin",
        "Bouillabaisse",
        "Crème Brûlée",
        "French Wine",
      ],
      amenities: [
        "Sidewalk Seating",
        "Wine Cave",
        "Private Dining",
        "Catering",
      ],
      address: "15 Rue de Rivoli, Paris, France 75001",
      phone: "+33 1 42 12 34 56",
      website: "www.grandbrasserie-paris.fr",
      dietaryOptions: ["Vegetarian", "Gluten-Free"],
      reservationPolicy: "Reservations recommended for dinner",
      dresscode: "Smart Casual to Business Attire",
    },
    {
      id: 9,
      name: "Rustic Charm",
      location: "Tuscany, Italy",
      image: "/Restaurants/restaurant-interior.webp",
      cuisine: "Tuscan",
      rating: 4.6,
      reviews: 445,
      description: "Rustic Tuscan dining with farm-to-table ingredients",
      longDescription:
        "Rustic Charm offers an authentic Tuscan dining experience in a charming countryside setting. Our restaurant features exposed stone walls, rustic wooden furnishings, and a warm, inviting atmosphere that reflects the heart of Tuscan hospitality. We specialize in traditional Tuscan cuisine made with organic, farm-to-table ingredients sourced from local producers, ensuring every dish captures the authentic flavors of the Italian countryside.",
      atmosphere: "Rustic Countryside",
      openHours: {
        monday: "Closed",
        tuesday: "6:00 PM - 10:00 PM",
        wednesday: "6:00 PM - 10:00 PM",
        thursday: "6:00 PM - 10:00 PM",
        friday: "6:00 PM - 10:30 PM",
        saturday: "12:00 PM - 10:30 PM",
        sunday: "12:00 PM - 9:00 PM",
      },
      specialties: ["Osso Buco", "Risotto", "Tiramisu", "Chianti Wine"],
      amenities: [
        "Vineyard Views",
        "Wine Tasting",
        "Cooking Classes",
        "Farm Tours",
      ],
      address: "Via del Vino 12, Chianti, Tuscany, Italy 53017",
      phone: "+39 0577 123 456",
      website: "www.rusticcharm-tuscany.it",
      dietaryOptions: ["Vegetarian", "Gluten-Free", "Organic"],
      reservationPolicy: "Reservations required, limited seating",
      dresscode: "Country Casual",
    },
    {
      id: 10,
      name: "Golden Hour",
      location: "Napa Valley, USA",
      image:
        "/Restaurants/sunlit-restaurant-table-with-elegant-glassware-decor-warm-cozy-ambiance.webp",
      cuisine: "Californian",
      rating: 4.9,
      reviews: 678,
      description: "Fine dining with California wine country elegance",
      longDescription:
        "Golden Hour represents the pinnacle of California wine country dining, offering an exquisite culinary experience that celebrates the region's abundant local produce and world-class wines. Our sophisticated restaurant features floor-to-ceiling windows that showcase the stunning vineyard landscape, creating a bright, airy atmosphere that changes beautifully throughout the day. Our seasonal menu highlights the best of California's farm-fresh ingredients paired perfectly with Napa Valley's finest wines.",
      atmosphere: "Wine Country Elegant",
      openHours: {
        monday: "Closed",
        tuesday: "5:00 PM - 9:00 PM",
        wednesday: "5:00 PM - 9:00 PM",
        thursday: "5:00 PM - 9:00 PM",
        friday: "5:00 PM - 10:00 PM",
        saturday: "11:30 AM - 10:00 PM",
        sunday: "11:30 AM - 8:00 PM",
      },
      specialties: [
        "Wine Pairings",
        "Seasonal Menu",
        "Local Produce",
        "Artisan Cheese",
      ],
      amenities: [
        "Vineyard Views",
        "Wine Cellar",
        "Sommelier Service",
        "Private Events",
      ],
      address: "1234 Vineyard Lane, Napa Valley, CA 94558",
      phone: "+1 (707) 555-0789",
      website: "www.goldenhour-napa.com",
      dietaryOptions: ["Vegetarian", "Vegan", "Gluten-Free", "Farm-to-Table"],
      reservationPolicy: "Advance reservations required",
      dresscode: "Upscale Casual to Business Attire",
    },
    {
      id: 11,
      name: "Spice Routes",
      location: "Istanbul, Turkey",
      image: "/Restaurants/traditional-turkish-cuisine.webp",
      cuisine: "Turkish",
      rating: 4.8,
      reviews: 812,
      description: "Traditional Turkish cuisine with Ottoman heritage",
      longDescription:
        "Spice Routes takes you on a culinary journey through Turkey's rich Ottoman heritage, offering authentic Turkish cuisine in an atmosphere that celebrates centuries of culinary tradition. Our restaurant features traditional Turkish décor, handcrafted tiles, and warm hospitality that reflects the genuine spirit of Turkish culture. Every dish is prepared using traditional recipes, aromatic spices, and time-honored cooking methods that have been passed down through generations of Turkish chefs.",
      atmosphere: "Traditional Ottoman",
      openHours: {
        monday: "11:00 AM - 11:00 PM",
        tuesday: "11:00 AM - 11:00 PM",
        wednesday: "11:00 AM - 11:00 PM",
        thursday: "11:00 AM - 11:00 PM",
        friday: "11:00 AM - 12:00 AM",
        saturday: "11:00 AM - 12:00 AM",
        sunday: "11:00 AM - 10:00 PM",
      },
      specialties: ["Kebabs", "Baklava", "Turkish Tea", "Meze Platters"],
      amenities: [
        "Traditional Music",
        "Hookah Lounge",
        "Cultural Events",
        "Takeaway",
      ],
      address: "Sultanahmet Square 42, Istanbul, Turkey 34122",
      phone: "+90 212 123 4567",
      website: "www.spiceroutes-istanbul.com",
      dietaryOptions: ["Vegetarian", "Halal", "Gluten-Free"],
      reservationPolicy: "Reservations welcome, walk-ins accepted",
      dresscode: "Casual to Smart Casual",
    },
  ];

  const restaurant = restaurants.find((r) => r.id === parseInt(params.id));

  if (!restaurant) {
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
            Restaurant Not Found
          </h1>
          <p style={{ color: "#666", marginBottom: "2rem" }}>
            The restaurant you're looking for doesn't exist.
          </p>
          <Link
            href="/restaurants"
            style={{
              background: "#FF385C",
              color: "#fff",
              textDecoration: "none",
              padding: "1rem 2rem",
              borderRadius: "8px",
              fontWeight: "600",
            }}
          >
            Back to Restaurants
          </Link>
        </div>
        <Footer />
      </div>
    );
  }

  const getCuisineColor = (cuisine: string) => {
    switch (cuisine) {
      case "Italian":
        return "#008000";
      case "British Pub":
        return "#8B4513";
      case "Modern European":
        return "#4682B4";
      case "Thai":
        return "#FF6347";
      case "Scottish":
        return "#800080";
      case "American Fusion":
        return "#FF4500";
      case "Mediterranean":
        return "#20B2AA";
      case "French":
        return "#4169E1";
      case "Tuscan":
        return "#228B22";
      case "Californian":
        return "#DAA520";
      case "Turkish":
        return "#DC143C";
      default:
        return "#6c757d";
    }
  };

  return (
    <div style={{ backgroundColor: "#f8f9fa", minHeight: "100vh" }}>
      <div style={{ position: "relative", height: "60vh", overflow: "hidden" }}>
        <Image
          src={restaurant.image}
          alt={restaurant.name}
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
                href="/restaurants"
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
                ← Back to Restaurants
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
              {restaurant.name}
            </h1>
            <div
              style={{
                display: "flex",
                gap: "2rem",
                alignItems: "center",
                flexWrap: "wrap",
              }}
            >
              <p
                style={{
                  color: "#fff",
                  fontSize: "1.2rem",
                  opacity: "0.9",
                  display: "flex",
                  alignItems: "center",
                  gap: "0.5rem",
                }}
              >
                📍 {restaurant.location}
              </p>
              <div
                style={{
                  background: getCuisineColor(restaurant.cuisine),
                  color: "#fff",
                  padding: "0.5rem 1rem",
                  borderRadius: "20px",
                  fontSize: "0.9rem",
                  fontWeight: "600",
                }}
              >
                {restaurant.cuisine}
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
                ★ {restaurant.rating} ({restaurant.reviews} reviews)
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
                About This Restaurant
              </h2>
              <p
                style={{
                  fontSize: "1.1rem",
                  lineHeight: "1.7",
                  color: "#666",
                  marginBottom: "1.5rem",
                }}
              >
                {restaurant.longDescription}
              </p>
              <div
                style={{
                  display: "flex",
                  gap: "2rem",
                  flexWrap: "wrap",
                  marginTop: "1.5rem",
                }}
              >
                <div>
                  <span style={{ fontWeight: "600", color: "#333" }}>
                    Atmosphere:
                  </span>
                  <span style={{ marginLeft: "0.5rem", color: "#666" }}>
                    {restaurant.atmosphere}
                  </span>
                </div>
                <div>
                  <span style={{ fontWeight: "600", color: "#333" }}>
                    Dress Code:
                  </span>
                  <span style={{ marginLeft: "0.5rem", color: "#666" }}>
                    {restaurant.dresscode}
                  </span>
                </div>
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
                Specialties
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
                {restaurant.specialties.map((specialty, index) => (
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
                    <span style={{ color: "#FF385C" }}>🍽️</span>
                    {specialty}
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
                Opening Hours
              </h3>
              <div
                style={{
                  background: "#fff",
                  borderRadius: "8px",
                  padding: "1.5rem",
                  boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
                  display: "grid",
                  gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
                  gap: "0.5rem",
                }}
              >
                {Object.entries(restaurant.openHours).map(([day, hours]) => (
                  <div
                    key={day}
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      padding: "0.5rem 0",
                      borderBottom: "1px solid #f0f0f0",
                    }}
                  >
                    <span
                      style={{
                        fontWeight: "600",
                        color: "#333",
                        textTransform: "capitalize",
                      }}
                    >
                      {day}
                    </span>
                    <span style={{ color: "#666" }}>{hours}</span>
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
                Amenities & Features
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
                {restaurant.amenities.map((amenity, index) => (
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
                    {amenity}
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
                Dietary Options
              </h3>
              <div
                style={{
                  display: "flex",
                  flexWrap: "wrap",
                  gap: "0.5rem",
                }}
              >
                {restaurant.dietaryOptions.map((option, index) => (
                  <span
                    key={index}
                    style={{
                      background: "#e8f5e8",
                      color: "#2d5a2d",
                      padding: "0.4rem 0.8rem",
                      borderRadius: "15px",
                      fontSize: "0.9rem",
                      fontWeight: "500",
                    }}
                  >
                    {option}
                  </span>
                ))}
              </div>
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
                Contact & Location
              </h3>
              <div
                style={{
                  background: "#fff",
                  borderRadius: "8px",
                  padding: "1.5rem",
                  boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
                }}
              >
                <div style={{ marginBottom: "1rem" }}>
                  <strong style={{ color: "#333" }}>Address:</strong>
                  <p style={{ color: "#666", margin: "0.25rem 0 0 0" }}>
                    {restaurant.address}
                  </p>
                </div>
                <div style={{ marginBottom: "1rem" }}>
                  <strong style={{ color: "#333" }}>Phone:</strong>
                  <p style={{ color: "#666", margin: "0.25rem 0 0 0" }}>
                    {restaurant.phone}
                  </p>
                </div>
                <div style={{ marginBottom: "1rem" }}>
                  <strong style={{ color: "#333" }}>Website:</strong>
                  <p style={{ color: "#666", margin: "0.25rem 0 0 0" }}>
                    {restaurant.website}
                  </p>
                </div>
                <div>
                  <strong style={{ color: "#333" }}>Reservation Policy:</strong>
                  <p style={{ color: "#666", margin: "0.25rem 0 0 0" }}>
                    {restaurant.reservationPolicy}
                  </p>
                </div>
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
                  alignItems: "center",
                  gap: "0.5rem",
                  marginBottom: "2rem",
                  padding: "1rem",
                  background: "#f8f9fa",
                  borderRadius: "8px",
                }}
              >
                <span style={{ color: "#FF385C", fontSize: "1.5rem" }}>★</span>
                <div>
                  <div
                    style={{
                      fontWeight: "700",
                      color: "#333",
                      fontSize: "1.2rem",
                    }}
                  >
                    {restaurant.rating}
                  </div>
                  <div style={{ color: "#666", fontSize: "0.9rem" }}>
                    {restaurant.reviews} reviews
                  </div>
                </div>
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
                  Reservation Date
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
                  Time
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
                  <option>6:00 PM</option>
                  <option>6:30 PM</option>
                  <option>7:00 PM</option>
                  <option>7:30 PM</option>
                  <option>8:00 PM</option>
                  <option>8:30 PM</option>
                  <option>9:00 PM</option>
                </select>
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
                  Party Size
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
                  <option>2 people</option>
                  <option>3 people</option>
                  <option>4 people</option>
                  <option>5 people</option>
                  <option>6 people</option>
                  <option>7+ people</option>
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
                Make Reservation
              </button>

              <p
                style={{
                  textAlign: "center",
                  color: "#666",
                  fontSize: "0.9rem",
                  margin: 0,
                }}
              >
                Free cancellation up to 2 hours before
              </p>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default RestaurantDetailsPage;
