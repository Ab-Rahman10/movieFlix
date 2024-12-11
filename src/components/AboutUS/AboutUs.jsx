import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { ThemeContext } from "../../Provider/AuthProvider";

const AboutUs = () => {
  const { isDarkMode } = useContext(ThemeContext);
  return (
    <div
      className={`min-h-screen flex items-center py-12${
        isDarkMode && "text-white"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 sm:px-12">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-extrabold mb-4">
            About{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-500 via-pink-500 to-amber-500">
              MovieFlix
            </span>
          </h1>
          <p
            className={`text-lg ${
              isDarkMode ? "text-gray-400" : "text-gray-700"
            }`}
          >
            Your ultimate destination for streaming and discovering amazing
            movies and TV shows. At MovieFlix, we make entertainment accessible
            for everyone.
          </p>
        </div>

        {/* Mission and Features Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Mission */}
          <div>
            <h2 className="text-2xl font-bold mb-4">Our Mission</h2>
            <p className={`${isDarkMode ? "text-gray-400" : "text-gray-700"}`}>
              We aim to bridge the gap between audiences and their favorite
              genres, offering a diverse library of entertainment, personalized
              experiences, and quality streaming for all.
            </p>
          </div>

          {/* Features */}
          <div>
            <h2 className="text-2xl font-bold mb-4">Key Features</h2>
            <ul className="space-y-3">
              <li className="flex items-center">
                <span className="text-lime-500 font-bold mr-2">✔</span>{" "}
                Extensive movie and TV show library
              </li>
              <li className="flex items-center">
                <span className="text-lime-500 font-bold mr-2">✔</span>{" "}
                Personalized recommendations
              </li>
              <li className="flex items-center">
                <span className="text-lime-500 font-bold mr-2">✔</span>{" "}
                High-quality streaming
              </li>
              <li className="flex items-center">
                <span className="text-lime-500 font-bold mr-2">✔</span>{" "}
                Easy-to-use interface
              </li>
            </ul>
          </div>
        </div>

        {/* About the Team */}
        <div className="mt-12">
          <h2 className="text-2xl font-bold mb-4 text-center">Meet the Team</h2>
          <p
            className={`text-center max-w-3xl mx-auto ${
              isDarkMode ? "text-gray-400" : "text-gray-600"
            }`}
          >
            Our passionate team of developers and movie enthusiasts works
            tirelessly to bring you a smooth and engaging streaming experience.
            Together, we are committed to making MovieFlix your go-to platform
            for entertainment.
          </p>
        </div>

        {/* Call to Action */}
        <div className="mt-12 text-center">
          <Link
            to="/allMovies"
            className="px-8 py-3 bg-lime-500 text-white font-semibold rounded-lg shadow-md hover:bg-lime-600 transition"
          >
            Explore Movies
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
