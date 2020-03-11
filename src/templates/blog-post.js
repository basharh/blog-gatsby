import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";
import Layout from "../components/layout";
import "./blog-post.scss";

const BlogPost = ({ data }) => {
  const post = data.markdownRemark;
  const lang = post.frontmatter.direction === "rtl" ? "ar" : "en";
  return (
    <Layout>
      <div className="post" lang={lang}>
        <h4>{post.frontmatter.title}</h4>
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
