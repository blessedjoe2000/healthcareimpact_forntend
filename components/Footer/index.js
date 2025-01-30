"use client";

import { Divider } from "@mui/material";
import { FooterContainer, FooterItems, ItemsContainer } from "./styles";
import Link from "next/link";
import { MenuButton } from "../Navbar/styles";
import { Box } from "@mui/system";

function Footer() {
  return (
    <footer>
      <FooterContainer>
        <FooterItems>
          <ItemsContainer>
            <Link href="/privacy">
              <MenuButton>Privacy Policy</MenuButton>
            </Link>
            <Link href="/policies">
              <MenuButton>Policies and Standards</MenuButton>
            </Link>
            <Link href="/disclaimer">
              <MenuButton>Disclaimer</MenuButton>
            </Link>
          </ItemsContainer>
          <ItemsContainer>
            <Link href="/terms">
              <MenuButton>Terms of Service</MenuButton>
            </Link>
            <Link href="/guidelines">
              <MenuButton>Guidelines</MenuButton>
            </Link>
          </ItemsContainer>
        </FooterItems>
        <Divider />
        <Box>
          Healthcare Impact. ©{new Date().getFullYear()} All Rights Reserved.
        </Box>
      </FooterContainer>
    </footer>
  );
}

export default Footer;
