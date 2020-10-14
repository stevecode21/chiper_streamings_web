import React from "react";
import { Button, Container, Close } from "./styles";
export const ButtonStartStreaming = ({
  handleCloseModal,
  handleCreateRoom,
}) => {
  return (
    <Container>
      <Button onClick={handleCreateRoom}>Iniciar</Button>
      <Close onClick={handleCloseModal}>Cancelar</Close>
    </Container>
  );
};
