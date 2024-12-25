import { styled, Box, Typography } from "@mui/material";

export const SpinnerContainer = styled(Box)`
  padding: 50px 0;
`;

export const MainArticleWrapper = styled(Box)`
  display: grid;
  grid-template-columns: 3fr 1fr;

  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
  }
`;
export const ArticleContainer = styled(Box)`
  margin: 50px 0;
  margin-right: 30px;

  @media (max-width: 768px) {
    margin-right: 0px;
  }
`;

export const ArticleTitle = styled(Typography)`
  font-size: 2rem;
  font-weight: 700;
  line-height: 1.2;
`;

export const ArticleHeadline = styled(Typography)`
  font-size: 1.2rem;
  font-weight: 400;
  margin: 20px 0;
`;

export const ArticleAuthor = styled(Typography)`
  margin-top: 10px;
  font-size: 0.8rem;
  font-weight: 200;
  line-height: 1.2;
`;
export const ImageContainer = styled(Box)`
  padding: 10px 0;
`;

export const ArticleAvatarAndAuthor = styled(Box)`
  display: flex;
  align-items: center;
  gap: 10px;
`;

export const ArticleDateAndAuthor = styled(Box)`
  font-size: 0.9rem;
  font-weight: 200;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 20px;

  @media (max-width: 768px) {
    flex-direction: column;
    justify-content: start;
    align-items: start;
    gap: 10px;
  }
`;

export const ArticleMainContent = styled(Box)`
  /* color: #000; */
`;
