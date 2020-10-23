import React from "react";
import { graphql } from "gatsby";
import { css } from "@emotion/core";

import Layout from "../components/layout";
import SEO from "../components/seo";

interface Props {
  data: {
    ar: MarkdownRemark;
    en: MarkdownRemark;
  };
}

interface MarkdownRemark {
  html: string;
}

const Bio: React.FC<Props> = ({ data: { ar, en } }) => (
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
        <div dangerouslySetInnerHTML={{ __html: ar.html }} />
      </div>
      <div
        css={css`
          p {
            font-size: 1rem;
            line-height: 1.3;
          }
        `}
        dangerouslySetInnerHTML={{ __html: en.html }}
      />
    </div>
  </Layout>
);

export const query = graphql`
  query {
    en: markdownRemark(fields: { slug: { eq: "/bio/en" } }) {
      id
      html
    }
    ar: markdownRemark(fields: { slug: { eq: "/bio/ar" } }) {
      id
      html
    }
  }
`;

export default Bio;
