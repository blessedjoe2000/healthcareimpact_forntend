import FormControlLabel from "@mui/material/FormControlLabel";
import { MaterialUISwitch } from "./styles";
import { useColorMode } from "../providers/themeProvider/ThemeProvider";

export default function DarkAndLightSwitch() {
  const { toggleColorMode } = useColorMode();
  return (
    <FormControlLabel
      sx={{ m: 0 }}
      onClick={toggleColorMode}
      control={<MaterialUISwitch sx={{ ml: 1 }} defaultChecked />}
    />
  );
}
