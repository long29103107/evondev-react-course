// import React from "react";
// import useSWR from "swr";
// import { fetcher, apiKey } from "@/config";
// import MovieCard from "@/components/movie/MovieCard";
// import { useState, useMemo, useEffect } from "react";
// import useDebounce from "../hooks/useDebouce";

// const pageCount = 5;

// const MoviePage = () => {
//   const [nextPage, setNextPage] = useState(1);
//   const [filter, setFilter] = useState("");
//   const [searchTerm, setSearchTerm] = useState("");
//   const filterDebounce = useDebounce(filter, 500);

//   useEffect(() => {
//     setSearchTerm(filterDebounce);
//   }, [filterDebounce]);
  

//   const url = useMemo(() => {
//     if (!searchTerm) {
//       return `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&page=${nextPage}`;
//     }

//     return `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${encodeURIComponent(
//       searchTerm
//     )}&page=${nextPage}`;
//   }, [searchTerm]);

//   const handleFilterChange = (e) => {
//     setFilter(e.target.value);
//   };

//   const handleSearch = () => {
//     if (!filter.trim()) return;
//     setSearchTerm(filter);
//   };

//   const keydown = (e) => {
//     if (e.key === "Enter") {
//       handleSearch();
//     }
//   };

//   const { data, isLoading } = useSWR(url, fetcher);
//   if(!data) return null;
//   const movies = data?.results || [];
//   //const{ page, total_pages } = data;

//   return (
//     <div className="py-10 page-container">
//       <div className="flex mb-10">
//         <div className="flex-1">
//           <input
//             type="text"
//             placeholder="Type here to search..."
//             className="w-full p-4 bg-transparent outline-none bg-slate-800 rounded-lg text-white"
//             onChange={handleFilterChange}
//             onKeyDown={keydown}
//             value={filter}
//           />
//         </div>
//         <button className="p-4 bg-primary text-white" onClick={handleSearch}>
//           <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
//             <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
//           </svg>
//         </button>
//       </div>

//       {isLoading && <div className="w-10 h-10 rounded-full border-4 border-primary border-t-transparent border-t-4 mx-auto animate-spin"></div>}

//       {!isLoading && movies.length > 0 && <div className="grid grid-cols-4 gap-10">
//         {movies.map((movie) => (
//           <MovieCard key={movie.id} item={movie} />
//         ))}
//       </div>}

//       <div className="flex items-center justify-center mt-10 gap-x-5">
//         <span className="cursor-pointer">
//           <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
//             <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
//           </svg>
//         </span>
//         {new Array(pageCount).fill(0).map((item, index) => (
//           <span key={index} className={`cursor-pointer inline-block p-3  leading-none px-4 rounded ${nextPage === index + 1 ? 'bg-primary text-white' : 'bg-white text-slate-900'}`} onClick={() => setNextPage(index + 1)}>{index + 1}</span>
//         ))}
//         <span className="cursor-pointer">
//           <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
//             <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
//           </svg>
//         </span>
//       </div>
//     </div>
//   );
// };

// export default MoviePage;
