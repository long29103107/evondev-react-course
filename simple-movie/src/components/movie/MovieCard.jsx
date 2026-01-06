import React from "react";
import { useNavigate } from "react-router-dom";
import Button from "@/components/button/Button";
import { tmdbAPI } from "@/config";

const MovieCard = ({ item }) => {
  const { title, poster_path, release_date, vote_average, id } = item;
  const navigate = useNavigate();

  return (
    <>
      <div className="movie-card h-full flex flex-col rounded-lg bg-slate-800 p-3 text-white">
        <img
          src={tmdbAPI.image500(poster_path)}
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

        <Button onclick={() => navigate(`/movies/${id}`)}>Watch now</Button>
      </div>
    </>
  );
};

export default MovieCard;
