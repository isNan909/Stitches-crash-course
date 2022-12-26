import { styled } from "../../stitches.config.ts";

import { ResponsiveContainer } from "../components/responsive-container";
import { Button } from "../components/buttons";
import { Box } from "../components/box";

import { Logo } from "./../assets/logo";

const NavigationBar = styled({
  ".navbar": {
    display: "flex",
    width: "100%",
    alignItems: "center",
  },
  ".navbar-logo": {
    flex: "2",
    ".navbar-logo__anchors": {
      "@sm": { display: "none" },
      marginLeft: "15px",
    },
    "ul, li": {
      display: "flex",
      textDecoration: "none",
      paddingRight: "20px",
      a: {
        color: "$grey300",
        textDecoration: "none",
        "&:hover": {
          color: "$grey900",
        },
      },
      "&:nth-child(2)": {
        "@md": { display: "none" },
      },
    },
  },
  ".navbar-cta": {
    "ul, li": {
      display: "flex",
      textDecoration: "none",
      paddingLeft: "20px",
      alignItems: "center",
      "@sm": { display: "none" },
      a: {
        color: "$grey300",
        textDecoration: "none",
        "&:hover": {
          color: "$grey900",
        },
      },
    },
    ".navbar-cta__menu": {
      display: "none",
      "@sm": { display: "initial" },
      "& svg": {
        width: "30px",
        height: "30px",
      },
    },
  },
});

export default function Navbar() {
  return (
    <ResponsiveContainer>
      <NavigationBar>
        <div className="navbar">
          <Box direction="row" align="center" className="navbar-logo">
            <Logo />
            <div className="navbar-logo__anchors">
              <ul>
                <li>
                  <a href="#">Pricing</a>
                </li>
                <li>
                  <a href="#">Customers</a>
                </li>
                <li>
                  <a href="#">Download</a>
                </li>
                <li>
                  <a href="#">Blog</a>
                </li>
              </ul>
            </div>
          </Box>
          <Box direction="row" align="center" className="navbar-cta">
            <ul>
              <li>
                <a href="#">Docs</a>{" "}
              </li>
              <li>
                <a href="#">Login</a>
              </li>
              <li>
                <Button size="md" bg="outline">
                  Use Tailscale
                </Button>
              </li>
            </ul>
            <div className="navbar-cta__menu">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                class="w-6 h-6"
              >
                <path
                  fill-rule="evenodd"
                  d="M3 6.75A.75.75 0 013.75 6h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 6.75zM3 12a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 12zm0 5.25a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75a.75.75 0 01-.75-.75z"
                  clip-rule="evenodd"
                />
              </svg>
            </div>
          </Box>
        </div>
      </NavigationBar>
    </ResponsiveContainer>
  );
}
