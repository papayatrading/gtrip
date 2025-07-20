"use client";

import React from "react";
import DashboardLayout from "@/components/layout/DashboardLayout";
import Link from "next/link";
import { useAuth } from "@/context/AuthContext";

const BusinessDashboard = () => {
  const { user } = useAuth();

  const stats = [
    {
      name: "Total Listings",
      value: "24",
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
            d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
          />
        </svg>
      ),
      color: "bg-blue-500",
      change: "+12%",
    },
    {
      name: "Active Bookings",
      value: "42",
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
      color: "bg-green-500",
      change: "+18%",
    },
    {
      name: "Monthly Revenue",
      value: "$12,450",
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
      change: "+25%",
    },
    {
      name: "Customer Rating",
      value: "4.8",
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
            d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
          />
        </svg>
      ),
      color: "bg-yellow-500",
      change: "+0.2",
    },
  ];

  const recentBookings = [
    {
      id: 1,
      customerName: "John Smith",
      service: "Luxury Hotel Suite",
      date: "2024-03-20",
      status: "Confirmed",
      amount: "$850",
      avatar:
        "https://ui-avatars.com/api/?name=John+Smith&background=3b82f6&color=fff",
    },
    {
      id: 2,
      customerName: "Sarah Johnson",
      service: "City Walking Tour",
      date: "2024-03-18",
      status: "Completed",
      amount: "$125",
      avatar:
        "https://ui-avatars.com/api/?name=Sarah+Johnson&background=ef4444&color=fff",
    },
    {
      id: 3,
      customerName: "Mike Wilson",
      service: "Car Rental - SUV",
      date: "2024-03-25",
      status: "Pending",
      amount: "$450",
      avatar:
        "https://ui-avatars.com/api/?name=Mike+Wilson&background=10b981&color=fff",
    },
  ];

  const topListings = [
    {
      name: "Grand Palace Hotel",
      bookings: 28,
      revenue: "$4,200",
      rating: 4.9,
      image: "/hotels/beautiful-luxury-outdoor-swimming-pool-hotel-resort.webp",
    },
    {
      name: "Historic City Tour",
      bookings: 15,
      revenue: "$1,875",
      rating: 4.7,
      image: "/walkingtour/narrow-street-with-houses-small-town.webp",
    },
    {
      name: "Premium Car Fleet",
      bookings: 22,
      revenue: "$6,600",
      rating: 4.8,
      image: "/carrental/car-headlight-couple-making-deal-with-car-dealer.webp",
    },
  ];

  return (
    <DashboardLayout userType="business">
      <div className="p-6 lg:p-8">
        <div className="mb-8">
          <h1 className="text-2xl lg:text-3xl font-bold text-gray-900">
            Welcome back, {user?.name || "Business Owner"}!
          </h1>
          <p className="mt-2 text-gray-600">
            Here's how your business is performing today.
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
                <div className="ml-4 flex-1">
                  <p className="text-sm font-medium text-gray-600">
                    {stat.name}
                  </p>
                  <div className="flex items-center justify-between">
                    <p className="text-2xl font-bold text-gray-900">
                      {stat.value}
                    </p>
                    <span className="text-sm font-medium text-green-600">
                      {stat.change}
                    </span>
                  </div>
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
              href="/business-listings"
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
              <span className="font-medium">Add New Listing</span>
            </Link>
            <Link
              href="/business-bookings"
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
              href="/business-analytics"
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
                  d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                />
              </svg>
              <span className="font-medium">Analytics</span>
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
                  href="/business-bookings"
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
                    src={booking.avatar}
                    alt={booking.customerName}
                    className="w-12 h-12 rounded-full"
                  />
                  <div className="flex-1">
                    <h3 className="font-medium text-gray-900">
                      {booking.customerName}
                    </h3>
                    <p className="text-sm text-gray-600">{booking.service}</p>
                    <p className="text-xs text-gray-500">{booking.date}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-sm font-semibold text-gray-900">
                      {booking.amount}
                    </p>
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
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-sm border border-gray-200">
            <div className="p-6 border-b border-gray-200">
              <div className="flex items-center justify-between">
                <h2 className="text-xl font-semibold text-gray-900">
                  Top Listings
                </h2>
                <Link
                  href="/business-listings"
                  className="text-blue-600 hover:text-blue-800 text-sm font-medium"
                >
                  View All
                </Link>
              </div>
            </div>
            <div className="p-6 space-y-4">
              {topListings.map((listing, index) => (
                <div
                  key={index}
                  className="flex items-center space-x-4 p-4 border border-gray-100 rounded-lg hover:bg-gray-50 transition-colors duration-200"
                >
                  <img
                    src={listing.image}
                    alt={listing.name}
                    className="w-16 h-16 rounded-lg object-cover"
                  />
                  <div className="flex-1">
                    <h3 className="font-medium text-gray-900">
                      {listing.name}
                    </h3>
                    <p className="text-sm text-gray-600">
                      {listing.bookings} bookings this month
                    </p>
                    <div className="flex items-center space-x-1 mt-1">
                      <svg
                        className="w-4 h-4 text-yellow-400"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                      <span className="text-sm text-gray-600">
                        {listing.rating}
                      </span>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-sm font-semibold text-gray-900">
                      {listing.revenue}
                    </p>
                    <p className="text-xs text-gray-500">Revenue</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-8 bg-gradient-to-r from-green-500 to-blue-600 rounded-lg p-6 lg:p-8 text-white">
          <div className="flex flex-col lg:flex-row items-center justify-between">
            <div className="mb-4 lg:mb-0">
              <h2 className="text-2xl font-bold mb-2">Grow Your Business</h2>
              <p className="text-green-100">
                Add more listings and reach more customers to increase your
                revenue.
              </p>
            </div>
            <Link
              href="/business-listings"
              className="bg-white text-green-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200"
            >
              Add New Listing
            </Link>
          </div>
        </div>

        <div className="mt-8 bg-white rounded-lg shadow-sm border border-gray-200 p-6">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">
            Revenue Overview
          </h2>
          <div className="h-64 bg-gray-50 rounded-lg flex items-center justify-center">
            <div className="text-center">
              <svg
                className="w-12 h-12 text-gray-400 mx-auto mb-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                />
              </svg>
              <p className="text-gray-500">
                Revenue chart will be displayed here
              </p>
              <p className="text-sm text-gray-400 mt-1">
                Integration with analytics coming soon
              </p>
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default BusinessDashboard;
