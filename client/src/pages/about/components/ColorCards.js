import React, { useState } from "react";
import "../About.css";

const colors = [
  { id: 1, name: "2024", color: "rgba(244, 244, 255, 1)", content: "Content for 2024" },
  { id: 2, name: "2023", color: "rgba(227, 255, 253, 1)", content: "Content for 2023" },
  { id: 3, name: "2022", color: "rgba(255, 247, 233, 1)", content: "Content for 2022" },
  { id: 4, name: "2021", color: "rgba(255, 216, 211, 1)", content: "Content for 2021" },
  { id: 5, name: "2020", color: "rgba(244, 244, 255, 1)", content: "Content for 2020" },
  { id: 6, name: "2019", color: "rgba(227, 255, 253, 1)", content: "Content for 2019" },
  { id: 7, name: "2018", color: "rgba(244, 244, 255, 1)", content: "Content for 2018" },
  { id: 8, name: "2017", color: "rgba(244, 244, 255, 1)", content: "Content for 2017" },
  { id: 9, name: "2016", color: "rgba(227, 255, 253, 1)", content: "Content for 2016" },
  { id: 10, name: "2015", color: "rgba(255, 247, 233, 1)", content: "Content for 2015" },
  { id: 11, name: "2014", color: "rgba(255, 216, 211, 1)", content: "Content for 2014" },
  { id: 12, name: "2013", color: "rgba(244, 244, 255, 1)", content: "Content for 2013" },
  { id: 13, name: "2012", color: "rgba(227, 255, 253, 1)", content: "Content for 2012" },
  { id: 14, name: "2011", color: "rgba(244, 244, 255, 1)", content: "Content for 2011" },
  { id: 15, name: "2010", color: "rgba(244, 244, 255, 1)", content: "Content for 2010" },
  { id: 16, name: "2009", color: "rgba(244, 244, 255, 1)", content: "Content for 2009" },
];

const ColorCards = () => {
  const [activeId, setActiveId] = useState(null);

  const handleClick = (id) => {
    setActiveId(activeId === id ? null : id);
  };

  return (
    <div>
      <div className="line-heading" style={{ textAlign: "center" }}>
        <h2>Creating a world of opportunities takes time</h2>
        <h2 className="underline">
          Discover the evolution of our journey in shaping global education
        </h2>
      </div>
      <div
        style={{
          display: "flex",
          overflowX: "auto",
          padding: "20px 0",
          width: "80%",
          maxWidth: "1200px",
          margin: "0 auto",
          scrollbarWidth: "none", // Hide scrollbar for Firefox
        }}
        className="scroll-container"
      >
        {colors.map((color) => (
          <div
            key={color.id}
            style={{
              backgroundColor: color.color,
              height: "500px",
              width: activeId === color.id ? "400px" : "80px",
              borderRadius: "50px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              color: "#333",
              fontWeight: "bold",
              textAlign: "center",
              margin: "0 5px",
              transition: "width 0.5s ease",
              cursor: "pointer",
              flexShrink: 0,
            }}
            onClick={() => handleClick(color.id)}
          >
            <span
              style={{
                writingMode: activeId === color.id ? "horizontal-tb" : "vertical-rl",
              }}
            >
              {color.name}
            </span>
            {activeId === color.id && (
              <div style={{ marginTop: "10px", textAlign: "center", padding: "10px" }}>
                {color.content}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ColorCards;
