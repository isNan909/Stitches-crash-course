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
    padding: "6rem 0rem",
  },
  ".build-circles": {
    position: "absolute",
    right: "0",
    top: "0",
    zIndex: "-1",
    svg: {
      "@md": {
        width: "200px",
      },
    },
    "@sm": {
      display: "none",
    },
  },
  ".build-heading": {
    margin: "auto",
    h2: {
      fontSize: "$2",
      fontWeight: "$normal",
      paddingBottom: "16px",
      "@md": {
        fontSize: "$3",
      },
      "@sm": {
        fontSize: "$4",
      },
    },
    p: {
      fontSize: "$4",
      maxWidth: "536px",
      lineHeight: "28px",
      color: "$grey400",
      margin: "auto",
      "@sm": {
        fontSize: "$5",
      },
    },
  },
  ".build-networks": {
    display: "grid",
    gridTemplateColumns: "1fr 2fr",
    gridTemplateRows: "1fr",
    gridColumnGap: "5px",
    gridRowGap: "5px",
    alignItems: "center",
    paddingBottom: "0px 32px",
    "@md": {
      gridTemplateColumns: "1fr",
    },
  },
  ".build-logos": {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    paddingTop: "48px",
    paddingBottom: "32px",
    ul: {
      listStyle: "none",
      display: "flex",
      alignItems: "center",
      gap: "30px",
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
  ".build-networks__tabs": {
    justifyContent: "start",
    display: "flex",
    ul: {
      flex: "1",
      padding: "0px",
      margin: "0px",
      "@md": {
        display: "flex",
      },
    },
    "ul li": {
      listStyle: "none",
      textAlign: "left",
      margin: "40px 0px",
      padding: "0px 0px 0px 20px",
      "@md": {
        padding: "0px 20px 0px 20px",
      },
      "@sm": {
        flex: "1",
      },
    },
    "li.active": {
      borderLeft: "3px solid $orangeDark",
      h4: {
        color: "$orangeDark",
      },
      "@sm": {
        borderLeft: "none",
        borderTop: "3px solid $orangeDark",
      },
    },
    "li:not(.active)": {
      borderLeft: "3px solid $grey100",
      "@sm": {
        borderLeft: "none",
        borderTop: "3px solid $grey100",
      },
    },
    h4: {
      fontSize: "$4",
      fontWeight: "$normal",
      margin: "0px",
      paddingBottom: "5px",
      "@sm": {
        paddingTop: "15px",
        fontSize: "$5",
      },
      "@xs": {
        fontSize: "$6",
      },
    },
    p: {
      fontSize: "$6",
      lineHeight: "28px",
      color: "$grey400",
      "@sm": {
        display: "none",
      },
    },
  },
  ".build-networks__diagram": {
    "img": {
      width: "100%",
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
                  <li className="active">
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
                  src="https://tailscale.com/files/images/marketing/home-network-after.svg"
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
