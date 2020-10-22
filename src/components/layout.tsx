import React from "react";
import { css } from "@emotion/core";
import Header from "./header";
import "./layout.css";

const Layout: React.FC = ({ children }) => {
  return (
    <>
      <Header />
      <div
        css={css`
          margin: 20px auto;
          max-width: 600px;
          padding: 0.8rem 1.0875rem 1.45rem;
          display: flex;
        `}
      >
        <main
          css={css`
            min-height: 860px;
            width: 100%;
          `}
        >
          {children}
        </main>
      </div>
      <footer>
        {/* <div
          css={css`
            margin: 0px auto;
            font-size: 14px;
            text-align: center;
          `}
        >
          Built by <a href="https://twitter.com/bashar">@basharh</a>
        </div> */}
      </footer>
    </>
  );
};

export default Layout;
