import React from "react";
import Comment from "./Comment";

export default function CommentFeed({ feed }) {
  return feed.map(({ _id, ...restProps }) => (
    <Comment key={_id} {...restProps} />
  ));
}
