"use client";
import Articles from "./Articles";
import SidebarArticles from "./SidebarArticles";
import { MainArticleWrapper } from "./styles";

export default function MainArticle() {
  return (
    <MainArticleWrapper>
      <Articles />
      <SidebarArticles />
    </MainArticleWrapper>
  );
}
