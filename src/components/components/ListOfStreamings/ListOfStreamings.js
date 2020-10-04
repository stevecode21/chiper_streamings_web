import React from "react";
import { Streaming } from "../Streaming/Streaming";
import { Container } from "./styles";
export const ListOfStreamings = () => {
  return (
    <Container>
      {/* {["1", "2", "3", "4", "5", "1", "2", "3", "4", "5"].map((streaming) => ( */}
      <Streaming />
      {/* ))} */}
    </Container>
  );
};
