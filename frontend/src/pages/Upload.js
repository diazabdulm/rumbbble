import React, { useState, Fragment } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import styled from "styled-components";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Image from "react-bootstrap/Image";
import Button from "react-bootstrap/Button";

import { createProject } from "../reducers/projectsSlice";

const TopNavigationContainer = styled(Navbar)`
  background: #0d0c22;
`;

const LogoContainer = styled(Navbar.Brand)`
  line-height: 0;
`;

const Logo = styled(Image)`
  width: 6rem;
  height: auto;
`;

export default function UploadPage() {
  const dispatch = useDispatch();
  const history = useHistory();
  const [postImage, setPostImage] = useState();
  const [postData, setPostData] = useState({
    title: "",
    description: "",
    repoURL: "",
  });

  const { title, description, repoURL } = postData;

  const handleChange = ({ target: { name, value, files } }) =>
    files
      ? setPostImage(files[0])
      : setPostData({ ...postData, [name]: value });

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData();
    for (const entry in postData) {
      data.append(entry, postData[entry]);
    }
    data.append("image", postImage);
    dispatch(createProject(data));
    history.push("/");
  };

  const renderTopNav = (
    <TopNavigationContainer variant="dark">
      <Container>
        <LogoContainer href="/">
          <Logo src={require("../assets/logo.png")} alt="logo" />
        </LogoContainer>
        <Navbar.Text className="font-weight-bold text-white mx-auto">
          Publish your Project
        </Navbar.Text>
        <Navbar.Text>Help</Navbar.Text>
      </Container>
    </TopNavigationContainer>
  );

  const renderBottomNav = (
    <Navbar fixed="bottom" className="border-top">
      <Container>
        <Button variant="outline-secondary">Cancel</Button>
      </Container>
    </Navbar>
  );

  return (
    <Fragment>
      {renderTopNav}
      <form onSubmit={handleSubmit} id="project-submission-form">
        <label htmlFor="image">Project Image</label>
        <input
          id="image"
          type="file"
          name="image"
          accept="image/*"
          onChange={handleChange}
          required
        />
        <label htmlFor="title">Title</label>
        <input
          id="title"
          type="text"
          name="title"
          placeholder="Add a title"
          onChange={handleChange}
          required
        />
        <label htmlFor="description">Description</label>
        <textarea
          id="description"
          name="description"
          form="project-submission-form"
          onChange={handleChange}
        ></textarea>
        <label htmlFor="repoURL">Repository URL</label>
        <input
          id="repoURL"
          type="text"
          name="repoURL"
          onChange={handleChange}
          required
        />
        {/* TODO: Add a project URL(?) */}
        <button type="submit">Submit</button>
      </form>
      {renderBottomNav}
    </Fragment>
  );
}
