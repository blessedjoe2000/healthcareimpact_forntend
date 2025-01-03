import { MainArticleWrapper } from "@/components/MainArticle/styles";
import React from "react";
import SkeletonArticles from "./SkeletonArticles";
import SkeletonSidebarArticles from "./SkeletonSidebarArticles";

export default function SkeletonMainArticles() {
  return (
    <MainArticleWrapper>
      <SkeletonArticles />
      <SkeletonSidebarArticles />
    </MainArticleWrapper>
  );
}
