import React from "react";
import useSWR from "swr";
import { fetcher, tmdbAPI } from "@/apiConfig/config";
import { Swiper, SwiperSlide } from "swiper/react";
import BannerItem from "@/components/banner/BannerItem";

const Banner = () => {
  const { data } = useSWR(tmdbAPI.getMovieList('upcoming'), fetcher);
  const { data: genres } = useSWR(tmdbAPI.getGenres(), fetcher);

  const movies = data?.results || [];
  const genresList = genres?.genres || [];

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
                <BannerItem movie={movie} genresList={genresList} />
              </SwiperSlide>
            ))}
        </Swiper>
      </section>
    </>
  );
};

export default Banner;
