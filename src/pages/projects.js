import React from "react";
import { graphql } from "gatsby";
import PropTypes from "prop-types";

import Layout from "../components/layout";
import PostLink from "../components/index/postlink";
import SEO from "../components/seo";
import "./projects.scss";

const Projects = ({ data }) => (
  <Layout>
    <SEO title="Projects" />
    <div>
      {data.allMarkdownRemark.edges.map(({ node }) => (
        <PostLink node={node} />
      ))}
    </div>
  </Layout>
);

Projects.propTypes = {
  data: PropTypes.object.isRequired,
};

export const query = graphql`
  query {
    allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "/projects/[^//]+.md$/" } }
      sort: { fields: [frontmatter___date], order: DESC }
    ) {
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

export default Projects;
