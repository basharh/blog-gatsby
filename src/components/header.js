import React from "react";
import { css } from "@emotion/core";
import { Link } from "gatsby";

const Header = () => (
  <header>
    <h1
      css={css`
        font-family: "Cairo", sans-serif;
        margin: 30px auto 20px auto;
        text-align: center;
        font-weight: 400;
      `}
    >
      بشّار الحرفوش
    </h1>
    <nav>
      <ul
        css={css`
          margin: 0px auto;
          display: flex;
          justify-content: center;
          list-style: none;
          color: #9f392b;
          text-decoration: underline;

          li {
            margin: 0px 30px;
          }
        `}
      >
        <li>
          <Link to="/">Writing</Link>
        </li>
        <li>
          <Link to="/bio/">Bio</Link>
        </li>
        <li>
          <Link to="/projects/">Projects</Link>
        </li>
      </ul>
    </nav>
  </header>
);

export default Header;
