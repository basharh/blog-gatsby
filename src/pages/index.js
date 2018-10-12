import React from "react";
import PropTypes from "prop-types";
import { graphql, Link } from "gatsby";
import { css } from "react-emotion";
import moment from "moment";
import { rhythm } from "../utils/typography";
import Layout from "../components/layout";
import "moment/locale/ar";

const PostLink = ({ node: { id, frontmatter, fields, excerpt } }) => {
  const direction = frontmatter.direction === "rtl" ? "rtl" : "ltr";

  const timestamp = parseInt(frontmatter.date, 10);
  let date;
  if (direction === "rtl") {
    date = moment(timestamp)
      .locale("ar")
      .format("DD MMMM YYYY");
  } else {
    date = moment(timestamp)
      .locale("en")
      .format("DD MMMM, YYYY");
  }

  return (
    <div key={id} style={{ direction }}>
      <Link
        to={fields.slug}
        className={css`
          text-decoration: none;
          color: inherit;
        `}
      >
        <h4
          className={css`
            margin-bottom: ${rhythm(1 / 4)};
          `}
        >
          {frontmatter.title}
          {` `}
          <span
            className={css`
              color: #bbb;
              font-size: 0.9rem;
            `}
          >
            {`- ${date}`}
          </span>
        </h4>
        <p>{excerpt}</p>
      </Link>
    </div>
  );
};

PostLink.propTypes = {
  node: PropTypes.object.isRequired
};

const Index = ({ data }) => (
  <Layout>
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
            date(formatString: "x")
          }
          excerpt
        }
      }
    }
  }
`;
