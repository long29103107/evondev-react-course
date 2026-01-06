import React from "react";
import useSWR from "swr";
import { fetcher } from "@/config";
import MovieCard from "@/components/movie/MovieCard";
import { useState, useMemo, useEffect } from "react";
import useDebounce from "@/hooks/useDebouce";
import ReactPaginate from "react-paginate";
import { tmdbAPI } from "@/config";

const itemsPerPage = 20;


const MoviePage = () => {
  const [nextPage, setNextPage] = useState(1);
  const [filter, setFilter] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const [itemOffset, setItemOffset] = useState(0);
  const [pageCount, setPageCount] = useState(0);

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

  const { data, isLoading } = useSWR(url, fetcher);

  useEffect(() => {
    if (!data || !data.total_results) return;
    setPageCount(Math.ceil(data.total_results / itemsPerPage));
  }, [itemOffset, data]);

  if (!data || !data.total_results) return;
  const movies = data.results || [];

  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % data.total_results;
    setItemOffset(newOffset);
    setNextPage(event.selected + 1);
  };

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

      {isLoading && (
        <div className="w-10 h-10 rounded-full border-4 border-primary border-t-transparent border-t-4 mx-auto animate-spin"></div>
      )}

      {!isLoading && movies.length > 0 && (
        <div className="grid grid-cols-4 gap-10">
          {movies.map((movie) => (
            <MovieCard key={movie.id} item={movie} />
          ))}
        </div>
      )}

      <div className="mt-10">
        <ReactPaginate
          breakLabel="..."
          nextLabel="Next >"
          onPageChange={handlePageClick}
          pageRangeDisplayed={5}
          pageCount={pageCount}
          previousLabel="< Previous"
          renderOnZeroPageCount={null}
          className="pagination"
          forcePage={nextPage - 1}
        />
      </div>
    </div>
  );
};

export default MoviePage;
