import React from "react";
import useSWR from "swr";
import { fetcher } from "@/config";
import { Swiper, SwiperSlide } from "swiper/react";

const Banner = () => {
  const { data } = useSWR(
    `https://api.themoviedb.org/3/movie/upcoming?api_key=405def94fe2b3f0e43afd7cc55071ef8`,
    fetcher
  );

  const movies = data?.results || [];

  return (
    <>
      <section
        id="banner"
        className="banner h-[500px] rounded-lg bg-slate-800 page-container mb-10"
      >
        <Swiper grabCursor={true} slidesPerView="auto">
          {movies.length > 0 &&
            movies.map((movie) => (
              <SwiperSlide key={movie.id}>
                <BannerItem movie={movie} />
              </SwiperSlide>
            ))}
        </Swiper>
      </section>
    </>
  );
};

const BannerItem = ({ movie }) => {
  return (
    <div className="w-full h-full rounded-lg relative">
      <div className="overlay absolute inset-0 bg-gradient-to-t from-[rgba(0,0,0,0.5)] to-[rgba(0,0,0,0.5)] rounded-lg"></div>

      <img
        src={`https://image.tmdb.org/t/p/w500${movie.backdrop_path}`}
        alt="banner"
        className="w-full h-full object-cover rounded-lg object-top"
      />

      <div className="absolute left-5 bottom-5 w-full text-white">
        <h2 className="text-3xl font-bold mb-5">{movie.title}</h2>
        <div className="flex items-center gap-x-3 mb-8">
          <span className="py-2 px-4 border border-white rounded-md">
            {movie.genres > 0 &&
              movie.genres.map((genre) => genre.name).join(", ")}
          </span>
        </div>
        <button className="py-3 px-6 rounded-lg bg-primary text-white font-medium">
          Watch now
        </button>
      </div>
    </div>
  );
};

export default Banner;
