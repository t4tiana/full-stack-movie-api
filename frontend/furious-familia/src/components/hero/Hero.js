import './Hero.css';
import Carousel from 'react-material-ui-carousel';
import { Paper } from '@mui/material';

const Hero = ({movies}) => {
    return (
        <div id='movie-carousel-container'>
            <Carousel>
                {
                   movies?.map((movie)=> {
                        return (
                            <Paper elevation={16}>
                            <div className='movie-card-container'>
                                <div className='movie-card' style={{"--img": `url(${movie.backdrops[0]})`}}>
                                    <div className='movie-detail'>
                                        <div className='movie-poster'>
                                            <img src = {movie.poster} alt="Fast and Furious movie poster"/>
                                        </div>
                                        <div className='movie-title'>
                                            <h4 id='movie-title'>{movie.title}</h4>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            </Paper>
                        )
                    })
                }
            </Carousel>
        </div>
    )
}

export default Hero