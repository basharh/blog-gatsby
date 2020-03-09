import React from "react";
import PropTypes from "prop-types";
import { useStaticQuery, graphql } from "gatsby";
import { css } from "@emotion/core";

import Header from "./header";
import "./layout.css";

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  return (
    <>
      <Header siteTitle={data.site.siteMetadata.title} />
      <div
        css={css`
          margin: 0 auto;
          max-width: 860px;
          padding: 0 1.0875rem 1.45rem;
        `}
      >
        <main
          css={css`
            min-height: 860px;
          `}
        >
          {children}
        </main>
        <footer>
          <div
            css={css`
              margin: 0px auto;
              font-size: 14px;
              text-align: center;
            `}
          >
            Built by <a href="https://twitter.com/bashar">@basharh</a>
          </div>
        </footer>
      </div>
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
