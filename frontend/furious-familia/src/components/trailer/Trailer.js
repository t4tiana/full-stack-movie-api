import { useParams } from "react-router-dom";
import ReactPlayer from "react-player";
import './Trailer.css';

import React from "react";

const Trailer = () => {
    let params = userParams();
    const trailerUrl = params.ytUrl;

    return (
        /*Plays the trailer automatically after the page loads */
        <div className='react-player-container'>
            {
            (trailerUrl!=null)
            ? <ReactPlayer controls='true' playing={true} url={'`${trailerUrl}`'}
            width='100%' height='100%'/> 
            : null
            }
        </div>
    )
}