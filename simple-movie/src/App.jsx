import { NavLink } from "react-router-dom";

const App = () => {
  return (
    <>
      <header className="header flex items-center justify-center gap-x-5 text-white py-10 mb-10">
        <span className="text-primary">Home</span>
        <span>Movies</span>
      </header>
      <section className="banner h-[400px] page-container">
        <div className="w-full h-full rounded-lg relative">
          <img
            src="https://i.pinimg.com/736x/39/10/6b/39106be8cfa75df021dc00bf46b8055b.jpg"
            alt=""
            className="w-full h-full object-cover rounded-lg"
          />
          <div className="absolute left-5 bottom-5 w-full text-white">
            <h2 className="font-bold text-3xl mb-5">The Dark Knight</h2>
          </div>
        </div>
      </section>
    </>
  );
};

export default App;
