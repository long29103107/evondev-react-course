import MovieList from "./components/movie/MovieList";

const App = () => {
  return (
    <>
      <header className="header flex items-center justify-center gap-x-5 py-10 mb-5 text-white">
        <span className="text-primary">Home</span>
        <span>Movies</span>
      </header>

      <section
        id="banner"
        className="banner h-[500px] rounded-lg bg-slate-800 page-container mb-10"
      >
        <div className="w-full h-full rounded-lg relative">
          <div className="overlay absolute inset-0 bg-gradient-to-t from-[rgba(0,0,0,0.5)] to-[rgba(0,0,0,0.5)] rounded-lg"></div>

          <img
            src="https://genk.mediacdn.vn/2018/10/13/photo-1-15394076422481094585130.jpg"
            alt="banner"
            className="w-full h-full object-cover rounded-lg"
          />

          <div className="absolute left-5 bottom-5 w-full text-white">
            <h2 className="text-3xl font-bold mb-5">Avengers: Endgame</h2>
            <div className="flex items-center gap-x-3 mb-8">
              <span className="py-2 px-4 border border-white rounded-md">
                Adventure
              </span>
              <span className="py-2 px-4 border border-white rounded-md">
                Action
              </span>
              <span className="py-2 px-4 border border-white rounded-md">
                Drama
              </span>
            </div>
            <button className="py-3 px-6 rounded-lg bg-primary text-white font-medium">
              Watch now
            </button>
          </div>
        </div>
      </section>

      <section id="now-playing" className="movie-layout page-container pb-10">
        <h2 className="capitalize text-3xl text-white font-bold mb-5">
          Now playing
        </h2>
        <MovieList></MovieList>
      </section>

      <section id="top-trending" className="movie-layout page-container pb-10">
        <h2 className="capitalize text-3xl text-white font-bold mb-5">
          Top trending
        </h2>
        <MovieList type="top_rated"></MovieList>
      </section>

      <section id="popular" className="movie-layout page-container pb-10">
        <h2 className="capitalize text-3xl text-white font-bold mb-5">
          Popular
        </h2>
        <MovieList type="popular"></MovieList>
      </section>
    </>
  );
};

export default App;
