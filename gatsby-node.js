/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

const path = require(`path`)

exports.createPages = ({ actions, graphql }) => {
  const { createPage } = actions

  const templates = {
    "department": path.resolve(`src/templates/department.js`),
  };

  return graphql(`
    {
      allMarkdownRemark {
        edges {
          node {
            fileAbsolutePath
            frontmatter {
              layout
            }
          }
        }
      }
    }
  `).then(result => {
    if (result.errors) {
      return Promise.reject(result.errors)
    }

    return result.data.allMarkdownRemark.edges.forEach(({ node }) => {
      const path = node.fileAbsolutePath.replace(`${__dirname}/src/markdown-pages`, "")
      console.log(path);
      createPage({
        path: path,
        component: templates[node.formatter.layout],
        context: { fileAbsolutePath: node.fileAbsolutePath },
      })
    })
  })
}
