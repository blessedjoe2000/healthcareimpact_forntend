import { Avatar, Divider, Box, useMediaQuery, useTheme } from "@mui/material";
import { useArticleData } from "@/internal-api/articleData";
import {
  SideWrapper,
  SideContainer,
  SideTopContent,
  SideHeadline,
  SideAuthor,
} from "./styles";

export default function SidebarArticles() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.up("sm"));
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
        <Divider
          sx={{
            backgroundColor: "#000",
            height: "2px",
          }}
        />
        {postData?.map((post) => (
          <SideContainer key={post.id}>
            <SideTopContent>
              <SideAuthor>{post.author}</SideAuthor>
              <SideHeadline>{post.headline}</SideHeadline>
            </SideTopContent>
            <div>
              <Avatar src={post.authorImage} alt={post.author} />
            </div>
          </SideContainer>
        ))}
      </SideWrapper>
    </Box>
  );
}
