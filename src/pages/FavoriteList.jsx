// FavoriteList.js

import { useSelector } from "react-redux";
import MovieShow from "../components/MovieShow";

function FavoriteList() {
  const favorites = useSelector((state) => state.movies.favorites);

  return (
    <div className="p-4 grid mt-16 grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {favorites.length === 0 ? (
        <p className=" text-gray-300  text-2xl font-serif mt-12 mx-auto font-extrabold text-lxl">
          You have n0t added any favorite movies yet.
        </p>
      ) : (
        favorites.map((movie) => <MovieShow key={movie.id} movie={movie} />)
      )}
    </div>
  );
}

export default FavoriteList;
