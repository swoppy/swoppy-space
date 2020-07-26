module.exports = {
  siteMetadata: {
    title: `Swoppy — Personal site of Swoppy`,
    description: `A portfolio website of Swoppy. I make stuff on the interwebs. A Frontend Developer`,
    author: `Jason`,
    siteUrl: `https://swoppy.space`,
    defaultImage: `/images/swoppy_space_ss.png`,
    twitter: `@heyswoppy`,
  },
  plugins: [
    `gatsby-plugin-typescript`,
    `gatsby-plugin-css-modules-typings`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/assets/images`,
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
        icon: `src/assets/images/swoppy.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: `UA-172939473-1`,
        head: true,
      },
    },
    // `gatsby-plugin-offline`,
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
