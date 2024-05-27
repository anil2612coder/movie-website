// MoviesList.js
import { useEffect, useState } from "react";
import axios from "axios";
import MovieShow from "../components/MovieShow";

const MoviesList = () => {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(true); // State to track loading

  const fetchData = async () => {
    try {
      const response = await axios.get(import.meta.env.VITE_APP_movie_api);
      const sortedMovies = response.data.sort((a, b) => b.rating - a.rating);
      setMovies(sortedMovies);
      setIsLoading(false); // Update loading state when data is fetched
    } catch (error) {
      console.log("Fetch error:", error);
      setIsLoading(false); // Update loading state even on error
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="md:p-4 p-2 mt-16 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 md:gap-4">
      {isLoading ? ( // Display loading message when isLoading is true
        <p className="mt-12 mx-auto text-gray-200  text-2xl font-bold font-serif">
          Loading...
        </p>
      ) : (
        movies.map((movie) => <MovieShow key={movie.id} movie={movie} />)
      )}
    </div>
  );
};

export default MoviesList;
