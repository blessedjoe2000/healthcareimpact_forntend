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
import { useRouter } from "next/navigation";

export default function SearchBar() {
  const [searchQuery, setSearchQuery] = useState("");

  const router = useRouter();

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
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        {searchQuery && (
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
        )}
      </Search>
    </form>
  );
}
