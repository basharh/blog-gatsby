import React from "react";
import { css } from "@emotion/core";
import { Link } from "gatsby";

const Header = () => (
  <header>
    <h1
      css={css`
        font-family: "Cairo", sans-serif;
        margin: 0 auto;
        padding: 1.5rem;
        text-align: center;
        font-weight: 400;
      `}
    >
      بشّار الحرفوش
    </h1>
    <nav>
      <ul
        css={css`
          width: 50%;
          margin: 0px auto;
          display: flex;
          justify-content: space-around;
          list-style: none;
          color: #9f392b;
          text-decoration: underline;
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
