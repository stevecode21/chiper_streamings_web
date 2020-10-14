import React from "react";
import { Modal } from "../Modal/Modal";
import { Container, Form, Input } from "./styles";
import { ButtonStartStreaming } from "../ButtonStartStreaming/ButtonStartStreaming";
export const CreateStreamingModal = ({
  handleCloseModal,
  handleCreateRoom,
}) => {
  return (
    <Modal>
      <Container>
        <Form onSubmit={() => console.log("hola")}>
          <Input placeholder="Ingresa un nombre" />
          <ButtonStartStreaming
            handleCloseModal={handleCloseModal}
            handleCreateRoom={handleCreateRoom}
          />
        </Form>
      </Container>
    </Modal>
  );
};
