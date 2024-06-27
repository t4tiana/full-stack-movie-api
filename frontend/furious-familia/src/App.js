import './App.css';
import api from './api/axiosConfig';
import {useState, useEffect} from 'react';
import Layout from './components/Layout';
import {Routes, Route} from 'react-router-dom';
import Home from './components/home/Home';

function App() {

  /*Re-render app when state of movies changes */
  const [movies, setMovies] = useState([]);

  /* getMovies is a function that sends a get request to db to fetch all movies
  the response data is inserted as a parameter to setMovies, which updates the
  initially empty array to contain all returned movie data */
  const getMovies = async () =>{

    try {
      const response = await api.get("/api/v1/movies");
            
      setMovies(response.data);
    } 
    catch (err) 
    {
      console.log(err);
    }
  }

  /*Run getMovies function as soon as App loads */
  useEffect(() => {
    getMovies();
  }, [])

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Layout/>}>
          <Route path="/" element={<Home movies = {movies} />}></Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
