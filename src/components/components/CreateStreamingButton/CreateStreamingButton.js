import React, { useContext } from "react";
import { Button } from "./styles";
export const CreateStreamingButton = ({ handleOpenModal }) => {
  return <Button onClick={handleOpenModal}>+</Button>;
};
