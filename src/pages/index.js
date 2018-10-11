import React from "react";
import PropTypes from "prop-types";
import { graphql, Link } from "gatsby";
import { css } from "react-emotion";
import { rhythm } from "../utils/typography";
import Layout from "../components/layout";

const Index = ({ data }) => (
  <Layout>
    <div>
      <h4>
        {data.allMarkdownRemark.totalCount}
        {` `}
        Posts
      </h4>
      {data.allMarkdownRemark.edges.map(({ node }) => (
        <div key={node.id} style={{ direction: node.frontmatter.direction }}>
          <Link
            to={node.fields.slug}
            className={css`
              text-decoration: none;
              color: inherit;
            `}
          >
            <h3
              className={css`
                margin-bottom: ${rhythm(1 / 4)};
              `}
            >
              {node.frontmatter.title}
              {` `}
              <span
                className={css`
                  color: #bbb;
                `}
              >
                {`- ${node.frontmatter.date}`}
              </span>
            </h3>
            <p>{node.excerpt}</p>
          </Link>
        </div>
      ))}
    </div>
  </Layout>
);

Index.propTypes = {
  data: PropTypes.object.isRequired
};

export default Index;

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
            date(formatString: "DD MMMM, YYYY")
          }
          excerpt
        }
      }
    }
  }
`;
