import React, { useState } from "react";
import axios from "axios";

export default function CommentForm({ projectId }) {
  const [formData, setFormData] = useState("");

  const handleChange = ({ target: { value } }) => setFormData(value);

  const handleSubmit = async (event) => {
    try {
      event.preventDefault();
      await axios.post(`/comments/${projectId}`, {
        formData,
      });
      setFormData("");
    } catch (error) {
      throw Error(error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <textarea
        name="comment"
        id="comment"
        onChange={handleChange}
        value={formData}
      ></textarea>
      <button type="submit">Submit comment</button>
    </form>
  );
}
