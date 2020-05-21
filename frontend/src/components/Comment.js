import React from "react";
import { format } from "timeago.js";
import Media from "react-bootstrap/Media";
import Image from "react-bootstrap/Image";

export default function Comment({
  author: { name, picture },
  content,
  createdAt,
}) {
  return (
    <Media>
      <Image
        roundedCircle
        src={picture}
        width="64"
        height="64"
        className="mr-3"
      />
      <Media.Body>
        <h5>{name}</h5>
        <p>{content}</p>
        <p className="text-muted">{format(createdAt)}</p>
      </Media.Body>
    </Media>
  );
}
