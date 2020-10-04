import React, { useContext, Suspense } from "react";
import { Context } from "./context/store/AuthGlobal";
import { StreamingContext } from "./context/store/StreamingContext";
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
    <StreamingContext>
      <Suspense fallback={<div />}>
        <GlobalStyle />
        {/* <VideoStreaming /> */}
        <NavBar />
        <Router>
          {!stateUser.isAuthenticated && <Login path="/login" />}
          {!stateUser.isAuthenticated && (
            <Redirect noThrow from="/" to="/login" />
          )}
          {stateUser.isAuthenticated && (
            <Redirect noThrow from="/login" to="/" />
          )}
          <Dashboard path="/" />
        </Router>
      </Suspense>
    </StreamingContext>
  );
};
