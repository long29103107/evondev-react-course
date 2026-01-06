import React from "react";
import { useNavigate } from "react-router-dom";
import Button from "@/components/button/Button";
import { tmdbAPI } from "@/apiConfig/config";
import PropTypes from "prop-types";
import { withErrorBoundary } from "react-error-boundary";
import LoadingSkeleton from "@/components/loading/LoadingSkeleton";

const MovieCard = ({ item }) => {
  const { title, poster_path, release_date, vote_average, id } = item;
  const navigate = useNavigate();

  return (
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
  );
};

const FallbackComponent = () => {
  return (
    <p className="bg-red-500 text-red-400">
      Somthing went wrong with this component
    </p>
  );
};

MovieCard.propTypes = {
  item: PropTypes.shape({
    title: PropTypes.string.isRequired,
    poster_path: PropTypes.string.isRequired,
    release_date: PropTypes.string.isRequired,
    vote_average: PropTypes.number.isRequired,
    id: PropTypes.number.isRequired,
  }).isRequired,
};

const MovieCardWithErrorBoundary = withErrorBoundary(MovieCard, {
  FallbackComponent: FallbackComponent,
});

export default MovieCardWithErrorBoundary;

export const MovieCardSkeleton = () => {
  return (
    <div className="movie-card h-full flex flex-col rounded-lg bg-slate-800 p-3 text-white">
      <LoadingSkeleton
        width="100%"
        height="250px"
        radius="8px"
        className="mb-5"
      />
      <div className="flex flex-col flex-1">
        <h3 className="text-white text-xl font-bold mb-3">
          <LoadingSkeleton width="100%" height="20px" />
        </h3>
        <div className="flex items-center justify-between text-sm opacity-50 mb-10">
          <span>
            <LoadingSkeleton width="50px" height="10px" />
          </span>
          <span>
            <LoadingSkeleton width="30px" height="10px" />
          </span>
        </div>
      </div>

      <LoadingSkeleton width="100%" height="40px" />
    </div>
  );
};
