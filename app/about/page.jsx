"use client";

import { Button, Typography } from "@mui/material";
import { Box, Container } from "@mui/system";
import axios from "axios";
import { useState, useEffect } from "react";
import toast from "react-hot-toast";
import AOS from "aos";
import "aos/dist/aos.css";
import PhoneIphoneIcon from "@mui/icons-material/PhoneIphone";
import MailOutlinedIcon from "@mui/icons-material/MailOutlined";
import {
  AboutTitle,
  ContactContainer,
  ContactDetails,
  ContactDetailsContainer,
  ContactMessage,
  ContactMessageContainer,
  ContactTitle,
  FormButton,
  FormNameContainer,
  IconContainer,
  IconItemsContainer,
  InputContainer,
  VisionMissionContainer,
} from "./styles";

export default function About() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const [message, setMessage] = useState("");

  useEffect(() => {
    AOS.init({ duration: 1200 });
  });

  const handleContactUs = async (e) => {
    e.preventDefault();

    if (!firstName || !lastName) {
      return toast.error("Name is required. Please enter first and last name", {
        style: {
          padding: "16px",
          color: "#01579b",
        },
        iconTheme: {
          primary: "#01579b",
          secondary: "#FFFAEE",
        },
      });
    }

    if (!email) {
      return toast.error("Email is required. Please enter email", {
        style: {
          padding: "16px",
          color: "#01579b",
        },
        iconTheme: {
          primary: "#01579b",
          secondary: "#FFFAEE",
        },
      });
    }

    if (!mobile) {
      return toast.error(
        "Phone number is required. Please enter phone number",
        {
          style: {
            padding: "16px",
            color: "#01579b",
          },
          iconTheme: {
            primary: "#01579b",
            secondary: "#FFFAEE",
          },
        }
      );
    }

    if (!message) {
      return toast.error("Message is required, Please enter a message", {
        style: {
          padding: "16px",
          color: "#01579b",
        },
        iconTheme: {
          primary: "#01579b",
          secondary: "#FFFAEE",
        },
      });
    }

    const response = await axios.post("/api/send", {
      firstName,
      lastName,
      email,
      mobile,
      message,
    });

    if (response.status === 200) {
      setFirstName("");
      setLastName("");
      setEmail("");
      setMobile("");
      setMessage("");
      toast.success(`Hi ${firstName}, message sent successfully`, {
        style: {
          padding: "16px",
          color: "#01579b",
        },
        iconTheme: {
          primary: "#01579b",
          secondary: "#FFFAEE",
        },
      });
    }
  };

  return (
    <Container>
      <Box sx={{ mt: "3rem" }}>
        <AboutTitle>This Is Who We Are</AboutTitle>

        <Box>
          <Box>
            <VisionMissionContainer>Vision</VisionMissionContainer>
            <Typography>
              Our vision is to empower a healthier future by fundamentally
              transforming the way healthcare is perceived and communicated. We
              aim to achieve this through the power of compelling storytelling
              that sheds light on critical health issues, innovative research
              that unveils new possibilities, and robust community engagement
              that brings diverse voices to the forefront. We aspire to create a
              world where knowledge serves as a catalyst for meaningful action,
              driving efforts toward equitable health solutions. Our goal is to
              foster collaboration and partnership among all stakeholders within
              the healthcare ecosystem, ensuring that every individual can
              contribute to and benefit from a richer, more inclusive healthcare
              narrative.
            </Typography>
          </Box>
          <Box>
            <VisionMissionContainer>Mission</VisionMissionContainer>
            <Typography>
              Our mission is to inform, engage, and empower our readers by
              providing in-depth analysis, expert insights, and diverse
              perspectives on critical healthcare issues. We are dedicated to
              highlighting innovative solutions, advocating for health equity,
              and fostering dialogue among healthcare leaders, practitioners,
              and communities. Through our commitment to quality journalism, we
              aim to drive positive change and inspire action that improves
              health outcomes for individuals and populations alike.
            </Typography>
          </Box>
        </Box>

        <ContactContainer>
          <ContactDetailsContainer>
            <ContactTitle>Contact Us</ContactTitle>
            <ContactDetails>
              We&#39;d love to hear from you! Whether you have questions,
              feedback, or story ideas, please reach out to us.
            </ContactDetails>
            <ContactDetails>
              Your insights and inquiries are important to us, and we look
              forward to connecting with you!
            </ContactDetails>
            <IconItemsContainer>
              <IconContainer>
                <Box sx={{ color: "#01579b" }}>
                  <MailOutlinedIcon />
                </Box>
                info@hcimpactmag.com
              </IconContainer>
              <IconContainer>
                <Box sx={{ color: "#01579b" }}>
                  <PhoneIphoneIcon />
                </Box>
                281-633-6060
              </IconContainer>
            </IconItemsContainer>
          </ContactDetailsContainer>

          <ContactMessageContainer>
            <ContactMessage>Send Us A Message</ContactMessage>
            <form onSubmit={handleContactUs}>
              <FormNameContainer>
                <InputContainer>
                  <label htmlFor="firstName" name="firstName">
                    First Name
                  </label>
                  <input
                    type="text"
                    placeholder="Enter First Name"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                  />
                </InputContainer>
                <InputContainer>
                  <label htmlFor="lastName" name="lastName">
                    Last Name
                  </label>
                  <input
                    type="text"
                    placeholder="Enter Last Name"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                  />
                </InputContainer>
              </FormNameContainer>

              <FormNameContainer>
                <InputContainer>
                  <label htmlFor="email" name="email">
                    Email Address
                  </label>
                  <input
                    type="email"
                    placeholder="Enter Email Address"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </InputContainer>
                <InputContainer>
                  <label htmlFor="mobile" name="mobile">
                    Phone Number
                  </label>
                  <input
                    type="number"
                    placeholder="Enter Phone Number"
                    value={mobile}
                    onChange={(e) => setMobile(e.target.value)}
                  />
                </InputContainer>
              </FormNameContainer>

              <div>
                <label htmlFor="message" name="message">
                  What can we help you with?
                </label>
              </div>
              <textarea
                name="message"
                id=""
                cols="10"
                rows="5"
                placeholder="Enter message..."
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              ></textarea>

              <FormButton type="submit">Send</FormButton>
            </form>
          </ContactMessageContainer>
        </ContactContainer>
      </Box>
    </Container>
  );
}
