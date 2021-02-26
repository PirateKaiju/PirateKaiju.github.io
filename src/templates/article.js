import React  from "react";
import {graphql, Link} from "gatsby";

import Layout from '../components/layout';

const ArticleTemplate = ({data}) => {

    const post = data.markdownRemark;

    return(
        <Layout>
            <div>
                <h2>{post.frontmatter.title}</h2>
                <h4>Postado por: {post.frontmatter.author}</h4>

                <div dangerouslySetInnerHTML={{ __html: post.html }} />
            </div>
        </Layout>
    );

}

export const postQuery = graphql`
    query BlogPostByPath($path: String!) {
        markdownRemark(frontmatter: {path: { eq: $path }}){
            html
            frontmatter {
                path
                title
                author
                date
            }
        }
    }
`

export default ArticleTemplate;