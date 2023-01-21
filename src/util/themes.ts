import { DefaultTheme } from "styled-components";

export const light: DefaultTheme = {
  name: "light",
  colors: {
    primary: "#546D7D",
    secondary: "#929da5",
    third: "#C2CFD7",
    contrast: "#FFFFFF",
    alert: "#FF8787",
    stroke: "#000000",
  },
};

export const dark: DefaultTheme = {
  name: "dark",
  colors: {
    primary: "#FFFFFF",
    secondary: "#d5d5d5",
    third: "#C2CFD7",
    contrast: "#546D7D",
    alert: "#FFAEAE",
    stroke: "#FFFFFF",
  },
};
