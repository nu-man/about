import React, { useState } from "react";
import gpaper from "../images/gpaper.png";
import bpaper from "../images/bpaper.png";
import pencil from "../images/pencil.png";
import { Box, Grid, Typography, Button } from "@mui/material";
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";

import "../About.css";
const cardsData = [
  {
    id: 1,
    title: "Guidance",
    imgSrc: bpaper,
    color: "rgba(255, 247, 233, 1)",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed venenatis erat non nisi sollicitudin fringilla.",
  },
  {
    id: 2,
    title: "Consultation",
    imgSrc: gpaper,
    color: "rgba(227, 255, 253, 1)",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed venenatis erat non nisi sollicitudin fringilla.",
  },
  {
    id: 3,
    title: "Support",
    imgSrc: pencil,
    color: "rgba(255, 216, 211, 1)",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed venenatis erat non nisi sollicitudin fringilla.",
  },
  {
    id: 4,
    title: "Mentorship",
    imgSrc: bpaper,
    color: "rgba(255, 247, 233, 1)",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed venenatis erat non nisi sollicitudin fringilla.",
  },
  {
    id: 5,
    title: "Training",
    imgSrc: gpaper,
    color: "rgba(227, 255, 253, 1)",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed venenatis erat non nisi sollicitudin fringilla.",
  },
  {
    id: 6,
    title: "Advisory",
    imgSrc: pencil,
    color: "rgba(255, 216, 211, 1)",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed venenatis erat non nisi sollicitudin fringilla.",
  },
];
const Mission = () => {
  const [selectedCard, setSelectedCard] = useState(null);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const handleCardClick = (card) => {
    setSelectedCard(card);
    setIsTransitioning(true);
  };

  const handleBackClick = () => {
    setIsTransitioning(false);
    setSelectedCard(null);
  };

  return (
    <Box sx={{ padding: "20px" }}>
      {!isTransitioning ? (
        <>
          <Typography variant="h4" className="heading">
            Our Mission
          </Typography>
          <div className="section-2">
            <Grid container spacing={2} justifyContent="center">
              {cardsData.map((card) => (
                <Grid
                  item
                  key={card.id}
                  xs={6}
                  sm={4}
                  md={2}
                  onClick={() => handleCardClick(card)}
                >
                  <Box
                    sx={{
                      backgroundColor: card.color,
                      padding: "16px",
                      textAlign: "center",
                      borderRadius: "20px",
                      cursor: "pointer",
                      boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
                      transition: "transform 0.2s ease",
                      "&:hover": {
                        transform: "translateY(-5px)",
                      },
                    }}
                  >
                    <img
                      src={card.imgSrc}
                      alt={`${card.title} Icon`}
                      style={{
                        width: "80px",
                        height: "auto",
                        marginBottom: "10px",
                      }}
                    />
                    <Typography
                      variant="h6"
                      sx={{
                        fontSize: "24px",
                        fontWeight: 400,
                        color: "rgba(0, 0, 0, 1)",
                        marginBottom: "8px",
                        lineHeight: "38px",
                      }}
                    >
                      {card.title}
                    </Typography>
                    <Typography
                      variant="body2"
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        gap: "5px",
                        fontSize: "18px",
                        fontWeight: 400,
                        lineHeight: "29px",
                        color: "rgba(0, 0, 0, 1)",
                        cursor: "pointer",
                      }}
                    >
                      View more{" "}
                      <ArrowOutwardIcon
                        sx={{ background: card.color }}
                      ></ArrowOutwardIcon>
                    </Typography>
                  </Box>
                </Grid>
              ))}
            </Grid>
          </div>
        </>
      ) : (
        <Grid container>
          <Grid
            item
            xs={3}
            sx={{
              borderRight: "1px solid #e0e0e0",
              padding: "16px",
              height: "100vh",
              overflowY: "scroll",
              "&::-webkit-scrollbar": {
                display: "none", // For Chrome, Safari, Edge
              },
              scrollbarWidth: "none", // For Firefox
              msOverflowStyle: "none", // For Internet Explorer
            }}
          >
            {cardsData.map((card) => (
              <Box
                key={card.id}
                sx={{
                  backgroundColor: card.color,
                  padding: "16px",
                  marginBottom: "16px",
                  textAlign: "center",
                  borderRadius: "20px",
                }}
                onClick={() => handleCardClick(card)}
              >
                <img
                  src={card.imgSrc}
                  alt={`${card.title} Icon`}
                  style={{
                    width: "80px",
                    height: "auto",
                    marginBottom: "10px",
                  }}
                />
                <Typography
                  variant="h6"
                  sx={{
                    fontSize: "24px",
                    fontWeight: 400,
                    marginBottom: "8px",
                    lineHeight: "38px",
                  }}
                >
                  {card.title}
                </Typography>
                <Typography
                  variant="body3"
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: "5px",
                    fontSize: "18px",
                    fontWeight: 400,
                    lineHeight: "29px",
                    color: "rgba(0, 0, 0, 1)",
                    cursor: "pointer",
                  }}
                >
                  View more <ArrowOutwardIcon />
                </Typography>
              </Box>
            ))}
          </Grid>
          <Grid
            item
            xs={9}
            sx={{
              padding: "32px",
              animation: "slideDown 0.5s ease forwards",
              "@keyframes slideDown": {
                from: { transform: "translateY(-20px)", opacity: 0 },
                to: { transform: "translateY(0)", opacity: 1 },
              },
            }}
          >
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <img
                src={selectedCard.imgSrc}
                srcSet={`${selectedCard.imgSrc} 2x`}
                alt={selectedCard?.title}
                style={{
                  width: "15vw",
                  height: "30vh",
                }}
              />

              <Box>
                <Typography variant="h2" className="heading">
                  {selectedCard?.title}
                  <br></br>
                </Typography>
                <Typography
                  variant="body1"
                  sx={{
                    fontSize: "26px",
                    fontWeight: "400",
                    marginTop: "10px",
                    lineHeight: "47px",
                    padding: "0px 70px",
                    color: "rgba(59, 63, 118, 0.6)",
                  }}
                >
                  {selectedCard?.description}
                </Typography>
              </Box>
            </Box>

            <Button
              variant="contained"
              sx={{
                position: "absolute", // Make it position relative to its container
                
                right: "16px", // Distance from the right of the container
                fontSize: "16px",
                fontWeight: 600,

                backgroundColor: "rgba(59, 63, 118, 1)",
              }}
              onClick={handleBackClick}
            >
              Back
            </Button>
          </Grid>
        </Grid>
      )}
    </Box>
  );
};
export default Mission;


