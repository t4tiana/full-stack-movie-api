import { useParams } from "react-router-dom";
import ReactPlayer from "react-player/youtube";
import "./Trailer.css";

import React from "react";

const Trailer = () => {
  let params = useParams();
  const trailerUrl = "https://www.youtube.com/watch?v=" + params.ytUrl;

  /* Error message for user in case video doesn't load */
  const handleError = (error) => {
    console.error("Error playing media:", error);
  };
  return (
    /*Plays the trailer automatically after the page loads */
    <div className="react-player-container">
      {trailerUrl != null ? (
        <ReactPlayer
          controls={true}
          playing={true}
          muted={true}
          url={trailerUrl}
          width="100%"
          height="100%"
          onError={handleError}
        />
      ) : null}
    </div>
  );
};

export default Trailer;
