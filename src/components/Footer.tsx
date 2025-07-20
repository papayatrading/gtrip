"use client";
import React from "react";

const Footer: React.FC = () => {
  return (
    <footer style={{
      background: "#333",
      color: "#fff",
      padding: "3rem 2rem 2rem 2rem",
      marginTop: "4rem"
    }}>
      <div style={{
        maxWidth: "1200px",
        margin: "0 auto"
      }}>
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
          gap: "2rem",
          marginBottom: "2rem"
        }}>
          {/* Company Info */}
          <div>
            <h3 style={{
              color: "#FF385C",
              fontSize: "1.5rem",
              fontWeight: "bold",
              marginBottom: "1rem"
            }}>
              GTrip
            </h3>
            <p style={{
              color: "#ccc",
              lineHeight: "1.6",
              marginBottom: "1rem"
            }}>
              Your trusted travel companion for booking hotels, flights, and experiences worldwide. 
              Browse, compare, and book with ease.
            </p>
            <div style={{
              display: "flex",
              gap: "1rem"
            }}>
              <a href="#" style={{
                color: "#FF385C",
                fontSize: "1.5rem",
                textDecoration: "none"
              }}>📱</a>
              <a href="#" style={{
                color: "#FF385C",
                fontSize: "1.5rem",
                textDecoration: "none"
              }}>📘</a>
              <a href="#" style={{
                color: "#FF385C",
                fontSize: "1.5rem",
                textDecoration: "none"
              }}>🐦</a>
              <a href="#" style={{
                color: "#FF385C",
                fontSize: "1.5rem",
                textDecoration: "none"
              }}>📷</a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 style={{
              color: "#fff",
              fontSize: "1.2rem",
              fontWeight: "600",
              marginBottom: "1rem"
            }}>
              Quick Links
            </h4>
            <ul style={{
              listStyle: "none",
              padding: 0,
              margin: 0
            }}>
              {[
                "Search Hotels",
                "Top Destinations",
                "Flight Deals",
                "Car Rentals",
                "Travel Guides",
                "Customer Reviews"
              ].map((link, index) => (
                <li key={index} style={{ marginBottom: "0.5rem" }}>
                  <a href="#" style={{
                    color: "#ccc",
                    textDecoration: "none",
                    fontSize: "1rem"
                  }}
                  onMouseOver={(e) => e.currentTarget.style.color = "#FF385C"}
                  onMouseOut={(e) => e.currentTarget.style.color = "#ccc"}
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 style={{
              color: "#fff",
              fontSize: "1.2rem",
              fontWeight: "600",
              marginBottom: "1rem"
            }}>
              Support
            </h4>
            <ul style={{
              listStyle: "none",
              padding: 0,
              margin: 0
            }}>
              {[
                "Help Center",
                "Contact Us",
                "Booking Support",
                "Cancellation Policy",
                "Payment Issues",
                "Report a Problem"
              ].map((link, index) => (
                <li key={index} style={{ marginBottom: "0.5rem" }}>
                  <a href="#" style={{
                    color: "#ccc",
                    textDecoration: "none",
                    fontSize: "1rem"
                  }}
                  onMouseOver={(e) => e.currentTarget.style.color = "#FF385C"}
                  onMouseOut={(e) => e.currentTarget.style.color = "#ccc"}
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 style={{
              color: "#fff",
              fontSize: "1.2rem",
              fontWeight: "600",
              marginBottom: "1rem"
            }}>
              Company
            </h4>
            <ul style={{
              listStyle: "none",
              padding: 0,
              margin: 0
            }}>
              {[
                "About Us",
                "Careers",
                "Press Center",
                "Investor Relations",
                "Partner Program",
                "Affiliate Program"
              ].map((link, index) => (
                <li key={index} style={{ marginBottom: "0.5rem" }}>
                  <a href="#" style={{
                    color: "#ccc",
                    textDecoration: "none",
                    fontSize: "1rem"
                  }}
                  onMouseOver={(e) => e.currentTarget.style.color = "#FF385C"}
                  onMouseOut={(e) => e.currentTarget.style.color = "#ccc"}
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 style={{
              color: "#fff",
              fontSize: "1.2rem",
              fontWeight: "600",
              marginBottom: "1rem"
            }}>
              Stay Updated
            </h4>
            <p style={{
              color: "#ccc",
              fontSize: "0.95rem",
              marginBottom: "1rem",
              lineHeight: "1.5"
            }}>
              Subscribe to get special offers, travel tips, and destination updates.
            </p>
            <div style={{
              display: "flex",
              gap: "0.5rem",
              marginBottom: "1rem"
            }}>
              <input
                type="email"
                placeholder="Enter your email"
                style={{
                  flex: 1,
                  padding: "0.7rem",
                  border: "1px solid #555",
                  borderRadius: "4px",
                  background: "#444",
                  color: "#fff",
                  fontSize: "0.95rem"
                }}
              />
              <button style={{
                background: "#FF385C",
                color: "#fff",
                border: "none",
                borderRadius: "4px",
                padding: "0.7rem 1rem",
                cursor: "pointer",
                fontWeight: "600"
              }}>
                Subscribe
              </button>
            </div>
            <div style={{
              display: "flex",
              gap: "1rem",
              marginTop: "1rem"
            }}>
              <span style={{ color: "#ccc", fontSize: "0.9rem" }}>Download our app:</span>
              <a href="#" style={{
                color: "#FF385C",
                textDecoration: "none",
                fontSize: "0.9rem"
              }}>📱 iOS</a>
              <a href="#" style={{
                color: "#FF385C",
                textDecoration: "none",
                fontSize: "0.9rem"
              }}>🤖 Android</a>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div style={{
          borderTop: "1px solid #555",
          paddingTop: "2rem",
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-between",
          alignItems: "center",
          gap: "1rem"
        }}>
          <div style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "2rem",
            alignItems: "center"
          }}>
            <span style={{ color: "#ccc", fontSize: "0.9rem" }}>
              © 2024 GTrip. All rights reserved.
            </span>
            <div style={{
              display: "flex",
              gap: "1.5rem"
            }}>
              {[
                "Privacy Policy",
                "Terms of Service",
                "Cookie Policy",
                "Sitemap"
              ].map((link, index) => (
                <a
                  key={index}
                  href="#"
                  style={{
                    color: "#ccc",
                    textDecoration: "none",
                    fontSize: "0.9rem"
                  }}
                  onMouseOver={(e) => e.currentTarget.style.color = "#FF385C"}
                  onMouseOut={(e) => e.currentTarget.style.color = "#ccc"}
                >
                  {link}
                </a>
              ))}
            </div>
          </div>
          
          <div style={{
            display: "flex",
            alignItems: "center",
            gap: "1rem"
          }}>
            <span style={{ color: "#ccc", fontSize: "0.9rem" }}>
              🌍 Global Site
            </span>
            <select style={{
              background: "#444",
              color: "#fff",
              border: "1px solid #555",
              borderRadius: "4px",
              padding: "0.3rem",
              fontSize: "0.9rem"
            }}>
              <option>🇺🇸 English (US)</option>
              <option>🇬🇧 English (UK)</option>
              <option>🇪🇸 Español</option>
              <option>🇫🇷 Français</option>
              <option>🇩🇪 Deutsch</option>
              <option>🇮🇹 Italiano</option>
              <option>🇯🇵 日本語</option>
              <option>🇰🇷 한국어</option>
              <option>🇨🇳 中文</option>
            </select>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;