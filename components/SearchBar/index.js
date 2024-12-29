import SearchIcon from "@mui/icons-material/Search";
import ClearIcon from "@mui/icons-material/Clear";
import {
  ClearIconWrapper,
  Search,
  SearchIconWrapper,
  StyledInputBase,
} from "./styles";
import { useState } from "react";
import axios from "axios";
import { useSearch } from "../providers/searchProvider/SearchProvider";

export default function SearchBar() {
  const [searchQuery, setSearchQuery] = useState("");

  const { setSearchedResults, resetSearchResults } = useSearch();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.get(
        `/api/articles/search?query=${searchQuery}`
      );
      const searchedArticles = await response.data;
      setSearchedResults(searchedArticles);
    } catch (error) {
      console.log("error occured while getting searched articles ", error);
    }
  };

  const handleClear = () => {
    setSearchQuery("");
    resetSearchResults();
  };

  return (
    <form onSubmit={handleSubmit}>
      <Search>
        <SearchIconWrapper>
          <SearchIcon
            sx={{
              "&:hover": {
                color: "#F4E80D",
              },
            }}
            onClick={handleSubmit}
          />
        </SearchIconWrapper>

        <StyledInputBase
          placeholder="Search…"
          inputProps={{ "aria-label": "search" }}
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        {searchQuery && (
          <ClearIconWrapper>
            <ClearIcon
              sx={{
                "&:hover": {
                  color: "#F4E80D",
                },
              }}
              onClick={handleClear}
            />
          </ClearIconWrapper>
        )}
      </Search>
    </form>
  );
}
