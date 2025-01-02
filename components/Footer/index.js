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
      <FooterCopyright>
        Healthcare Impact. ©{new Date().getFullYear()} All Rights Reserved.
      </FooterCopyright>
    </footer>
  );
}

export default Footer;
