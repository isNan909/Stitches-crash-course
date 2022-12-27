import { styled } from "../../stitches.config.ts";

export const ResponsiveContainer = styled("div", {
  margin: "auto",
  width: "100%",
  maxWidth: "72rem",
  paddingLeft: "1.75rem",
  paddingRight: "1.75rem",
  position: "relative",
  "@sm": { paddingLeft: "1rem", paddingRight: "1rem" },
});
