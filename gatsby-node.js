/*
  See: https://www.gatsbyjs.org/docs/node-apis/
 */
const path = require("path")

const BLOG_POST_QUERY = `query BlogPosts {
  allMarkdownRemark(limit: 5) {
    edges {
      node {
        wordCount{
          words
        }
        frontmatter {
          slug
          title
          date(formatString: "MMMM DD,YYYY")
        }
      }
    }
  }
}
`

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions

  return new Promise((resolve, reject) => {
    graphql(BLOG_POST_QUERY).then(results => {
      const { edges } = results.data.allMarkdownRemark

      edges.forEach(({ node }) => {
        const { slug, title, date } = node.frontmatter
        createPage({
          path: `/posts/${slug}`,
          component: path.resolve(`./src/components/PostLayout.js`),
          context: {
            slug,
          },
        })
      })
      resolve()
    })
  })
}
