import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import { MaterialUISwitch } from "./styles";
import { useColorMode } from "../providers/themeProvider/ThemeProvider";

export default function DarkAndLightSwitch() {
  const { toggleColorMode } = useColorMode();
  return (
    <FormGroup>
      <FormControlLabel
        onClick={toggleColorMode}
        control={<MaterialUISwitch sx={{ m: 1 }} defaultChecked />}
      />
    </FormGroup>
  );
}
