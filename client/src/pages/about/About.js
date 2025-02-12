import React, { useState } from "react";
import "./About.css";
import man from "./man.png";
import santosh from "./images/santosh.png";
import rahul from "./images/rahul.png";
import priya from "./images/priya.png";
import { Box, Grid, Typography } from "@mui/material";
import Mission from "./components/Mission.js";
import ColorCards from "./components/ColorCards.js";
import Map from "./components/Map.js";
import JoinUs from "./components/JoinUs.js";
const About = () => {
  const dropdownData = [
    {
      id: 1,
      label: "What we offer",
      options: ["Option 1", "Option 2", "Option 3"],
    },
    {
      id: 2,
      label: "For international universities",
      options: ["Option 1", "Option 2", "Option 3"],
    },
    {
      id: 3,
      label: "For Indian universities",
      options: ["Option 1", "Option 2", "Option 3"],
    },
  ];

  const cardData2 = [
    {
      id: 1,
      number: "01",
      text: "Expertise is global Education",
    },
    {
      id: 2,
      number: "02",
      text: "Impactful Global Experience",
    },
    {
      id: 3,
      number: "03",
      text: "Personalized and Tailored Services",
    },
    {
      id: 4,
      number: "04",
      text: "Cutting-edge technology and tools",
    },
    {
      id: 5,
      number: "05",
      text: "Scholarship and Financial Assistance",
    },
    {
      id: 6,
      number: "06",
      text: "Seamless Application Process",
    },
    // Add more card data as needed
  ];

  const sections = [
    {
      id: 1,
      title: "Personalized counseling",
      content:
        "Our personalized counseling services are designed to help students identify the best study abroad opportunities based on their academic and career goals. We provide one-on-one guidance to select the right universities and programs. Our experts assist with the application process, ensuring every step is clear and manageable. With tailored advice, we empower students to make informed decisions for a successful international education experience.",
    },
    {
      id: 2,
      title: "Seamless Applications",
      content:
        "Our seamless application services ensure a smooth and efficient process for students applying to study abroad. From gathering documents to submitting applications, we simplify every step to maximize success.",
    },
    {
      id: 3,
      title: "Visa & Immigration Services",
      content:
        "Our visa and immigration services help students navigate the complexities of obtaining study permits and visas. We provide support with documentation, interviews, and application submissions.",
    },
    {
      id: 4,
      title: "Financial Guidance",
      content:
        "We offer financial guidance to students, assisting with scholarship applications, budgeting, and managing tuition payments.",
    },
    {
      id: 5,
      title: "Ongoing Support",
      content:
        "Our ongoing support services ensure students are well-prepared for their study abroad experience, providing assistance with accommodation, travel, and more.",
    },
  ];

  const people = [
    {
      id: 1,
      name: "Santosh Kumar",
      designation: "Designation",
      image: santosh,
    },
    {
      id: 2,
      name: "Rahul Sharma",
      designation: "Software Engineer",
      image: rahul,
    },
    {
      id: 3,
      name: "Priya Singh",
      designation: "Product Manager",
      image: priya,
    },
    {
      id: 4,
      name: "Anita Verma",
      designation: "Marketing Specialist",
      image: priya,
    },
    {
      id: 5,
      name: "Rohit Gupta",
      designation: "Data Scientist",
      image: santosh,
    },
    {
      id: 6,
      name: "Aditi Mehra",
      designation: "UI/UX Designer",
      image: rahul,
    },
  ];

  const [activeSection, setActiveSection] = useState(sections[0]?.id || "");

  const handleMenuClick = (id) => {
    setActiveSection(id);
  };
  const activeContent = sections.find(
    (section) => section.id === activeSection
  );

  return (
    <>
      <Box className="section-1">
        <div className="about-section">
          <div className="text-container">
            <h2>About us</h2>
            <p>
              At One Window we provide expert
              <br /> guidance to help their study abroad
              <br />
              journey with confidence and
              <br /> success.
            </p>
          </div>
          <div className="image-container">
            <img src={man} alt="About Us" />
          </div>
        </div>
        <div className="drop">
          <div className="dropdown-container">
            {dropdownData.map((dropdown) => (
              <select key={dropdown.id} className="dropdown">
                <option value="">{dropdown.label}</option>
                {dropdown.options.map((option, index) => (
                  <option key={index} value={option}>
                    {option}
                  </option>
                ))}
              </select>
            ))}
          </div>
        </div>
      </Box>
      <Mission />
      <Box className="section-3">
        <Grid container spacing={2} justifyContent="center">
          {/* First Two Cards */}
          {cardData2.slice(0, 2).map((card) => (
            <Grid item xs={12} sm={6} md={3} key={card.id}>
              <div className="custom-card">
                <div className="circle-icon">{card.number}</div>
                <div className="card-content">
                  <p>{card.text}</p>
                </div>
              </div>
            </Grid>
          ))}

          {/* Text Section */}
          <Grid item xs={12} sm={6} md={6}>
            <div className="heading">
              <h1>
                Core <span className="highlight">Values</span> behaviors
              </h1>
            </div>
            <div className="line-text">
              <p>
                Our core values are centered around integrity, excellence, and
                empowerment, guiding students toward a successful study abroad
                experience.
              </p>
            </div>
          </Grid>

          {/* Remaining Cards */}
          {cardData2.slice(2).map((card) => (
            <Grid item xs={12} sm={6} md={3} key={card.id}>
              <div className="custom-card">
                <div className="circle-icon">{card.number}</div>
                <div className="card-content">
                  <p>{card.text}</p>
                </div>
              </div>
            </Grid>
          ))}
        </Grid>
      </Box>
      <Box className="section-4">
        <Box className="line-heading">
          <Typography variant="h4" className="section-title">
            What we are known for
          </Typography>
        </Box>
        <Grid container className="section-container">
          {/* Left Panel */}
          <Grid item xs={12} md={4} className="left-panel">
            {sections.map((section) => (
              <Box
                key={section.id}
                className={`menu-item ${
                  activeSection === section.id ? "active" : ""
                }`}
                onClick={() => handleMenuClick(section.id)}
              >
                {section.title}
              </Box>
            ))}
          </Grid>

          {/* Right Panel */}
          <Grid item xs={12} md={6} lg={6} className="right-panel">
            {activeContent && (
              <Box className="content-section">
                <div className="content-title">{activeContent.title}</div>
                <div className="content-text">{activeContent.content}</div>
              </Box>
            )}
          </Grid>
        </Grid>
      </Box>
      <Box className="section-5">
        <div className="heading" style={{ textAlign: "center" }}>
          <h3>Meet Our Team</h3>
        </div>
        <div className="team-background">
          <div className="details">
            <h3>Santosh Kumar</h3>
            <h4>Designation</h4>
            <h6>
              Transform your future with international education—embrace new
              cultures, develop essential skills, and achieve your career goals
              with our expert guidance."
            </h6>
          </div>

          <div className="card2-container">
            <Grid container spacing={2} justifyContent="center">
              {people.map((person) => (
                <Grid item xs={12} sm={6} md={3} lg={2} key={person.id}>
                  <div className="card2">
                    <img
                      src={person.image}
                      alt={person.name}
                      className="card2-image"
                    />
                    <h4>{person.name}</h4>
                    <h6>{person.designation}</h6>
                  </div>
                </Grid>
              ))}
            </Grid>
          </div>
        </div>
      </Box>
      <ColorCards />
      <Map />
      <JoinUs/>
      
    </>
  );
};

export default About;
