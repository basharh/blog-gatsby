import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";
import Layout from "../components/layout";
import "./blog-post.scss";

const BlogPost = ({ data: { markdownRemark: post } }) => {
  const lang = post.frontmatter.direction === "rtl" ? "ar" : "en";

  return (
    <Layout>
      <div
        style={{ direction: post.frontmatter.direction }}
        lang={lang}
        className="post"
      >
        <h3>{post.frontmatter.title}</h3>
        <div dangerouslySetInnerHTML={{ __html: post.html }} />
      </div>
    </Layout>
  );
};

BlogPost.propTypes = {
  data: PropTypes.object.isRequired,
};

export default BlogPost;

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        direction
      }
    }
  }
`;
