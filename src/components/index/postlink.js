import React from "react";
import PropTypes from "prop-types";
import moment from "moment";
import { Link } from "gatsby";
import "moment/locale/ar";
import "./postlink.scss";

const PostLink = ({ node: { id, frontmatter, fields, excerpt } }) => {
  const direction = frontmatter.direction === "rtl" ? "rtl" : "ltr";
  const lang = frontmatter.direction === "rtl" ? "ar" : "en";

  const timestamp = parseInt(frontmatter.date, 10);

  let date = moment(timestamp)
    .locale("en")
    .format("DD MMMM, YYYY");

  if (direction === "rtl") {
    date = moment(timestamp)
      .locale("ar")
      .format("DD MMMM YYYY");
  }

  return (
    <div key={id} lang={lang} className="post_link">
      <Link to={fields.slug}>
        <h5 className="title">
          {frontmatter.title}
          {` `}
          <span className="date">{`- ${date}`}</span>
        </h5>
        <p>{excerpt}</p>
      </Link>
    </div>
  );
};

PostLink.propTypes = {
  node: PropTypes.object.isRequired,
};

export default PostLink;
