import React from "react";
import { Container, Image, TextError } from "./styles";
import Baby from "../../../assets/img/NotFound.svg";
export const PageError = () => {
  return (
    <Container>
      <Image src={Baby} alt="Baby crying" />
      <TextError>
        ¡Upssss... No hemos podido encontrar lo que estás buscando!
      </TextError>
    </Container>
  );
};
