import React from "react";
import PropTypes from "prop-types";
import moment from "moment";
import { Link } from "gatsby";
import "moment/locale/ar";
import "./postlink.scss";

// const PostLink = ({
// post: { documentId, excerpt, path, createdTime, lang, title },
// }) => {
const PostLink = ({
  post: { documentId, excerpt, path, createdTime, lang, title },
}) => {
  const timestamp = parseInt(createdTime, 10);

  let date = moment(timestamp)
    .locale("en")
    .format("DD MMMM, YYYY");

  if (lang === "ar") {
    date = moment(timestamp)
      .locale("ar")
      .format("DD MMMM YYYY");
  }

  return (
    <div className="post_link" key={documentId} lang={lang}>
      <Link to={path}>
        <h5 className="title">
          {title}
          {` `}
          <span className="date">{`- ${date}`}</span>
        </h5>
        <p>{excerpt}</p>
      </Link>
    </div>
  );
};

PostLink.propTypes = {
  post: PropTypes.shape({
    documentId: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    excerpt: PropTypes.string.isRequired,
    path: PropTypes.string.isRequired,
    createdTime: PropTypes.string.isRequired,
    lang: PropTypes.string.isRequired,
  }).isRequired,
};

export default PostLink;
