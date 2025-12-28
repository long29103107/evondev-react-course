import React from "react";
import MovieList from "@/components/movie/MovieList";

const SECTIONS = [
  {
    id: "now-playing",
    title: "Now playing",
    type: "now_playing",
  },
  {
    id: "top-trending",
    title: "Top trending",
    type: "top_rated",
  },
  {
    id: "popular",
    title: "Popular",
    type: "popular",
  },
];

const HomePage = () => {
  return (
    <>
      {SECTIONS.map((section) => (
        <section
          id={section.id}
          className="movie-layout page-container pb-10"
          key={section.id}
        >
          <h2 className="capitalize text-3xl text-white font-bold mb-5">
            {section.title}
          </h2>
          <MovieList type={section.type}></MovieList>
        </section>
      ))}
    </>
  );
};

export default HomePage;
