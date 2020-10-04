import React from "react";
import { Button, Container, Close } from "./styles";
export const ButtonStartStreaming = ({ handleCloseModal }) => {
  return (
    <Container>
      <Button>Iniciar</Button>
      <Close onClick={handleCloseModal}>Cancelar</Close>
    </Container>
  );
};
