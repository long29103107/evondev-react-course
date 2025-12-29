import React from "react";
import useSWR from "swr";
import { fetcher, apiKey } from "@/config";
import MovieCard from "@/components/movie/MovieCard";
import { useState, useRef } from "react";

const MoviePage = () => {
  const [query, setQuery] = useState("");
  const inputRef = useRef(null);

  const url = query
    ? `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${query}`
    : `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}`;

  const { data } = useSWR(url, fetcher);
  const movies = data?.results || [];

  const handleSearch = () => {
    setQuery(inputRef.current.value);
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  return (
    <div className="py-10 page-container">
      <div className="flex mb-10">
        <div className="flex-1">
          <input
            ref={inputRef}
            type="text"
            placeholder="Type here to search..."
            className="w-full p-4 bg-transparent outline-none bg-slate-800 rounded-lg text-white"
            onKeyDown={handleKeyDown}
          />
        </div>
        <button className="p-4 bg-primary text-white" onClick={handleSearch}>
          🔍
        </button>
      </div>

      <div className="grid grid-cols-4 gap-10">
        {movies.map((movie) => (
          <MovieCard key={movie.id} item={movie} />
        ))}
      </div>
    </div>
  );
};

export default MoviePage;
