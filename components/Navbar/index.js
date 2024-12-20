import Link from "next/link";
import { Divider, Typography } from "@mui/material";
import { NavContainer, NavList, NavMenu } from "./styles";
import DarkAndLightSwitch from "../DarkAndLightSwitch";

function Navbar() {
  return (
    <NavContainer>
      <div className="navbar">
        <Typography>LOGO</Typography>
        <NavMenu>
          <NavList>
            <Link href="#" className="navlist">
              Home
            </Link>
          </NavList>
          <NavList>
            <Link href="#" className="navlist">
              Health
            </Link>
          </NavList>
          <NavList>
            <Link href="#" className="navlist">
              Wellbeing
            </Link>
          </NavList>
          <NavList>
            <Link href="#" className="navlist">
              Contact
            </Link>
          </NavList>
        </NavMenu>
        <DarkAndLightSwitch />
      </div>
      <Divider />
    </NavContainer>
  );
}

export default Navbar;
