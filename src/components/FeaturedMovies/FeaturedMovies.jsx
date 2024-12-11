import { useEffect, useState } from "react";
import "aos/dist/aos.css";
import AOS from "aos";
import { Link } from "react-router-dom";

const FeaturedMovies = () => {
  const [featuredMov, setFeaturedMov] = useState([]);
  useEffect(() => {
    fetch("https://movie-flix-server.vercel.app/movies")
      .then((res) => res.json())
      .then((featuredData) => {
        const sortedByRating = [...featuredData].sort(
          (a, b) => b.movieRating - a.movieRating
        );
        setFeaturedMov(sortedByRating);
      });
  }, []);

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
    <div className="w-11/12 lg:w-9/12 mx-auto my-10">
      <div className="text-center">
        <h2 className="text-2xl font-bold mb-2">Featured Movies</h2>
        <p className="text-sm text-gray-500">
          Explore the highest-rated films by critics and audiences alike. These
          movies have earned their place <br className="hidden md:block" /> at
          the top with exceptional storytelling, acting, and direction.
        </p>
      </div>
      <hr className="border-b-2 border-gray-200 my-3" />
      <div
        data-aos="fade-left"
        data-aos-duration="1000"
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3"
      >
        {featuredMov.slice(0, 6).map((movie) => (
          <div
            key={movie._id}
            className="bg-white border border-lime-500 rounded-lg shadow-md"
          >
            <div className="h-52">
              <img
                src={movie.poster}
                alt={`${movie.title} Poster`}
                className="w-full h-full object-cover object-center rounded-md"
              />
            </div>
            <div className="p-4">
              <h2 className="text-2xl font-semibold text-lime-500 mb-2">
                {movie.title}
              </h2>
              <p className="text-gray-700 text-sm">
                <span className="font-semibold">Genre:</span> {movie.genre}
              </p>
              <p className="text-gray-700 text-sm">
                <span className="font-semibold">Duration:</span>{" "}
                {movie.duration} minutes
              </p>
              <p className="text-gray-700 text-sm">
                <span className="font-semibold">Release Year:</span>{" "}
                {movie.releaseYear}
              </p>
              <p className="text-gray-700 text-sm">
                <span className="font-semibold">Rating:</span> ★★★★☆ (
                {movie.movieRating}/5)
              </p>

              <Link to={`/movieDetails/${movie._id}`}>
                <button className="mt-4 w-full bg-lime-500 text-white py-2 px-4 rounded hover:bg-lime-600 transition duration-300">
                  See Details
                </button>
              </Link>
            </div>
          </div>
        ))}
      </div>
      <div className="flex justify-center mt-5">
        <Link to="/allMovies">
          <button className="bg-lime-500 text-white font-bold py-2 px-4 rounded hover:bg-lime-600">
            See All Movies
          </button>
        </Link>
      </div>
    </div>
  );
};

export default FeaturedMovies;
