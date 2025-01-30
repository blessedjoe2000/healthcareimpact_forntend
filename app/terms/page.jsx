"use client";

import { Typography } from "@mui/material";
import { Box, Container } from "@mui/system";
import { ContactTitle } from "../about/styles";
import { SubTitle } from "../policies/styles";

export default function Terms() {
  return (
    <Container sx={{ mt: "1rem", mb: "3rem" }}>
      <Box sx={{ fontSize: "1.2rem" }}>
        <ContactTitle>Terms of Service</ContactTitle>
        <Typography>
          Welcome to Healthcare Impact Magazine! By accessing or using our
          website and services, you agree to comply with and be bound by the
          following Terms of Service. Please read them carefully.
        </Typography>
        <Box sx={{ my: "1rem" }}>
          <SubTitle>Acceptance of Terms</SubTitle>
          <Typography>
            By using our website, you acknowledge that you have read,
            understood, and agree to these Terms of Service. If you do not agree
            with any part of these terms, you must not use our services.
          </Typography>
        </Box>
        <Box sx={{ my: "1rem" }}>
          <SubTitle>User Accounts</SubTitle>
          <Typography>
            <span>Registration:</span> To access certain features, you may need
            to register for an account. You agree to provide accurate, current,
            and complete information during the registration process and to
            update such information as necessary.
          </Typography>
          <Typography>
            <span>Account Security:</span> You are responsible for maintaining
            the confidentiality of your account credentials and for all
            activities that occur under your account. Notify us immediately of
            any unauthorized use of your account.
          </Typography>
        </Box>
        <Box sx={{ my: "" }}>
          <SubTitle>Content Ownership and Use</SubTitle>
          <Typography>
            <span>Intellectual Property:</span> All content on Healthcare Impact
            Magazine, including text, graphics, logos, and images, is owned by
            us or our licensors and is protected by copyright and other
            intellectual property laws.
          </Typography>
          <Typography>
            <span>User-Generated Content:</span> By submitting content to our
            site (including comments, articles, or feedback), you grant us a
            non-exclusive, royalty-free, perpetual, and worldwide license to
            use, reproduce, and publish that content.
          </Typography>
        </Box>
        <Box sx={{ my: "1rem" }}>
          <SubTitle>User Conduct</SubTitle>
          <Typography>
            <span>Respectful Interaction:</span> You agree to use our website in
            a manner that is respectful and does not violate any laws or
            regulations. Harassment, hate speech, or any form of abusive
            behavior will not be tolerated.
          </Typography>
          <Typography>
            <span>Prohibited Activities:</span> You may not engage in any
            activities that could harm, disable, or interfere with the proper
            functioning of our site, including but not limited to unauthorized
            access, data mining, or spamming.
          </Typography>
        </Box>
        <Box sx={{ my: "" }}>
          <SubTitle>Subscription and Payment</SubTitle>
          <Typography>
            <span>Subscriptions:</span> Certain features may require a paid
            subscription. By subscribing, you agree to the pricing, payment
            terms, and renewal terms as specified at the time of purchase.
          </Typography>
          <Typography>
            <span>Cancellation:</span> You may cancel your subscription at any
            time through the &quot;Manage Subscriptions&quot; section in your
            account settings.
          </Typography>
        </Box>
        <Box sx={{ my: "1rem" }}>
          <SubTitle>Third-Party Links</SubTitle>
          <Typography>
            Our website may contain links to third-party websites. We are not
            responsible for the content or practices of these external sites.
            Your use of any third-party site is at your own risk.
          </Typography>
        </Box>
        <Box sx={{ my: "" }}>
          <SubTitle>Disclaimers</SubTitle>
          <Typography>
            <span>No Medical Advice:</span> The content provided on Healthcare
            Impact Magazine is for informational purposes only and should not be
            considered medical advice. Always consult a qualified healthcare
            provider for any medical concerns.
          </Typography>
          <Typography>
            <span>Content Accuracy:</span> While we strive for accuracy, we
            cannot guarantee that all content is up-to-date or error-free. We
            encourage users to verify any information before acting based on it.
          </Typography>
        </Box>
        <Box sx={{ my: "1rem" }}>
          <SubTitle>Limitation of Liability</SubTitle>
          <Typography>
            To the fullest extent permitted by law, Healthcare Impact Magazine
            shall not be liable for any direct, indirect, incidental, or
            consequential damages arising from your use of our website or
            services.
          </Typography>
        </Box>
        <Box sx={{ my: "1rem" }}>
          <SubTitle>Changes to Terms</SubTitle>
          <Typography>
            We reserve the right to modify these Terms of Service at any time.
            Any changes will be effective immediately upon posting on our
            website. Your continued use of the site after any changes
            constitutes your acceptance of the new terms.
          </Typography>
        </Box>
        <Box sx={{ my: "1rem" }}>
          <SubTitle>Governing Law</SubTitle>
          <Typography>
            These Terms of Service shall be governed by and construed in
            accordance with the laws of the United States of America, without
            regard to its conflict of law principles.
          </Typography>
        </Box>
        <Box sx={{ my: "1rem" }}>
          <SubTitle>Contact Information</SubTitle>
          <Typography>
            If you have any questions or concerns about these Terms of Service,
            please contact us at info@hcimpactmag.com
          </Typography>
        </Box>
        <Typography>
          By using Healthcare Impact Magazine, you indicate your acceptance of
          these Terms of Service. Thank you for being a part of our community!
        </Typography>
      </Box>
    </Container>
  );
}
