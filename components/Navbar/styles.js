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
