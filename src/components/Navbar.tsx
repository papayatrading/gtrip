"use client";
import React from "react";
import Link from "next/link";

const Navbar: React.FC = () => {
  return (
    <nav style={{
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      padding: "1rem 2rem",
      background: "#ffffff",
      boxShadow: "0 2px 8px rgba(0,0,0,0.15)",
      position: "sticky",
      top: 0,
      zIndex: 1000,
    }}>
      <div style={{ fontWeight: "bold", fontSize: "1.5rem", color: "#FF385C" }}>
        GTrip
      </div>
      <form style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
        <input
          type="text"
          placeholder="Search hotels, destinations..."
          style={{
            padding: "0.5rem 1rem",
            borderRadius: "999px",
            border: "2px solid #ccc",
            minWidth: "250px",
            outline: "none",
            color: "#333",
          }}
        />
        <button
          type="submit"
          style={{
            background: "#FF385C",
            color: "#fff",
            border: "none",
            borderRadius: "999px",
            padding: "0.5rem 1.2rem",
            fontWeight: "bold",
            cursor: "pointer",
          }}
        >
          Search
        </button>
      </form>
      <div style={{ display: "flex", gap: "0.7rem", marginLeft: "2rem" }}>
        {[
          { name: "Hotels", path: "/" },
          { name: "Activities", path: "/activities" },
          { name: "Restaurants", path: "/restaurants" },
          { name: "Rental Cars", path: "/carrental" },
          { name: "Spa", path: "/spa" },
          { name: "Walking Tours", path: "/walkingtour" },
          { name: "Tour Guide", path: "/" }
        ].map((cat) => (
          <Link key={cat.name} href={cat.path}>
            <button
              style={{
                background: "#f0f0f0",
                color: "#1a1a1a",
                border: "2px solid #d0d0d0",
                borderRadius: "999px",
                padding: "0.4rem 1rem",
                fontWeight: "600",
                cursor: "pointer",
                fontSize: "0.95rem",
                transition: "background 0.2s, color 0.2s",
              }}
              onMouseOver={e => (e.currentTarget.style.background = '#FF385C', e.currentTarget.style.color = '#ffffff', e.currentTarget.style.borderColor = '#FF385C')}
              onMouseOut={e => (e.currentTarget.style.background = '#f0f0f0', e.currentTarget.style.color = '#1a1a1a', e.currentTarget.style.borderColor = '#d0d0d0')}
            >
              {cat.name}
            </button>
          </Link>
        ))}
      </div>
      <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
        <button
          style={{
            background: "none",
            border: "none",
            color: "#1a1a1a",
            fontWeight: "500",
            cursor: "pointer",
            padding: "0.5rem",
            fontSize: "0.95rem",
          }}
        >
          List your property
        </button>
        <select
          style={{
            border: "1px solid #ccc",
            borderRadius: "4px",
            padding: "0.3rem",
            fontSize: "0.9rem",
            color: "#333",
            background: "#fff",
            cursor: "pointer",
          }}
        >
          <option>USD</option>
        </select>
        <select
          style={{
            border: "1px solid #ccc",
            borderRadius: "4px",
            padding: "0.3rem",
            fontSize: "0.9rem",
            color: "#333",
            background: "#fff",
            cursor: "pointer",
          }}
        >
          <option>EN</option>
        </select>
        <button
          style={{
            background: "none",
            border: "2px solid #1a1a1a",
            color: "#1a1a1a",
            borderRadius: "8px",
            padding: "0.5rem 1rem",
            fontWeight: "600",
            cursor: "pointer",
            fontSize: "0.95rem",
          }}
        >
          Sign in
        </button>
        <button
          style={{
            background: "#FF385C",
            border: "none",
            color: "#ffffff",
            borderRadius: "8px",
            padding: "0.5rem 1rem",
            fontWeight: "600",
            cursor: "pointer",
            fontSize: "0.95rem",
          }}
        >
          Sign up
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
