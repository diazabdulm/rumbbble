import React, { useState, useEffect, Fragment } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";
import styled from "styled-components";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import bsCustomFileInput from "bs-custom-file-input";

import Logo from "../components/Logo";

const TopNavigationContainer = styled(Navbar)`
  background: #0d0c22;
`;

export default function UploadPage() {
  const history = useHistory();
  const [postImage, setPostImage] = useState();
  const [postData, setPostData] = useState({
    title: "",
    description: "",
    repoURL: "",
  });

  useEffect(() => {
    document.title = "What are you working on? | Rumbbble";
    bsCustomFileInput.init();
  }, []);

  const handleChange = ({ target: { name, value, files } }) =>
    files
      ? setPostImage(files[0])
      : setPostData({ ...postData, [name]: value });

  const handleSubmit = async (event) => {
    try {
      event.preventDefault();
      const data = new FormData();
      for (const entry in postData) {
        data.append(entry, postData[entry]);
      }
      data.append("image", postImage);
      await axios.post("/posts", data);
      history.push("/");
    } catch (error) {
      throw Error(error);
    }
  };

  const renderTopNav = (
    <TopNavigationContainer variant="dark">
      <Container fluid>
        <Navbar.Brand href="/">
          <Logo color="#fff" />
        </Navbar.Brand>
        <Navbar.Text className="font-weight-bold text-white mx-auto">
          Publish your Project
        </Navbar.Text>
        <Navbar.Text>Help</Navbar.Text>
      </Container>
    </TopNavigationContainer>
  );

  const renderBottomNav = (
    <Navbar fixed="bottom" className="border-top">
      <Container fluid>
        <Button
          variant="outline-secondary mr-auto"
          href="/"
          className="d-none d-lg-block"
        >
          Cancel
        </Button>
        <Button variant="primary" href="/" className="ml-auto">
          Publish to Rumbbble
        </Button>
      </Container>
    </Navbar>
  );

  return (
    <Fragment>
      {renderTopNav}
      <Container>
        <Row>
          <Col md={8} className="mx-auto">
            <Form onSubmit={handleSubmit} id="project-submission-form">
              <Form.Group controlId="image">
                <Form.Label>Project Image</Form.Label>
                <Form.File
                  custom
                  required
                  label="Project Image"
                  name="image"
                  accept="image/*"
                  onChange={handleChange}
                />
              </Form.Group>
              <Form.Group controlId="title">
                <Form.Label>Title</Form.Label>
                <Form.Control
                  required
                  name="title"
                  autoComplete="off"
                  placeholder="Add a title"
                  onChange={handleChange}
                />
              </Form.Group>
              <Form.Group controlId="description">
                <Form.Label>Description</Form.Label>
                <Form.Control
                  required
                  as="textarea"
                  name="description"
                  onChange={handleChange}
                />
              </Form.Group>
              <Form.Group controlId="repoURL">
                <Form.Label>Repository Link</Form.Label>
                <Form.Control
                  required
                  type="text"
                  name="repoURL"
                  autoComplete="off"
                  onChange={handleChange}
                ></Form.Control>
              </Form.Group>
              <Form.Group controlId="demoURL">
                <Form.Label>Demo Link</Form.Label>
                <Form.Control
                  required
                  type="text"
                  name="demoURL"
                  autoComplete="off"
                  onChange={handleChange}
                ></Form.Control>
              </Form.Group>
              <Button type="submit">Submit</Button>
            </Form>
          </Col>
        </Row>
      </Container>
      {renderBottomNav}
    </Fragment>
  );
}
