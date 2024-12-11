const NewArrival = ({ movie }) => {
  const { poster, title, genre, releaseYear } = movie;

  return (
    <div className="relative group mx-auto">
      {/* Content above the image */}
      <div className="absolute top-0 left-0 right-0 bg-gradient-to-t from-black via-transparent to-transparent p-3 text-white text-center rounded-t-lg">
        <h3 className="font-semibold text-lg">{title}</h3>
        <p className="text-sm">
          {genre} • {releaseYear}
        </p>
      </div>

      {/* Movie Poster Image */}
      <img
        src={poster}
        alt={title}
        className="w-full h-80 object-cover rounded-lg transition-transform duration-300 ease-in-out transform group-hover:scale-105 "
      />
    </div>
  );
};

export default NewArrival;
