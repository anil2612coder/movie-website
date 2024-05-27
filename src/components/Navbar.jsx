// Navbar.js
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="bg-gradient-to-r from-yellow-300 via-red-400 to-pink-500 md:px-24 p-4 shadow-lg fixed w-full top-0 z-10">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-white text-3xl font-bold tracking-wide">
          MyMovies
        </Link>
        <div className="flex space-x-8">
          <Link
            to="/"
            className="text-white text-lg font-medium hover:text-yellow-300 hover:text-xl transition duration-300"
          >
            Movies
          </Link>
          <Link
            to="/favorites"
            className="text-white text-lg font-medium hover:text-yellow-300 hover:text-xl transition duration-300"
          >
            Favorites
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
