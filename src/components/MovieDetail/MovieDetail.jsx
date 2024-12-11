import { useContext } from "react";
import { FaArrowLeftLong } from "react-icons/fa6";
import { Link, useLoaderData, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";
import { toast } from "react-toastify";
import Swal from "sweetalert2";

const MovieDetail = () => {
  const { user } = useContext(AuthContext);
  const movieDetails = useLoaderData();
  const navigate = useNavigate();
  const {
    _id,
    poster,
    title,
    genre,
    duration,
    releaseYear,
    movieRating,
    summary,
  } = movieDetails;

  const handleAddFavorite = () => {
    const userEmail = user.email;
    const favMovData = {
      poster,
      title,
      genre,
      duration,
      releaseYear,
      movieRating,
      summary,
      userEmail,
    };

    fetch("https://movie-flix-server.vercel.app/favorites")
      .then((res) => res.json())
      .then((data) => {
        const isAlreadyFavorite = data.some(
          (existMov) =>
            existMov.title === title && existMov.userEmail === userEmail
        );
        if (isAlreadyFavorite) {
          toast.error("It's already been added to favorite list.");
        } else {
          fetch("https://movie-flix-server.vercel.app/favorites", {
            method: "POST",
            headers: {
              "content-type": "application/json",
            },
            body: JSON.stringify(favMovData),
          })
            .then((res) => res.json())
            .then((data) => {
              // console.log(data);
              toast.success("Movie updated successfully!");
            });
        }
      });
  };

  const handleDelete = (movieId) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://movie-flix-server.vercel.app/movies/${movieId}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => console.log(data));
        Swal.fire({
          title: "Deleted!",
          text: "Movie has been deleted.",
          icon: "success",
        });
        navigate("/allMovies");
      }
    });
  };

  return (
    <div className="w-11/12 lg:w-10/12 mx-auto">
      <hr />
      <h2 className="text-2xl font-bold text-center my-3">Movie Details</h2>
      <div className="flex justify-center">
        <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white border border-lime-500">
          <img className="w-full h-60 object-cover" src={poster} alt={title} />

          <div className="p-4">
            <div className="flex items-center justify-between">
              <h2 className="font-bold text-xl mb-2 text-black">{title}</h2>
              <Link
                to={`/updateMovie/${_id}`}
                className="bg-lime-500 text-white font-bold py-2 px-4 rounded hover:bg-lime-600"
              >
                Update Movie
              </Link>
            </div>

            <p className="text-gray-700 mb-2 text-sm">
              <span className="font-semibold mr-1">Genre:</span>

              {genre}
            </p>

            <p className="text-gray-700 mb-2 text-sm">
              <span className="font-semibold mr-1">Duration:</span>
              {duration} minutes
            </p>

            <p className="text-gray-700 mb-2 text-sm">
              <span className="font-semibold mr-1">Release Year:</span>

              {releaseYear}
            </p>

            <p className="text-gray-700 mb-2 text-sm">
              <span className="font-semibold mr-1">Rating:</span>
              {movieRating}/5
            </p>
            <p className="text-gray-700 mb-4 text-sm">
              <span className="font-semibold mr-1">Summary:</span>

              {summary}
            </p>

            <div className="flex gap-2">
              <button
                onClick={() => handleDelete(_id)}
                className="w-full bg-red-500 text-white font-bold py-2 px-4 rounded hover:bg-red-600"
              >
                Delete Movie
              </button>
              <button
                onClick={handleAddFavorite}
                className="w-full bg-lime-500 text-white font-bold py-2 px-4 rounded hover:bg-lime-600"
              >
                Add to Favorite
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="text-center mt-6">
        <Link to="/allMovies">
          {" "}
          <button className="bg-lime-500 text-white font-bold py-2 px-4 rounded hover:bg-lime-600">
            {" "}
            <FaArrowLeftLong className="inline-flex mr-2" />
            Go back to All Movies
          </button>
        </Link>
      </div>
    </div>
  );
};

export default MovieDetail;
