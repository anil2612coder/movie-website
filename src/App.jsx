// App.js
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import MoviesList from "./pages/MoviesList";
import Navbar from "./components/Navbar";
import FavoriteList from "./pages/FavoriteList";

function App() {
  return (
    <Router>
      <div className="bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 min-h-screen">
        <Navbar />
        <div className="container mx-auto p-4">
          <Routes>
            <Route path="/" element={<MoviesList />} />
            <Route path="/favorites" element={<FavoriteList />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
