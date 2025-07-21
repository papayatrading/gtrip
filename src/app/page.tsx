import Image from "next/image";

import AvailabilitySearch from "../components/AvailabilitySearch";
import PlaceCards from "../components/PlaceCards";
import HotelList from "../components/HotelList";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <div style={{ backgroundColor: "#f8f9fa", minHeight: "100vh" }}>
      <div
        style={{
          backgroundImage: "url('/images/hero1.webp')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          minHeight: "70vh",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          position: "relative",
          padding: "2rem 1rem",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: "linear-gradient(135deg, rgba(13, 148, 136, 0.8) 0%, rgba(17, 94, 89, 0.9) 100%)",
            zIndex: 1,
          }}
        ></div>
        <div
          style={{
            position: "relative",
            zIndex: 2,
            textAlign: "center",
            marginBottom: "3rem",
            maxWidth: "800px",
          }}
        >
          <h1
            style={{
              color: "#fff",
              fontSize: "3rem",
              fontWeight: "700",
              marginBottom: "1rem",
              textShadow: "0 2px 4px rgba(0,0,0,0.5)",
              lineHeight: "1.2",
            }}
          >
            Browse, compare, and book with ease
          </h1>
          <p
            style={{
              color: "#fff",
              fontSize: "1.3rem",
              marginBottom: "2rem",
              textShadow: "0 1px 2px rgba(0,0,0,0.5)",
              opacity: "0.95",
            }}
          >
            Search low prices on hotels, homes and much more...
          </p>
        </div>
        <div
          style={{
            position: "relative",
            zIndex: 2,
            width: "100%",
            maxWidth: "1200px",
          }}
        >
          <AvailabilitySearch />
        </div>
      </div>
      <PlaceCards />
      <HotelList />
      <Footer />
    </div>
  );
}
