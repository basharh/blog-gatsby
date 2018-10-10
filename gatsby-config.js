module.exports = {
  siteMetadata: {
    title: `Pandas Eating Lots of Hummus`
  },
  plugins: [
    /* {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `src`,
        path: `${__dirname}/src/`
      }
    }, */
    {
      resolve: `@mosch/gatsby-source-github`,
      options: {
        tree: true,
        repository: "blog",
        user: "basharh"
      }
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        excerpt_separator: `\n`
      }
    },
    `gatsby-plugin-emotion`,
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography`
      }
    }
  ]
};
