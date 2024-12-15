import { useState } from "react";
import Image from "next/image";
import { Divider, Box } from "@mui/material";
import healthImage from "/public/images/paprika-3212137_1280.jpg";
import { useArticleData, useArticleDetail } from "@/internal-api/articleData";
import {
  ArticleContainer,
  ImageContainer,
  TitleContainer,
  ArticleTitle,
  ArticleHeadline,
  ArticleAuthor,
} from "./styles";

export default function Articles() {
  const [selectedArticle, setSelectedArticle] = useState();
  const { data: postData } = useArticleData();

  const { data: artistDetail } = useArticleDetail();

  return (
    <div>
      {postData?.map((post) => (
        <div key={post.id}>
          <ArticleContainer>
            <TitleContainer>
              <ArticleTitle>{post.title}</ArticleTitle>
              <ArticleHeadline>{post.highlights}</ArticleHeadline>
              <ArticleAuthor>{post.author}</ArticleAuthor>
            </TitleContainer>

            <ImageContainer>
              <Image
                src={post.imageUrl.url}
                alt={post.title}
                width={500}
                height={300}
              />
            </ImageContainer>
          </ArticleContainer>
          <Box px={3}>
            <Divider
              sx={{
                backgroundColor: "#000",
                height: "1px",
              }}
            />
          </Box>
        </div>
      ))}
    </div>
  );
}
