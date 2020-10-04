import React, { createContext, useReducer } from "react";
import streamingReducer from "../reducers/streamings.reducer";

export const ContextStreaming = createContext();

export const StreamingContext = ({ children }) => {
  const [streamingState, dispatchStreaming] = useReducer(streamingReducer, {
    modalIsOpen: false,
  });

  return (
    <ContextStreaming.Provider value={{ streamingState, dispatchStreaming }}>
      {children}
    </ContextStreaming.Provider>
  );
};
