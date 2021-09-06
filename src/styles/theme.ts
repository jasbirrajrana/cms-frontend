//@ts-nocheck
import { theme as chakraTheme } from "@chakra-ui/react";
import { extendTheme } from "@chakra-ui/react";
import { createBreakpoints } from "@chakra-ui/theme-tools";
import { mode } from "@chakra-ui/theme-tools";

const fonts = {
  ...chakraTheme.fonts,
  heading: "Ubuntu",
  body: "Raleway",
  mono: "Fira Code",
};

const breakpoints = createBreakpoints({
  sm: "40em",
  md: "52em",
  lg: "64em",
});

const overrides = {
  ...chakraTheme,
  fonts,
  breakpoints,
  fontWeights: {
    normal: 300,
    medium: 600,
    bold: 700,
  },
  fontSizes: {
    xs: "12px",
    sm: "14px",
    md: "16px",
    lg: "18px",
    xl: "20px",
    "2xl": "24px",
    "3xl": "28px",
    "4xl": "36px",
    "5xl": "48px",
    "6xl": "64px",
  },
  styles: {
    global: (props) => ({
      body: {
        color: mode("gray.900", "whiteAlpha.900")(props),
        bg: mode("gray.50", "gray.900")(props),
        fontSize: "1.2em",
        ".deleted": {
          color: "#ff8383 !important",
          fontStyle: "normal !important",
        },
        ".inserted": {
          color: "#b5f4a5 !important",
          fontStyle: "normal !important",
        },
      },

      a: {
        color: mode("blue.500", "blue.200")(props),
        transition: "color 0.15s",
        transitionTimingFunction: "ease-out",
        fontWeight: "500",
        _hover: {
          color: mode("blue.600", "blue.300")(props),
        },
      },
    }),
  },
};

const customTheme = extendTheme(overrides);

export default customTheme;
