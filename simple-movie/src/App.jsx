import "swiper/css";
import Main from "@/components/layouts/Main";
import { Routes, Route } from "react-router-dom";
import Banner from "@/components/banner/Banner";
import { lazy, Suspense } from "react";

const HomePage = lazy(() => import("@/pages/HomePage"));
// const MoviePage = lazy(() => import("@/pages/MoviePage"));
const MoviePageV2 = lazy(() => import("@/pages/MoviePageV2"));
const MovieDetailPage = lazy(() => import("@/pages/MovieDetailPage"));

const App = () => {
  return (
  <Suspense fallback={<div>Loading...</div>}>
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
        <Route path="/movies" element={<MoviePageV2 />}></Route>
        <Route path="/movies/:movieId" element={<MovieDetailPage />}></Route>
      </Route>
    </Routes>
    </Suspense>
  );
};

export default App;
