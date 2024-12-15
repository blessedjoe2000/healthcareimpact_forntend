import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const fetchArticles = async () => {
  const response = await axios.get(`/api/articles`);
  console.log("response from internal api", response);
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
