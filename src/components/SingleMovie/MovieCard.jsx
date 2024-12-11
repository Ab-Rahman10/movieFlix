import { Link, useLocation } from "react-router-dom";
import { toast } from "react-toastify";

const MovieCard = ({ movie, favoriteMovie, setFavoriteMovie }) => {
  const { pathname } = useLocation();
  const { _id, poster, title, genre, duration, releaseYear, movieRating } =
    movie;

  const handleDeleteFromFav = (id) => {
    fetch(`https://movie-flix-server.vercel.app/favorites/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        const remainingFavMovies = [...favoriteMovie].filter(
          (mov) => mov._id !== id
        );
        setFavoriteMovie(remainingFavMovies);
        toast.success("Movie removed from favorites successfully!");
      });
  };

  return (
    <div className="bg-white border border-lime-500 rounded-lg shadow-md">
      <div className="h-52">
        <img
          src={poster}
          alt={`${title} Poster`}
          className="w-full h-full object-cover object-center rounded-md"
        />
      </div>
      <div className="p-4">
        <h2 className="text-2xl font-semibold text-lime-500 mb-2">{title}</h2>
        <p className="text-gray-700 text-sm">
          <span className="font-semibold">Genre:</span> {genre}
        </p>
        <p className="text-gray-700 text-sm">
          <span className="font-semibold">Duration:</span> {duration} minutes
        </p>
        <p className="text-gray-700 text-sm">
          <span className="font-semibold">Release Year:</span> {releaseYear}
        </p>
        <p className="text-gray-700 text-sm">
          <span className="font-semibold">Rating:</span> ★★★★☆ ({movieRating}/5)
        </p>

        {pathname === "/allMovies" ? (
          <Link to={`/movieDetails/${_id}`}>
            <button className="mt-4 w-full bg-lime-500 text-white py-2 px-4 rounded hover:bg-lime-600 transition duration-300">
              See Details
            </button>
          </Link>
        ) : (
          <button
            onClick={() => handleDeleteFromFav(_id)}
            className="mt-4 w-full bg-red-500 text-white font-bold py-2 px-4 rounded hover:bg-red-600"
          >
            Delete Favorite
          </button>
        )}
      </div>
    </div>
  );
};

export default MovieCard;
