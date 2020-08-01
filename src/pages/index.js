import React from "react";
import { graphql } from "gatsby";
import PropTypes from "prop-types";

import Layout from "../components/layout";
import PostLink from "../components/index/postlink";
import SEO from "../components/seo";
import "./index.css";

import { isArabic } from "../utils";

const Index = ({
  data: {
    docs: { nodes },
  },
}) => {
  const posts = nodes.map(({ id, document, childMarkdownRemark }) => ({
    documentId: id,
    title: document.name,
    path: document.path,
    excerpt: childMarkdownRemark.excerpt,
    createdTime: document.createdTime,
    lang: isArabic(document.name) ? "ar" : "en",
  }));

  return (
    <Layout>
      <SEO title="Writing" />
      <div>
        {posts.map(post => (
          <PostLink post={post} />
        ))}
      </div>
    </Layout>
  );
};

Index.propTypes = {
  data: PropTypes.object.isRequired,
};

export const query = graphql`
  {
    docs: allGoogleDocs(
      filter: { document: { path: { regex: "/articles/" } } }
      sort: { fields: document___createdTime, order: DESC }
    ) {
      nodes {
        id
        document {
          id
          path
          name
          createdTime(formatString: "x")
        }
        childMarkdownRemark {
          id
        }
      }
    }
  }
`;

export default Index;
