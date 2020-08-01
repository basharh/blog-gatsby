const path = require(`path`);

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;
  const result = await graphql(`
    {
      allGoogleDocs {
        nodes {
          id
          document {
            path
            breadcrumb
            name
            markdown
          }
        }
      }
    }
  `);

  result.data.allGoogleDocs.nodes.forEach(({ id, document }) => {
    createPage({
      path: document.path,
      component: path.resolve(`./src/templates/blog-post.js`),
      context: {
        id,
      },
    });
  });
};
