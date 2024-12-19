import { styled, Box, Typography } from "@mui/material";

export const ArticleContainer = styled(Box)`
  display: grid;
  grid-template-columns: 1fr 2fr;
  margin: 10px 0;

  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
  }
`;
export const TitleContainer = styled(Box)`
  display: flex;
  flex-direction: column;
  gap: 5px;
  padding-right: 20px;

  @media (max-width: 768px) {
    padding-right: 0;
  }
`;

export const ArticleTitle = styled("h2")`
  font-size: 1.2rem;
  font-weight: 700;
  color: #000;
  line-height: 1.2;
`;

export const ArticleHeadline = styled(Typography)`
  font-size: 0.9rem;
  font-weight: 200;
  color: #000;
  line-height: 1.2;
`;

export const ArticleAuthor = styled(Typography)`
  margin-top: 10px;
  font-size: 0.8rem;
  font-weight: 200;
  color: #000;
  line-height: 1.2;
`;
export const ImageContainer = styled(Box)`
  padding-top: 20px;
`;
