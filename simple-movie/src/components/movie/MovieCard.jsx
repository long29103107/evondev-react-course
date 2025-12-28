import React from "react";
import { useNavigate } from "react-router-dom";

const MovieCard = ({ item }) => {
  const { title, poster_path, release_date, vote_average, id } = item;
  const navigate = useNavigate();

  return (
    <>
      <div className="movie-card h-full flex flex-col rounded-lg bg-slate-800 p-3 text-white">
        <img
          src={`https://image.tmdb.org/t/p/w500${poster_path}`}
          alt=""
          className="w-full h-[250px] object-cover rounded-lg mb-5"
        />
        <div className="flex flex-col flex-1">
          <h3 className="text-white text-xl font-bold mb-3">{title}</h3>
          <div className="flex items-center justify-between text-sm opacity-50 mb-10">
            <span>{new Date(release_date).getFullYear()}</span>
            <span>{vote_average}</span>
          </div>
        </div>

        <button
          onClick={() => navigate(`/movies/${id}`)}
          className="py-3 px-6 rounded-lg bg-primary capitalize font-medium w-full"
        >
          Watch now
        </button>
      </div>
    </>
  );
};

export default MovieCard;
