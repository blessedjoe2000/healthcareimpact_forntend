"use client";

import { Typography } from "@mui/material";
import { Box, Container } from "@mui/system";
import { ContactTitle } from "../about/styles";
import { SubTitle } from "./styles";

export default function Policies() {
  return (
    <Container sx={{ my: "1rem", mb: "3rem" }}>
      <Box sx={{ fontSize: "1.2rem" }}>
        <ContactTitle>Policies and Standards</ContactTitle>
        <Box sx={{ my: "" }}>
          <SubTitle>Editorial Policy</SubTitle>
          <Typography>
            <span>Integrity and Accuracy:</span> All content published must
            adhere to the highest standards of integrity and accuracy. We verify
            information through credible sources and expert opinions.
          </Typography>
          <Typography>
            <span>Transparency:</span> Authors must disclose any potential
            conflicts of interest that may influence their viewpoints or
            findings.
          </Typography>
          <Typography>
            <span>Diversity of Perspectives:</span> We strive to include a wide
            range of voices and viewpoints to foster a well-rounded discussion
            on healthcare issues.
          </Typography>
        </Box>
        <Box sx={{ my: "1rem" }}>
          <SubTitle>Privacy Policy</SubTitle>
          <Typography>
            <span>Data Protection:</span> We are committed to protecting the
            personal information of our users. Data collection is minimal and
            only for enhancing user experience.
          </Typography>
          <Typography>
            <span>User Rights:</span> Users have the right to access, modify,
            and delete their personal data at any time. We respect and uphold
            these rights.
          </Typography>
          <Typography>
            <span>Non-Disclosure:</span> Personal information will not be sold
            or shared with third parties without explicit consent, except where
            legally required.
          </Typography>
        </Box>
        <Box sx={{ my: "" }}>
          <SubTitle>User Conduct Policy</SubTitle>
          <Typography>
            <span>Respectful Engagement:</span> All readers and contributors are
            expected to engage respectfully in discussions. Hate speech,
            bullying, and harassment will not be tolerated.
          </Typography>
          <Typography>
            <span>Intellectual Property:</span>Users must respect copyright laws
            and not share content without proper attribution or permission.
          </Typography>
        </Box>
        <Box sx={{ my: "1rem" }}>
          <SubTitle>Advertising and Sponsorship Standards</SubTitle>
          <Typography>
            <span>Ethical Advertising:</span> Advertisements must be clearly
            distinguishable from editorial content. We only accept ads that
            align with our mission and values.
          </Typography>
          <Typography>
            <span>Sponsorship Transparency:</span> Sponsored content will be
            labeled as such, and the sponsor's influence on the content will be
            disclosed.
          </Typography>
        </Box>
        <Box sx={{ my: "" }}>
          <SubTitle>Accessibility Standards</SubTitle>
          <Typography>
            <span>Inclusive Design:</span> Our website and content must be
            accessible to all users, including those with disabilities. We
            adhere to Web Content Accessibility Guidelines (WCAG) to ensure
            compliance.
          </Typography>
          <Typography>
            <span>Feedback Mechanism:</span> We welcome feedback on
            accessibility issues and strive to make continuous improvements.
          </Typography>
        </Box>
        <Box sx={{ my: "1rem" }}>
          <SubTitle>Content Submission Guidelines</SubTitle>
          <Typography>
            <span>Originality:</span> All submissions must be original work and
            not previously published elsewhere.
          </Typography>
          <Typography>
            <span>Citations:</span> Proper citations must be provided for data
            and references used in articles to uphold academic rigor and
            credibility.
          </Typography>
        </Box>
        <Box sx={{ my: "" }}>
          <SubTitle>Conflict of Interest Policy</SubTitle>
          <Typography>
            <span>Disclosure Requirements:</span> All staff, contributors, and
            board members must disclose any potential conflicts of interest that
            may compromise their objectivity.
          </Typography>
          <Typography>
            <span>Review Process:</span> Submissions from individuals with
            disclosed conflicts will be subject to additional review to ensure
            unbiased coverage.
          </Typography>
        </Box>
        <Box sx={{ my: "1rem" }}>
          <SubTitle>Continuous Improvement</SubTitle>
          <Typography>
            <span>Feedback and Evaluation:</span> We encourage feedback from our
            readers and contributors to improve our policies and practices
            continually.
          </Typography>
          <Typography>
            <span>Regular Updates:</span> Policies will be reviewed and updated
            regularly to reflect best practices in the industry and changes in
            legal or ethical standards.
          </Typography>
        </Box>
        <Typography>
          By adhering to these policies and standards, we aim to foster a
          trustworthy and engaging environment for all stakeholders in the
          healthcare community.
        </Typography>
      </Box>
    </Container>
  );
}
