import { styled } from "../../stitches.config.ts";

import { ResponsiveContainer } from "../components/responsive-container";
import { Box } from "../components/box";

import { YellowCircle } from "./../assets/yellowcircle";

const HeroImage = styled({
  img: {
    display: "flex",
    width: "100%",
    alignItems: "center",
  },
	".image-device_circles": {
		position: "absolute",
		left: "-15%",
		translate: "0 50%"
	}
});

export default function Heroimage() {
  return (
    <ResponsiveContainer>
      <HeroImage>
        <section>
          <Box direction="column" align="center">
            <div className="image-device">
              <img
                src="https://tailscale.com/static/images/marketing/home-illustration-2080w.webp"
                alt="Tailscale on a few different devices."
              />
            </div>
            <div className="image-device_circles">
              <YellowCircle/>
            </div>
          </Box>
        </section>
      </HeroImage>
    </ResponsiveContainer>
  );
}
