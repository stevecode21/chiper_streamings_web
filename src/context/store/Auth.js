import React, { useReducer, useEffect, useState } from "react";
import authReducer from "../reducers/user.reducer";
import { setCurrentUser } from "../actions/user.actions";
import { Context } from "./AuthGlobal";

export const Auth = ({ children }) => {
  const [stateUser, dispatch] = useReducer(authReducer, {
    isAuthenticated: false,
    user: {},
  });

  useEffect(() => {
    // if (localStorage.user) {
    //   dispatch(setCurrentUser(localStorage.user));
    // }
    // setShowChild(true);
  }, []);

  return (
    <Context.Provider value={{ stateUser, dispatch }}>
      {children}
    </Context.Provider>
  );
};
