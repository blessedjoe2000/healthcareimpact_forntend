import { Box } from "@mui/material";
import { styled } from "@mui/system";

export const FooterContainer = styled(Box)`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  padding: 20px 0;
  text-align: center;
  gap: 1rem;
`;

export const FooterItems = styled(Box)`
  display: flex;
  justify-content: space-around;
  align-items: center;

  @media (max-width: 548px) {
    flex-direction: column;
  }
`;

export const ItemsContainer = styled(Box)`
  display: flex;
  flex-direction: column;
`;
