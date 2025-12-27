import MovieList from "./components/movie/MovieList";
import Banner from "./components/banner/Banner";
import "swiper/css";

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

const App = () => {
  return (
    <>
      <header className="header flex items-center justify-center gap-x-5 py-10 mb-5 text-white">
        <span className="text-primary">Home</span>
        <span>Movies</span>
      </header>

      <Banner></Banner>

      {SECTIONS.map((section) => (
        <section id={section.id} className="movie-layout page-container pb-10">
          <h2 className="capitalize text-3xl text-white font-bold mb-5">
            {section.title}
          </h2>
          <MovieList type={section.type}></MovieList>
        </section>
      ))}
    </>
  );
};

export default App;
