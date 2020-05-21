import React from "react";
import styled from "styled-components";

import { ReactComponent as LogoSVG } from "../assets/logo.svg";

const LogoContainer = styled(LogoSVG)`
  width: 6rem;
  height: auto;

  & path {
    fill: ${(props) => props.color};
  }
`;

export default function Logo({ color = "#0d0c22", ...restProps }) {
  return <LogoContainer color={color} {...restProps} />;
}
