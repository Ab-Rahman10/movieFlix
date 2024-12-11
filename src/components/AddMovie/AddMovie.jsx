import { useContext, useState } from "react";
import { Rating } from "react-simple-star-rating";
import { AuthContext } from "../../Provider/AuthProvider";
import { toast } from "react-toastify";

const AddMovie = () => {
  const [rating, setRating] = useState(0);
  const { user } = useContext(AuthContext);

  // Catch Rating value
  const handleRating = (rate) => {
    setRating(rate);
  };

  // handle Add Movie
  const handleAddMovie = (e) => {
    e.preventDefault();

    const form = e.target;
    const poster = form.poster.value;
    const title = form.title.value;
    const genre = form.genre.value;
    const duration = form.duration.value;
    const releaseYear = form.releaseYear.value;
    const movieRating = rating;
    const summary = form.summary.value;
    const userEmail = user?.email;

    const movieData = {
      poster,
      title,
      genre,
      duration,
      releaseYear,
      movieRating,
      summary,
      userEmail,
    };

    // validation
    const moviePoster = poster.includes("https");
    if (!moviePoster) {
      toast.error("Please provide a valid movie poster URL.");
      return;
    }

    if (title.trim().length < 2) {
      toast.error("Movie title must be at least 2 characters long.");
      return;
    }

    if (duration < 60) {
      toast.error("Duration must be greater than 60 minutes.");
      return;
    }

    if (rating === 0) {
      toast.error("Please select a rating.");
      return;
    }

    if (summary.length < 10) {
      toast.error("Summary must be at least 10 characters long.");
      return;
    }

    // send data to server
    fetch("https://movie-flix-server.vercel.app/movies", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(movieData),
    })
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        toast.success("Movie added successfully!");
        form.reset();
      });
  };

  return (
    <div className="min-h-screen py-12 flex justify-center items-center">
      <form
        onSubmit={handleAddMovie}
        className="max-w-xl w-full bg-white p-8 rounded-lg shadow-lg space-y-6"
      >
        <h2 className="text-2xl font-bold text-center">Add Movie</h2>
        {/* Movie Poster */}
        <div>
          <label className="block text-gray-700 font-semibold">
            Movie Poster (URL):
          </label>
          <input
            required
            type="text"
            name="poster"
            placeholder="Enter image URL"
            className="w-full mt-2 px-4 py-2 border border-gray-300 rounded-lg text-black focus:outline-none focus:ring-2 focus:ring-lime-500"
          />
        </div>

        {/* Movie Title */}
        <div>
          <label className="block text-gray-700 font-semibold">
            Movie Title:
          </label>
          <input
            required
            type="text"
            name="title"
            placeholder="Enter movie title"
            className="w-full mt-2 px-4 py-2 border border-gray-300 rounded-lg text-black focus:outline-none focus:ring-2 focus:ring-lime-500"
          />
        </div>

        {/* Genre */}
        <div>
          <label className="block text-gray-700 font-semibold">Genre:</label>
          <select
            required
            name="genre"
            className="w-full mt-2 px-4 py-2 border border-gray-300 rounded-lg text-black focus:outline-none focus:ring-2 focus:ring-lime-500"
          >
            <option value="">Select Genre</option>
            <option value="comedy">Comedy</option>
            <option value="drama">Drama</option>
            <option value="horror">Horror</option>
            <option value="action">Action</option>
            <option value="sci-fi">Sci-Fi</option>
          </select>
        </div>

        {/* Duration */}
        <div>
          <label className="block text-gray-700 font-semibold">
            Duration (minutes):
          </label>
          <input
            required
            type="number"
            name="duration"
            placeholder="Enter duration"
            className="w-full mt-2 px-4 py-2 border border-gray-300 rounded-lg text-black focus:outline-none focus:ring-2 focus:ring-lime-500"
          />
        </div>

        {/* Release Year */}
        <div>
          <label className="block text-gray-700 font-semibold">
            Release Year:
          </label>
          <select
            required
            name="releaseYear"
            className="w-full mt-2 px-4 py-2 border border-gray-300 rounded-lg text-black focus:outline-none focus:ring-2 focus:ring-lime-500"
          >
            <option value="">Select Year</option>
            <option value="2024">2024</option>
            <option value="2023">2023</option>
            <option value="2022">2022</option>
            <option value="2021">2021</option>
            <option value="2020">2020</option>
          </select>
        </div>

        {/* Rating */}
        <div className="flex items-center gap-3">
          <label className="text-gray-700 font-semibold">Rating:</label>
          <Rating
            onClick={handleRating}
            ratingValue={rating}
            size={30}
            fillColor="gold"
            emptyColor="#ddd"
          />
        </div>

        {/* Summary */}
        <div>
          <label className="block text-gray-700 font-semibold">Summary:</label>
          <textarea
            required
            name="summary"
            placeholder="Enter a short summary"
            className="w-full mt-2 px-4 py-2 border border-gray-300 rounded-lg text-black focus:outline-none focus:ring-2 focus:ring-lime-500"
          ></textarea>
        </div>

        {/* Submit Button */}
        <div>
          <button
            type="submit"
            className="w-full bg-lime-500 text-white py-2 px-4 rounded-lg hover:bg-lime-600 transition duration-300"
          >
            Add Movie
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddMovie;
