"use client";

import { Typography } from "@mui/material";
import { Box, Container } from "@mui/system";
import React from "react";
import { ContactTitle } from "../about/styles";

export default function privacy() {
  return (
    <Container sx={{ mt: "1rem" }}>
      <Box sx={{ fontSize: "1.2rem" }}>
        <ContactTitle>Privacy Policy</ContactTitle>
        <Typography>
          At Healthcare Impact Magazine, your privacy is not just a commitment;
          it&#39;s our core mission. We strive to protect your personal
          information diligently, ensuring that your interactions with us are
          both secure and transparent.
        </Typography>
        <Typography sx={{ my: "1rem" }}>
          <span>What We Collect:</span> We collect only the essential data
          needed to enrich your experience with us. This may include personal
          information you provide during the registration and subscription
          processes, as well as any details gathered through your interactions
          on our website. Our goal is to create a personalized experience that
          meets your needs.
        </Typography>
        <Typography sx={{ my: "1rem" }}>
          <span>How We Use Your Information:</span> The information you share
          with us is invaluable in helping us deliver content that resonates
          with you. We utilize your data to tailor our articles, improve our
          services, and keep you informed about the latest developments, trends,
          and insights in the healthcare sector. By understanding your
          preferences, we can curate a more relevant reading experience for you.
        </Typography>
        <Typography sx={{ my: "1rem" }}>
          <span>Your Rights:</span> We firmly believe that you should have
          complete control over your personal data. You have the right to
          access, modify, or delete any of your information at any point. Your
          privacy rights are paramount, and we uphold the highest standards in
          data protection to ensure your trust.
        </Typography>
        <Typography sx={{ my: "1rem" }}>
          <span>Third-Party Sharing:</span> Your personal information is
          important to us, and we will not sell or share it with third parties
          without your explicit consent. The only exceptions to this policy are
          when it is required by law or necessary to provide you with specific
          services you have requested. Rest assured; we prioritize your privacy
          in every decision we make.
        </Typography>
        <Typography sx={{ my: "1rem" }}>
          <span>Security Measures:</span> We take your data security seriously.
          Our team has implemented robust security protocols designed to protect
          your information from unauthorized access and cyber threats, allowing
          you to engage with us confidently, knowing your online experience is
          safeguarded.
        </Typography>
        <Typography sx={{ my: "1rem" }}>
          <span>Stay Informed:</span> To maintain transparency, we routinely
          review and update our privacy practices to reflect any changes in
          regulations or our operations. We encourage you to review this policy
          periodically to stay informed about how we protect your information.
          By staying connected with us, you can continue to enjoy all the
          benefits of our healthcare community while we diligently protect your
          privacy.
        </Typography>
        <Typography sx={{ my: "1rem" }}>
          Thank you for placing your trust in Healthcare Impact Magazine.
          Together, we can enhance the healthcare landscape while ensuring your
          privacy remains our top priority.
        </Typography>
      </Box>
    </Container>
  );
}
