/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/node-apis/
 */

// You can delete this file if you're not using it

const path = require('path');

//TODO: STUDY HOW THIS WORKS
exports.createPages = async ({graphql, actions, reporter}) => {
    const {createPage} = actions;

    const blogPostTemplate = path.resolve('./src/templates/article.js');
    
    const result = await graphql(`
        {
            allMarkdownRemark (
                sort: { fields: frontmatter___date, order: ASC }
                limit: 1000
            ) {
                edges {
                    node {
                        html
                        id
                        frontmatter {
                            path
                            title
                            date
                            author
                        }
                    }
                }
            }
        }
    `)

    //console.log(result.edges);

    if(result.errors){
        reporter.panicOnBuild("Error loading blog posts", result.errors);
        return;
    }

    result.data.allMarkdownRemark.edges.forEach(({node}) => {
        createPage({
            path: node.frontmatter.path,
            component: blogPostTemplate,
        });
    });

}