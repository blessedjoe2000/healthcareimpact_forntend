import { styled, Box } from "@mui/material";

export const MainArticleWrapper = styled(Box)`
  display: grid;
  grid-template-columns: 3fr 1fr;

  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
  }
`;

export const SidebarContainer = styled(Box)`
  @media (max-width: 768px) {
    display: none;
  }
`;
