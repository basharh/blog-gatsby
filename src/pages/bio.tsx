import React from "react";
import { graphql } from "gatsby";
import { css } from "@emotion/core";

import Layout from "../components/layout";
import SEO from "../components/seo";

interface GithubFile {
  childMarkdownRemark: {
    html: string;
  };
}

const Bio: React.FC<{ data: { ar: GithubFile; en: GithubFile } }> = ({
  data: { ar, en },
}) => (
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
          dangerouslySetInnerHTML={{ __html: ar.childMarkdownRemark.html }}
        />
      </div>
      <div
        css={css`
          p {
            font-size: 1rem;
            line-height: 1.3;
          }
        `}
        dangerouslySetInnerHTML={{ __html: en.childMarkdownRemark.html }}
      />
    </div>
  </Layout>
);

export const query = graphql`
  query {
    ar: githubFile(relativePath: { eq: "bio/ar.md" }) {
      childMarkdownRemark {
        html
      }
    }
    en: githubFile(relativePath: { eq: "bio/en.md" }) {
      childMarkdownRemark {
        html
      }
    }
  }
`;

export default Bio;
