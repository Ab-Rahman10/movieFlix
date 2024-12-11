import Banner from "../components/Banner/Banner";
import FeaturedMovies from "../components/FeaturedMovies/FeaturedMovies";
import Movies from "../components/Movies/Movies";
import AskQuestion from "../components/AskQuestion/AskQuestion";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <FeaturedMovies></FeaturedMovies>
      <Movies></Movies>
      <AskQuestion></AskQuestion>
    </div>
  );
};

export default Home;
