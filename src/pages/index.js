import React from "react";
import { graphql } from "gatsby";
import PropTypes from "prop-types";

import Layout from "../components/layout";
import PostLink from "../components/index/postlink";
import SEO from "../components/seo";

const Index = ({ data }) => (
  <Layout>
    <SEO title="Home" />
    <div>
      <h4>
        {data.allMarkdownRemark.totalCount}
        {` `}
        Posts
      </h4>
      {data.allMarkdownRemark.edges.map(({ node }) => (
        <PostLink node={node} />
      ))}
    </div>
  </Layout>
);

Index.propTypes = {
  data: PropTypes.object.isRequired,
};

export const query = graphql`
  query {
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      totalCount
      edges {
        node {
          id
          fields {
            slug
          }
          frontmatter {
            title
            direction
            date(formatString: "x")
          }
          excerpt
        }
      }
    }
  }
`;

export default Index;
