import { styled, Box, Typography } from "@mui/material";

export const ArticleContainer = styled(Box)`
  display: grid;
  grid-template-columns: 1fr;
  margin-top: 20px;
  margin-bottom: 20px;

  @media (min-width: 768px) {
    grid-template-columns: 1fr 2fr;
  }
`;
export const TitleContainer = styled(Box)`
  display: flex;
  flex-direction: column;
  //gap: 5px;
  padding: 0 10px;
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
  padding: 10px;
`;
