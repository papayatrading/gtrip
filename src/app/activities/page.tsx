"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import Footer from "../../components/Footer";
import AvailabilitySearch from "../../components/AvailabilitySearch";

const ActivitiesPage: React.FC = () => {
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
    },
  ];

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
    <div className="min-h-screen bg-gray-50">
      {/* Modern Teal Hero Section */}
      <div className="relative bg-gradient-to-br from-teal-600 via-teal-700 to-teal-800 text-white">
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 tracking-tight">
            Entertainment, excitement & more
          </h1>
          <p className="text-xl md:text-2xl text-teal-100 max-w-3xl mx-auto leading-relaxed">
            Discover thrilling experiences and unforgettable adventures around the world
          </p>
          {/* Decorative elements */}
          <div className="absolute top-10 left-10 w-32 h-32 bg-teal-500/20 rounded-full blur-xl"></div>
          <div className="absolute bottom-10 right-10 w-24 h-24 bg-teal-400/20 rounded-full blur-xl"></div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <AvailabilitySearch
          destinationLabel="Destination:"
          showRoomCount={false}
          showDates={false}
        />
      </div>

      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "4rem 2rem",
        }}
      >
        {/* Modern Activities Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {activities.map((activity) => (
            <Link
              key={activity.id}
              href={`/activities/${activity.id}`}
              className="group block"
            >
              <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden group-hover:scale-105">
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src={activity.image}
                    alt={activity.name}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  {/* Rating Badge */}
                  <div className="absolute top-4 right-4 bg-teal-600 text-white px-3 py-1.5 rounded-full text-sm font-semibold shadow-lg">
                    ★ {activity.rating}
                  </div>
                  {/* Difficulty Badge */}
                  <div 
                    className="absolute top-4 left-4 text-white px-3 py-1.5 rounded-full text-sm font-semibold shadow-lg"
                    style={{ backgroundColor: getDifficultyColor(activity.difficulty) }}
                  >
                    {activity.difficulty}
                  </div>
                  {/* Duration Badge */}
                  <div className="absolute bottom-4 left-4 bg-black/70 text-white px-3 py-1.5 rounded-full text-sm font-medium backdrop-blur-sm">
                    {activity.duration}
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-teal-700 transition-colors duration-200">
                    {activity.name}
                  </h3>

                  <p className="text-gray-500 text-sm mb-2 flex items-center">
                    <svg className="w-4 h-4 mr-1.5 text-teal-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    </svg>
                    {activity.location}
                  </p>

                  <p className="text-gray-600 text-sm mb-4 line-clamp-2 leading-relaxed">
                    {activity.description}
                  </p>

                  <div className="flex justify-between items-center pt-4 border-t border-gray-100">
                    <div>
                      <div className="text-2xl font-bold text-teal-600">
                        ${activity.price}
                      </div>
                      <div className="text-xs text-gray-500 flex items-center">
                        <svg className="w-3 h-3 mr-1 text-yellow-400" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                        </svg>
                        {activity.reviews} reviews
                      </div>
                    </div>
                    <div className="bg-teal-600 hover:bg-teal-700 text-white px-4 py-2 rounded-lg font-semibold transition-all duration-200 shadow-lg hover:shadow-xl text-sm">
                      Book Now
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Modern Reviews Section */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mt-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Activity Reviews
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                name: "David Martinez",
                location: "Madrid, Spain",
                rating: 5,
                review:
                  "Incredible adventure activities! The guides were professional and the experiences were unforgettable. Worth every penny!",
                date: "1 week ago",
                avatar: "🧗‍♂️",
              },
              {
                name: "Lisa Thompson",
                location: "London, UK",
                rating: 5,
                review:
                  "Amazing variety of activities to choose from. The booking was easy and the customer service was excellent.",
                date: "2 weeks ago",
                avatar: "🏄‍♀️",
              },
              {
                name: "Yuki Tanaka",
                location: "Tokyo, Japan",
                rating: 4,
                review:
                  "Great selection of outdoor activities. Had an amazing time with family. The safety measures were top-notch.",
                date: "1 month ago",
                avatar: "🚴‍♀️",
              },
            ].map((review, index) => (
              <div
                key={index}
                className="bg-gray-50 rounded-xl p-6 border border-gray-200 hover:shadow-lg transition-shadow duration-200"
              >
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-teal-600 to-teal-700 rounded-full flex items-center justify-center text-xl mr-4">
                    {review.avatar}
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900">
                      {review.name}
                    </h4>
                    <p className="text-sm text-gray-600">
                      {review.location}
                    </p>
                  </div>
                </div>

                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <span
                      key={i}
                      className={`text-lg mr-1 ${
                        i < review.rating ? "text-yellow-400" : "text-gray-300"
                      }`}
                    >
                      ★
                    </span>
                  ))}
                  <span className="text-sm text-gray-500 ml-2">
                    {review.date}
                  </span>
                </div>

                <p className="text-gray-700 leading-relaxed">
                  "{review.review}"
                </p>
              </div>
            ))}
          </div>

          <div className="text-center mt-8">
            <button className="bg-teal-600 hover:bg-teal-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors duration-200 shadow-lg hover:shadow-xl">
              Read More Reviews
            </button>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default ActivitiesPage;
