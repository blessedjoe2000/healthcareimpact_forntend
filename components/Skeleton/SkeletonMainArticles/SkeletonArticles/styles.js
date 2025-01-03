import { Box, styled } from "@mui/system";

export const SkeletonArticlesContainer = styled(Box)`
  display: flex;
  gap: 20px;
  margin: 20px;

  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
  }
`;

export const SkeletonLeftContainer = styled(Box)`
  display: flex;
  flex-direction: column;
  width: 35%;

  @media (max-width: 768px) {
    width: 100%;
  }
`;

export const SkeletonRightContainer = styled(Box)`
  width: 65%;

  @media (max-width: 768px) {
    width: 100%;
  }
`;
