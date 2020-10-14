import React, { useContext } from "react";
import { navigate } from "@reach/router";
import { ListOfStreamings } from "../components/components/ListOfStreamings/ListOfStreamings";
import { CreateStreamingButton } from "../components/components/CreateStreamingButton/CreateStreamingButton";
import { ContextStreaming } from "../context/store/StreamingContext";
import { CreateStreamingModal } from "../components/components/CreateStreamingModal/CreateStreamingModal";
import {
  openOrCloseModal,
  createRoom,
} from "../context/actions/streaming.actions";

export const Dashboard = () => {
  const {
    dispatchStreaming,
    streamingState: {
      modalIsOpen,
      streamingData: { sessionId },
    },
  } = useContext(ContextStreaming);

  const handleOpenModal = () => {
    openOrCloseModal(!modalIsOpen, dispatchStreaming);
  };

  const handleCloseModal = () => {
    openOrCloseModal(!modalIsOpen, dispatchStreaming);
  };
  const handleCreateRoom = async (name, dispatchStreaming) => {
    try {
      await createRoom(name, dispatchStreaming);
      await navigate(`/room/${sessionId}`);
    } catch (e) {
      console.log(e);
    }
  };
  return (
    <>
      <ListOfStreamings />
      <CreateStreamingButton handleOpenModal={handleOpenModal} />
      <CreateStreamingModal
        handleCloseModal={handleCloseModal}
        handleCreateRoom={handleCreateRoom}
      />
    </>
  );
};
