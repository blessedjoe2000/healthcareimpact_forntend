"use client";
import { SpinnerContainer } from "@/app/[title]/[id]/styles";
import Articles from "./Articles";
import SidebarArticles from "./SidebarArticles";
import { MainArticleWrapper } from "./styles";
import Spinner from "../Spinner";
import { useArticleData } from "@/internal-api/articleData";
import { useSearch } from "../providers/searchProvider/SearchProvider";
import SearchedArticles from "../SearchedArticles";
import { Box } from "@mui/system";
import SkeletonMainArticles from "../Skeleton/SkeletonMainArticles";

export default function MainArticle() {
  const { isLoading } = useArticleData();

  const { searchResults } = useSearch();

  if (isLoading) {
    return (
      <Box sx={{ overflow: "hidden" }}>
        <SpinnerContainer>
          <Spinner />
        </SpinnerContainer>
        <SkeletonMainArticles />
      </Box>
    );
  }
  return (
    <MainArticleWrapper>
      {!searchResults || searchResults.length === 0 ? (
        <Articles />
      ) : (
        <SearchedArticles />
      )}
      <SidebarArticles />
    </MainArticleWrapper>
  );
}
