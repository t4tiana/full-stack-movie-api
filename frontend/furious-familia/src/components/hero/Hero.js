import "./Hero.css";
import Carousel from "react-material-ui-carousel";
import { Paper } from "@mui/material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlayCircle } from "@fortawesome/free-solid-svg-icons";
import {Link} from "react-router-dom";

const Hero = ({ movies }) => {
  return (
    <div id="movie-carousel-container">
      <Carousel>
        {movies?.map((movie) => {
          return (
            <Paper elevation={16}>
              <div className="movie-card-container">
                <div
                  className="movie-card"
                  style={{ "--img": `url(${movie.backdrops[0]})` }}
                >
                  <div className="movie-detail">
                    <div className="movie-poster">
                      <img
                        src={movie.poster}
                        alt="Fast and Furious movie poster"
                      />
                    </div>
                    <div className="movie-title">
                      <h4 id="movie-title">{movie.title}</h4>
                    </div>
                    <div className="trailer-buttons-container">
                        <Link to={`/Trailer/${movie.trailerLink.substring(movie.trailerLink.length - 11)}`}>
                      <div className="play-button-icon-container">
                        <FontAwesomeIcon
                          className="play-button-icon"
                          icon={faPlayCircle}
                        />
                      </div>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </Paper>
          );
        })}
      </Carousel>
    </div>
  );
};

export default Hero;
