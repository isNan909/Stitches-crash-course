import { styled } from "../../stitches.config.ts";

import { ResponsiveContainer } from "../components/responsive-container";
import { Box } from "../components/box";

import { BlueCircle } from "./../assets/bluecircle";

const LetsBuild = styled({
  position: "relative",
  backgroundColor: "$mildWhite",
  ".build": {
    alignItems: "center",
    display: "flex",
    justifyContent: "center",
    textAlign: "center",
  },
  ".build-circles": {
    position: "absolute",
    right: "0",
    top: "0",
  },
  ".build-heading": {
    h2: {
      fontSize: "$2",
      fontWeight: "$normal",
    },
    p: {
      fontSize: "$3",
      maxWidth: "536px",
      lineHeight: "28px",
      color: "$grey400",
    },
  },
  ".build-logos": {
    display: "flex",
    alignItems: "center",
    gap: "30px",
    justifyContent: "center",
    ul: {
      display: "flex",
    },
    "ul li": {
      listStyle: "none",
      img: {
        filter: "grayscale(1)",
        opacity: ".5",
      },
      "&:nth-child(1) img": {
        width: "67.5px",
        height: "30px",
      },
      "&:nth-child(2) img": {
        width: "108px",
        height: "30px",
      },
      "&:nth-child(3) img": {
        width: "50px",
        height: "30px",
      },
    },
  },
});

export default function LetsBuildSection() {
  return (
    <LetsBuild>
      <ResponsiveContainer>
        <div className="build">
          <section>
            <div className="build-heading">
              <h2>Let's build your virtual network</h2>
              <p>
                Create a secure WireGuard® mesh network between your devices,
                virtual machines, and servers — even when they're separated by
                firewalls or subnets.
              </p>
            </div>
            <div className="build-logos">
              <ul>
                <li>
                  <img
                    src="https://tailscale.com/files/images/cloud/aws.svg"
                    alt="aws logo"
                  />
                </li>
                <li>
                  <img
                    src="https://tailscale.com/files/images/cloud/azure.svg"
                    alt="azure logo"
                  />
                </li>
                <li>
                  <img
                    src="https://tailscale.com/files/images/cloud/gcp.svg"
                    alt="Google Cloud Platform"
                  />
                </li>
              </ul>
            </div>
            <div className="build-networks">
              <div className="build-networks__tabs">
                <ul>
                  <li>
                    <h4>With Tailscale</h4>
                    <p>
                      Rolls out in minutes. Devices connect directly, working
                      from any physical location or networking environment. All
                      without poking holes in your firewall.
                    </p>
                  </li>
                  <li>
                    <h4>Without Tailscale</h4>
                    <p>
                      A frustratingly complex and brittle collection of
                      firewalls, rules, and holes while wondering if your
                      network is secure enough.
                    </p>
                  </li>
                </ul>
              </div>
              <div className="build-networks__diagram">
                <img
                  src="https://tailscale.com/files/images/marketing/home-network-before.svg"
                  alt="before tailscale"
                />
              </div>
            </div>
          </section>
        </div>
      </ResponsiveContainer>
      <div className="build-circles">
        <BlueCircle />
      </div>
    </LetsBuild>
  );
}
