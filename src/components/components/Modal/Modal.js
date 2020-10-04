import React, { useContext } from "react";
import ReactDOM from "react-dom";
import { ModalContainer, Container, Close } from "./styles";
import { ContextStreaming } from "../../../context/store/StreamingContext";
import { openOrCloseModal } from "../../../context/actions/streaming.actions";

export const Modal = ({ children }) => {
  const {
    streamingState: { modalIsOpen },
  } = useContext(ContextStreaming);
  if (!modalIsOpen) {
    return null;
  }
  return ReactDOM.createPortal(
    <ModalContainer>
      <Container>{children}</Container>
    </ModalContainer>,
    document.getElementById("modal")
  );
};
