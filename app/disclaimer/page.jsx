"use client";

import { Typography } from "@mui/material";
import { Box, Container } from "@mui/system";
import { ContactTitle } from "../about/styles";

export default function disclaimer() {
  return (
    <Container sx={{ mt: "1rem", mb: "5rem" }}>
      <Box>
        <ContactTitle>Disclaimer</ContactTitle>
        <Box sx={{ fontSize: "1.2rem" }}>
          <Typography>
            The content provided on this website is for informational purposes
            only. It is not intended to diagnose, treat, or provide medical
            advice for any sickness, disease, or healthcare condition. Always
            consult a qualified healthcare professional before making decisions
            regarding your health or medical treatment. The information
            presented is not a substitute for professional medical advice,
            diagnosis, or treatment. In case of an emergency, please dial 911.
          </Typography>
        </Box>
      </Box>
    </Container>
  );
}
