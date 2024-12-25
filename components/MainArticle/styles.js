import { styled, Box } from "@mui/material";

export const MainArticleWrapper = styled(Box)`
  display: grid;
  grid-template-columns: 3fr 1fr;
  padding-top: 1rem;
  padding-bottom: 5rem;

  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
  }
`;
