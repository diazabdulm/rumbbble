import React, { useState, useEffect, Fragment } from "react";
import axios from "axios";
import { useHistory, useParams } from "react-router-dom";
import styled from "styled-components";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Image from "react-bootstrap/Image";
import Button from "react-bootstrap/Button";

import useProject from "../hooks/useProject";

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

export default function EditPage() {
  const { projectId } = useParams();
  const history = useHistory();
  const projectData = useProject(projectId);
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    repoURL: "",
  });

  const { title, description, repoURL } = formData;

  useEffect(() => {
    if (Object.keys(projectData).length === 0) return;
    const { title, description, repoURL } = projectData;
    setFormData({ title, description, repoURL });
  }, [projectData]);

  const handleChange = ({ target: { name, value, files } }) =>
    setFormData({ ...formData, [name]: value });

  const handleSubmit = async (event) => {
    try {
      event.preventDefault();
      await axios.patch(`/posts/${projectId}`, formData);
      history.push(`/projects/${projectId}`);
    } catch (error) {
      throw Error(error);
    }
  };

  const renderTopNav = (
    <TopNavigationContainer variant="dark">
      <Container>
        <LogoContainer href="/">
          {/* <Logo src={require("../assets/logo.png")} alt="logo" /> */}
        </LogoContainer>
        <Navbar.Text className="font-weight-bold text-white mx-auto">
          Publish your Project
        </Navbar.Text>
        <Navbar.Text>Help</Navbar.Text>
      </Container>
    </TopNavigationContainer>
  );

  const renderBottomNav = (
    <Navbar sticky="bottom" className="border-top">
      <Container>
        <Button variant="outline-secondary">Cancel</Button>
      </Container>
    </Navbar>
  );

  return (
    <Fragment>
      {renderTopNav}
      <p>Project Image</p>
      <Image
        fluid
        src={`${window.location.origin}/${projectData.image}`}
        alt=""
      />
      <form onSubmit={handleSubmit} id="project-submission-form">
        <label htmlFor="title">Title</label>
        <input
          id="title"
          type="text"
          name="title"
          placeholder="Add a title"
          onChange={handleChange}
          value={title}
          required
        />
        <label htmlFor="description">Description</label>
        <textarea
          id="description"
          name="description"
          form="project-submission-form"
          onChange={handleChange}
          value={description}
          required
        ></textarea>
        <label htmlFor="repoURL">Repository URL</label>
        <input
          id="repoURL"
          type="text"
          name="repoURL"
          onChange={handleChange}
          value={repoURL}
          required
        />
        <button type="submit">Submit</button>
      </form>
      {renderBottomNav}
    </Fragment>
  );
}
