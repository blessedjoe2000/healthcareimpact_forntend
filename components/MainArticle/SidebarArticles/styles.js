import { styled, Box, Typography } from "@mui/material";

export const SideWrapper = styled(Box)`
  margin-top: 20px;
`;

export const SideHeading = styled(Box)`
  font-size: 1.2rem;
  font-weight: 700;
  line-height: 1.2;
`;

export const SideContainer = styled(Box)`
  display: flex;
  align-items: center;
  gap: 15px;
  padding: 10px;
  margin-top: 10px;
`;

export const SideTopContent = styled(Box)`
  margin-bottom: 10px;
`;

export const SideHeadline = styled(Typography)`
  font-size: 0.9rem;
  font-weight: 700;
  line-height: 1.2;
`;

export const SideAuthor = styled(Typography)`
  font-size: 0.75rem;
  font-weight: 200;
  line-height: 1.2;
  margin-bottom: 10px;
`;
