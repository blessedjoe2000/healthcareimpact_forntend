import Link from "next/link";
import { Divider } from "@mui/material";
import { NavContainer, SearchBarAndModeContainer } from "./styles";
import DarkAndLightSwitch from "../DarkAndLightMood";
import { Box } from "@mui/system";
import Image from "next/image";
import logo from "../../public/images/hcimpactlogo.png";
import SearchBar from "../SearchBar";

function Navbar() {
  return (
    <NavContainer>
      <Box className="navbar">
        <Box>
          <Link href="/" className="">
            <Image src={logo} alt="logo" width={250} height={80} priority />
          </Link>
        </Box>
        <SearchBarAndModeContainer>
          <SearchBar />
          <DarkAndLightSwitch />
        </SearchBarAndModeContainer>
      </Box>
      <Divider />
    </NavContainer>
  );
}

export default Navbar;
