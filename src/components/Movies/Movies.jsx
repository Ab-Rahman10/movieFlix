import React, { useEffect, useState } from "react";
import NewArrival from "../NewArrival/NewArrival";
import "aos/dist/aos.css";
import AOS from "aos";

const Movies = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetch("https://movie-flix-server.vercel.app/fakeMovies")
      .then((res) => res.json())
      .then((data) => {
        setMovies(data);
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
    <div className="w-11/12 lg:w-9/12 mx-auto">
      <div className="mt-8 mb-3">
        <h2 className="text-2xl font-bold mt-3 mb-2">New Arrival Movies</h2>
      </div>
      <hr className="border-b-2 border-gray-200 my-3" />

      <div
        data-aos="fade-right"
        data-aos-duration="1500"
        className="grid grid-cols-3 md:grid-cols-5 gap-1"
      >
        {movies.map((movie) => (
          <NewArrival key={movie._id} movie={movie}></NewArrival>
        ))}
      </div>
    </div>
  );
};

export default Movies;
