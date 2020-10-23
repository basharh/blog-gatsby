import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";
import Layout from "../components/layout";
import "./blog-post.scss";

interface Post {
  html: string;
  frontmatter: {
    title: string;
    direction: "rtl" | "ltr";
  };
}

const BlogPost: React.FC<{ data: { markdownRemark: Post } }> = ({
  data: { markdownRemark: post },
}) => {
  const lang = post.frontmatter.direction === "rtl" ? "ar" : "en";

  return (
    <Layout>
      <div
        style={{ direction: post.frontmatter.direction }}
        lang={lang}
        className="post"
      >
        <h2>{post.frontmatter.title}</h2>
        <div dangerouslySetInnerHTML={{ __html: post.html }} />
      </div>
    </Layout>
  );
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
