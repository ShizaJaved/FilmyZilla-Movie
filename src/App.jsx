
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import './App.css'
import Header from "./components/Header"
import Home from "./components/pages/Home";
import MovieList from "./components/MovieList";
import Movie from "./components/pages/Movie"
import { RiHaze2Fill } from "react-icons/ri";
import SearchQuery from "./components/pages/SearchQuery";

function App() {
  return (
    <>
      <div className="app">
        <Router>
          <Header />
         <Routes>
            <Route index element={<Home />} />

            <Route path="/movie/:id" element={<Movie />} />

            <Route path="/movies/:type" element={<MovieList />} />

            <Route path="/search/:query" element={<SearchQuery />} />

            <Route path="/*" element={<h2>Page Not found!</h2>} />
</Routes>

          
        </Router>
      </div>
    </>
  );
}

export default App
