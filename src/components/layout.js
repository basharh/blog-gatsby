import React from "react";
import PropTypes from "prop-types";
import { css, injectGlobal } from "react-emotion";
import { StaticQuery, Link, graphql } from "gatsby";

import { rhythm } from "../utils/typography";

injectGlobal(`
  @import url('https://fonts.googleapis.com/css?family=Cairo');
`);

const headerLink = css``;

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={() => (
      <div
        className={css`
          margin: 0 auto;
          max-width: 500px;
        `}
      >
        <h1
          className={css`
            font-family: "Cairo", sans-serif;
            margin: 0 auto;
            max-width: 700px;
            padding: ${rhythm(1)};
            text-align: center;
          `}
        >
          بشّار الحرفوش
        </h1>
        <nav>
          <ul
            className={css`
              display: flex;
              justify-content: space-around;
              list-style: none;
            `}
          >
            <li css={headerLink}>
              <Link to="/writing/">Writing</Link>
            </li>
            <li css={headerLink}>
              <Link to="/bio/">Bio</Link>
            </li>
            <li css={headerLink}>
              <Link to="/projects/">Projects</Link>
            </li>
          </ul>
        </nav>
        {children}
      </div>
    )}
  />
);

Layout.propTypes = {
  children: PropTypes.object.isRequired
};

export default Layout;
