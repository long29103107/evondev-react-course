import "swiper/css";
import HomePage from "./pages/HomePage";
import Main from "./components/layouts/Main";
import { Routes, Route } from "react-router-dom";
import Banner from "./components/banner/Banner";
import MoviePage from "./pages/MoviePage";
import MovieDetailPage from "./pages/MovieDetailPage";

const App = () => {
  return (
    <Routes>
      <Route element={<Main />}>
        <Route
          path="/"
          element={
            <>
              <Banner />
              <HomePage />
            </>
          }
        ></Route>
        <Route path="/movies" element={<MoviePage />}></Route>
        <Route path="/movies/:movieId" element={<MovieDetailPage />}></Route>
      </Route>
    </Routes>
  );
};

export default App;
