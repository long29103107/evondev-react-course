import React from "react";

const MovieCard = () => {
  return (
    <>
      <div className="movie-card rounded-lg bg-slate-800 p-3 text-white">
        <img
          src="https://genk.mediacdn.vn/2018/10/13/photo-1-15394076422481094585130.jpg"
          alt=""
          className="w-full h-[250px] object-cover rounded-lg mb-5"
        />
        <h3 className="text-white text-xl font-bold mb-3">
          Spider-Man: No Way Home
        </h3>
        <div className="flex items-center justify-between text-sm opacity-50 mb-10">
          <span>2017</span>
          <span>8.5</span>
        </div>

        <button className="py-3 px-6 rounded-lg bg-primary capitalize font-medium w-full">
          Watch now
        </button>
      </div>
    </>
  );
};

export default MovieCard;
