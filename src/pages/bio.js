import React from "react";
import { graphql } from "gatsby";
import { css } from "@emotion/core";
import PropTypes from "prop-types";

import Layout from "../components/layout";
import SEO from "../components/seo";

const Bio = ({ data }) => {
  const { arabic, english } = data;
  return (
    <Layout>
      <SEO title="About Me" />
      <div
        css={css`
          margin: 10px 0px;

          div {
            margin: 20px 0px;
          }
        `}
      >
        <div
          css={css`
            direction: rtl;
            font-family: Cairo;
            font-size: 0.9rem;
          `}
        >
          <div
            dangerouslySetInnerHTML={{
              __html: arabic.childMarkdownRemark.html,
            }}
          />
        </div>
        <div
          css={css`
            p {
              font-size: 0.8rem;
              line-height: 1.3;
            }
          `}
          dangerouslySetInnerHTML={{ __html: english.childMarkdownRemark.html }}
        />
      </div>
    </Layout>
  );
};

Bio.propTypes = {
  data: PropTypes.shape({
    arabic: PropTypes.object.isRequired,
    english: PropTypes.object.isRequired,
  }).isRequired,
};

export const query = graphql`
  query {
    arabic: googleDocs(document: { path: { eq: "/bio/arabic" } }) {
      id
      document {
        name
      }
      childMarkdownRemark {
        html
      }
    }
    english: googleDocs(document: { path: { eq: "/bio/english" } }) {
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

export default Bio;
