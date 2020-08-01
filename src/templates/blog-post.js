import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";
import { isArabic } from "../utils";
import Layout from "../components/layout";
import "./blog-post.scss";

const BlogPost = ({ data }) => {
  const {
    googleDocs: {
      document: { name },
      childMarkdownRemark: { html },
    },
  } = data;

  const lang = isArabic(name) ? "ar" : "en";

  return (
    <Layout>
      <div className="post" lang={lang}>
        <h4>{name}</h4>
        <div dangerouslySetInnerHTML={{ __html: html }} />
      </div>
    </Layout>
  );
};

BlogPost.propTypes = {
  // id: PropTypes.string.isRequired,
  data: PropTypes.object.isRequired,
};

export default BlogPost;

export const query = graphql`
  query($id: String!) {
    googleDocs(id: { eq: $id }) {
      id
      document {
        name
      }
      childMarkdownRemark {
        html
      }
    }
  }
`;
