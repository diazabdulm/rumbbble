import React from "react";
import styled from "styled-components";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import Image from "react-bootstrap/Image";
import { ChatFill, HeartFill } from "react-bootstrap-icons";

const BORDER_RADIUS = 8;

const CardOverlay = styled(Card.ImgOverlay)`
  opacity: 0;
  transition: opacity 0.3s ease;
  border-radius: ${BORDER_RADIUS}px;
  background: linear-gradient(
    180deg,
    transparent 62%,
    rgba(0, 0, 0, 0.00345888) 63.94%,
    rgba(0, 0, 0, 0.014204) 65.89%,
    rgba(0, 0, 0, 0.0326639) 67.83%,
    rgba(0, 0, 0, 0.0589645) 69.78%,
    rgba(0, 0, 0, 0.0927099) 71.72%,
    rgba(0, 0, 0, 0.132754) 73.67%,
    rgba(0, 0, 0, 0.177076) 75.61%,
    rgba(0, 0, 0, 0.222924) 77.56%,
    rgba(0, 0, 0, 0.267246) 79.5%,
    rgba(0, 0, 0, 0.30729) 81.44%,
    rgba(0, 0, 0, 0.341035) 83.39%,
    rgba(0, 0, 0, 0.367336) 85.33%,
    rgba(0, 0, 0, 0.385796) 87.28%,
    rgba(0, 0, 0, 0.396541) 89.22%,
    rgba(0, 0, 0, 0.4) 91.17%
  );
`;

const CardImageContainer = styled.div`
  border-radius: ${BORDER_RADIUS}px;

  &:hover ${CardOverlay} {
    opacity: 1;
  }
`;

const CardImage = styled(Card.Img)`
  border-radius: ${BORDER_RADIUS}px;
  height: 18vw;
  min-height: 270px;
  object-fit: cover;
`;

const ProfileImage = styled(Image)`
  width: 20px;
  height: 20px;
`;

const ButtonAction = styled(Button)`
  color: #9e9ea7;
`;

export default function PostPreview({
  title,
  likes,
  author: { name, picture },
  image,
}) {
  return (
    <Card className="border-0">
      <CardImageContainer className="position-relative">
        <CardImage className="img-fluid" variant="top" src={image} />
        <CardOverlay className="d-flex align-items-end">
          <Card.Title className="text-truncate text-white">{title}</Card.Title>
        </CardOverlay>
      </CardImageContainer>
      <Card.Footer className="d-flex align-items-center px-0 bg-transparent border-top-0">
        <ProfileImage roundedCircle src={picture} />
        <h6 className="ml-2 mb-0">{name}</h6>
        <div id="divider" className="flex-grow-1"></div>
        <ButtonGroup size="sm" className="bg-transparent">
          <ButtonAction variant="link" className="d-flex align-items-center">
            <ChatFill className="mr-1" /> 842
          </ButtonAction>
          <ButtonAction
            variant="link"
            className="d-flex align-items-center pr-0"
          >
            <HeartFill className="mr-1" /> {likes}
          </ButtonAction>
        </ButtonGroup>
      </Card.Footer>
    </Card>
  );
}
