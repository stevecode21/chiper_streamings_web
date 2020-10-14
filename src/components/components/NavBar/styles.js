import styled from "styled-components";
import { Link as LinkRouter } from "@reach/router";

export const Div = styled.div`
  background-color: "green";
`;
export const Nav = styled.nav`
  width: 100%;
  padding: 0.5rem 2rem 0.5rem 2rem;
  display: flex;
  /* justify-content: center; */
  align-items: center;
  background-color: #ffffff;
  height: 80px;
`;

export const Link = styled(LinkRouter)`
  text-decoration: none;
  color: #707070;
  &[aria-current] {
    color: #ff0136;
  }
`;

export const Img = styled.img`
  /* background-color: blue; */
  width: 200px;
`;

export const UnorderedList = styled.ul`
  display: flex;
  justify-content: space-between;
  /* background-color: red; */
  width: 70%;
  font-size: 16px;
`;
/**
 * Containers
 */
export const ContainerLogo = styled.div`
  /* background-color: blue; */
  width: 20%;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
`;
export const ContainerNavPages = styled.div`
  /* background-color: yellow; */
  width: 80%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;
