import { Avatar, Divider, Box, useMediaQuery, useTheme } from "@mui/material";
import { getTrendyArticles, useArticleData } from "@/internal-api/articleData";
import {
  SideWrapper,
  SideContainer,
  SideTopContent,
  SideHeadline,
  SideAuthor,
  SideHeading,
} from "./styles";
import Link from "next/link";
import { useEffect, useState } from "react";
import axios from "axios";

export default function SidebarArticles() {
  const [trendyArticles, setTrendyArticles] = useState([]);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.up("769"));

  //fetch trendy articles
  useEffect(() => {
    const fetchTrendyArticles = async () => {
      const articles = await getTrendyArticles();
      setTrendyArticles(articles);
    };
    fetchTrendyArticles();
  }, []);

  const addArticleClick = async (articleId) => {
    try {
      await axios.put(`/api/articles/click/${articleId}`);
    } catch (error) {
      console.error("Error adding article click:", error.message);
    }
  };

  if (!isMobile) {
    return null; // Render nothing if not mobile
  }

  return (
    <Box
      sx={{
        display: "flex",
        width: "100%",
      }}
    >
      <Box mr={2} py={3}>
        <Divider orientation="vertical" />
      </Box>
      <SideWrapper>
        <SideHeading>Trending</SideHeading>
        <Divider
          sx={{
            backgroundColor: (theme) => theme.palette.dividerBackground,
            height: "2px",
            color: (theme) => theme.palette.text.primary,
          }}
        />
        {trendyArticles?.map((article) => (
          <Box key={article?.id}>
            <SideContainer>
              <SideTopContent>
                <SideAuthor>Written by {article?.author}</SideAuthor>
                <Link
                  href={`http://localhost:3000/${article.title}/${article.id}`}
                  onClick={() => addArticleClick(article.id)}
                >
                  <SideHeadline>{article?.headline}</SideHeadline>
                </Link>
              </SideTopContent>
              <Box>
                <Avatar
                  src={article?.authors_image?.url}
                  alt={article?.author}
                />
              </Box>
            </SideContainer>
            <Divider />
          </Box>
        ))}
      </SideWrapper>
    </Box>
  );
}
