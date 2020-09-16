import React, { useState } from "react";
import { OTPublisher } from "opentok-react";

export const Publisher = () => {
  const [error, setError] = useState(null);
  const [audio, setAudio] = useState(true);
  const [video, setVideo] = useState(true);

  const onError = (err) => {
    setError(`Failed to publish: ${err.message}`);
  };
  return (
    <div>
      {error ? <div>{error}</div> : null}
      <OTPublisher
        properties={{
          publishAudio: audio,
          publishVideo: video,
        }}
        onError={onError}
      />
    </div>
  );
};
