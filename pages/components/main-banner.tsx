import { styled } from "../../stitches.config.ts";

import { ResponsiveContainer } from "../components/responsive-container";
// import { Button } from "../components/buttons";
// import { Box } from "../components/box";

const BannerSection = styled({
  ".banner": {
    display: "flex",
    alignItems: "center",
  },
});

export default function Mainbanner() {
  return (
    <ResponsiveContainer>
      <BannerSection>
        <div className="banner">This is a banner</div>
      </BannerSection>
    </ResponsiveContainer>
  );
}
