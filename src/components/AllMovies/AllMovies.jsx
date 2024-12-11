import { Link, useLoaderData } from "react-router-dom";
import MovieCard from "../SingleMovie/MovieCard";
import { useEffect, useState } from "react";
import "aos/dist/aos.css";
import AOS from "aos";

const AllMovies = () => {
  const allMovies = useLoaderData();
  const [movies, setMovies] = useState(allMovies);
  const [search, setSearch] = useState("");

  useEffect(() => {
    fetch(`https://movie-flix-server.vercel.app/movies?search=${search}`)
      .then((res) => res.json())
      .then((data) => {
        setMovies(data);
      });
  }, [search]);

  // AOS
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      once: true,
      offset: 100,
    });
  }, []);

  return (
    <div className="lg:w-9/12 w-11/12 mx-auto">
      <hr />
      <div className="text-center">
        <h2 className="text-2xl font-bold text-center mt-3 mb-2">All Movies</h2>
        <p className="text-sm text-gray-500">
          Browse through a wide selection of movies from all genres. Discover
          new releases, top-rated <br className="hidden md:block" /> films, and
          hidden gems all in one place.
        </p>
      </div>
      {/* search here */}
      <label className="flex items-center bg-gray-100 border border-gray-300 rounded-md p-2 shadow-sm focus-within:ring-2 focus-within:ring-lime-500 focus-within:border-lime-500 mt-2 md:mt-4">
        <input
          onChange={(e) => setSearch(e.target.value)}
          type="text"
          className="flex-1 bg-transparent outline-none text-sm text-gray-700 placeholder-gray-400"
          placeholder="Search movies..."
        />
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 16 16"
          fill="currentColor"
          className="h-5 w-5 text-gray-500"
        >
          <path
            fillRule="evenodd"
            d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
            clipRule="evenodd"
          />
        </svg>
      </label>
      <hr className="border-b-2 border-gray-200 my-3" />
      <div
        data-aos="fade-right"
        data-aos-duration="1000"
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3"
      >
        {movies.map((movie) => (
          <MovieCard key={movie._id} movie={movie}></MovieCard>
        ))}
      </div>
      <div className="flex justify-center mt-10">
        <Link to="/">
          <button className="bg-lime-500 text-white font-bold py-2 px-4 rounded hover:bg-lime-600">
            Go back to home
          </button>
        </Link>
      </div>
    </div>
  );
};

export default AllMovies;
