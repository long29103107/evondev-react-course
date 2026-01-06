import MovieCard from "@/components/movie/MovieCard";
import useSWR from "swr";
import { fetcher, tmdbAPI } from "@/apiConfig/config";
import { Swiper, SwiperSlide } from "swiper/react";

const MovieList = ({ type = "now_playing" }) => {
  const { data } = useSWR(tmdbAPI.getMovieList(type), fetcher);

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