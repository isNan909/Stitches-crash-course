import { styled } from "../../stitches.config.ts";

import { ResponsiveContainer } from "../components/responsive-container";
import { Button } from "../components/buttons";
import { Box } from "../components/box";

import { GSuitLogo } from "./../assets/gsuit-logo";
import { OktaLogo } from "./../assets/okta-logo";
import { MicrosoftLogo } from "./../assets/microsoft-logo";
import { GithubLogo } from "./../assets/github-logo";
import { OneLoginLogo } from "./../assets/onelogin-logo";

const IdentityProviders = styled({
  backgroundColor: "$mildWhite",
  ".identity-heading": {
    margin: "auto",
    "h2, p": {
      textAlign: "center",
    },
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
      maxWidth: "576px",
      margin: "auto",
      fontSize: "$4",
      lineHeight: "28px",
			fontWeight: "$light",
      "@sm": {
        fontSize: "$5",
      },
    },
  },
  ".identity-logos": {
    margin: "auto",
    textAlign: "center",
    ul: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      paddingTop: "48px",
      paddingBottom: "32px",
      gap: "20px",
      "@md": {
        flexWrap: "wrap",
      },
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
    button: {
      margin: "auto",
    },
  },
  ".identity-device": {
    marginTop: "64px",
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
              <h2>Use your existing Identity Provider</h2>
              <p>
                Connect to Tailscale with your existing identity provider.
                Easily manage groups, enforce multi factor authentication,
                revoke access for employees who have left the organization, and
                more.
              </p>
            </div>
            <div className="identity-logos">
              <ul>
                <li>
                  <GSuitLogo />
                </li>
                <li>
                  <OktaLogo />
                </li>
								<li>
                  <GithubLogo />
                </li>
								<li>
                  <MicrosoftLogo />
                </li>
                <li>
                  <OneLoginLogo />
                </li>
              </ul>
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
            </div>
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
