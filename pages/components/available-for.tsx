import { styled } from "../../stitches.config.ts";

import { ResponsiveContainer } from "../components/responsive-container";
import { Box } from "../components/box";

import { MacOSIcon } from "./../assets/macos";

const AvailableForStyles = styled({
  alignItems: "center",
  display: "flex",
  ".available-content": {
    p: {
      display: "block",
      fontSize: "$5",
      color: "$grey200",
      textAlign: "center",
    },
    ul: {
      alignItems: "center",
      display: "flex",
      justifyContent: "center",
      gap: "30px",
    },
  },
});

export default function AvailableFor() {
  return (
    <AvailableForStyles>
      <ResponsiveContainer>
        <div className="available">
          <section>
            <div className="available-content">
              <p>Available for</p>
              <div className="available-content__logos">
                <ul>
                  <li>
                    <MacOSIcon />
                    <span>MacOS</span>
                  </li>
                  <li>
                    <MacOSIcon />
                    <span>MacOS</span>
                  </li>
                  <li>
                    <MacOSIcon />
                    <span>MacOS</span>
                  </li>
                  <li>
                    <MacOSIcon />
                    <span>MacOS</span>
                  </li>
                  <li>
                    <MacOSIcon />
                    <span>MacOS</span>
                  </li>
                </ul>
              </div>
            </div>
          </section>
        </div>
      </ResponsiveContainer>
    </AvailableForStyles>
  );
}
