import { styled } from "../../stitches.config.ts";

import { ResponsiveContainer } from "../components/responsive-container";
import { Button } from "../components/buttons";
import { Box } from "../components/box";

const IdentityProviders = styled({
  backgroundColor: "$mildWhite",
  ".identity-logos": {
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
  ".identity-device": {
    img: {
      width: "100%",
    },
  },
});

export default function IdentityProvidersSection() {
  return (
    <IdentityProviders>
      <ResponsiveContainer>
        <div className="identity">
          <section>
            <div className="identity-heading">
              <h2>Let's build your virtual network</h2>
              <p>
                Create a secure WireGuard® mesh network between your devices,
                virtual machines, and servers — even when they're separated by
                firewalls or subnets.
              </p>
            </div>
            <div className="identity-logos">
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
            <Button size="md" bg="ghost">
              See all supported auth providers
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
            <div className="identity-device">
              <img
                src="https://tailscale.com/static/images/marketing/sso-illustration-2400w.avif"
                alt="Tailscale on a few different devices."
              />
            </div>
          </section>
        </div>
      </ResponsiveContainer>
    </IdentityProviders>
  );
}
