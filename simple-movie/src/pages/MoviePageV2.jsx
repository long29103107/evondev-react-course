import React from "react";
import useSWRInfinite from 'swr/infinite'
import { fetcher, tmdbAPI } from "@/apiConfig/config";
import MovieCard from "@/components/movie/MovieCard";
import { useState, useMemo, useEffect } from "react";
import useDebounce from "@/hooks/useDebouce";
import { MovieCardSkeleton } from "@/components/movie/MovieCard";
import Button from "@/components/button/Button";

const itemsPerPage = 20;


const MoviePageV2 = () => {
  const [nextPage, setNextPage] = useState(1);
  const [filter, setFilter] = useState("");
  const [searchTerm, setSearchTerm] = useState("");

  const filterDebounce = useDebounce(filter, 500);

  useEffect(() => {
    setSearchTerm(filterDebounce);
  }, [filterDebounce]);

  const url = useMemo(() => {
    if (!searchTerm) {
      return tmdbAPI.getMovieList('popular', nextPage);
    }

    return tmdbAPI.getMovieSearch(searchTerm, nextPage);
  }, [searchTerm, nextPage]);

  const { data, isLoading, size, setSize} = useSWRInfinite((index) => url.replace('page=1', `page=${index + 1}`), fetcher);
  const isEmpty = data?.[0]?.results.length === 0;
  const isReachingEnd = isEmpty || (data && data[data.length - 1]?.results.length < itemsPerPage);
  const movies = data ? data.reduce((acc, curr) => [...acc, ...curr.results], []) : [];

  const handleFilterChange = (e) => {
    setFilter(e.target.value);
    setNextPage(1);
  };

  const handleSearch = () => {
    if (!filter.trim()) return;
    setSearchTerm(filter);
    setNextPage(1);
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
            type="text"
            placeholder="Type here to search..."
            className="w-full p-4 bg-transparent outline-none bg-slate-800 rounded-lg text-white"
            onChange={handleFilterChange}
            value={filter}
            onKeyDown={handleKeyDown}
          />
        </div>
        <button className="p-4 bg-primary text-white" onClick={handleSearch}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
            />
          </svg>
        </button>
      </div>

      {/* {isLoading && (
        <div className="w-10 h-10 rounded-full border-4 border-primary border-t-transparent border-t-4 mx-auto animate-spin"></div>
      )} */}

      {isLoading && <div className="grid grid-cols-4 gap-10">
        {new Array(itemsPerPage).fill(0).map((_, index) => (
          <MovieCardSkeleton key={index}></MovieCardSkeleton>
        ))}
      </div>}

      {!isLoading && movies.length > 0 && (
        <div className="grid grid-cols-4 gap-10">
          {movies.map((movie) => (
            <MovieCard key={movie.id} item={movie} />
          ))}
        </div>
      )}

      {!isReachingEnd && <div className="mt-10 text-center">
          <Button onclick={() => !isReachingEnd && setSize(size + 1)}>Load more</Button>
      </div>}
    </div>
  );
};

export default MoviePageV2;
