import { styled, Box } from "@mui/material";

export const ArticleContainer = styled(Box)`
  display: grid;
  grid-template-columns: 1fr 2fr;
  margin: 20px 0;
  padding-right: 20px;

  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    padding-right: 0px;
  }
`;
export const TitleContainer = styled(Box)`
  display: flex;
  flex-direction: column;
  gap: 5px;
  padding-right: 20px;

  @media (max-width: 768px) {
    padding-right: 0;
    margin-bottom: 10px;
  }
`;

export const ArticleTitle = styled(Box)`
  font-size: 1.2rem;
  font-weight: 700;
`;

export const ArticleHeadline = styled(Box)`
  font-size: 0.9rem;
  font-weight: 200;
`;

export const ArticleAuthor = styled(Box)`
  font-size: 0.8rem;
  font-weight: 200;
`;
export const ImageContainer = styled(Box)``;
