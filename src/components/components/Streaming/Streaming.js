import React from "react";
import { Link } from "@reach/router";
import { Container, ImgWrapper, Img } from "./styles";
const DEFAULT_IMAGE =
  "https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60";
export const Streaming = ({ id, src = DEFAULT_IMAGE }) => {
  return (
    <Container>
      <Link to={`/video-streaming/777`}>
        <ImgWrapper>{/* <Img src={src} /> */}</ImgWrapper>
      </Link>
    </Container>
  );
};
