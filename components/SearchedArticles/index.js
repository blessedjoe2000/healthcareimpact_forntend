import { Box } from "@mui/system";
import {
  ArticleAuthor,
  ArticleContainer,
  ArticleHeadline,
  ArticleTitle,
  StyledLink,
  TitleContainer,
} from "../MainArticle/Articles/styles";
import Link from "next/link";
import Image from "next/image";
import { Divider } from "@mui/material";
import { useSearch } from "../providers/searchProvider/SearchProvider";

export default function SearchedArticles() {
  const { searchResults } = useSearch();

  const addArticleClick = async (articleId) => {
    try {
      await axios.put(`/api/articles/click/${articleId}`);
    } catch (error) {
      console.error("Error adding article click:", error.message);
    }
  };

  return (
    <div>
      {searchResults?.map((article) => (
        <Box key={article.id}>
          <ArticleContainer>
            <TitleContainer>
              <StyledLink
                href={`/${article.title}/${article.id}`}
                onClick={() => addArticleClick(article.id)}
              >
                <ArticleTitle>{article.title}</ArticleTitle>
              </StyledLink>
              <ArticleHeadline>{article.highlights}</ArticleHeadline>
              <ArticleAuthor>{`By ${article.author}`}</ArticleAuthor>
            </TitleContainer>

            <Link
              href={`/${article.title}/${article.id}`}
              onClick={() => addArticleClick(article.id)}
            >
              <Box
                sx={{
                  width: "100%",
                  position: "relative",
                  height: {
                    xs: "250px",
                    sm: "300px",
                    md: "350px",
                  },
                }}
              >
                <Image
                  src={article.imageUrl}
                  alt={article.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  style={{ objectFit: "cover" }}
                  priority
                />
              </Box>
            </Link>
          </ArticleContainer>
          <Box px={3}>
            <Divider
              sx={{
                backgroundColor: (theme) => theme.palette.dividerBackground,
                height: "1px",

                color: (theme) => theme.palette.text.primary,
              }}
            />
          </Box>
        </Box>
      ))}
    </div>
  );
}
