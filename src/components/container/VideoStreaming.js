import React, { useState, useContext } from "react";
import { OTPublisher, OTSession, preloadScript } from "opentok-react";
import { ConnectionStatus } from "../components/ConnectionStatus/ConnectionStatus";
import { Publisher } from "../components/Publisher/Publisher";
import { TimeElapsed } from "../components/TimeElapsed/TimeElapsed";
import { ContextStreaming } from "../../context/store/StreamingContext";
import { Container } from "./styles";
const VideoStreaming = () => {
  const [error, setError] = useState(null);
  const [connected, setConnected] = useState(true);
  const {
    dispatchStreaming,
    streamingState: {
      streamingData: { sessionId, apiKey, token },
    },
  } = useContext(ContextStreaming);
  const onError = (err) => {
    setError(`Failed to connected: ${err.message}`);
  };
  return (
    <Container>
      <OTSession
        apiKey={"46893344"}
        sessionId={
          "2_MX40Njg5MzM0NH5-MTU5OTIyNTkzNzA0Nn5pd1ZGaFRFUmltaWh6MDJEa0xrUitHcGd-fg"
        }
        token={
          "T1==cGFydG5lcl9pZD00Njg5MzM0NCZzaWc9ZDVhMjU5NGIwMWQyYTY5MzU2ZTI2NDg0ZDBhNjIxNzJhYzAzMDg2YjpzZXNzaW9uX2lkPTJfTVg0ME5qZzVNek0wTkg1LU1UVTVPVEl5TlRrek56QTBObjVwZDFaR2FGUkZVbWx0YVdoNk1ESkVhMHhyVWl0SGNHZC1mZyZjcmVhdGVfdGltZT0xNTk5MjI1OTM3Jm5vbmNlPTAuNjg0MDk2MTI3MzI2MzA4MiZyb2xlPXB1Ymxpc2hlciZleHBpcmVfdGltZT0xNTk5MzEyMzM3JmluaXRpYWxfbGF5b3V0X2NsYXNzX2xpc3Q9"
        }
        // eventHandlers
        onError={onError}
      >
        {/* {error ? <div>{error}</div> : null} */}
        {/* <ConnectionStatus connected={connected} /> */}
        <Publisher />
      </OTSession>
      <TimeElapsed />
    </Container>
  );
};

export default preloadScript(VideoStreaming);
