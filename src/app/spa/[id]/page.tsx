"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import Footer from "../../../components/Footer";

interface SpaDetailsPageProps {
  params: { id: string };
}

const SpaDetailsPage: React.FC<SpaDetailsPageProps> = ({ params }) => {
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
      longDescription:
        "Serenity Stone Therapy offers the ultimate hot stone massage experience using authentic volcanic stones from Bali's sacred mountains. Our skilled therapists combine traditional Balinese healing techniques with modern wellness practices to create a deeply restorative experience. The heated stones help release muscle tension while aromatic essential oils transport you to a state of complete tranquility. Each session includes a private consultation, full-body hot stone massage, aromatherapy treatment, guided meditation, and traditional herbal tea ceremony.",
      openHours: {
        monday: "9:00 AM - 9:00 PM",
        tuesday: "9:00 AM - 9:00 PM",
        wednesday: "9:00 AM - 9:00 PM",
        thursday: "9:00 AM - 9:00 PM",
        friday: "9:00 AM - 10:00 PM",
        saturday: "8:00 AM - 10:00 PM",
        sunday: "8:00 AM - 9:00 PM",
      },
      amenities: [
        "Private Treatment Rooms",
        "Steam Room",
        "Relaxation Lounge",
        "Organic Tea Bar",
        "Garden Views",
      ],
      therapists: [
        "Certified Massage Therapists",
        "Aromatherapy Specialists",
        "Meditation Guides",
      ],
      packages: [
        "90-min Hot Stone",
        "2-hour Wellness Journey",
        "Half-day Retreat",
        "Couples Experience",
      ],
      address: "Jalan Raya Ubud 123, Ubud, Bali, Indonesia",
      phone: "+62 361 123 456",
      website: "www.serenitystonetherapy.com",
      policies: {
        cancellation: "Free cancellation up to 24 hours before",
        arrival: "Please arrive 15 minutes early",
        age: "18+ only, children's treatments available with parent",
        dress: "Comfortable clothing, robes provided",
      },
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
      longDescription:
        "Radiant Facial Retreat specializes in advanced facial treatments using premium European skincare products and cutting-edge techniques. Our expert aestheticians provide personalized consultations to create the perfect treatment for your skin type. Located in beautiful Santorini with stunning caldera views, our spa combines Mediterranean tranquility with world-class skincare. Each facial includes deep cleansing, exfoliation, extraction, customized mask, facial massage, and premium product application for immediate and lasting results.",
      openHours: {
        monday: "10:00 AM - 8:00 PM",
        tuesday: "10:00 AM - 8:00 PM",
        wednesday: "10:00 AM - 8:00 PM",
        thursday: "10:00 AM - 8:00 PM",
        friday: "10:00 AM - 9:00 PM",
        saturday: "9:00 AM - 9:00 PM",
        sunday: "9:00 AM - 8:00 PM",
      },
      amenities: [
        "Ocean View Rooms",
        "Premium Skincare Products",
        "Consultation Room",
        "Relaxation Terrace",
        "Refreshments",
      ],
      therapists: [
        "Licensed Aestheticians",
        "Skincare Specialists",
        "Anti-aging Experts",
      ],
      packages: [
        "Signature Facial",
        "Anti-aging Series",
        "Hydration Boost",
        "Bridal Package",
      ],
      address: "Oia Village, Santorini, Greece 84702",
      phone: "+30 22860 71234",
      website: "www.radiantfacialretreat.gr",
      policies: {
        cancellation: "Free cancellation up to 12 hours before",
        arrival: "Please arrive 10 minutes early for consultation",
        age: "16+ (parental consent required for under 18)",
        dress: "Remove makeup before arrival, cleansing provided",
      },
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
      longDescription:
        "Nordic Sauna Experience offers the most authentic Finnish sauna tradition in the heart of Helsinki. Our facility features traditional wood-fired saunas, steam rooms, and cooling pools following centuries-old Finnish wellness practices. The experience includes guided instruction on proper sauna etiquette, breathing techniques, and the traditional cycle of heating and cooling. Our sauna masters are trained in authentic Finnish methods and provide birch branch treatments (vihta) for the complete Nordic experience.",
      openHours: {
        monday: "7:00 AM - 10:00 PM",
        tuesday: "7:00 AM - 10:00 PM",
        wednesday: "7:00 AM - 10:00 PM",
        thursday: "7:00 AM - 10:00 PM",
        friday: "7:00 AM - 11:00 PM",
        saturday: "8:00 AM - 11:00 PM",
        sunday: "8:00 AM - 10:00 PM",
      },
      amenities: [
        "Traditional Wood Sauna",
        "Steam Room",
        "Cold Plunge Pool",
        "Rest Area",
        "Birch Branches",
      ],
      therapists: [
        "Certified Sauna Masters",
        "Wellness Guides",
        "Traditional Healers",
      ],
      packages: [
        "45-min Session",
        "2-hour Wellness",
        "Group Experience",
        "Private Sauna",
      ],
      address: "Mannerheimintie 45, Helsinki, Finland 00260",
      phone: "+358 9 123 4567",
      website: "www.nordicsaunaexperience.fi",
      policies: {
        cancellation: "Free cancellation up to 2 hours before",
        arrival: "Arrive 10 minutes early for orientation",
        age: "All ages welcome, children under 12 with adult",
        dress: "Swimwear required, towels provided",
      },
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
      longDescription:
        "Russian Banya Therapy preserves the ancient Russian tradition of communal bathing and healing. Our authentic banya features traditional steam rooms, oak branch treatments (venik), and contrast therapy with ice baths. The experience includes guidance from experienced banya masters who teach proper techniques for maximum health benefits. The oak branch massage helps improve circulation, exfoliate skin, and release toxins while the steam and heat therapy promotes deep relaxation and wellness.",
      openHours: {
        monday: "11:00 AM - 11:00 PM",
        tuesday: "11:00 AM - 11:00 PM",
        wednesday: "11:00 AM - 11:00 PM",
        thursday: "11:00 AM - 11:00 PM",
        friday: "11:00 AM - 12:00 AM",
        saturday: "10:00 AM - 12:00 AM",
        sunday: "10:00 AM - 11:00 PM",
      },
      amenities: [
        "Traditional Banya",
        "Oak Branch Therapy",
        "Ice Bath",
        "Steam Room",
        "Tea Service",
      ],
      therapists: [
        "Banya Masters",
        "Traditional Healers",
        "Wellness Specialists",
      ],
      packages: [
        "75-min Traditional",
        "Extended Banya",
        "Group Session",
        "Private Experience",
      ],
      address: "Krasnaya Ploshchad 1, Moscow, Russia 109012",
      phone: "+7 495 123 4567",
      website: "www.russianbanyatherapy.ru",
      policies: {
        cancellation: "Free cancellation up to 6 hours before",
        arrival: "Please arrive 20 minutes early",
        age: "18+ only for traditional experience",
        dress: "Swimwear required, felt hats provided",
      },
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
      longDescription:
        "Maldives Paradise Spa represents the pinnacle of luxury wellness experiences. Located over crystal-clear waters with panoramic ocean views, our overwater spa pavilions offer the ultimate in privacy and tranquility. Each treatment is customized using organic marine ingredients and traditional healing techniques. The experience includes premium amenities, champagne service, and access to our exclusive relaxation deck with private cabanas overlooking the Indian Ocean.",
      openHours: {
        monday: "9:00 AM - 9:00 PM",
        tuesday: "9:00 AM - 9:00 PM",
        wednesday: "9:00 AM - 9:00 PM",
        thursday: "9:00 AM - 9:00 PM",
        friday: "9:00 AM - 10:00 PM",
        saturday: "8:00 AM - 10:00 PM",
        sunday: "8:00 AM - 9:00 PM",
      },
      amenities: [
        "Overwater Pavilions",
        "Ocean Views",
        "Private Cabanas",
        "Champagne Service",
        "Marine Spa Products",
      ],
      therapists: [
        "Master Therapists",
        "Wellness Consultants",
        "Marine Therapy Specialists",
      ],
      packages: [
        "2-hour Luxury",
        "Half-day Retreat",
        "Couples Paradise",
        "Sunset Experience",
      ],
      address: "Paradise Island Resort, North Malé Atoll, Maldives",
      phone: "+960 123 4567",
      website: "www.maldivesparadisespa.com",
      policies: {
        cancellation: "Free cancellation up to 48 hours before",
        arrival: "Arrive 30 minutes early for consultation",
        age: "Adults only (18+)",
        dress: "Resort casual, spa attire provided",
      },
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
      longDescription:
        "African Healing Sanctuary celebrates the rich wellness traditions of Southern Africa using indigenous plants, healing techniques, and ancestral wisdom. Our treatments feature locally sourced marula oil, rooibos, and other native botanicals known for their healing properties. The sanctuary combines traditional African healing methods with modern spa techniques, creating unique treatments that honor cultural heritage while providing contemporary comfort and luxury.",
      openHours: {
        monday: "9:00 AM - 8:00 PM",
        tuesday: "9:00 AM - 8:00 PM",
        wednesday: "9:00 AM - 8:00 PM",
        thursday: "9:00 AM - 8:00 PM",
        friday: "9:00 AM - 9:00 PM",
        saturday: "8:00 AM - 9:00 PM",
        sunday: "8:00 AM - 8:00 PM",
      },
      amenities: [
        "Indigenous Plant Garden",
        "Traditional Healing Hut",
        "Sound Therapy Room",
        "Organic Products",
        "Cultural Experience",
      ],
      therapists: [
        "Traditional Healers",
        "Certified Therapists",
        "Sound Healing Practitioners",
      ],
      packages: [
        "90-min Healing",
        "Cultural Wellness",
        "Sound & Touch",
        "Sacred Plant Ceremony",
      ],
      address: "Table Mountain National Park, Cape Town, South Africa 8001",
      phone: "+27 21 123 4567",
      website: "www.africanhealingsanctuary.co.za",
      policies: {
        cancellation: "Free cancellation up to 24 hours before",
        arrival: "Please arrive 20 minutes early for ceremony",
        age: "16+ (cultural sensitivity required)",
        dress: "Natural fabrics preferred, ceremonial attire provided",
      },
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
      longDescription:
        "Tibetan Sound Healing offers authentic sound therapy using traditional Tibetan singing bowls, bells, and chanting techniques passed down through generations of Buddhist monks. Located in the spiritual heart of Dharamshala, our practice center provides a sacred space for deep healing and meditation. Each session includes personalized sound therapy, guided meditation, chakra balancing, and traditional Tibetan healing techniques designed to restore harmony to mind, body, and spirit.",
      openHours: {
        monday: "6:00 AM - 8:00 PM",
        tuesday: "6:00 AM - 8:00 PM",
        wednesday: "6:00 AM - 8:00 PM",
        thursday: "6:00 AM - 8:00 PM",
        friday: "6:00 AM - 8:00 PM",
        saturday: "6:00 AM - 8:00 PM",
        sunday: "6:00 AM - 8:00 PM",
      },
      amenities: [
        "Sacred Sound Room",
        "Meditation Garden",
        "Prayer Flags",
        "Tibetan Instruments",
        "Mountain Views",
      ],
      therapists: [
        "Tibetan Sound Masters",
        "Meditation Teachers",
        "Energy Healers",
      ],
      packages: [
        "60-min Sound Healing",
        "Meditation Retreat",
        "Chakra Workshop",
        "Private Session",
      ],
      address: "McLeod Ganj, Dharamshala, Himachal Pradesh, India 176219",
      phone: "+91 1892 123456",
      website: "www.tibetansoundhealing.in",
      policies: {
        cancellation: "Free cancellation up to 4 hours before",
        arrival: "Arrive 15 minutes early for preparation",
        age: "All ages welcome",
        dress: "Comfortable clothing, meditation cushions provided",
      },
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
      longDescription:
        "Luxury Facial Studio brings Parisian elegance and innovation to advanced skincare treatments. Our studio features the latest in aesthetic technology including LED light therapy, oxygen infusion, and premium French skincare products. Each treatment is personalized after a comprehensive skin analysis and includes gold facials, caviar treatments, and other luxury services. Located in the heart of Paris, our studio provides an oasis of refinement where technology meets timeless French beauty traditions.",
      openHours: {
        monday: "10:00 AM - 8:00 PM",
        tuesday: "10:00 AM - 8:00 PM",
        wednesday: "10:00 AM - 8:00 PM",
        thursday: "10:00 AM - 8:00 PM",
        friday: "10:00 AM - 9:00 PM",
        saturday: "9:00 AM - 9:00 PM",
        sunday: "10:00 AM - 7:00 PM",
      },
      amenities: [
        "High-tech Treatment Rooms",
        "Premium French Products",
        "LED Light Therapy",
        "Oxygen Bar",
        "Champagne Lounge",
      ],
      therapists: [
        "Master Aestheticians",
        "Technology Specialists",
        "French Beauty Experts",
      ],
      packages: [
        "75-min Luxury Facial",
        "Gold Treatment Series",
        "Technology Package",
        "Bridal Beauty",
      ],
      address: "8 Rue de la Paix, Paris, France 75002",
      phone: "+33 1 42 12 34 56",
      website: "www.luxuryfacialstudio.fr",
      policies: {
        cancellation: "Free cancellation up to 24 hours before",
        arrival: "Please arrive 15 minutes early for consultation",
        age: "18+ for advanced treatments",
        dress: "Remove all makeup and jewelry before arrival",
      },
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
      longDescription:
        "Marble Sanctuary Retreat offers an exclusive wellness experience in the heart of Tuscany's wine country. Our marble-lined treatment rooms provide a serene backdrop for luxury treatments using organic Tuscan ingredients including olive oil, wine extracts, and local herbs. The retreat combines ancient Roman spa traditions with modern luxury amenities, all set within a restored villa overlooking rolling vineyards. Each treatment includes organic Tuscan products, vineyard views, and access to our exclusive marble bath facilities.",
      openHours: {
        monday: "9:00 AM - 7:00 PM",
        tuesday: "9:00 AM - 7:00 PM",
        wednesday: "9:00 AM - 7:00 PM",
        thursday: "9:00 AM - 7:00 PM",
        friday: "9:00 AM - 8:00 PM",
        saturday: "8:00 AM - 8:00 PM",
        sunday: "8:00 AM - 7:00 PM",
      },
      amenities: [
        "Marble Treatment Rooms",
        "Vineyard Views",
        "Organic Tuscan Products",
        "Wine Therapy",
        "Villa Gardens",
      ],
      therapists: [
        "Italian Spa Masters",
        "Organic Treatment Specialists",
        "Wine Therapy Experts",
      ],
      packages: [
        "105-min Retreat",
        "Wine & Wellness",
        "Tuscan Romance",
        "Vineyard Experience",
      ],
      address: "Via del Chianti 12, Greve in Chianti, Tuscany, Italy 50022",
      phone: "+39 055 123 456",
      website: "www.marblesanctuaryretreat.it",
      policies: {
        cancellation: "Free cancellation up to 48 hours before",
        arrival: "Arrive 30 minutes early for villa tour",
        age: "Adults preferred (18+)",
        dress: "Elegant casual, spa robes provided",
      },
    },
  ];

  const spa = spas.find((s) => s.id === parseInt(params.id));

  if (!spa) {
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
            Spa Not Found
          </h1>
          <p style={{ color: "#666", marginBottom: "2rem" }}>
            The spa you're looking for doesn't exist.
          </p>
          <Link
            href="/spa"
            style={{
              background: "#FF385C",
              color: "#fff",
              textDecoration: "none",
              padding: "1rem 2rem",
              borderRadius: "8px",
              fontWeight: "600",
            }}
          >
            Back to Spas
          </Link>
        </div>
        <Footer />
      </div>
    );
  }

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
      <div style={{ position: "relative", height: "60vh", overflow: "hidden" }}>
        <Image
          src={spa.image}
          alt={spa.name}
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
                href="/spa"
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
                ← Back to Spas
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
              {spa.name}
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
                📍 {spa.location}
              </p>
              <div
                style={{
                  background: getCategoryColor(spa.category),
                  color: "#fff",
                  padding: "0.5rem 1rem",
                  borderRadius: "20px",
                  fontSize: "0.9rem",
                  fontWeight: "600",
                }}
              >
                {spa.category}
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
                ★ {spa.rating} ({spa.reviews} reviews)
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
                About This Spa Experience
              </h2>
              <p
                style={{
                  fontSize: "1.1rem",
                  lineHeight: "1.7",
                  color: "#666",
                  marginBottom: "1.5rem",
                }}
              >
                {spa.longDescription}
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
                    Duration:
                  </span>
                  <span style={{ marginLeft: "0.5rem", color: "#666" }}>
                    {spa.duration}
                  </span>
                </div>
                <div>
                  <span style={{ fontWeight: "600", color: "#333" }}>
                    Category:
                  </span>
                  <span style={{ marginLeft: "0.5rem", color: "#666" }}>
                    {spa.category}
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
                Treatments Included
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
                {spa.treatments.map((treatment, index) => (
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
                    <span style={{ color: "#9370DB" }}>🧘</span>
                    {treatment}
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
                Operating Hours
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
                {Object.entries(spa.openHours).map(([day, hours]) => (
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
                Spa Amenities
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
                {spa.amenities.map((amenity, index) => (
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
                Our Specialists
              </h3>
              <div
                style={{
                  display: "flex",
                  flexWrap: "wrap",
                  gap: "0.5rem",
                }}
              >
                {spa.therapists.map((therapist, index) => (
                  <span
                    key={index}
                    style={{
                      background: "#f8f5ff",
                      color: "#9370DB",
                      padding: "0.4rem 0.8rem",
                      borderRadius: "15px",
                      fontSize: "0.9rem",
                      fontWeight: "500",
                    }}
                  >
                    {therapist}
                  </span>
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
                Available Packages
              </h3>
              <div
                style={{
                  background: "#fff",
                  borderRadius: "8px",
                  padding: "1.5rem",
                  boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
                }}
              >
                {spa.packages.map((pkg, index) => (
                  <div
                    key={index}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "1rem",
                      padding: "0.75rem 0",
                      borderBottom:
                        index < spa.packages.length - 1
                          ? "1px solid #eee"
                          : "none",
                    }}
                  >
                    <div
                      style={{
                        width: "8px",
                        height: "8px",
                        borderRadius: "50%",
                        background: "#9370DB",
                      }}
                    ></div>
                    <span style={{ color: "#666" }}>{pkg}</span>
                  </div>
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
                Contact & Policies
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
                    {spa.address}
                  </p>
                </div>
                <div style={{ marginBottom: "1rem" }}>
                  <strong style={{ color: "#333" }}>Phone:</strong>
                  <p style={{ color: "#666", margin: "0.25rem 0 0 0" }}>
                    {spa.phone}
                  </p>
                </div>
                <div style={{ marginBottom: "1.5rem" }}>
                  <strong style={{ color: "#333" }}>Website:</strong>
                  <p style={{ color: "#666", margin: "0.25rem 0 0 0" }}>
                    {spa.website}
                  </p>
                </div>
                <div
                  style={{ borderTop: "1px solid #e0e0e0", paddingTop: "1rem" }}
                >
                  <strong
                    style={{
                      color: "#333",
                      display: "block",
                      marginBottom: "0.5rem",
                    }}
                  >
                    Policies:
                  </strong>
                  {Object.entries(spa.policies).map(([key, value]) => (
                    <div key={key} style={{ marginBottom: "0.5rem" }}>
                      <span
                        style={{
                          fontWeight: "500",
                          color: "#555",
                          textTransform: "capitalize",
                        }}
                      >
                        {key.replace(/([A-Z])/g, " $1")}:
                      </span>
                      <span style={{ color: "#666", marginLeft: "0.5rem" }}>
                        {value}
                      </span>
                    </div>
                  ))}
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
                    ${spa.price}
                  </span>
                  <span
                    style={{
                      fontSize: "1rem",
                      color: "#999",
                      textDecoration: "line-through",
                      marginLeft: "0.5rem",
                    }}
                  >
                    ${spa.originalPrice}
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
                per session ({spa.duration})
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
                  {spa.rating}
                </span>
                <span style={{ color: "#666" }}>({spa.reviews} reviews)</span>
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
                  Select Date
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
                  Select Time
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
                  <option>9:00 AM</option>
                  <option>10:00 AM</option>
                  <option>11:00 AM</option>
                  <option>12:00 PM</option>
                  <option>1:00 PM</option>
                  <option>2:00 PM</option>
                  <option>3:00 PM</option>
                  <option>4:00 PM</option>
                  <option>5:00 PM</option>
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
                  Package Selection
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
                  {spa.packages.map((pkg, index) => (
                    <option key={index} value={pkg}>
                      {pkg}
                    </option>
                  ))}
                </select>
              </div>

              <button
                style={{
                  width: "100%",
                  background: "linear-gradient(135deg, #9370DB, #663399)",
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
                  (e.currentTarget.style.background =
                    "linear-gradient(135deg, #8A2BE2, #4B0082)")
                }
                onMouseOut={(e) =>
                  (e.currentTarget.style.background =
                    "linear-gradient(135deg, #9370DB, #663399)")
                }
              >
                Book Treatment
              </button>

              <p
                style={{
                  textAlign: "center",
                  color: "#666",
                  fontSize: "0.9rem",
                  margin: 0,
                }}
              >
                {spa.policies.cancellation}
              </p>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default SpaDetailsPage;
