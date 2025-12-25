import { NavLink } from "react-router-dom";

const App = () => {
  return (
    <>
      <header className="header flex items-center justify-center gap-x-5 py-10 mb-10">
          <span className="text-primary">Home</span>
          <span className="text-secondary">Movies</span>
      </header>
      <section className="banner h-[400px] rounded-lg bg-slate-800 page-container mb-10">
        <div className="w-full h-full rounded-lg relative">
          <img src="https://genk.mediacdn.vn/2018/10/13/photo-1-15394076422481094585130.jpg" 
          alt="banner" className="w-full h-full object-cover rounded-lg" />
          <div className="absolute left-5 bottom-0 w-full text-white">
            <h2 className="text-3xl font-bold mb-5">End game</h2>
            <div className="flex items-center gap-x-3 mb-8">
              <span className="py-2 px-4 border border-white rounded-md">Adventure</span>
              <span className="py-2 px-4 border border-white rounded-md">Action</span>
              <span className="py-2 px-4 border border-white rounded-md">Drama</span>
            </div>
            <button className="py-3 px-6 rounded-lg bg-primary-500 text-white font-medium">Watch now</button>
          </div>
        </div>
      </section>
    </>
  );
};

export default App;
