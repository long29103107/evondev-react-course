import MovieCard from "@/components/movie/MovieCard";
import useSWR from "swr";
import { fetcher, tmdbAPI } from "@/apiConfig/config";
import { Swiper, SwiperSlide } from "swiper/react";
import { withErrorBoundary } from "react-error-boundary";
import PropTypes from "prop-types";
import { MovieCardSkeleton } from "./MovieCard";

const MovieList = ({ type = "now_playing" }) => {
  const { data, isLoading } = useSWR(tmdbAPI.getMovieList(type), fetcher);

  const movies = data?.results || [];

  return (
    <div className="movie-list">
      {!isLoading && (
        <>
          <Swiper grabCursor spaceBetween={40} slidesPerView="auto">
            <SwiperSlide>
              <MovieCardSkeleton />
            </SwiperSlide>
          </Swiper>
          <Swiper grabCursor spaceBetween={40} slidesPerView="auto">
            <SwiperSlide>
              <MovieCardSkeleton />
            </SwiperSlide>
          </Swiper>
          <Swiper grabCursor spaceBetween={40} slidesPerView="auto">
            <SwiperSlide>
              <MovieCardSkeleton />
            </SwiperSlide>
          </Swiper>
          <Swiper grabCursor spaceBetween={40} slidesPerView="auto">
            <SwiperSlide>
              <MovieCardSkeleton />
            </SwiperSlide>
          </Swiper>
          <Swiper grabCursor spaceBetween={40} slidesPerView="auto">
            <SwiperSlide>
              <MovieCardSkeleton />
            </SwiperSlide>
          </Swiper>
        </>
      )}
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

MovieList.propTypes = {
  type: PropTypes.string.isRequired,
};

const MovieListWithErrorBoundary = withErrorBoundary(MovieList, {
  FallbackComponent: () => {
    return (
      <p className="bg-red-500 text-red-400">
        Somthing went wrong with this component
      </p>
    );
  },
});

export default MovieListWithErrorBoundary;
