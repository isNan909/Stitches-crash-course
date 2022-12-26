import { createStitches } from "@stitches/react";

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
      blackColor: "#242424",
      blackLightColor: "#343433",
      mildWhite: "#f6f4f2",
      whiteColor: "#ffffff",
    },
    fontSizes: {
      1: "48px",
      2: "36px",
      3: "20px",
      4: "18px",
      5: "16px",
      6: "12px",
    },
    fontWeights: {
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
