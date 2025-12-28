import React from "react";
import { useParams } from "react-router-dom";
import useSWR from "swr";
import { fetcher, apiKey } from "@/config";

const MovieDetail = () => {
  const { movieId } = useParams();
  const { data: movie } = useSWR(
    `https://api.themoviedb.org/3/movie/${movieId}?api_key=${apiKey}`,
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
            backgroundImage: `url(https://image.tmdb.org/t/p/original${movie?.backdrop_path})`,
          }}
        ></div>
      </div>
      <div className="w-full h-[400px] max-w-[800px] mx-auto -mt-[200px] z-10 relative pb-10">
        <img
          src={`https://image.tmdb.org/t/p/original${movie?.poster_path}`}
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
    </div>
  );
};

const MovieCredits = () => {
  const { movieId } = useParams();
  const { data } = useSWR(
    `https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=${apiKey}`,
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
              src={`https://image.tmdb.org/t/p/original${actor.profile_path}`}
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
    `https://api.themoviedb.org/3/movie/${movieId}/videos?api_key=${apiKey}`,
    fetcher
  );
  if (!data) return null;
  const { results } = data;
  if (!results || results.length <= 0) return null;

  return <></>;
};

export default MovieDetail;
