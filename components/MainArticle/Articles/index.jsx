import Image from "next/image";
import { Divider, Box } from "@mui/material";
import { useArticleData } from "@/internal-api/articleData";
import {
  ArticleContainer,
  ImageContainer,
  TitleContainer,
  ArticleTitle,
  ArticleHeadline,
  ArticleAuthor,
} from "./styles";
import Link from "next/link";

export default function Articles() {
  const { data: articlesData } = useArticleData();

  return (
    <div>
      {articlesData?.map((article) => (
        <div key={article.id}>
          <ArticleContainer>
            <TitleContainer>
              <ArticleTitle>
                <Link
                  href={`http://localhost:3000/${article.title}/${article.id}`}
                >
                  {article.title}
                </Link>
              </ArticleTitle>
              <ArticleHeadline>{article.highlights}</ArticleHeadline>
              <ArticleAuthor>{`By ${article.author}`}</ArticleAuthor>
            </TitleContainer>

            <ImageContainer sx={{ width: "100%", position: "relative" }}>
              <Link
                href={`http://localhost:3000/${article.title}/${article.id}`}
              >
                <Image
                  src={article.imageUrl.url}
                  alt={article.title}
                  width={500}
                  height={300}
                  priority
                  layout="responsive"
                />
              </Link>
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
