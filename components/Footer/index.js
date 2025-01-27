"use client";

import { Divider } from "@mui/material";
import React, { useState } from "react";
import {
  FooterContainer,
  FooterCopyright,
  ModalContainer,
  ModalTitle,
} from "./styles";
import Modal from "@mui/material/Modal";
import Typography from "@mui/material/Typography";
import Link from "next/link";
import { MenuButton } from "../Navbar/styles";

function Footer() {
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <footer>
      <Divider
        sx={{
          backgroundColor: (theme) => theme.palette.dividerBackground,
          height: "1px",

          color: (theme) => theme.palette.text.primary,
        }}
      />

      <div>
        <Modal
          keepMounted
          open={open}
          onClose={handleClose}
          aria-labelledby="keep-mounted-modal-title"
          aria-describedby="keep-mounted-modal-description"
        >
          <ModalContainer>
            <ModalTitle
              id="keep-mounted-modal-title"
              variant="h6"
              component="h2"
            >
              Disclaimer
            </ModalTitle>
            <Typography id="keep-mounted-modal-description" sx={{ mt: 2 }}>
              The content provided on this website is for informational purposes
              only. It is not intended to diagnose, treat, or provide medical
              advice for any sickness, disease, or healthcare condition. Always
              consult a qualified healthcare professional before making
              decisions regarding your health or medical treatment. The
              information presented is not a substitute for professional medical
              advice, diagnosis, or treatment. In case of an emergency, please
              dial 911.
            </Typography>
          </ModalContainer>
        </Modal>
      </div>

      <FooterContainer>
        <Link href="/about">
          <MenuButton>About Us</MenuButton>
        </Link>
        <FooterCopyright>
          Healthcare Impact. ©{new Date().getFullYear()} All Rights Reserved.
        </FooterCopyright>
        <MenuButton onClick={handleOpen}>Disclaimer</MenuButton>
      </FooterContainer>
    </footer>
  );
}

export default Footer;
