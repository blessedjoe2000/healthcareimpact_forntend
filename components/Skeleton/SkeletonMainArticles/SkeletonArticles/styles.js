import { Box, styled } from "@mui/system";

export const SkeletonArticlesContainer = styled(Box)`
  display: flex;
  gap: 20px;
  margin: 20px;
`;

export const SkeletonLeftContainer = styled(Box)`
  display: flex;
  flex-direction: column;
  width: 35%;
`;

export const SkeletonRightContainer = styled(Box)`
  width: 65%;
`;
