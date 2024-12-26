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
        <Box key={article.id}>
          <ArticleContainer>
            <TitleContainer>
              <Link
                href={`http://localhost:3000/${article.title}/${article.id}`}
              >
                <ArticleTitle>{article.title}</ArticleTitle>
              </Link>
              <ArticleHeadline>{article.highlights}</ArticleHeadline>
              <ArticleAuthor>{`By ${article.author}`}</ArticleAuthor>
            </TitleContainer>

            <Link
              href={`http://localhost:3000/${article.title}/${article.id}`}
              style={{ position: "relative", width: "100%", height: "300px" }}
            >
              <Image
                src={article.imageUrl.url}
                alt={article.title}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                style={{ objectFit: "cover" }}
                priority
              />
            </Link>
          </ArticleContainer>
          <Box px={3}>
            <Divider
              sx={{
                backgroundColor: (theme) => theme.palette.dividerBackground,
                height: "1px",

                color: (theme) => theme.palette.text.primary,
              }}
            />
          </Box>
        </Box>
      ))}
    </div>
  );
}
