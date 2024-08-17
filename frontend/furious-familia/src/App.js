import "./App.css";
import api from "./api/axiosConfig";
import { useState, useEffect } from "react";
import Layout from "./components/Layout";
import { Routes, Route } from "react-router-dom";
import Home from "./components/home/Home";
import Header from "./components/header/Header";
import Trailer from "./components/trailer/Trailer";
import Reviews from "./components/reviews/Reviews";

function App() {
  /*Re-render app when state of movies changes */
  const [movies, setMovies] = useState([]);
  const [thisMovie, setThisMovie] = useState();
  const [reviews, setReviews] = useState([]);

  /* Sends a Get request to db to fetch all movies
  the response data is inserted as a parameter to setMovies, which updates the
  initially empty array to contain all returned movie data */
  const getMovies = async () => {
    try {
      const response = await api.get("/api/v1/movies");

      setMovies(response.data);
    } catch (err) {
      console.log(err);
    }
  };

  const getMovieData = async (movieId) => {
    try {
      const response = await api.get(`/api/v1/movies/${movieId}`);
      const thisMovie = response.data;
      setThisMovie(thisMovie);
      setReviews(thisMovie.reviewIds);
    } catch (err) {
      console.log(err);
    }
  };
  /*Run getMovies function as soon as App loads */
  useEffect(() => {
    getMovies();
  }, []);

  return (
    <div className="App">
      <Header />
      <Routes>
        <Route
          path="/"
          element={<Layout />}
        >
          <Route
            path="/"
            element={<Home movies={movies} />}
          ></Route>
          <Route
            path="/Trailer/:ytUrl"
            element={<Trailer />}
          ></Route>
        </Route>
        <Route
          path="/reviews/:movieId"
          element={
            <Reviews
              getMovieData={getMovieData}
              movie={thisMovie}
              reviews={reviews}
              setReviews={setReviews}
            />
          }
        ></Route>
      </Routes>
    </div>
  );
}

export default App;
