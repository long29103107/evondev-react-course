import React from "react";
import useSWR from "swr";
import { fetcher, apiKey } from "@/config";
import MovieCard from "@/components/movie/MovieCard";
import { useState, useMemo, useEffect } from "react";
import useDebounce from "../hooks/useDebouce";

const MoviePage = () => {
  const [filter, setFilter] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const filterDebounce = useDebounce(filter, 500);
  
  useEffect(() => {
    setSearchTerm(filterDebounce);
  }, [filterDebounce]);

  const url = useMemo(() => {
    if (!searchTerm) {
      return `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}`;
    }
  
    return `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${encodeURIComponent(
      searchTerm
    )}`;
  }, [searchTerm]);

  const handleFilterChange = (e) => {
    setFilter(e.target.value);
  };

  const handleSearch = () => {
    if (!filter.trim()) return;
    setSearchTerm(filter);
  };

  const keydown = (e) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  const { data } = useSWR(url, fetcher);  
  const movies = data?.results || [];

  return (
    <div className="py-10 page-container">
      <div className="flex mb-10">
        <div className="flex-1">
          <input
            type="text"
            placeholder="Type here to search..."
            className="w-full p-4 bg-transparent outline-none bg-slate-800 rounded-lg text-white"
            onChange={handleFilterChange}
            onKeyDown={keydown}
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
