"use client";

import React from "react";
import DashboardLayout from "@/components/layout/DashboardLayout";
import Link from "next/link";
import { useAuth } from "@/context/AuthContext";

const Dashboard = () => {
  const { user } = useAuth();

  const stats = [
    {
      name: "Total Bookings",
      value: "12",
      icon: (
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
          />
        </svg>
      ),
      color: "bg-blue-500",
    },
    {
      name: "Upcoming Trips",
      value: "3",
      icon: (
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      ),
      color: "bg-green-500",
    },
    {
      name: "Favorite Places",
      value: "8",
      icon: (
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
          />
        </svg>
      ),
      color: "bg-red-500",
    },
    {
      name: "Total Spent",
      value: "$2,450",
      icon: (
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1"
          />
        </svg>
      ),
      color: "bg-purple-500",
    },
  ];

  const recentBookings = [
    {
      id: 1,
      destination: "Santorini, Greece",
      date: "2024-03-15",
      status: "Confirmed",
      amount: "$1,200",
      image: "/places/paris.webp",
    },
    {
      id: 2,
      destination: "Tokyo, Japan",
      date: "2024-02-28",
      status: "Completed",
      amount: "$800",
      image: "/places/newyork.webp",
    },
    {
      id: 3,
      destination: "Bali, Indonesia",
      date: "2024-04-10",
      status: "Pending",
      amount: "$450",
      image: "/places/budapest.webp",
    },
  ];

  const favoriteDestinations = [
    {
      name: "Paris, France",
      image: "/places/paris.webp",
      visits: 3,
    },
    {
      name: "New York, USA",
      image: "/places/newyork.webp",
      visits: 2,
    },
    {
      name: "Budapest, Hungary",
      image: "/places/budapest.webp",
      visits: 1,
    },
  ];

  return (
    <DashboardLayout userType="regular">
      <div className="p-6 lg:p-8">
        <div className="mb-8">
          <h1 className="text-2xl lg:text-3xl font-bold text-gray-900">
            Welcome back, {user?.name || "Traveler"}!
          </h1>
          <p className="mt-2 text-gray-600">
            Ready for your next adventure? Explore your dashboard below.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat) => (
            <div
              key={stat.name}
              className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 hover:shadow-md transition-shadow duration-200"
            >
              <div className="flex items-center">
                <div className={`${stat.color} p-3 rounded-lg`}>
                  <span className="text-white">{stat.icon}</span>
                </div>
                <div className="ml-4">
                  <p className="text-sm font-medium text-gray-600">
                    {stat.name}
                  </p>
                  <p className="text-2xl font-bold text-gray-900">
                    {stat.value}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mb-8">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">
            Quick Actions
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Link
              href="/search"
              className="bg-blue-600 hover:bg-blue-700 text-white p-4 rounded-lg flex items-center justify-center space-x-2 transition-colors duration-200"
            >
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 4v16m8-8H4"
                />
              </svg>
              <span className="font-medium">Book New Trip</span>
            </Link>
            <Link
              href="/bookings"
              className="bg-green-600 hover:bg-green-700 text-white p-4 rounded-lg flex items-center justify-center space-x-2 transition-colors duration-200"
            >
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                />
              </svg>
              <span className="font-medium">View Bookings</span>
            </Link>
            <Link
              href="/profile"
              className="bg-purple-600 hover:bg-purple-700 text-white p-4 rounded-lg flex items-center justify-center space-x-2 transition-colors duration-200"
            >
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                />
              </svg>
              <span className="font-medium">Manage Profile</span>
            </Link>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="bg-white rounded-lg shadow-sm border border-gray-200">
            <div className="p-6 border-b border-gray-200">
              <div className="flex items-center justify-between">
                <h2 className="text-xl font-semibold text-gray-900">
                  Recent Bookings
                </h2>
                <Link
                  href="/bookings"
                  className="text-blue-600 hover:text-blue-800 text-sm font-medium"
                >
                  View All
                </Link>
              </div>
            </div>
            <div className="p-6 space-y-4">
              {recentBookings.map((booking) => (
                <div
                  key={booking.id}
                  className="flex items-center space-x-4 p-4 border border-gray-100 rounded-lg hover:bg-gray-50 transition-colors duration-200"
                >
                  <img
                    src={booking.image}
                    alt={booking.destination}
                    className="w-16 h-16 rounded-lg object-cover"
                  />
                  <div className="flex-1">
                    <h3 className="font-medium text-gray-900">
                      {booking.destination}
                    </h3>
                    <p className="text-sm text-gray-600">{booking.date}</p>
                    <div className="flex items-center space-x-2 mt-1">
                      <span
                        className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                          booking.status === "Confirmed"
                            ? "bg-green-100 text-green-800"
                            : booking.status === "Completed"
                            ? "bg-blue-100 text-blue-800"
                            : "bg-yellow-100 text-yellow-800"
                        }`}
                      >
                        {booking.status}
                      </span>
                      <span className="text-sm font-semibold text-gray-900">
                        {booking.amount}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-sm border border-gray-200">
            <div className="p-6 border-b border-gray-200">
              <div className="flex items-center justify-between">
                <h2 className="text-xl font-semibold text-gray-900">
                  Favorite Destinations
                </h2>
                <Link
                  href="/favorites"
                  className="text-blue-600 hover:text-blue-800 text-sm font-medium"
                >
                  View All
                </Link>
              </div>
            </div>
            <div className="p-6 space-y-4">
              {favoriteDestinations.map((destination, index) => (
                <div
                  key={index}
                  className="flex items-center space-x-4 p-4 border border-gray-100 rounded-lg hover:bg-gray-50 transition-colors duration-200"
                >
                  <img
                    src={destination.image}
                    alt={destination.name}
                    className="w-16 h-16 rounded-lg object-cover"
                  />
                  <div className="flex-1">
                    <h3 className="font-medium text-gray-900">
                      {destination.name}
                    </h3>
                    <p className="text-sm text-gray-600">
                      {destination.visits} visit
                      {destination.visits !== 1 ? "s" : ""}
                    </p>
                  </div>
                  <button className="text-red-500 hover:text-red-700">
                    <svg
                      className="w-5 h-5"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg p-6 lg:p-8 text-white">
          <div className="flex flex-col lg:flex-row items-center justify-between">
            <div className="mb-4 lg:mb-0">
              <h2 className="text-2xl font-bold mb-2">
                Ready for Your Next Adventure?
              </h2>
              <p className="text-blue-100">
                Discover amazing destinations and create unforgettable memories.
              </p>
            </div>
            <Link
              href="/search"
              className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200"
            >
              Explore Destinations
            </Link>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Dashboard;
