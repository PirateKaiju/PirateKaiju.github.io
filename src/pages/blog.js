//TODO: PAGINATE: https://www.gatsbyjs.com/docs/adding-pagination/
import { graphql, Link } from 'gatsby';
import React from 'react';

import Layout from '../components/layout';

import '../components/global.css';

//TODO: SEO DATA WITH PARAMS
//TODO: FIND OUT HOW TO KEEP TWO OR MORE LANGUAGES
const BlogPage = ({data, location}) => (
    <Layout location={location}>
        <div>
            <h1>Artigos recentes</h1>
            {data.allMarkdownRemark.edges.map((post) => (
                <div style={{
                        border: "1px solid black",
                        borderRadius: "10px",
                        padding: "1em",
                        marginBottom: "1em",
                    }} 
                key={post.node.id} >
                    <Link className="linkdark" to={post.node.frontmatter.path}>
                        <h3>{post.node.frontmatter.title}</h3>
                    </Link>
                    <h6>Postado em: { post.node.frontmatter.date }</h6>
                    
                </div>
            ))}

        </div>
    </Layout>
);

export const blogPageQuery = graphql`
    query BlogIndexQuery {
        allMarkdownRemark {
            edges {
                node {
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
`

export default BlogPage;