import React from "react";
import { Box, Typography, Button } from "@mui/material";
import join from "../images/join.png"; // Replace with the correct path to your image

const JoinUs = () => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "500px", // Adjust height as needed
        position: "relative",
        backgroundImage: `url(${join})`, // Set the image as the background
        backgroundSize: "contain", // Ensures the image covers the container
        backgroundPosition: "center", // Centers the image
        backgroundRepeat: "no-repeat", // Prevents repeating
      }}
    >
      {/* Centered Content */}
      <Box
        sx={{
          textAlign: "center",
          padding: "16px",
          borderRadius: "8px",
        }}
      >
        <Typography
          variant="h4"
          component="h1"
          sx={{ fontWeight: "bold", marginBottom: "40px" }}
        >
          Join our team at One Window
        </Typography>
        <Typography
          variant="body1"
          sx={{ margin: "24px", fontSize: "18px" }}
        >
          Excited to be part of an innovative team? Explore career opportunities
          at OneWindow and help shape the future with us!
        </Typography>
        <Button
          variant="contained"
          sx={{
            backgroundColor: "rgba(59, 63, 118, 1)",
            color: "white",
            fontSize: "16px",
            padding: "10px 24px",
            borderRadius: "20px",
            "&:hover": {
              backgroundColor: "#2c387e",
            },
          }}
        >
          Explore
        </Button>
      </Box>
    </Box>
  );
};

export default JoinUs;
