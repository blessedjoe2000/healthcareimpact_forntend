import SearchIcon from "@mui/icons-material/Search";
import ClearIcon from "@mui/icons-material/Clear";
import {
  ClearIconSpace,
  ClearIconWrapper,
  Search,
  SearchIconWrapper,
  SearchResults,
  StyledInputBase,
  SuggestionItem,
  SuggestionsDropdown,
} from "./styles";
import { useState } from "react";
import axios from "axios";
import { useSearch } from "../providers/searchProvider/SearchProvider";
import { useRouter } from "next/navigation";
import { StyledLink } from "../MainArticle/Articles/styles";
import { SideHeadline } from "../MainArticle/SidebarArticles/styles";
import Image from "next/image";
import { ArticleDateAndAuthor } from "@/app/[slug]/[id]/styles";

export default function SearchBar() {
  const [searchQuery, setSearchQuery] = useState("");
  const [searchSuggestions, setSearchSuggestions] = useState([]);

  const { setSearchedResults, resetSearchResults } = useSearch();

  const router = useRouter();

  const handleInputChange = async (e) => {
    const query = e.target.value;
    setSearchQuery(query);

    if (query.length > 0) {
      try {
        const response = await axios.get(`/api/articles/search?query=${query}`);
        setSearchSuggestions(response.data);
      } catch (error) {
        console.error("Error fetching search suggestions:", error);
      }
    } else {
      setSearchSuggestions([]);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!searchQuery) return;

    try {
      const response = await axios.get(
        `/api/articles/search?query=${searchQuery}`
      );
      const searchedArticles = await response.data;
      setSearchedResults(searchedArticles);
      setSearchSuggestions([]);
    } catch (error) {
      console.log("error occured while getting searched articles ", error);
    }
  };

  const handleClear = () => {
    setSearchQuery("");
    setSearchSuggestions([]);
    resetSearchResults();
    router.push("/");
  };

  return (
    <form onSubmit={handleSubmit}>
      <Search>
        <SearchIconWrapper>
          <SearchIcon
            sx={{
              "&:hover": {
                color: "#FEF602",
              },
            }}
            onClick={handleSubmit}
          />
        </SearchIconWrapper>

        <StyledInputBase
          placeholder="Search…"
          inputProps={{ "aria-label": "search" }}
          value={searchQuery}
          onChange={handleInputChange}
        />
        {searchQuery ? (
          <ClearIconWrapper>
            <ClearIcon
              sx={{
                "&:hover": {
                  color: "#FEF602",
                },
              }}
              onClick={handleClear}
            />
          </ClearIconWrapper>
        ) : (
          <ClearIconSpace />
        )}
      </Search>

      {searchSuggestions.length > 0 && (
        <SuggestionsDropdown>
          {searchSuggestions.map((article) => (
            <SuggestionItem key={article.id}>
              <StyledLink
                href={`/${article.title}/${article.id}`}
                onClick={() => addArticleClick(article.id)}
                sx={{
                  color: (theme) => theme.palette.link.default,
                  "&:hover": {
                    color: (theme) => theme.palette.link.hover,
                  },
                }}
              >
                <SearchResults>
                  <Image
                    src={article.imageUrl}
                    alt={article.title}
                    width={50}
                    height={50}
                  />
                  <SideHeadline>{article.title}</SideHeadline>
                </SearchResults>
              </StyledLink>
            </SuggestionItem>
          ))}
        </SuggestionsDropdown>
      )}
    </form>
  );
}
