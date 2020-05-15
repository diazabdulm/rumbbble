import React, { useEffect, useState, Fragment } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Image from "react-bootstrap/Image";

export default function ProjectPage() {
  const { projectId } = useParams();
  const [projectData, setProjectData] = useState({});
  const [commentData, setCommentData] = useState("");

  useEffect(() => {
    const fetchProjectData = async () => {
      const response = await axios.get(`/posts/${projectId}`);
      setProjectData(response.data);
    };
    fetchProjectData();
  }, [projectId]);

  const handleChange = ({ target: { value } }) => setCommentData(value);
  const handleSubmit = async (event) => {
    event.preventDefault();

    const response = await axios.get();
  };

  return (
    <div>
      <Image src={`${window.location.origin}/${projectData?.image}`} />
      <form>
        <textarea
          name="comment"
          id="comment"
          onChange={handleChange}
        ></textarea>
      </form>
    </div>
  );
}
