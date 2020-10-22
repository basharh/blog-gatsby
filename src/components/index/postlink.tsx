import React from "react";
import moment from "moment";
import { Link } from "gatsby";
import "moment/locale/ar";
import "./postlink.scss";

// TODO: the typescript type of the props should ideally come from the plugin
// but they're not supported yet.
const PostLink: React.FC<{
  node: {
    id: string;
    frontmatter: { direction: string; date: string; title: string };
    fields: { slug: string };
    excerpt: string;
  };
}> = ({ node: { id, frontmatter, fields, excerpt } }) => {
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

export default PostLink;
