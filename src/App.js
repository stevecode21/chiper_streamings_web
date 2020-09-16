import React, { useContext, Suspense } from "react";
import { Context } from "./context/store/AuthGlobal";
import { GlobalStyle } from "./styles/GlobalStyles";
import { Router, Redirect } from "@reach/router";
import VideoStreaming from "./components/container/VideoStreaming";
import { NavBar } from "./components/components/NavBar/NavBar";
/**
 * Pages
 */
import { Dashboard } from "./pages/Dashboard";
import { Login } from "./pages/Login";
export const App = () => {
  const { stateUser } = useContext(Context);
  return (
    // <Suspense fallback={<div />}>
    <>
      <GlobalStyle />
      {/* <VideoStreaming /> */}
      <NavBar />
      <Router>
        <Dashboard path="/" />
        {!stateUser.isAuthenticated && <Login path="/login" />}
        {!stateUser.isAuthenticated && (
          <Redirect noThrow from="/" to="/login" />
        )}
      </Router>
      {/* // </Suspense> */}
    </>
  );
};
