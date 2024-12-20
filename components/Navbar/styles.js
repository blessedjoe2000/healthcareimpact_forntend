import { Box, styled } from "@mui/system";

export const NavContainer = styled(Box)`
  position: sticky;
  z-index: 1;
  top: 0;
`;
export const NavMenu = styled(Box)`
  display: flex;
  justify-content: space-around;
  align-items: center;
  gap: 5rem;
`;

export const NavList = styled(Box)`
  /* transition: color 0.3s ease; Smooth transition for hover effect */

  /* &:hover {
    background-color: #dddddd;
    padding: 5px 15px;
    border-radius: 10px;
  } */
`;
