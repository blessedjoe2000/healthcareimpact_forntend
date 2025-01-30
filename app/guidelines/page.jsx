"use client";

import { Typography } from "@mui/material";
import { Box, Container } from "@mui/system";
import { ContactTitle } from "../about/styles";
import { SubTitle } from "../policies/styles";

export default function Guidelines() {
  return (
    <Container sx={{ mt: "1rem", mb: "3rem" }}>
      <Box sx={{ fontSize: "1.2rem" }}>
        <ContactTitle>Discussion and Submission Guidelines</ContactTitle>
        <Typography>
          Healthcare Impact Magazine invites contributions that explore
          innovative ideas, research findings, and narratives that impact the
          healthcare landscape. We seek to create a platform for diverse voices
          and perspectives that can inspire change and foster dialogue within
          the healthcare community.
        </Typography>

        <SubTitle sx={{ my: "1rem", mt: "2rem" }}>
          Submission Guidelines
        </SubTitle>
        <Box>
          <Box>
            <span>Types of Contributions:</span>
          </Box>
          <Typography>
            <span>Research Articles:</span> Original studies, systematic
            reviews, and meta-analyses.
          </Typography>
          <Typography>
            <span>Commentaries:</span> Expert opinions on current issues or
            emerging trends in healthcare.
          </Typography>
          <Typography>
            <span>Case Studies:</span> Detailed examinations of specific
            healthcare interventions or practices.
          </Typography>
          <Typography>
            <span>Personal Narratives:</span> First-person accounts that
            highlight individual experiences within the healthcare system.
          </Typography>
          <Typography>
            <span>Policy Analyses:</span> Evaluations of healthcare policies and
            their implications for practice and outcomes.
          </Typography>
        </Box>
        <Box sx={{ my: "1rem" }}>
          <span>Formatting:</span>
          <Typography>
            Manuscripts should be submitted in a Word document or PDF format.
          </Typography>
          <Typography>
            Use standard fonts (e.g., Times New Roman, 12 pt) and double-spacing
            throughout.
          </Typography>
          <Typography>
            Include a title page with the title of the submission, author(s)
            name(s), affiliation(s), and contact information.
          </Typography>
          <Typography>
            References should be formatted according to APA style.
          </Typography>
        </Box>
        <Box sx={{ my: "" }}>
          <span>Length:</span>
          <Typography>Research Articles: 3,000 - 5,000 words.</Typography>
          <Typography>Commentaries: 1,500 - 2,500 words.</Typography>
          <Typography>Case Studies: 2,000 - 3,500 words.</Typography>
          <Typography>Personal Narratives: 1,000 - 2,000 words.</Typography>
          <Typography>Policy Analyses: 2,000 - 3,000 words.</Typography>
        </Box>
        <Box sx={{ my: "1rem" }}>
          <span>Originality and Plagiarism:</span>
          <Typography>
            All submissions must be original work not previously published or
            under consideration elsewhere.
          </Typography>
          <Typography>
            Plagiarism in any form will not be tolerated. Authors should
            properly cite all sources.
          </Typography>
        </Box>
        <Box sx={{ my: "1rem" }}>
          <span>Review Process:</span>
          <Typography>
            All submissions will undergo a peer-review process.
          </Typography>
          <Typography>
            Authors may be asked to revise their manuscripts based on reviewer
            feedback.
          </Typography>
        </Box>
        <Box sx={{ my: "1rem" }}>
          <span>Ethical Considerations:</span>
          <Typography>
            Authors must adhere to ethical standards in their research and
            writing.
          </Typography>
          <Typography>
            Any conflicts of interest must be disclosed at the time of
            submission.
          </Typography>
        </Box>
        <Box sx={{ my: "" }}>
          <span>Submission Process:</span>
          <Typography>
            Please submit your manuscript via our online submission portal (link
            to be provided).
          </Typography>
          <Typography>
            Include a cover letter summarizing the significance of your work and
            its relevance to the magazine's audience.
          </Typography>
        </Box>
        <Box sx={{ my: "1rem" }}>
          <span>Deadline:</span>
          <Typography>
            There are no fixed deadlines, but timely submissions are encouraged
            to ensure inclusion in upcoming issues.
          </Typography>
        </Box>
        <Box sx={{ my: "" }}>
          <span>Contact Information:</span>
          <Typography>
            For inquiries regarding submissions or the review process, please
            contact the editorial team at [einfo@hcimpactmag.com].
          </Typography>
        </Box>
        <SubTitle sx={{ mb: "1rem", mt: "3rem" }}>
          Discussion Guidelines
        </SubTitle>
        <Box sx={{ my: "1rem" }}>
          <Typography>
            <span>Engagement:</span> Authors and readers are encouraged to
            engage in thoughtful discussions about the topics covered in the
            magazine. Comments should be respectful and constructive.
          </Typography>
        </Box>
        <Box sx={{ my: "" }}>
          <Typography>
            <span>Diversity of Opinions:</span> We welcome diverse perspectives,
            especially those that challenge conventional thinking or present
            alternative solutions to healthcare challenges.
          </Typography>
        </Box>
        <Box sx={{ my: "1rem" }}>
          <Typography>
            <span>Civility:</span> Discourse should remain civil, focusing on
            the content rather than personal attacks. Healthy debate is
            encouraged, but it should be grounded in evidence and respect for
            differing viewpoints.
          </Typography>
        </Box>
        <Typography>
          By adhering to these guidelines, we aim to foster a collaborative
          environment that advances knowledge and practice in the healthcare
          field. We look forward to your contributions and insightful
          discussions. Thank you for being a part of the Healthcare Impact
          Magazine community!
        </Typography>
      </Box>
    </Container>
  );
}
