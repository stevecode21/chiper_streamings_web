import styled from "styled-components";
import { OTSession as Sessioner } from "opentok-react";

export const Container = styled.div`
  &:first-child {
    height: 100vh;
  }
`;

export const OTSession = styled(Sessioner)`
  height: 100vh;
  &:first-child {
    height: 100vh;
  }
`;
