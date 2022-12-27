import { styled } from "../../stitches.config.ts";

import { ResponsiveContainer } from "../components/responsive-container";
import { Button } from "../components/buttons";
// import { Box } from "../components/box";

const BannerSection = styled({
  ".banner": {
    margin: "90px 0px",
		"h1": {
			fontSize: "$1",
			margin: "0",
			fontWeight: "$normal",
      "@md": { fontSize: "$2", },
		},
		"p": {
			fontSize: "$4",
			color: "$grey300",
			padding: "16px 40px 40px 0px",
			margin: "0px",
			maxWidth: "42rem",
			lineHeight: "1.75rem",
      "@md": { fontSize: "$5", },
		},
  },
  ".banner-buttons": {
    gap: "20px",
  },
  ".banner, .banner-buttons": {
    display: "flex",
    alignItems: "center",
    textAlign: "center",
    justifyContent: "center",
    "@sm": { flexWrap: "wrap", },
  },
});

export default function Mainbanner() {
  return (
    <ResponsiveContainer>
      <BannerSection>
        <div className="banner">
          <header>
            <h1>Tailscale makes networking easy</h1>
            <p>
              Tailscale lets you easily manage access to private resources,
              quickly SSH into devices on your network, and work securely from
              anywhere in the world.
            </p>
            <div className="banner-buttons">
              <Button size="md" bg="primary">
                Use Tailscale for free
              </Button>
              <Button size="md" bg="ghost">
                Use Tailscale at work
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.72 7.72a.75.75 0 011.06 0l3.75 3.75a.75.75 0 010 1.06l-3.75 3.75a.75.75 0 11-1.06-1.06l2.47-2.47H3a.75.75 0 010-1.5h16.19l-2.47-2.47a.75.75 0 010-1.06z"
                    clipRule="evenodd"
                  />
                </svg>
              </Button>
            </div>
          </header>
        </div>
      </BannerSection>
    </ResponsiveContainer>
  );
}
