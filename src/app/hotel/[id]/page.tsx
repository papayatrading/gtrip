"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import Navbar from "../../../components/Navbar";

interface HotelDetailsProps {
  params: Promise<{
    id: string;
  }>;
}

const HotelDetails: React.FC<HotelDetailsProps> = async ({ params }) => {
  const resolvedParams = await params;
  const hotels = [
    {
      id: 1,
      name: "Grand Palace Hotel Paris",
      location: "Paris, France",
      image: "/hotels/beautiful-luxury-outdoor-swimming-pool-hotel-resort.jpg",
      price: 245,
      originalPrice: 320,
      rating: 4.8,
      reviews: 1247,
      amenities: ["Free WiFi", "Pool", "Spa", "Restaurant", "Room Service", "Concierge", "Parking", "Gym"],
      description: "Luxury hotel in the heart of Paris with stunning city views. Experience the epitome of French elegance and sophistication in our beautifully appointed rooms and suites.",
      fullDescription: "The Grand Palace Hotel Paris stands as a beacon of luxury in the City of Light. Our hotel combines classic French architecture with modern amenities to create an unforgettable experience. Each room features marble bathrooms, premium linens, and breathtaking views of the Parisian skyline. Our world-class spa offers rejuvenating treatments, while our Michelin-starred restaurant serves exquisite French cuisine.",
      address: "123 Champs-Élysées, 75008 Paris, France",
      checkIn: "3:00 PM",
      checkOut: "12:00 PM",
      policies: ["Free cancellation up to 24 hours before check-in", "Pets allowed with additional fee", "Non-smoking rooms available"]
    },
    {
      id: 2,
      name: "Tokyo Bay Resort",
      location: "Tokyo, Japan",
      image: "/hotels/rooftop-pool-showcasing-panoramic-views.jpg",
      price: 189,
      originalPrice: 250,
      rating: 4.7,
      reviews: 892,
      amenities: ["Free WiFi", "Gym", "Business Center", "Bar", "Restaurant", "Spa", "Pool", "Concierge"],
      description: "Modern hotel with panoramic views of Tokyo Bay",
      fullDescription: "Tokyo Bay Resort offers a perfect blend of Japanese hospitality and modern luxury. Located in the heart of Tokyo with stunning bay views, our hotel provides easy access to the city's business and entertainment districts. Experience traditional Japanese service with contemporary amenities.",
      address: "456 Bay Street, Minato City, Tokyo 105-0000, Japan",
      checkIn: "3:00 PM",
      checkOut: "11:00 AM",
      policies: ["Free cancellation up to 48 hours before check-in", "No pets allowed", "Smoking rooms available on request"]
    },
    {
      id: 3,
      name: "Manhattan Plaza Hotel",
      location: "New York, USA",
      image: "/hotels/detailed-view-hotels-restaurant-with-fine-dining-setups-service.jpg",
      price: 298,
      originalPrice: 380,
      rating: 4.6,
      reviews: 2156,
      amenities: ["Free WiFi", "Concierge", "Restaurant", "Valet", "Gym", "Business Center", "Room Service", "Bar"],
      description: "Iconic hotel in the heart of Manhattan",
      fullDescription: "Manhattan Plaza Hotel embodies the energy and sophistication of New York City. Located in the heart of Manhattan, our hotel offers unparalleled access to Broadway shows, world-class shopping, and fine dining. Each room is designed with modern amenities and classic New York style.",
      address: "789 Broadway, New York, NY 10003, USA",
      checkIn: "4:00 PM",
      checkOut: "12:00 PM",
      policies: ["Free cancellation up to 24 hours before check-in", "Pets allowed with restrictions", "All rooms are non-smoking"]
    },
    {
      id: 4,
      name: "London Bridge Suites",
      location: "London, UK",
      image: "/hotels/popular-resort-amara-dolce-vita-luxury-hotel-with-pools-water-parks-recreational-area-along-sea-coast-turkey-sunset-tekirova-kemer.jpg",
      price: 210,
      originalPrice: 275,
      rating: 4.7,
      reviews: 1598,
      amenities: ["Free WiFi", "Tea Service", "Gym", "Restaurant", "Concierge", "Business Center", "Room Service", "Bar"],
      description: "Elegant suites near London's famous landmarks",
      fullDescription: "London Bridge Suites offers sophisticated accommodations in one of London's most historic areas. Our elegant suites provide stunning views of the Thames and Tower Bridge. Enjoy traditional British hospitality with modern amenities and easy access to London's top attractions.",
      address: "321 London Bridge Street, London SE1 9SG, UK",
      checkIn: "3:00 PM",
      checkOut: "11:00 AM",
      policies: ["Free cancellation up to 24 hours before check-in", "Pets allowed in designated rooms", "Non-smoking property"]
    },
    {
      id: 5,
      name: "Barcelona Beach Resort",
      location: "Barcelona, Spain",
      image: "/hotels/rear-view-man-standing-sea-against-sky.jpg",
      price: 156,
      originalPrice: 195,
      rating: 4.8,
      reviews: 967,
      amenities: ["Free WiFi", "Beach Access", "Pool", "Spa", "Restaurant", "Bar", "Water Sports", "Tennis"],
      description: "Beachfront resort with Mediterranean charm",
      fullDescription: "Barcelona Beach Resort combines the vibrant culture of Barcelona with the relaxation of a beachfront getaway. Our resort offers direct beach access, multiple pools, and authentic Mediterranean cuisine. Experience the perfect blend of city excitement and seaside tranquility.",
      address: "654 Barceloneta Beach, 08003 Barcelona, Spain",
      checkIn: "3:00 PM",
      checkOut: "12:00 PM",
      policies: ["Free cancellation up to 48 hours before check-in", "Pets not allowed", "All rooms are non-smoking"]
    },
    {
      id: 6,
      name: "Bali Tropical Villa",
      location: "Bali, Indonesia",
      image: "/hotels/beautiful-luxury-outdoor-swimming-pool-hotel-resort.jpg",
      price: 89,
      originalPrice: 120,
      rating: 4.9,
      reviews: 743,
      amenities: ["Free WiFi", "Pool", "Spa", "Garden", "Restaurant", "Yoga Studio", "Bicycle Rental", "Airport Shuttle"],
      description: "Peaceful villa surrounded by tropical gardens",
      fullDescription: "Bali Tropical Villa offers an authentic Balinese experience in a serene tropical setting. Surrounded by lush gardens and rice paddies, our villa provides a peaceful retreat with traditional Balinese architecture and modern comforts. Enjoy daily yoga sessions and traditional spa treatments.",
      address: "987 Ubud Road, Ubud, Bali 80571, Indonesia",
      checkIn: "2:00 PM",
      checkOut: "12:00 PM",
      policies: ["Free cancellation up to 72 hours before check-in", "Pets not allowed", "Outdoor spaces only for smoking"]
    }
  ];

  const hotelId = parseInt(resolvedParams.id);
  const hotel = hotels.find(h => h.id === hotelId);

  if (!hotel) {
    return (
      <div style={{ backgroundColor: "#f8f9fa", minHeight: "100vh" }}>
        <Navbar />
        <div style={{ textAlign: "center", padding: "4rem 2rem" }}>
          <h1 style={{ color: "#333", fontSize: "2rem", marginBottom: "1rem" }}>Hotel Not Found</h1>
          <Link href="/" style={{ color: "#FF385C", textDecoration: "none", fontSize: "1.1rem" }}>
            ← Back to Home
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div style={{ backgroundColor: "#f8f9fa", minHeight: "100vh" }}>
      <Navbar />
      
      <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "2rem" }}>
        <Link 
          href="/" 
          style={{ 
            color: "#FF385C", 
            textDecoration: "none", 
            fontSize: "1rem",
            marginBottom: "2rem",
            display: "inline-block"
          }}
        >
          ← Back to Hotels
        </Link>

        <div style={{
          background: "#fff",
          borderRadius: "12px",
          overflow: "hidden",
          boxShadow: "0 8px 32px rgba(0,0,0,0.1)",
          marginBottom: "2rem"
        }}>
          <div style={{ position: "relative", height: "400px" }}>
            <Image
              src={hotel.image}
              alt={hotel.name}
              fill
              style={{ objectFit: "cover" }}
            />
            <div style={{
              position: "absolute",
              top: "2rem",
              right: "2rem",
              background: "#FF385C",
              color: "#fff",
              padding: "1rem 1.5rem",
              borderRadius: "25px",
              fontSize: "1.1rem",
              fontWeight: "600"
            }}>
              ★ {hotel.rating} ({hotel.reviews} reviews)
            </div>
          </div>

          <div style={{ padding: "2rem" }}>
            <div style={{ marginBottom: "2rem" }}>
              <h1 style={{
                fontSize: "2.5rem",
                fontWeight: "700",
                color: "#333",
                marginBottom: "0.5rem"
              }}>
                {hotel.name}
              </h1>
              <p style={{
                color: "#666",
                fontSize: "1.2rem",
                marginBottom: "1rem"
              }}>
                📍 {hotel.address}
              </p>
              
              <div style={{ display: "flex", alignItems: "baseline", gap: "1rem", marginBottom: "2rem" }}>
                <span style={{
                  fontSize: "2.5rem",
                  fontWeight: "700",
                  color: "#FF385C"
                }}>
                  ${hotel.price}
                </span>
                <span style={{
                  fontSize: "1.5rem",
                  color: "#999",
                  textDecoration: "line-through"
                }}>
                  ${hotel.originalPrice}
                </span>
                <span style={{
                  fontSize: "1.2rem",
                  color: "#666"
                }}>
                  per night
                </span>
              </div>
            </div>

            <div style={{
              display: "grid",
              gridTemplateColumns: "2fr 1fr",
              gap: "3rem"
            }}>
              <div>
                <h3 style={{
                  fontSize: "1.5rem",
                  fontWeight: "600",
                  color: "#333",
                  marginBottom: "1rem"
                }}>
                  About This Hotel
                </h3>
                <p style={{
                  color: "#666",
                  fontSize: "1.1rem",
                  lineHeight: "1.6",
                  marginBottom: "2rem"
                }}>
                  {hotel.fullDescription}
                </p>

                <h3 style={{
                  fontSize: "1.5rem",
                  fontWeight: "600",
                  color: "#333",
                  marginBottom: "1rem"
                }}>
                  Amenities
                </h3>
                <div style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
                  gap: "0.5rem",
                  marginBottom: "2rem"
                }}>
                  {hotel.amenities.map((amenity, index) => (
                    <div
                      key={index}
                      style={{
                        background: "#f8f9fa",
                        color: "#333",
                        padding: "0.7rem 1rem",
                        borderRadius: "8px",
                        fontSize: "1rem",
                        border: "1px solid #e9ecef"
                      }}
                    >
                      ✓ {amenity}
                    </div>
                  ))}
                </div>

                <h3 style={{
                  fontSize: "1.5rem",
                  fontWeight: "600",
                  color: "#333",
                  marginBottom: "1rem"
                }}>
                  Policies
                </h3>
                <ul style={{
                  color: "#666",
                  fontSize: "1rem",
                  lineHeight: "1.6",
                  paddingLeft: "1.5rem"
                }}>
                  {hotel.policies.map((policy, index) => (
                    <li key={index} style={{ marginBottom: "0.5rem" }}>
                      {policy}
                    </li>
                  ))}
                </ul>
              </div>

              <div style={{
                background: "#f8f9fa",
                padding: "2rem",
                borderRadius: "12px",
                height: "fit-content"
              }}>
                <h3 style={{
                  fontSize: "1.3rem",
                  fontWeight: "600",
                  color: "#333",
                  marginBottom: "1.5rem"
                }}>
                  Booking Information
                </h3>
                
                <div style={{ marginBottom: "1.5rem" }}>
                  <p style={{ color: "#666", marginBottom: "0.5rem" }}>Check-in: {hotel.checkIn}</p>
                  <p style={{ color: "#666", marginBottom: "0.5rem" }}>Check-out: {hotel.checkOut}</p>
                </div>

                <button style={{
                  background: "#FF385C",
                  color: "#fff",
                  border: "none",
                  borderRadius: "8px",
                  padding: "1rem 2rem",
                  fontWeight: "600",
                  cursor: "pointer",
                  fontSize: "1.1rem",
                  width: "100%",
                  marginBottom: "1rem"
                }}>
                  Book Now - ${hotel.price}/night
                </button>

                <button style={{
                  background: "transparent",
                  color: "#FF385C",
                  border: "2px solid #FF385C",
                  borderRadius: "8px",
                  padding: "1rem 2rem",
                  fontWeight: "600",
                  cursor: "pointer",
                  fontSize: "1rem",
                  width: "100%"
                }}>
                  Add to Wishlist
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HotelDetails;