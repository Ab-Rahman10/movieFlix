import { useContext, useEffect, useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";
import MovieCard from "../SingleMovie/MovieCard";

const MyFavourite = () => {
  const { user } = useContext(AuthContext);
  const favMovAllData = useLoaderData();
  const [favoriteMovie, setFavoriteMovie] = useState([]);

  useEffect(() => {
    const filteredFavMovByUser = favMovAllData.filter(
      (movie) => movie.userEmail === user.email
    );
    setFavoriteMovie(filteredFavMovByUser);
  }, []);

  return (
    <div className="lg:w-9/12 w-11/12 mx-auto min-h-screen">
      <hr />
      <div className="text-center">
        <h2 className="text-2xl font-bold text-center mt-3 mb-2">
          Your Favorite list.
        </h2>
        <p className="text-sm text-gray-500">
          This is where you can view and manage all the movies, shows, or items
          you've added to your favorite list. <br className="hidden md:block" />{" "}
          It's your personalized space to keep track of the content you love and
          enjoy!
        </p>
      </div>
      <hr className="border-b-2 border-gray-200 my-3" />
      {favoriteMovie.length === 0 ? (
        <div className="flex flex-col items-center space-y-3">
          <h4 className="text-xl font-bold text-red-400 text-center mt-6 md:mt-10">
            Favorite list is empty.
          </h4>
          <img
            className="w-10"
            src="https://img.icons8.com/?size=80&id=lj7F2FvSJWce&format=png"
          />
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
          {favoriteMovie.map((movie) => (
            <MovieCard
              key={movie._id}
              movie={movie}
              favoriteMovie={favoriteMovie}
              setFavoriteMovie={setFavoriteMovie}
            ></MovieCard>
          ))}
        </div>
      )}
      <div className="flex justify-center mt-10">
        <Link to="/allMovies">
          <button className="bg-lime-500 text-white font-bold py-2 px-4 rounded hover:bg-lime-600">
            See all movies
          </button>
        </Link>
      </div>
    </div>
  );
};

export default MyFavourite;
