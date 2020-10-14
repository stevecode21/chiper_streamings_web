import styled from "styled-components";
import { OTPublisher as Publisher } from "opentok-react";

export const Container = styled.div`
  height: 100vh;
  &:first-child {
    height: 100vh;
  }
`;

export const OTPublisher = styled(Publisher)`
  /* width: 100%; */
  /* height: 700px;
  width: 400px; */
  height: 100%;

  & > * {
    height: 100%;
  }
`;
