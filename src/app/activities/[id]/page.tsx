"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import Footer from "../../../components/Footer";

interface ActivityDetailsPageProps {
  params: { id: string };
}

const ActivityDetailsPage: React.FC<ActivityDetailsPageProps> = ({
  params,
}) => {
  const activities = [
    {
      id: 1,
      name: "White Water Rafting",
      location: "Colorado Rapids",
      image:
        "/activities/nature-will-offer-some-best-adventures-shot-group-young-male-friends-white-water-rafting.webp",
      price: 89,
      duration: "4 hours",
      difficulty: "Moderate",
      rating: 4.8,
      reviews: 342,
      description:
        "Experience the thrill of navigating rushing rapids with professional guides",
      longDescription:
        "Embark on an exhilarating white water rafting adventure through the stunning Colorado Rapids. Our experienced guides will lead you through challenging Class III and IV rapids while ensuring your safety throughout the journey. This action-packed tour includes all necessary equipment, safety briefing, and a riverside lunch. Perfect for thrill-seekers looking to experience the raw power of nature while enjoying breathtaking mountain scenery.",
      included: [
        "Professional guide",
        "Safety equipment",
        "Riverside lunch",
        "Transportation",
        "Photos",
      ],
      schedule: [
        "9:00 AM - Meet at base camp",
        "9:30 AM - Safety briefing",
        "10:00 AM - Start rafting",
        "12:30 PM - Riverside lunch",
        "2:00 PM - Return to base",
      ],
      requirements: [
        "Minimum age 12",
        "Basic swimming ability",
        "Good physical condition",
      ],
      meetingPoint:
        "Colorado Rapids Adventure Center, 123 River Road, Glenwood Springs, CO",
    },
    {
      id: 2,
      name: "Scuba Diving",
      location: "Great Barrier Reef",
      image:
        "/activities/underwater-portrait-scuba-diver-exploring-sea-world.webp",
      price: 155,
      duration: "6 hours",
      difficulty: "Beginner",
      rating: 4.9,
      reviews: 789,
      description:
        "Explore the underwater world and discover marine life in crystal clear waters",
      longDescription:
        "Dive into the crystal-clear waters of the Great Barrier Reef and discover one of the world's most spectacular underwater ecosystems. This full-day scuba diving experience includes equipment rental, professional instruction, and guided dives to the best reef locations. Whether you're a beginner or experienced diver, our certified instructors will ensure you have a safe and unforgettable underwater adventure while exploring vibrant coral gardens and diverse marine life.",
      included: [
        "Scuba equipment",
        "Professional instructor",
        "Boat transportation",
        "Lunch",
        "Underwater photos",
      ],
      schedule: [
        "8:00 AM - Marina departure",
        "9:30 AM - First dive site",
        "11:00 AM - Second dive",
        "12:30 PM - Lunch on boat",
        "2:00 PM - Third dive",
        "4:00 PM - Return to marina",
      ],
      requirements: [
        "Minimum age 10",
        "Basic swimming skills",
        "Medical clearance if over 45",
      ],
      meetingPoint:
        "Reef Discovery Marina, Port Douglas, Queensland, Australia",
    },
    {
      id: 3,
      name: "Skydiving",
      location: "Nevada Desert",
      image: "/activities/people-skydiving-landscape.webp",
      price: 299,
      duration: "3 hours",
      difficulty: "Advanced",
      rating: 4.7,
      reviews: 156,
      description:
        "Feel the ultimate adrenaline rush with a tandem skydive from 15,000 feet",
      longDescription:
        "Experience the ultimate adrenaline rush with a tandem skydive over the stunning Nevada Desert landscape. Jumping from 15,000 feet, you'll enjoy 60 seconds of freefall before your experienced instructor deploys the parachute for a peaceful 5-minute canopy ride. This once-in-a-lifetime experience includes comprehensive training, all safety equipment, and professional video recording of your jump.",
      included: [
        "Tandem instructor",
        "Safety equipment",
        "Training session",
        "Certificate",
        "Video recording",
      ],
      schedule: [
        "10:00 AM - Check-in and paperwork",
        "10:30 AM - Training session",
        "11:30 AM - Gear up",
        "12:00 PM - Board aircraft",
        "12:30 PM - Jump!",
        "1:30 PM - Celebration and certificate",
      ],
      requirements: [
        "Minimum age 18",
        "Weight limit 230 lbs",
        "No heart conditions",
        "Sign waiver",
      ],
      meetingPoint: "Nevada Skydiving Center, 456 Airport Road, Las Vegas, NV",
    },
    {
      id: 4,
      name: "Mountain Skiing",
      location: "Swiss Alps",
      image: "/activities/low-angle-view-people-skiing-snow.webp",
      price: 125,
      duration: "Full day",
      difficulty: "Intermediate",
      rating: 4.6,
      reviews: 523,
      description: "Ski down pristine slopes with breathtaking mountain views",
      longDescription:
        "Enjoy a full day of skiing on the pristine slopes of the Swiss Alps. This guided skiing experience takes you through some of the most beautiful mountain terrain in the world. Whether you're looking to improve your technique or simply enjoy the incredible alpine scenery, our certified ski instructors will ensure you have an amazing day on the mountain. The package includes lift tickets, equipment rental, and lunch at a mountain restaurant.",
      included: [
        "Ski equipment rental",
        "Lift tickets",
        "Professional instructor",
        "Mountain lunch",
        "Ski map",
      ],
      schedule: [
        "8:30 AM - Equipment fitting",
        "9:00 AM - First runs",
        "12:00 PM - Mountain lunch",
        "1:30 PM - Afternoon skiing",
        "4:00 PM - Return equipment",
      ],
      requirements: [
        "Intermediate skiing ability",
        "Minimum age 8",
        "Appropriate winter clothing",
      ],
      meetingPoint: "Alpine Ski School, Zermatt Village Center, Switzerland",
    },
    {
      id: 5,
      name: "ATV Sand Dunes",
      location: "Dubai Desert",
      image: "/activities/teen-riding-atv-sand-dunes-making-turn-sand.webp",
      price: 75,
      duration: "2 hours",
      difficulty: "Easy",
      rating: 4.5,
      reviews: 287,
      description:
        "Race through golden sand dunes on powerful all-terrain vehicles",
      longDescription:
        "Experience the thrill of riding powerful ATVs through the golden sand dunes of the Dubai Desert. This exciting adventure includes a safety briefing, ATV training, and guided tour through the stunning desert landscape. Perfect for beginners and experienced riders alike, this tour offers an adrenaline-pumping way to explore the beauty of the Arabian Desert while enjoying panoramic views of the dunes.",
      included: [
        "ATV rental",
        "Safety equipment",
        "Professional guide",
        "Refreshments",
        "Photos",
      ],
      schedule: [
        "3:00 PM - Pick-up from hotel",
        "4:00 PM - Safety briefing",
        "4:30 PM - ATV adventure",
        "6:00 PM - Refreshment break",
        "6:30 PM - Return to hotel",
      ],
      requirements: [
        "Minimum age 16",
        "Valid driving license",
        "Closed-toe shoes required",
      ],
      meetingPoint:
        "Desert Adventure Base Camp, Dubai Desert Conservation Reserve",
    },
    {
      id: 6,
      name: "Rock Climbing",
      location: "Yosemite Valley",
      image:
        "/activities/beautiful-top-angle-shot-people-doing-extreme-sports-river-ina-stony-mountain.webp",
      price: 110,
      duration: "5 hours",
      difficulty: "Intermediate",
      rating: 4.7,
      reviews: 198,
      description:
        "Challenge yourself on world-class climbing routes with expert instruction",
      longDescription:
        "Challenge yourself on some of the world's most famous climbing routes in Yosemite Valley. This guided rock climbing experience is perfect for intermediate climbers looking to test their skills on granite walls. Our certified climbing guides will lead you through carefully selected routes that offer both challenge and stunning views of the valley. All climbing equipment and safety gear is provided.",
      included: [
        "Climbing equipment",
        "Safety gear",
        "Professional guide",
        "Route planning",
        "Lunch",
      ],
      schedule: [
        "8:00 AM - Meet at base",
        "8:30 AM - Hike to climbing area",
        "9:30 AM - Climbing session",
        "12:30 PM - Lunch break",
        "2:00 PM - Afternoon climbing",
        "4:00 PM - Return hike",
      ],
      requirements: [
        "Previous climbing experience",
        "Good physical condition",
        "Minimum age 14",
      ],
      meetingPoint:
        "Yosemite Mountain School, Curry Village, Yosemite National Park, CA",
    },
  ];

  const activity = activities.find((a) => a.id === parseInt(params.id));

  if (!activity) {
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
            Activity Not Found
          </h1>
          <p style={{ color: "#666", marginBottom: "2rem" }}>
            The activity you're looking for doesn't exist.
          </p>
          <Link
            href="/activities"
            style={{
              background: "#FF385C",
              color: "#fff",
              textDecoration: "none",
              padding: "1rem 2rem",
              borderRadius: "8px",
              fontWeight: "600",
            }}
          >
            Back to Activities
          </Link>
        </div>
        <Footer />
      </div>
    );
  }

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case "Easy":
        return "#28a745";
      case "Beginner":
        return "#28a745";
      case "Moderate":
        return "#ffc107";
      case "Intermediate":
        return "#fd7e14";
      case "Advanced":
        return "#dc3545";
      default:
        return "#6c757d";
    }
  };

  return (
    <div style={{ backgroundColor: "#f8f9fa", minHeight: "100vh" }}>
      <div style={{ position: "relative", height: "60vh", overflow: "hidden" }}>
        <Image
          src={activity.image}
          alt={activity.name}
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
                href="/activities"
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
                ← Back to Activities
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
              {activity.name}
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
                📍 {activity.location}
              </p>
              <div
                style={{
                  background: getDifficultyColor(activity.difficulty),
                  color: "#fff",
                  padding: "0.5rem 1rem",
                  borderRadius: "20px",
                  fontSize: "0.9rem",
                  fontWeight: "600",
                }}
              >
                {activity.difficulty}
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
                ★ {activity.rating} ({activity.reviews} reviews)
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
                About This Experience
              </h2>
              <p
                style={{
                  fontSize: "1.1rem",
                  lineHeight: "1.7",
                  color: "#666",
                  marginBottom: "1.5rem",
                }}
              >
                {activity.longDescription}
              </p>
              <div
                style={{
                  display: "flex",
                  gap: "2rem",
                  flexWrap: "wrap",
                  marginTop: "2rem",
                }}
              >
                <div>
                  <span style={{ fontWeight: "600", color: "#333" }}>
                    Duration:
                  </span>
                  <span style={{ marginLeft: "0.5rem", color: "#666" }}>
                    {activity.duration}
                  </span>
                </div>
                <div>
                  <span style={{ fontWeight: "600", color: "#333" }}>
                    Difficulty:
                  </span>
                  <span style={{ marginLeft: "0.5rem", color: "#666" }}>
                    {activity.difficulty}
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
                {activity.included.map((item, index) => (
                  <li
                    key={index}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "0.5rem",
                      color: "#666",
                      fontSize: "1rem",
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
                Schedule
              </h3>
              <div
                style={{
                  background: "#fff",
                  borderRadius: "8px",
                  padding: "1.5rem",
                  boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
                }}
              >
                {activity.schedule.map((item, index) => (
                  <div
                    key={index}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "1rem",
                      padding: "0.75rem 0",
                      borderBottom:
                        index < activity.schedule.length - 1
                          ? "1px solid #eee"
                          : "none",
                    }}
                  >
                    <div
                      style={{
                        width: "8px",
                        height: "8px",
                        borderRadius: "50%",
                        background: "#FF385C",
                      }}
                    ></div>
                    <span style={{ color: "#666" }}>{item}</span>
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
                Requirements
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
                {activity.requirements.map((req, index) => (
                  <li
                    key={index}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "0.5rem",
                      color: "#666",
                      fontSize: "1rem",
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
                Meeting Point
              </h3>
              <p
                style={{
                  color: "#666",
                  fontSize: "1rem",
                  lineHeight: "1.6",
                  background: "#fff",
                  padding: "1rem",
                  borderRadius: "8px",
                  boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
                }}
              >
                📍 {activity.meetingPoint}
              </p>
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
                    ${activity.price}
                  </span>
                  <span
                    style={{
                      fontSize: "1rem",
                      color: "#666",
                      marginLeft: "0.5rem",
                    }}
                  >
                    per person
                  </span>
                </div>
              </div>

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
                  {activity.rating}
                </span>
                <span style={{ color: "#666" }}>
                  ({activity.reviews} reviews)
                </span>
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

              <div style={{ marginBottom: "2rem" }}>
                <label
                  style={{
                    display: "block",
                    fontWeight: "600",
                    color: "#333",
                    marginBottom: "0.5rem",
                  }}
                >
                  Participants
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
                  <option>1 person</option>
                  <option>2 people</option>
                  <option>3 people</option>
                  <option>4 people</option>
                  <option>5+ people</option>
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
                Book Now
              </button>

              <p
                style={{
                  textAlign: "center",
                  color: "#666",
                  fontSize: "0.9rem",
                  margin: 0,
                }}
              >
                Free cancellation up to 24 hours before
              </p>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default ActivityDetailsPage;
