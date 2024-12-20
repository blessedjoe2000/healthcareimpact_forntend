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

export const fetchArticleTitle = async (encodedTitle) => {
  const decodedTitle = decodeURIComponent(encodedTitle);
  console.log("title in fetch article :>> ", decodedTitle);
  const response = await axios.get(`/api/articles/${id}`);
  console.log("fetch article title in internal api :>> ", response.data);
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
