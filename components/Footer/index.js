"use client";

import { Divider } from "@mui/material";
import { FooterContainer } from "./styles";
import Link from "next/link";
import { MenuButton } from "../Navbar/styles";
import { Box } from "@mui/system";

function Footer() {
  return (
    <footer>
      <FooterContainer>
        <Box>
          <Box>
            <Link href="/privacy">
              <MenuButton>Privacy Policy</MenuButton>
            </Link>
            <Link href="/policies">
              <MenuButton>Policies and Standards</MenuButton>
            </Link>
            <Link href="/disclaimer">
              <MenuButton>Disclaimer</MenuButton>
            </Link>
          </Box>
          <Box>
            <Link href="/terms">
              <MenuButton>Terms of Service</MenuButton>
            </Link>
            <Link href="/policies">
              <MenuButton>Policies and Standards</MenuButton>
            </Link>
            <Link href="/disclaimer">
              <MenuButton>Disclaimer</MenuButton>
            </Link>
          </Box>
        </Box>
        <Divider />
        <Box>
          Healthcare Impact. ©{new Date().getFullYear()} All Rights Reserved.
        </Box>
      </FooterContainer>
    </footer>
  );
}

export default Footer;
