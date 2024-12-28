import { useQuery } from "@tanstack/react-query";
import axios from "axios";

export const fetchArticles = async () => {
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

export const getTrendyArticles = async () => {
  try {
    // Fetch all articles
    const response = await axios.get(`/api/articles`);
    const articles = response.data;

    // Sort articles by the number of clicks in descending order
    const sortedArticles = articles.sort(
      (a, b) => (b.clicks || 0) - (a.clicks || 0)
    );

    // Return the top 20 articles
    return sortedArticles.slice(0, 20);
  } catch (error) {
    console.log(
      "error occured while fetching trendy articles ",
      error.message,
      { status: error.status }
    );
    return [];
  }
};

export const searchedArticles = async () => {
  try {
    // Fetch all articles
    const response = await axios.get(`/api/articles`);
    const articles = response.data;

    const { searchParams } = new URL(req.url);

    let searchQuery = searchParams.get("query");
    searchQuery = searchQuery.toLowerCase();

    const searchedArticles = articles?.filter((article) => {
      return (
        article?.title.toLowerCase().includes(searchQuery) ||
        article?.mainContent.toLowerCase().includes(searchQuery) ||
        article?.highlights.toLowerCase().includes(searchQuery) ||
        article?.headline.toLowerCase().includes(searchQuery)
      );
    });

    return searchedArticles;
  } catch (error) {
    console.log("error occured while searching articles ", error.message, {
      status: error.status,
    });
  }
};
