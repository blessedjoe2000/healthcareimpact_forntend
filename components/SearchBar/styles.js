import { styled, alpha } from "@mui/material/styles";
import { InputBase } from "@mui/material";
import { Box } from "@mui/system";

export const Search = styled("div")(({ theme }) => ({
  position: "relative",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(1),
    width: "auto",
  },
}));

export const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  cursor: "pointer",
}));

export const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  flex: 1,
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
  },
}));

export const ClearIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  cursor: "pointer",
}));

export const ClearIconSpace = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 3.5),
}));

export const SuggestionsDropdown = styled("ul")(({ theme }) => ({
  position: "absolute",
  backgroundColor: theme.palette.background.default,
  color: theme.palette.text.primary,
  borderRadius: "5px",
  maxHeight: "200px",
  overflowY: "auto",
  marginTop: "0px",
  padding: "10px 20px",
  listStyle: "none",
  zIndex: 1000,
  boxShadow:
    theme.palette.mode === "light"
      ? "0px 4px 10px rgba(0, 0, 0, 0.1)"
      : "0px 4px 10px rgba(255, 255, 255, 0.1)",
}));

export const SuggestionItem = styled("li")(({ theme }) => ({
  padding: "5px",
}));
export const SearchResults = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  gap: "10px",
}));
