import SearchIcon from "@mui/icons-material/Search";
import { Search, SearchIconWrapper, StyledInputBase } from "./styles";
import { useState } from "react";
import axios from "axios";
import { useSearch } from "../providers/searchProvider/SearchProvider";

export default function SearchBar() {
  const [searchQuery, setSearchQuery] = useState("");

  const { setSearchedResults } = useSearch();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.get(
        `/api/articles/search?query=${searchQuery}`
      );
      const searchedArticles = await response.data;
      setSearchedResults(searchedArticles);
      setSearchQuery("");
    } catch (error) {
      console.log("error occured while getting searched articles ", error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <Search>
        <SearchIconWrapper>
          <SearchIcon sx={{ color: "#F4E80D" }} />
        </SearchIconWrapper>

        <StyledInputBase
          placeholder="Search…"
          inputProps={{ "aria-label": "search" }}
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </Search>
    </form>
  );
}
