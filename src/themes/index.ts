import { type PaletteColor, type SimplePaletteColorOptions } from "@mui/material/styles";
import blue from "./blue";
import dark from "./dark";
import light from "./light";
import orange from "./orange";
import red from "./red";

declare module "@mui/material/styles" {
  interface Palette {
    box: PaletteColor;
  }

  interface PaletteColor {
    main: string;
    text?: string;
    bg?: string;
  }

  interface PaletteOptions {
    box: SimplePaletteColorOptions;
  }
}

const themes = {
  light,
  dark,
  red,
  blue,
  orange,
};

export default themes;
