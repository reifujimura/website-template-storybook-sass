import type { GatsbyConfig } from "gatsby";

const config: GatsbyConfig = {
  siteMetadata: {
    siteUrl: process.env.PUBLIC_URL,
  },
  graphqlTypegen: true,
  plugins: ["gatsby-plugin-sass"],
};

export default config;
