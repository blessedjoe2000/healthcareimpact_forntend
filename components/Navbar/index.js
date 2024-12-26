import Link from "next/link";
import { Divider } from "@mui/material";
import { NavContainer, NavList, NavMenu } from "./styles";
import DarkAndLightSwitch from "../DarkAndLightMood";
import { Box } from "@mui/system";

function Navbar() {
  return (
    <NavContainer>
      <Box className="navbar">
        <Box>LOGO</Box>
        <NavMenu>
          <NavList>
            <Link href="/" className="navlist">
              Home
            </Link>
          </NavList>
          <NavList>
            <Link href="/" className="navlist">
              Health
            </Link>
          </NavList>
          <NavList>
            <Link href="/" className="navlist">
              Wellbeing
            </Link>
          </NavList>
          <NavList>
            <Link href="/" className="navlist">
              Contact
            </Link>
          </NavList>
        </NavMenu>
        <DarkAndLightSwitch />
      </Box>
      <Divider />
    </NavContainer>
  );
}

export default Navbar;
