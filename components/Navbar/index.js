import Link from "next/link";
import { Typography } from "@mui/material";

function Navbar() {
  return (
    <div className="navbar">
      <Typography>LOGO</Typography>
      <nav>
        <Link href="#">Home</Link>
        <Link href="#">Health</Link>
        <Link href="#">Wellbeing</Link>
        <Link href="#">Contact</Link>
      </nav>
    </div>
  );
}

export default Navbar;
