import { styled, alpha } from "@mui/material/styles";
import { InputBase } from "@mui/material";

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
  // width: "100%",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    transition: theme.transitions.create("width"),
    [theme.breakpoints.up("sm")]: {
      width: "12ch",
      "&:focus": {
        width: "20ch",
      },
    },
  },
}));

export const ClearIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  cursor: "pointer",
}));
