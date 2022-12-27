import { createStitches, globalCss } from "@stitches/react";

export const { styled, getCssText, css } = createStitches({
  theme: {
    fonts: {
      system: "Inter, apple-system, sans-serif",
    },
    colors: {
      grey100: "#e6e4e2",
      grey200: "#9f9995",
      grey300: "#666361",
      grey400: "#474645",
      grey900: "#242424",
      backgroundGrey: "#f6f4f2",
      backgroundDarkGrey: "#d6d2cc",
      bluePrimary: "#4a7ddd",
      blueDarker: "#496495",
      blueDarkest: "#2a4067",
      orangeDark: "#CA6940",
      blackColor: "#242424",
      blackLightColor: "#343433",
      mildWhite: "#f6f4f2",
      whiteColor: "#ffffff",
    },
    fontSizes: {
      1: "48px",
      2: "36px",
      3: "30px",
      4: "20px",
      5: "18px",
      6: "16px",
      7: "12px",
    },
    fontWeights: {
      light: "300",
      normal: "500",
      bold: "600",
      bolder: "700",
    },
    lineHeights: {},
    letterSpacings: {},
    sizes: {},
    borderWidths: {},
    borderStyles: {},
    radii: {},
    shadows: {},
    zIndices: {},
    transitions: {},
  },
  media: {
    xs: "(max-width: 640px)",
    sm: "(max-width: 768px)",
    md: "(max-width: 1024px)",
    lg: "(max-width: 1280px)",
  },
});

export const globalStyles = globalCss({
  "*, *::before, *::after": { boxSizing: "border-box" },
  "body, h1, h2, h3, h4, p, figure, blockquote, dl, dd": {
    margin: 0,
  },
  "ul[role='list'], ol[role='list']": { listStyle: "none" },
  "html:focus-within": { scrollBehavior: "smooth" },
  body: {
    fontFamily: "Inter",
    minHeight: "100vh",
    textRendering: "optimizeSpeed",
    lineHeight: 1.5,
  },
  "a:not([class])": { textDecorationSkipInk: "auto" },
  "img,picture": { maxWidth: "100%", display: "block" },
  "input,button,textarea,select": { font: "inherit" },
  "@media (prefers-reduced-motion: reduce)": {
    "html:focus-within": { scrollBehavior: "auto" },
    "*, *::before, *::after": {
      animationDuration: "0.01ms !important",
      animationIterationCount: "1 !important",
      transitionDuration: "0.01ms !important",
      scrollBehavior: "auto !important",
    },
  },
});
