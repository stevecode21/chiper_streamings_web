import styled from "styled-components";
import { OTPublisher as Publisher } from "opentok-react";

export const Container = styled.div`
  background-color: red;
`;

export const OTPublisher = styled(Publisher)`
  /* width: 100%; */
  height: 700px;
  width: 400px;
`;
