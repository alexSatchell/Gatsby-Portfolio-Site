/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  siteMetadata: {
    title: `Alex - Front End Developer`,
    description: `Portfolio of Alex Satchell - Front End Web Developer`,
    author: `@alexsatchell`,
  },
  plugins: [
    `gatsby-plugin-styled-components`,
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [`Libre+Baskerville\:400, 700`, `Nunito\:200, 300, 400`],
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        icon: `src/images/favicon.ico`,
        icons: [
          {
            src: `favicons/favicon.ico`,
            sizes: "48x48",
            type: "image/ico",
          },
        ],
      },
    },
  ],
}
