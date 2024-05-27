// MovieShow.js
import { useDispatch, useSelector } from "react-redux";
import { addFavorite, removeFavorite } from "../redux/moviesSlice";

const MovieShow = ({ movie }) => {
  const dispatch = useDispatch();
  const favorites = useSelector((state) => state.movies.favorites);
  const isFavorite = favorites.some((fav) => fav.id === movie.id);

  const handleFavoriteClick = () => {
    if (isFavorite) {
      dispatch(removeFavorite(movie.id));
    } else {
      dispatch(addFavorite(movie));
    }
  };

  return (
    <div className="border rounded-lg shadow-md p-4 m-2 flex flex-col bg-white">
      <div className="flex-grow">
        <a
          href={movie.imdb_url}
          target="_blank"
          rel="noopener noreferrer"
          className="text-xl font-bold text-gray-800 no-underline"
        >
          <img
            src={movie.image}
            alt={"Check? api have not right image url"}
            className="w-11/12 h-48 object-cover rounded-lg mt-4"
          />

          <h2 className="mt-4 border-t-2 border-gray-400 pt-2 text-2xl font-bold text-orange-600">
            {movie.movie}
          </h2>
          <p className="mt-2 text-lg text-gray-600">Rating : {movie.rating}</p>
        </a>
      </div>
      <button
        onClick={handleFavoriteClick}
        className={`mt-4 px-4 py-2 rounded-full font-semibold text-white ${
          isFavorite
            ? "bg-red-500 hover:bg-red-700"
            : "bg-green-500 hover:bg-green-700"
        }`}
      >
        {isFavorite ? "Unfavorite" : "Favorite"}
      </button>
    </div>
  );
};

export default MovieShow;
