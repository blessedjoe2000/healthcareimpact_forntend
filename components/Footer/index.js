"use client";

import { Divider, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { FooterContent, FooterCopyright } from "./styles";

function Footer() {
  return (
    <footer>
      <Divider
        sx={{
          backgroundColor: (theme) => theme.palette.dividerBackground,
          height: "1px",

          color: (theme) => theme.palette.text.primary,
        }}
      />
      <FooterContent>
        <Box>Terms of service </Box>
        <Box>|</Box>
        <Box>Privacy</Box>
        <Box>|</Box>
        <Box>Health</Box>
      </FooterContent>
      <Divider sx={{ mx: "50px" }} />
      <FooterCopyright>
        All Rights Reserved. ©{new Date().getFullYear()}
      </FooterCopyright>
    </footer>
  );
}

export default Footer;
