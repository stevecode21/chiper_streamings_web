import React, { useContext } from "react";
import { ListOfStreamings } from "../components/components/ListOfStreamings/ListOfStreamings";
import { CreateStreamingButton } from "../components/components/CreateStreamingButton/CreateStreamingButton";
import { ContextStreaming } from "../context/store/StreamingContext";
import { CreateStreamingModal } from "../components/components/CreateStreamingModal/CreateStreamingModal";
import { openOrCloseModal } from "../context/actions/streaming.actions";

export const Dashboard = () => {
  const {
    dispatchStreaming,
    streamingState: { modalIsOpen },
  } = useContext(ContextStreaming);

  const handleOpenModal = () => {
    openOrCloseModal(!modalIsOpen, dispatchStreaming);
  };

  const handleCloseModal = () => {
    openOrCloseModal(!modalIsOpen, dispatchStreaming);
  };
  return (
    <>
      <ListOfStreamings />
      <CreateStreamingButton handleOpenModal={handleOpenModal} />
      <CreateStreamingModal handleCloseModal={handleCloseModal} />
    </>
  );
};
