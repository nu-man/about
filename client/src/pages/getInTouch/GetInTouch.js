import React, { useState } from "react";
import { Box, Grid, Typography, TextField, Button } from "@mui/material";
import company from "./images/office.png";
import PinDropIcon from "@mui/icons-material/PinDrop";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import "./styles.css";

const GetInTouch = () => {
    const [formData, setFormData] = useState({
        firstName: '',
        secondName: '',
        mobileNumber: '',
        email: '',
        reason: '',
      });
    
      const handleChange = (e) => {
        const { name, value } = e.target;
    
        // Mobile number: Check if it's a valid number (only digits allowed)
        if (name === 'mobileNumber' && !/^\d+$/.test(value) && value !== '') {
          return; // Prevent entering non-numeric characters except when the value is empty
        }
    
        // For email, don't block typing, just validate the format on submit or when needed
        setFormData({
          ...formData,
          [name]: value, // Update the specific field
        });
      };
    
      const handleSubmit = () => {
        // Basic validation before submission
        if (!formData.firstName || !formData.secondName || !formData.mobileNumber || !formData.email || !formData.reason) {
          alert('Please fill in all the fields!');
          return;
        }
    
        // Email validation at submit
        if (!/\S+@\S+\.\S+/.test(formData.email)) {
          alert('Please enter a valid email!');
          return;
        }
    
        // Handle form submission logic here
        alert('Form submitted successfully!');
        console.log(formData);
      };
  return (
    <Box>
      {/* Section with limited background height */}
      <div className="touch-1">
        <h2>Get in Touch</h2>
        <h6>Reach out to us for more information and assistance</h6>
      </div>

      {/* Main content section */}
      <Box
        sx={{
          backgroundColor: "#FFF",
          padding: "50px 0",
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
          }}
        >
          <Box
            sx={{
              width: "80%",
              maxWidth: "1200px",
              backgroundColor: "#FFF",
              borderRadius: "16px",
              boxShadow: "0px 4px 16px rgba(0, 0, 0, 0.1)",
              overflow: "hidden",
            }}
          >
            <Grid container>
              {/* Left Section */}
              <Grid
                item
                xs={12}
                md={6}
                sx={{
                  backgroundColor: "rgba(209, 211, 249, 1)",
                  padding: "30px",
                }}
              >
                <img
                  src={company} // Replace with actual image URL
                  alt="One Window"
                  style={{
                    width: "100%",
                    height: "auto",
                    borderRadius: "12px",
                    marginBottom: "20px",
                  }}
                />
                <Typography
                  variant="h6"
                  sx={{ fontWeight: "600", marginBottom: "10px" }}
                >
                  Contact Information
                </Typography>
                <Typography
                  variant="body1"
                  sx={{
                    color: "#3B3F76",
                    marginBottom: "16px",
                    display: "flex",
                    alignItems: "center",
                    gap: "10px", // Spacing between the icon and text
                  }}
                >
                  <PinDropIcon
                    sx={{
                      background: "white",
                      padding: "5px",
                      borderRadius: "50%",
                      fontSize: "32px", // Adjust size of the icon
                      color: "#3B3F76", // Icon color
                    }}
                  />
                  915, 8th Floor, Vasavi's MPM Grand, Near Metro Station
                  Ameerpet, Hyderabad, Telangana 500073
                </Typography>

                <Typography
                  variant="body1"
                  sx={{
                    color: "#3B3F76",
                    marginBottom: "16px",
                    display: "flex",
                    alignItems: "center",
                    gap: "10px", // Spacing between the icon and text
                  }}
                >
                  <LocalPhoneIcon
                    sx={{
                      background: "white",
                      padding: "5px",
                      borderRadius: "50%",
                      fontSize: "32px", // Adjust size of the icon
                      color: "#3B3F76", // Icon color
                    }}
                  />
                  9154898944
                </Typography>

                <Typography
                  variant="body1"
                  sx={{
                    color: "#3B3F76",
                    display: "flex",
                    alignItems: "center",
                    gap: "10px", // Spacing between the icon and text
                  }}
                >
                  <MailOutlineIcon
                    sx={{
                      background: "white",
                      padding: "5px",
                      borderRadius: "50%",
                      fontSize: "32px", // Adjust size of the icon
                      color: "#3B3F76", // Icon color
                    }}
                  />
                  info@onewindow.co
                </Typography>
              </Grid>

              {/* Right Section */}
              <Grid
                item
                xs={12}
                md={6}
                sx={{
                  padding: "30px",
                }}
              >
                <Typography
                  variant="h6"
                  sx={{ fontWeight: "600", marginBottom: "10px" }}
                >
                  Let’s Talk
                </Typography>
                <Typography
                  variant="body1"
                  sx={{ color: "#3B3F76", marginBottom: "20px" }}
                >
                  Contact us directly or fill out the form, and we will get back
                  to you promptly.
                </Typography>
                <form>
                  <TextField
                    label="First Name"
                    name="firstName"
                    variant="outlined"
                    fullWidth
                    value={formData.firstName}
                    onChange={handleChange}
                    sx={{ marginBottom: "16px" }}
                  />
                  <TextField
                    label="Second Name"
                    name="secondName"
                    variant="outlined"
                    fullWidth
                    value={formData.secondName}
                    onChange={handleChange}
                    sx={{ marginBottom: "16px" }}
                  />
                  <TextField
                    label="Mobile Number"
                    name="mobileNumber"
                    variant="outlined"
                    fullWidth
                    value={formData.mobileNumber}
                    onChange={handleChange}
                    sx={{ marginBottom: "16px" }}
                  />
                  <TextField
                    label="Email"
                    name="email"
                    variant="outlined"
                    fullWidth
                    value={formData.email}
                    onChange={handleChange}
                    sx={{ marginBottom: "16px" }}
                  />
                  <TextField
                    label="Reason"
                    name="reason"
                    variant="outlined"
                    fullWidth
                    multiline
                    rows={4}
                    value={formData.reason}
                    onChange={handleChange}
                    sx={{ marginBottom: "16px" }}
                  />
                  <Button
                    type="button"
                    variant="contained"
                    onClick={handleSubmit}
                    sx={{
                      backgroundColor: "rgba(59, 63, 118, 1)",
                      color: "#FFF",
                      padding: "10px 30px",
                      borderRadius: "50px",
                      justifyContent: "center",
                    }}
                  >
                    Submit
                  </Button>
                </form>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default GetInTouch;
