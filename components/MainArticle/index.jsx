"use client";

import Articles from "./Articles";
import SidebarArticles from "./SidebarArticles";
import { MainArticleWrapper } from "./styles";
import { useArticleData } from "@/internal-api/articleData";
import { useSearch } from "../providers/searchProvider/SearchProvider";
import SearchedArticles from "../SearchedArticles";
import SkeletonMainArticles from "../Skeleton/SkeletonMainArticles";

export default function MainArticle() {
  const { isLoading } = useArticleData();

  const { searchResults } = useSearch();

  if (isLoading) {
    return <SkeletonMainArticles />;
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
