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
import ButtonGroup from "react-bootstrap/ButtonGroup";
import ButtonToolbar from "react-bootstrap/ButtonToolbar";
import {
  CalendarFill,
  HeartFill,
  GearFill,
  TrashFill,
  FileCode,
  Eye,
} from "react-bootstrap-icons";

import CommentFeed from "../components/CommentFeed";
import CommentForm from "../components/CommentForm";
import CommentSection from "../components/CommentSection";

import withNavigation from "../hocs/withNavigation";

import useNumLikes from "../hooks/useNumLikes";
import useProject from "../hooks/useProject";

import { selectUser } from "../reducers/authSlice";

function ProjectPage() {
  const { projectId } = useParams();
  const history = useHistory();
  const user = useSelector(selectUser);
  const projectData = useProject(projectId);
  const numLikes = useNumLikes(projectId);

  const {
    author,
    title,
    description,
    createdAt,
    repoURL,
    demoURL,
  } = projectData;

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
        <Col xs={12} md={10} className="mx-auto pt-5">
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
          <Row>
            <Col md={8}>
              {description}
              <hr />
              <CommentSection projectId={projectId} />
            </Col>
            <Col md={4} className="mb-4">
              <ButtonToolbar
                className="mb-3"
                aria-label="Toolbar with button groups"
              >
                <ButtonGroup
                  size="sm"
                  className="mr-2 flex-grow-1"
                  aria-label="First group"
                >
                  <Button variant="light" href={repoURL}>
                    <Eye className="mr-2" size={15} />
                    View Demo
                  </Button>
                </ButtonGroup>
                <ButtonGroup
                  size="sm"
                  className="flex-grow-1"
                  aria-label="Second group"
                >
                  <Button variant="light" href={demoURL}>
                    <FileCode className="mr-2" size={15} />
                    View Code
                  </Button>
                </ButtonGroup>
              </ButtonToolbar>
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
        </Col>
      </Row>
    </Container>
  );
}

export default withNavigation(ProjectPage);
