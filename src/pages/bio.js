import React from "react";
import { graphql } from "gatsby";
import { css } from "@emotion/core";
import PropTypes from "prop-types";

import Layout from "../components/layout";
import SEO from "../components/seo";

const Bio = ({ data }) => (
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
          font-size: 0.95rem;
          line-height: 1.5;
        `}
      >
        <div
          dangerouslySetInnerHTML={{ __html: data.ar.childMarkdownRemark.html }}
        />
      </div>
      <div
        css={css`
          p {
            font-size: 1rem;
            line-height: 1.3;
          }
        `}
        dangerouslySetInnerHTML={{ __html: data.en.childMarkdownRemark.html }}
      />
    </div>
  </Layout>
);

Bio.propTypes = {
  data: PropTypes.shape({
    ar: PropTypes.string,
    en: PropTypes.string,
  }).isRequired,
};

export const query = graphql`
  query {
    ar: githubFile(relativePath: { eq: "bio/ar.md" }) {
      base
      childMarkdownRemark {
        html
      }
    }
    en: githubFile(relativePath: { eq: "bio/en.md" }) {
      base
      childMarkdownRemark {
        html
      }
    }
  }
`;

export default Bio;
