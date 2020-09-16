import React from "react";

export const ConnectionStatus = (props) => {
  console.log("holaaasdakshdaskdfha", props.connected);
  let status = props.connected ? "Conectado" : "Desconectado";
  return (
    <div>
      <strong>Status:</strong>
      {status}
    </div>
  );
};
