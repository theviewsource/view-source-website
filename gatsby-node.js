/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it

exports.createPages = ({ actions }) => {
  const { createRedirect } = actions
  createRedirect({
    fromPath: "https://view-source.netlify.com/*",
    toPath: "https://theviewsource.com/:splat",
    statusCode: 301,
    isPermanent: true,
  })
  createRedirect({
    fromPath: "https://theviewsource.pl/*",
    toPath: "https://theviewsource.com/:splat",
    statusCode: 301,
    isPermanent: true,
  })
  createRedirect({
    fromPath: "https://viewsource.pl/* ",
    toPath: "https://theviewsource.com/:splat",
    statusCode: 301,
    isPermanent: true,
  })
}
