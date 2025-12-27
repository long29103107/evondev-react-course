import MovieCard from "./MovieCard";
import useSWR from "swr";
import { fetcher } from "@/config";
import { Swiper, SwiperSlide } from "swiper/react";

const MovieList = ({ type = "now_playing" }) => {
  const { data } = useSWR(
    `https://api.themoviedb.org/3/movie/${type}?api_key=405def94fe2b3f0e43afd7cc55071ef8`,
    fetcher
  );

  const movies = data?.results || [];

  return (
    <div className="movie-list">
      <Swiper grabCursor spaceBetween={40} slidesPerView="auto">
        {movies.map((item) => (
          <SwiperSlide key={item.id}>
            <MovieCard item={item} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default MovieList;
