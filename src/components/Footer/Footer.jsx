import { Link, useLocation } from "react-router-dom";

const Footer = () => {
  const { pathname } = useLocation();
  return (
    <footer
      className={`bg-gray-800 text-white py-12 ${
        pathname === "/aboutUs" ? "mt-0" : "mt-16"
      }`}
    >
      <div className="w-11/12 lg:w-10/12 mx-auto flex flex-col lg:flex-row justify-between items-center space-y-8 lg:space-y-0">
        {/* Logo and Name */}
        <div className="flex items-center space-x-4">
          <Link
            to="/"
            className="text-3xl font-CinzelDecorative font-black bg-clip-text text-transparent bg-gradient-to-r from-purple-500 via-pink-500 to-amber-500"
          >
            MovieFlix
          </Link>
        </div>

        {/* Navigation Links */}
        <div className="flex flex-col lg:flex-row space-y-4 lg:space-y-0 lg:space-x-10 mb-6 lg:mb-0">
          <Link
            to="/"
            className="hover:text-gray-300 text-lg font-semibold transition-colors duration-200"
          >
            Home
          </Link>
          <Link
            to="/allMovies"
            className="hover:text-gray-300 text-lg font-semibold transition-colors duration-200"
          >
            All Movies
          </Link>
          <Link
            to="/addMovie"
            className="hover:text-gray-300 text-lg font-semibold transition-colors duration-200"
          >
            Add Movie
          </Link>
          <Link
            to="/myFavourite"
            className="hover:text-gray-300 text-lg font-semibold transition-colors duration-200"
          >
            My Favourite
          </Link>
        </div>

        {/* Contact Information */}
        <div className="flex flex-col lg:flex-row space-y-4 lg:space-y-0 lg:space-x-10">
          <div className="text-center lg:text-left">
            <p className="text-sm">
              Contact Us:{" "}
              <span className="text-yellow-300">abr03348@gmail.com</span>
            </p>
            <p className="text-sm">
              Phone: <span className="text-yellow-300">+1 234 567 890</span>
            </p>
          </div>

          {/* Social Media Links */}
          <div className="flex space-x-2 justify-center lg:justify-start items-center">
            <Link
              target="_blank"
              to="https://www.facebook.com/ab.rahman.253080/"
              className="hover:text-gray-300 w-8"
            >
              <img src="https://img.icons8.com/?size=48&id=uLWV5A9vXIPu&format=png" />
            </Link>
            <Link
              target="_blank"
              to="https://twitter.com"
              className="hover:text-gray-300 w-8"
            >
              <img src="https://img.icons8.com/?size=48&id=13963&format=png" />
            </Link>
            <Link
              target="_blank"
              to="https://instagram.com"
              className="hover:text-gray-300 w-8"
            >
              <img src="https://img.icons8.com/?size=48&id=32323&format=png" />
            </Link>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="text-center mt-8 border-t border-white pt-6">
        <p className="text-sm">
          © {new Date().getFullYear()} MovieFlix. All rights reserved. <br />
          Designed by{" "}
          <a href="https://yourportfolio.com" className="text-yellow-300">
            Your Name
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
