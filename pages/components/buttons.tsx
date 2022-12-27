import { styled } from "@stitches/react";

export const Button = styled("button", {
  // base styles
  display: "flex",
  border: "none",
  borderRadius: "5px",
  color: "$whiteColor",
  cursor: "pointer",
  backgroundColor: "none",
  alignItems: "center",


  "& svg": {
    width: "25px",
    height: "25px",
    marginLeft: "10px",
  },

  variants: {
    size: {
      md: {
        fontSize: "16px",
        padding: "10px 13px",
      },
    },
    bg: {
      primary: {
        backgroundColor: "$bluePrimary",
        "&:hover": {
          backgroundColor: "$blueDarker",
        },
      },
      outline: {
        backgroundColor: "$whiteColor",
        border: "1px solid $grey200",
        color: "$grey300",
        "&:hover": {
          backgroundColor: "$whiteColor",
          border: "1px solid $grey900",
          color: "$grey500",
        },
      },
      ghost: {
        backgroundColor: "transparent",
        border: "none",
        color: "$blueDarker",
        "&:hover": {
          backgroundColor: "$whiteColor",
        },
      },
    },
  },
});
