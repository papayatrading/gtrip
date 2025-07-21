import React from "react";

interface AvailabilitySearchProps {
  destinationLabel?: string;
  showRoomCount?: boolean;
  showDates?: boolean;
  showGuests?: boolean;
  compact?: boolean;
  size?: 'small' | 'medium' | 'large';
}

const AvailabilitySearch: React.FC<AvailabilitySearchProps> = ({ 
  destinationLabel = "Destination/property name:",
  showRoomCount = true,
  showDates = true,
  showGuests = true,
  compact = false,
  size = 'large'
}) => {
  
  const getSizeValues = () => {
    switch (size) {
      case 'small':
        return {
          padding: '0.5rem',
          fieldPadding: '0.5rem',
          minHeight: '35px',
          fontSize: '0.85rem',
          buttonPadding: '0 1rem'
        };
      case 'medium':
        return {
          padding: '0.7rem',
          fieldPadding: '0.7rem',
          minHeight: '50px',
          fontSize: '0.95rem',
          buttonPadding: '0 1.5rem'
        };
      case 'large':
      default:
        return {
          padding: '1.5rem',
          fieldPadding: '1rem',
          minHeight: '70px',
          fontSize: '1rem',
          buttonPadding: '0 2rem'
        };
    }
  };

  const sizeValues = getSizeValues();
  return (
    <section style={{
      margin: "0 auto",
      maxWidth: "1200px",
      background: "#fff",
      borderRadius: "8px",
      padding: sizeValues.padding,
      boxShadow: "0 8px 32px rgba(0, 0, 0, 0.2)",
      border: "3px solid #0d9488"
    }}>
      <form style={{ 
        background: "#f8f8f8", 
        borderRadius: "8px", 
        padding: size === 'small' ? "0.2rem" : compact ? "0.3rem" : "0.5rem",
        display: "flex",
        alignItems: "stretch",
        gap: "2px",
        border: "1px solid #e0e0e0"
      }}>
        <div style={{
          background: "#fff",
          padding: sizeValues.fieldPadding,
          flex: showDates && showGuests ? "2" : showDates ? "3" : showGuests ? "3" : "4",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          minHeight: sizeValues.minHeight
        }}>
          <label style={{ fontSize: "0.75rem", color: "#0d9488", fontWeight: "600", marginBottom: "0.25rem" }}>
            {destinationLabel}
          </label>
          <input
            type="text"
            placeholder="Where are you going?"
            style={{
              border: "none",
              outline: "none",
              fontSize: sizeValues.fontSize,
              color: "#333",
              background: "transparent",
              fontWeight: "500"
            }}
          />
        </div>
        {showDates && (
          <>
            <div style={{
              background: "#fff",
              padding: sizeValues.fieldPadding,
              flex: "1",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              minHeight: sizeValues.minHeight
            }}>
              <label style={{ fontSize: "0.75rem", color: "#0d9488", fontWeight: "600", marginBottom: "0.25rem" }}>
                Check-in date
              </label>
              <input
                type="date"
                style={{
                  border: "none",
                  outline: "none",
                  fontSize: sizeValues.fontSize,
                  color: "#333",
                  background: "transparent",
                  fontWeight: "500"
                }}
              />
            </div>
            <div style={{
              background: "#fff",
              padding: sizeValues.fieldPadding,
              flex: "1",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              minHeight: sizeValues.minHeight
            }}>
              <label style={{ fontSize: "0.75rem", color: "#0d9488", fontWeight: "600", marginBottom: "0.25rem" }}>
                Check-out date
              </label>
              <input
                type="date"
                style={{
                  border: "none",
                  outline: "none",
                  fontSize: sizeValues.fontSize,
                  color: "#333",
                  background: "transparent",
                  fontWeight: "500"
                }}
              />
            </div>
          </>
        )}
        {showGuests && (
          <div style={{
            background: "#fff",
            padding: sizeValues.fieldPadding,
            flex: "1.5",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            minHeight: sizeValues.minHeight,
            cursor: "pointer"
          }}>
            <label style={{ fontSize: "0.75rem", color: "#0d9488", fontWeight: "600", marginBottom: "0.25rem" }}>
              {showRoomCount ? "Guests and rooms" : "Guests"}
            </label>
            <span style={{ fontSize: sizeValues.fontSize, color: "#333", fontWeight: "500" }}>
              {showRoomCount ? "2 adults · 0 children · 1 room" : "2 adults · 0 children"}
            </span>
          </div>
        )}
        <button
          type="submit"
          style={{
            background: "#0d9488",
            color: "#fff",
            border: "none",
            padding: sizeValues.buttonPadding,
            fontWeight: "600",
            cursor: "pointer",
            fontSize: sizeValues.fontSize,
            minHeight: sizeValues.minHeight,
            borderRadius: "0 12px 12px 0"
          }}
        >
          Search
        </button>
      </form>
    </section>
  );
};

export default AvailabilitySearch;
