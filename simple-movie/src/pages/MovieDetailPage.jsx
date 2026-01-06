import React from "react";
import { useParams } from "react-router-dom";
import useSWR from "swr";
import { fetcher, tmdbAPI } from "@/config";
import { Swiper, SwiperSlide } from "swiper/react";
import MovieCard from "@/components/movie/MovieCard";

const MovieDetailPage = () => {
  const { movieId } = useParams();
  const { data: movie } = useSWR(
    tmdbAPI.getMovieDetails(movieId),
    fetcher
  );

  if (!movie) return null;

  return (
    <div className="py-10">
      <div className="w-full h-[600px] relative relative">
        <div className="absolute inset-0 bg-black opacity-70"></div>

        <div
          className="w-full h-full bg-cover no-repeat"
          style={{
            backgroundImage: `url(${tmdbAPI.imageOriginal(movie?.backdrop_path)})`,
          }}
        ></div>
      </div>
      <div className="w-full h-[400px] max-w-[800px] mx-auto -mt-[200px] z-10 relative pb-10">
        <img
          src={tmdbAPI.imageOriginal(movie?.poster_path)}
          className="w-full h-full object-cover rounded-lg"
          alt={movie?.title}
        />
      </div>
      <h1 className="text-center text-3xl font-bold text-white mb-10">
        {movie?.title}
      </h1>
      {movie.genres.length > 0 && (
        <div className="flex item-center justify-center gap-x-5 mb-10">
          {movie?.genres.map((genre) => (
            <span
              key={genre.id}
              className="text-white bg-gray-500 px-2 py-1 rounded-md"
            >
              {genre.name}
            </span>
          ))}
        </div>
      )}
      <p className="text-center loading-relaxed max-w-[600px] mx-auto pb-10">
        {movie?.overview}
      </p>
      <MovieCredits></MovieCredits>
      <MovieVideos></MovieVideos>
      <MovieSimilar></MovieSimilar>
    </div>
  );
};

const MovieCredits = () => {
  const { movieId } = useParams();
  const { data } = useSWR(
    tmdbAPI.getMovieCredits(movieId),
    fetcher
  );

  if (!data) return null;
  const { cast } = data;
  if (!cast || cast.length <= 0) return null;

  return (
    <div className="py-10">
      <h2 className="text-3xl mb-10 text-center">Casts</h2>
      <div className="grid grid-cols-4 gap-5">
        {cast.slice(0, 4).map((actor) => (
          <div className="cast-item" key={actor.id}>
            <img
              src={tmdbAPI.imageOriginal(actor.profile_path)}
              alt={actor.name}
              className="w-full h-full object-cover rounded-lg mb-3"
            />
            <h3 className="text-lg font-medium text-white">{actor.name}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

const MovieVideos = () => {
  const { movieId } = useParams();
  const { data } = useSWR(
    tmdbAPI.getMovieVideos(movieId),
    fetcher
  );
  if (!data) return null;
  const { results } = data;
  if (!results || results.length <= 0) return null;

  return (
    <div className="py-10">
      <div className="grid grid-col gap-10">
        {results.slice(0, 2).map((video) => (
          <div key={video.id} className="">
            <h3 className="text-xl font-medium bg-secondary p-3 mb-5 inline-block">
              {video.name}
            </h3>
            <div className="w-full aspect-video">
              <iframe
                width={860}
                height={486}
                src={`https://www.youtube.com/embed/${video.key}`}
                title={video.name}
                className="w-full h-full object-cover"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const MovieSimilar = () => {
  const { movieId } = useParams();
  const { data } = useSWR(
    tmdbAPI.getMovieSimilar(movieId),
    fetcher
  );
  if (!data) return null;
  const { results } = data;
  if (!results || results.length <= 0) return null;

  return (
    <div className="py-10">
      <h2 className="text-3xl mb-10 font-medium">Similar Movies</h2>
      <div className="movie-list">
        <Swiper grabCursor spaceBetween={40} slidesPerView="auto">
          {results.map((item) => (
            <SwiperSlide key={item.id}>
              <MovieCard item={item} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default MovieDetailPage;
