"use client";
import { SpinnerContainer } from "@/app/[title]/[id]/styles";
import Articles from "./Articles";
import SidebarArticles from "./SidebarArticles";
import { MainArticleWrapper, SidebarContainer } from "./styles";
import Spinner from "../Spinner";
import { useArticleData } from "@/internal-api/articleData";

export default function MainArticle() {
  const { data: articlesData } = useArticleData();

  if (!articlesData) {
    return (
      <SpinnerContainer>
        <Spinner />
      </SpinnerContainer>
    );
  }
  return (
    <MainArticleWrapper>
      <Articles />
      <SidebarContainer>
        <SidebarArticles />
      </SidebarContainer>
    </MainArticleWrapper>
  );
}
