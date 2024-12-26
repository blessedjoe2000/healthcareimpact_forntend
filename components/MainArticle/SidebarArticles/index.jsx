import { Avatar, Divider, Box, useMediaQuery, useTheme } from "@mui/material";
import { useArticleData } from "@/internal-api/articleData";
import {
  SideWrapper,
  SideContainer,
  SideTopContent,
  SideHeadline,
  SideAuthor,
  SideHeading,
} from "./styles";
import Link from "next/link";

export default function SidebarArticles() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.up("769"));
  const { data: postData } = useArticleData();

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
        {postData?.map((post) => (
          <Box key={post?.id}>
            <SideContainer>
              <SideTopContent>
                <SideAuthor>Written by {post?.author}</SideAuthor>
                <Link href={`http://localhost:3000/${post.title}/${post.id}`}>
                  <SideHeadline>{post?.headline}</SideHeadline>
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
