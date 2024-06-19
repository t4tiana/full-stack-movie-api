import './App.css';
import api from './api/axiosConfig';
import {useState, useEffect} from 'react';

function App() {

  /*Re-render app when state of movies changes */
  const [movies, setMovies] = useState();

  const getMovies = async () =>{

    try {
      const response = await api.get("/api/v1/movies");

      console.log(response.data);

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

    </div>
  );
}

export default App;
