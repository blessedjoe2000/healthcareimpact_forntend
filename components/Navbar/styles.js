import { Button } from "@mui/material";
import { Box, styled } from "@mui/system";

export const NavContainer = styled(Box)`
  position: sticky;
  z-index: 1;
  top: 0;
`;

export const SearchBarAndModeContainer = styled(Box)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 5rem;
  padding: 0 5px;
`;

export const MenuButton = styled(Button)`
  font-size: 1rem;
  font-weight: 500;
  position: relative;
  color: white;
  transition: none;
  background-color: transparent;
  text-transform: capitalize;

  &:hover {
    background-color: transparent;
    color: #fcd307;
  }

  ::after {
    content: "";
    position: absolute;
    bottom: -2px;
    left: 0;
    width: 0;
    height: 2px;
    background-color: #fff;
    transition: width 0.3s ease-in-out;
  }

  :hover::after {
    width: 100%;
  }
`;
