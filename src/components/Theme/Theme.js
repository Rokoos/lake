import React from "react";
import image from "../../images/1.jpg";
import styled from "styled-components";

export default function Theme({ children }) {
  return <Header id="hero">{children}</Header>;
}

const Header = styled.header`
  min-height: calc(100vh - 66px);
  background: url(${image}) center/cover no-repeat;
  display: flex;
  align-items: center;
  justify-content: center;
`;
