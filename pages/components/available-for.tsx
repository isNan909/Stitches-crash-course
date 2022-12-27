import { styled } from "../../stitches.config.ts";
import { ResponsiveContainer } from "../components/responsive-container";
import { Box } from "../components/box";
import { MacOSIcon } from "./../assets/macos";

const AvailableForStyles = styled({
  ".wrapper": {
    position: "relative",
    backgroundColor: "$mildWhite",
    zIndex: "-1",
    alignItems: "center",
    display: "flex",
    paddingBottom: "6rem",
    "@sm": {
      padding: "0rem 0rem 3rem 0rem",
    },
  },
  ".available-content": {
    backgroundColor: "$grey100",
    padding: "30px",
    borderRadius: "4px",
    p: {
      display: "block",
      fontSize: "$6",
      color: "$grey200",
      textAlign: "center",
      paddingBottom: "30px",
    },
    ul: {
      alignItems: "center",
      display: "flex",
      justifyContent: "center",
      gap: "40px",
      "@sm": {
        flexWrap: "wrap",
      },
    },
    "ul li": {
      listStyle: "none",
    },
    "ul li": {
      alignItems: "center",
      display: "flex",
      justifyContent: "center",
      span: {
        color: "$grey400",
        fontSize: "$6",
      },
      svg: {
        width: "20px",
        height: "20px",
        marginRight: "10px",
      },
    },
  },
});

export default function AvailableFor() {
  return (
    <AvailableForStyles>
      <div className="wrapper">
        <ResponsiveContainer>
          <div className="available">
            <section>
              <div className="available-content">
                <p>Available for</p>
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
            </section>
          </div>
        </ResponsiveContainer>
      </div>
    </AvailableForStyles>
  );
}
