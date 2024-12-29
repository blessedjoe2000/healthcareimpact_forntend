"use client";
import { SpinnerContainer } from "@/app/[title]/[id]/styles";
import Articles from "./Articles";
import SidebarArticles from "./SidebarArticles";
import { MainArticleWrapper } from "./styles";
import Spinner from "../Spinner";
import { useArticleData } from "@/internal-api/articleData";
import { useSearch } from "../providers/searchProvider/SearchProvider";
import SearchedArticles from "../SearchedArticles";

export default function MainArticle() {
  const { data: articlesData } = useArticleData();

  const { searchResults } = useSearch();

  if (!articlesData) {
    return (
      <SpinnerContainer>
        <Spinner />
      </SpinnerContainer>
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
