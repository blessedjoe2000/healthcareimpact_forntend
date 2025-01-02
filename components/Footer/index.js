"use client";

import { Divider } from "@mui/material";
import React from "react";
import { FooterCopyright } from "./styles";

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
