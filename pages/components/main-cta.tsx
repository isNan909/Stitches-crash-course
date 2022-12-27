import { styled } from "../../stitches.config.ts";

import { ResponsiveContainer } from "../components/responsive-container";
import { Button } from "../components/buttons";
import { Box } from "../components/box";

const MainActionStyles = styled({
  backgroundColor: "$White",
  margin: "auto",
  textAlign: "center",
  ".cta-buttons": {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  ".cta": {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
  },
});

export default function MainAction() {
  return (
    <MainActionStyles>
      <ResponsiveContainer>
        <section>
          <Box className="cta">
            <h2>Get started for free</h2>
            <p>Try Tailscale out for free on your own devices.</p>
            <div className="cta-buttons">
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
          </Box>
        </section>
      </ResponsiveContainer>
    </MainActionStyles>
  );
}
