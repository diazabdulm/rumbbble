import React from "react";
import axios from "axios";
import moment from "moment";
import { useParams, useHistory } from "react-router-dom";
import { useSelector } from "react-redux";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import ListGroup from "react-bootstrap/ListGroup";
import Media from "react-bootstrap/Media";
import Button from "react-bootstrap/Button";
import {
  CalendarFill,
  HeartFill,
  GearFill,
  TrashFill,
  Link,
} from "react-bootstrap-icons";

import CommentFeed from "../components/CommentFeed";
import CommentForm from "../components/CommentForm";

import useNumLikes from "../hooks/useNumLikes";
import useProject from "../hooks/useProject";

import { selectUser } from "../reducers/authSlice";

export default function ProjectPage() {
  const { projectId } = useParams();
  const history = useHistory();
  const user = useSelector(selectUser);
  const projectData = useProject(projectId);
  const numLikes = useNumLikes(projectId);

  const { author, title, description, createdAt, repoURL } = projectData;

  const handleDelete = async () => {
    try {
      const confirm = window.confirm(
        "Are you sure you want to delete this project?"
      );
      if (!confirm) return;
      await axios.delete(`/posts/${projectId}`);
      history.push("/");
    } catch (error) {
      throw Error(error);
    }
  };

  return (
    <Container>
      <Row>
        <Col xs={12} className="pt-5">
          <Media>
            <Image
              roundedCircle
              width={64}
              height={64}
              className="mr-3"
              src={author?.picture}
              alt="author profile"
            />
            <Media.Body>
              <h5>{title}</h5>
              <p>by {author?.name}</p>
            </Media.Body>
          </Media>
          <Image
            fluid
            rounded
            className="py-3 mx-auto"
            src={`${window.location.origin}/${projectData?.image}`}
          />
        </Col>
        <Col md={8}>
          {description}
          <hr />
          <CommentFeed projectId={projectId} />
          <CommentForm projectId={projectId} />
        </Col>
        <Col md={4} className="mb-4">
          <Button block variant="light" href={repoURL} className="mb-4">
            <Link className="mr-1" />
            View Repository
          </Button>
          <ListGroup className="mb-4" variant="flush">
            <ListGroup.Item>
              <HeartFill className="mr-3" />
              {numLikes} like{numLikes !== 1 ? "s" : ""}
            </ListGroup.Item>
            <ListGroup.Item>
              <CalendarFill className="mr-3" />
              {moment(createdAt).format("MMM D, YYYY")}
            </ListGroup.Item>
          </ListGroup>
          {user?._id === author?._id && (
            <ListGroup variant="flush">
              <ListGroup.Item action href={`/projects/${projectId}/edit`}>
                <GearFill className="mr-3" />
                Edit
              </ListGroup.Item>
              <ListGroup.Item action onClick={handleDelete}>
                <TrashFill className="mr-3" />
                Delete
              </ListGroup.Item>
            </ListGroup>
          )}
        </Col>
      </Row>
    </Container>
  );
}
