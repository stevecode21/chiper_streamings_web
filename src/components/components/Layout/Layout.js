import React from "react";
import { NavBar } from "../NavBar/NavBar";

export const Layout = (props) => {
  return (
    <>
      <NavBar />
      {props.children}
    </>
  );
};
