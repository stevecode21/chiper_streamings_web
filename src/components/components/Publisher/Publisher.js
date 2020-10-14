import React, { useState } from "react";
// import { OTPublisher } from "opentok-react";
import { Container, OTPublisher } from "./styles";

export const Publisher = () => {
  const [error, setError] = useState(null);
  const [audio, setAudio] = useState(true);
  const [video, setVideo] = useState(true);

  const onError = (err) => {
    setError(`Failed to publish: ${err.message}`);
  };

  return (
    <Container>
      {error ? <div>{error}</div> : null}
      <OTPublisher
        properties={{
          publishAudio: audio,
          publishVideo: video,
        }}
        onError={onError}
      />
    </Container>
  );
};
