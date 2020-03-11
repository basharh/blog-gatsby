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
          font-size: 0.9rem;
        `}
      >
        <div dangerouslySetInnerHTML={{ __html: data.ar.html }} />
      </div>
      <div
        css={css`
          p {
            font-size: 0.8rem;
            line-height: 1.3;
          }
        `}
        dangerouslySetInnerHTML={{ __html: data.en.html }}
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
    ar: markdownRemark(fields: { slug: { eq: "/bio/ar" } }) {
      html
      excerpt
    }
    en: markdownRemark(fields: { slug: { eq: "/bio/en" } }) {
      html
      excerpt
    }
  }
`;

export default Bio;
