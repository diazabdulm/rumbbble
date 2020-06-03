import React, { useState, useEffect, Fragment } from "react";
import axios from "axios";

import CommentFeed from "./CommentFeed";
import CommentForm from "./CommentForm";

export default function Comments({ projectId }) {
  const [feed, setFeed] = useState([]);

  useEffect(() => {
    fetchFeed();
  }, []);

  const fetchFeed = async () => {
    try {
      const response = await axios.get(`/comments/${projectId}`);
      setFeed(response.data);
    } catch (error) {
      throw Error(error);
    }
  };

  const submitComment = async (data) => {
    try {
      await axios.post(`/comments/${projectId}`, {
        data,
      });
      fetchFeed();
    } catch (error) {
      throw Error(error);
    }
  };

  return (
    feed && (
      <Fragment>
        <CommentFeed feed={feed} hello="hi" />
        <CommentForm submitComment={submitComment} />
      </Fragment>
    )
  );
}
