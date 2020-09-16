import React from "react";
import { ListOfStreamings } from "../components/components/ListOfStreamings/ListOfStreamings";
import { CreateStreamingButton } from "../components/components/CreateStreamingButton/CreateStreamingButton";
export const Dashboard = () => {
  return (
    <>
      <ListOfStreamings />
      <CreateStreamingButton />
    </>
  );
};
