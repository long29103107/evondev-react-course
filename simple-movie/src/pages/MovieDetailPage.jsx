import React from "react";
import { useParams } from "react-router-dom";
import useSWR from "swr";
import { fetcher, tmdbAPI } from "@/apiConfig/config";
import MovieMeta from "@/components/movie/MovieMeta";

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

      <MovieMeta type="credits"></MovieMeta>
      <MovieMeta type="videos"></MovieMeta>
      <MovieMeta type="similar"></MovieMeta>
    </div>
  );
};

export default MovieDetailPage;
