import "swiper/css";
import HomePage from "./pages/HomePage";
import Main from "./components/layouts/Main";
import { Routes, Route } from "react-router-dom";
import Banner from "./components/banner/Banner";
import MoviePage from "./pages/MoviePage";
import MovieDetail from "./pages/MovieDetail";

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
        <Route path="/movies/:movieId" element={<MovieDetail />}></Route>
      </Route>
    </Routes>
  );
};

export default App;
