import React, { useContext } from "react";
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
import { logoutUser } from "../../../context/actions/user.actions";
export const NavBar = () => {
  const { stateUser, dispatch } = useContext(Context);

  if (!stateUser.isAuthenticated) {
    return (
      <Nav>
        <ContainerLogo>
          <Logo />
        </ContainerLogo>
        <ContainerNavPages>
          <UnorderedList>
            <Link to="/login">Crear cuenta</Link>
            <Link to="/acerca">Acerca</Link>
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
            <Link to="/archived">Archivados</Link>
            <Link to="/help">Ayuda</Link>
            <Link to="/login" onClick={() => logoutUser(dispatch)}>
              Cerrar sesión
            </Link>
          </UnorderedList>
        </ContainerNavPages>
      </Nav>
    );
  }
};
