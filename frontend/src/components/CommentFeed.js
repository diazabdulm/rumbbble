import React, { useState, useEffect } from "react";
import axios from "axios";

import Comment from "./Comment";

export default function CommentFeed({ projectId }) {
  const [feed, setFeed] = useState([]);

  useEffect(() => {
    const fetchFeed = async () => {
      const response = await axios.get(`/comments/${projectId}`);
      setFeed(response.data);
    };
    fetchFeed();
  }, [projectId]);

  return feed.map(({ _id, ...restProps }) => (
    <Comment key={_id} {...restProps} />
  ));
}
