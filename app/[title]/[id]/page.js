"use client";

import Image from "next/image";
import { Box, Avatar } from "@mui/material";

import {
  ArticleContainer,
  ArticleTitle,
  ArticleHeadline,
  MainArticleWrapper,
  ArticleDateAndAuthor,
  ArticleAvatarAndAuthor,
  ArticleMainContent,
  SpinnerContainer,
} from "./styles";
import { useParams } from "next/navigation";
import { useArticleDetail } from "@/internal-api/articleData";
import { Container } from "@mui/system";
import Spinner from "@/components/Spinner";
import RelatedArticles from "@/components/RelatedArticles";

export default function SingleArticle() {
  const { id: id } = useParams();

  const { data: articleData } = useArticleDetail(id);

  const formatDate = (dateString) => {
    if (!dateString) return "";

    const options = {
      timeZone: "America/Chicago",
      hour: "numeric",
      minute: "2-digit",
      hour12: true,
      month: "long",
      day: "numeric",
      year: "numeric",
    };

    const date = new Date(dateString);
    const today = new Date();

    const isSameDay =
      date.getUTCFullYear() === today.getUTCFullYear() &&
      date.getUTCMonth() === today.getUTCMonth() &&
      date.getUTCDate() === today.getUTCDate();

    if (isSameDay) {
      return `Today at ${date.toLocaleTimeString("en-US", {
        timeZone: "America/Chicago",
        hour: "numeric",
        minute: "2-digit",
        hour12: true,
      })}`;
    } else {
      return date.toLocaleString("en-US", options);
    }
  };

  if (!articleData) {
    return (
      <SpinnerContainer>
        <Spinner />
      </SpinnerContainer>
    );
  }

  return (
    <Container>
      <MainArticleWrapper>
        <div key={articleData?.id}>
          <ArticleContainer>
            <ArticleTitle>{articleData?.title}</ArticleTitle>
            <ArticleHeadline>{articleData?.headline}</ArticleHeadline>
            <ArticleDateAndAuthor>
              <Box>{formatDate(articleData?.date)}</Box>
              <ArticleAvatarAndAuthor>
                <div>
                  <Avatar
                    src={articleData?.authorImage}
                    alt={articleData?.author}
                  />
                </div>
                <Box>{articleData?.author}</Box>
              </ArticleAvatarAndAuthor>
            </ArticleDateAndAuthor>
            <Box>
              <Box
                sx={{
                  width: "100%",
                  position: "relative",
                  height: {
                    xs: "250px",
                    sm: "300px",
                    md: "500px",
                  },
                }}
              >
                <Image
                  src={articleData?.imageUrl.url}
                  alt={articleData?.title}
                  fill
                  style={{ objectFit: "cover" }}
                  priority
                />
              </Box>
              <ArticleMainContent>
                <div
                  dangerouslySetInnerHTML={{ __html: articleData?.mainContent }}
                />
              </ArticleMainContent>
            </Box>
          </ArticleContainer>
        </div>

        <RelatedArticles singleArticle={articleData} />
      </MainArticleWrapper>
    </Container>
  );
}
