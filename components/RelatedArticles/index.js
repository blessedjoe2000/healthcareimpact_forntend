import { Avatar, Divider, Box, useMediaQuery, useTheme } from "@mui/material";
import { filterRelatedArticles } from "@/internal-api/articleData";

import Link from "next/link";
import {
  SideAuthor,
  SideContainer,
  SideHeading,
  SideHeadline,
  SideTopContent,
  SideWrapper,
} from "../MainArticle/SidebarArticles/styles";
import { useEffect, useState } from "react";
import axios from "axios";

export default function RelatedArticles({ singleArticle }) {
  const [relatedArticles, setRelatedArticles] = useState([]);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.up("sm"));

  useEffect(() => {
    const fetchRelated = async () => {
      const articles = await filterRelatedArticles(singleArticle);
      setRelatedArticles(articles);
    };

    fetchRelated();
  }, [singleArticle]);

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
        <SideHeading>Related Post</SideHeading>
        <Divider
          sx={{
            backgroundColor: (theme) => theme.palette.dividerBackground,
            height: "2px",
            color: (theme) => theme.palette.text.primary,
          }}
        />
        {relatedArticles?.map((article) => (
          <Box key={article.id}>
            <SideContainer>
              <SideTopContent>
                <SideAuthor>Written by {article.author}</SideAuthor>
                <Link
                  href={`http://localhost:3000/${article.title}/${article.id}`}
                  onClick={() => addArticleClick(article.id)}
                >
                  <SideHeadline>{article.headline}</SideHeadline>
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
