import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const fetchArticles = async () => {
  const response = await axios.get(`/api/articles`);
  return response.data;
};

export const fetchArticle = async (id) => {
  const response = await axios.get(`/api/articles/${id}`);
  return response.data;
};

export const useArticleData = () => {
  return useQuery({
    queryKey: ["articles"],
    queryFn: fetchArticles,
  });
};

export const useArticleDetail = (id) => {
  return useQuery({
    queryKey: ["articles", id],
    queryFn: () => (id ? fetchArticle(id) : Promise.resolve(null)),
    enabled: id !== null,
  });
};

export const filterRelatedArticles = async (singleArticle) => {
  const keywords = [
    "diabetics",
    "cancer",
    "flu",
    "mental health",
    "blood pressure",
    "heart failure",
  ];

  try {
    // Fetch all articles
    const response = await axios.get(`/api/articles`);
    const articles = response.data;

    const relatedArticles = articles.filter((article) => {
      if (article?.title === singleArticle?.title) {
        return null;
      }

      // Check for matching keywords in the article's title or content
      return keywords.some(
        (keyword) =>
          article?.title.toLowerCase().includes(keyword.toLowerCase()) ||
          article?.mainContent.toLowerCase().includes(keyword.toLowerCase())
      );
    });

    return relatedArticles.length > 0 ? relatedArticles : articles;
  } catch (error) {
    console.error("Error fetching related articles:", error);
    return [];
  }
};
