import { styled } from "@stitches/react";

export const Box = styled("div", {
  display: "flex",
  justifyContent: "start",

  variants: {
    align: {
      center: {
        alignItems: "center",
      },
      left: {
        alignItems: "flex-start",
      },
      right: {
        alignItems: "flex-end",
      },
    },
    justify: {
      bewteen: {
        justifyContent: "space-between",
      },
      around: {
        justifyContent: "space-around",
      },
    },
    direction: {
      row: {
        flexDirection: "row",
      },
      column: {
        flexDirection: "column",
      },
    },
  },
});
