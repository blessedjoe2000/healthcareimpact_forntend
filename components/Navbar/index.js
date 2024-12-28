import Link from "next/link";
import { Divider } from "@mui/material";
import { NavContainer, NavList, NavMenu } from "./styles";
import DarkAndLightSwitch from "../DarkAndLightMood";
import { Box } from "@mui/system";
import Image from "next/image";
import logo from "../../public/images/healthcareimpactlogo.png";
import SearchBar from "../SearchBar";

function Navbar() {
  return (
    <NavContainer>
      <Box className="navbar">
        <SearchBar />
        <Box>
          <Link href="/" className="">
            <Image src={logo} alt="logo" width={200} height={70} />
          </Link>
        </Box>
        <DarkAndLightSwitch />
      </Box>
      <Divider />
    </NavContainer>
  );
}

export default Navbar;
