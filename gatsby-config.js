/* eslint-env commonjs */
require("dotenv").config();
const { NODE_ENV } = process.env;

module.exports = {
  siteMetadata: {
    title: `Bashar Harfoush`,
    description: `The Personal Website of Bashar Harfoush.`,
    author: `@basharh`,
  },
  plugins: [
    `gatsby-plugin-emotion`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sass`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    NODE_ENV === "production"
      ? {
          resolve: `@mosch/gatsby-source-github`,
          options: {
            tree: true,
            repository: "blog",
            user: "basharh",
            secrets: {
              token: process.env.GITHUB_API_TOKEN,
            },
          },
        }
      : {
          resolve: `gatsby-source-filesystem`,
          options: {
            path: `../blog`,
          },
        },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        excerpt_separator: `<!-- end -->`,
        plugins: [`gatsby-remark-autolink-headers`],
      },
    },
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [`Cairo:200,300,400,600,700`],
        display: "swap",
      },
    },
    /* {
      resolve: "gatsby-plugin-web-font-loader",
      options: {
        google: {
          families: ["Cairo", "Reem Kufi"],
        },
      },
    }, */
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
};
