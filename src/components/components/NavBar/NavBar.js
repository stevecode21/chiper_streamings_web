import React, { useEffect, useContext, useState } from "react";
import {
  Nav,
  Link,
  Img,
  ContainerLogo,
  ContainerNavPages,
  UnorderedList,
} from "./styles";
import { Logo } from "../Logo/Logo";
import { Context } from "../../../context/store/AuthGlobal";
const LOGO = "../../../assets/img/test.jpg";

export const NavBar = (props) => {
  const { stateUser } = useContext(Context);

  if (!stateUser.isAuthenticated) {
    return (
      <Nav>
        <ContainerLogo>
          <Logo />
        </ContainerLogo>
        <ContainerNavPages>
          <UnorderedList>
            <Link to="/">Crear cuenta</Link>
            <Link to="/">Ayuda</Link>
          </UnorderedList>
        </ContainerNavPages>
      </Nav>
    );
  } else {
    return (
      <Nav>
        <ContainerLogo>
          <Logo />
        </ContainerLogo>
        <ContainerNavPages>
          <UnorderedList>
            <Link to="/">Mi espacio</Link>
            <Link to="/">Archivados</Link>
            <Link to="/">Ayuda</Link>
          </UnorderedList>
        </ContainerNavPages>
      </Nav>
    );
  }
};
