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
        {relatedArticles?.map((post) => (
          <Box key={post.id}>
            <SideContainer>
              <SideTopContent>
                <SideAuthor>Written by {post.author}</SideAuthor>
                <Link href={`http://localhost:3000/${post.title}/${post.id}`}>
                  <SideHeadline>{post.headline}</SideHeadline>
                </Link>
              </SideTopContent>
              <Box>
                <Avatar src={post?.authors_image?.url} alt={post?.author} />
              </Box>
            </SideContainer>
            <Divider />
          </Box>
        ))}
      </SideWrapper>
    </Box>
  );
}
