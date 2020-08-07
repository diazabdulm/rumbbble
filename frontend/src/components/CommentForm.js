import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

export default function CommentForm({ submitComment }) {
  const [formData, setFormData] = useState("");

  const handleChange = ({ target: { value } }) => setFormData(value);

  const handleSubmit = (event) => {
    event.preventDefault();

    submitComment(formData);
    setFormData("");
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group controlId="comment">
        <Form.Label>Enter comment</Form.Label>
        <Form.Control
          as="textarea"
          name="comment"
          onChange={handleChange}
          value={formData}
        ></Form.Control>
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit comment
      </Button>
    </Form>
  );
}
