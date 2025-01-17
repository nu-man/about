import React from "react";
import { Box } from "@mui/material";
import map from "../images/map.png"; // Replace this with the correct path to your image
import "../About.css"; // CSS file for custom styling

const Map = () => {
  return (
    <>
      <Box
        sx={{
          textAlign: "center", // Center aligns the text
          marginTop: "50px", // Adds spacing between the heading and the image
        }}
      >
        <h2 className="heading">
          Students have successfully secured placements through <br />
          <span className="highlight2">One Window.</span>
        </h2>
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          minHeight: "calc(100vh - 70px)", // Adjusts the height to accommodate the margin
          px: 2, // Horizontal padding for small screens
          margin: "70px", // Adds a 70px margin to the top
        }}
      >
        <Box
          component="img"
          src={map}
          alt="World Map"
          sx={{
            maxWidth: "100%", // Scales the image within the container
            height: "auto", // Maintains the aspect ratio
            objectFit: "contain", // Ensures no cropping of the image
          }}
        />
      </Box>
    </>
  );
};

export default Map;
