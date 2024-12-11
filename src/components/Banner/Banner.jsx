import slider1 from "../../assets/slider1.jpg";
import slider2 from "../../assets/slider2.jpg";
import slider3 from "../../assets/slider3.jpg";
import "swiper/css";
import "swiper/css/effect-fade";
import { Autoplay, EffectFade, Pagination } from "swiper/modules";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <Swiper
      modules={[Autoplay, EffectFade, Pagination]}
      autoplay={{
        delay: 3000,
        disableOnInteraction: false,
      }}
      effect="fade"
      spaceBetween={0}
      slidesPerView={1}
      loop={true}
      pagination={{ clickable: false }}
    >
      <SwiperSlide>
        <div className="relative">
          <img
            className="w-full md:h-[550px] h-96 object-cover"
            src={slider1}
          />
          <div className="bg-black/75 absolute inset-0 z-10"></div>
          <div className="absolute top-[20%] left-[5%] md:left-[15%] z-20">
            <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold font-CinzelDecorative text-white mb-1">
              Action Blockbusters
            </h3>
            <p className="text-gray-100 mb-2">
              Get ready for explosive thrills and adrenaline-pumping adventures.
              Watch the latest action-packed <br /> films that keep you on the
              edge of your seat.
            </p>
            <p className="text-gray-100">Release: 2022</p>
            <Link to="/allMovies">
              <button className="mt-5 px-5 py-1 md:px-8 md:py-3 bg-lime-500 text-white font-semibold rounded-lg shadow-md hover:bg-lime-600 transition">
                Explore All Movies
              </button>
            </Link>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="relative">
          <img
            className="w-full md:h-[550px] h-96 object-cover"
            src={slider2}
          />
          <div className="bg-black/75 absolute inset-0 z-10"></div>
          <div className="absolute top-[20%] left-[5%] md:left-[15%] z-20">
            <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold font-CinzelDecorative text-white mb-1">
              Romantic Movies
            </h3>
            <p className="text-gray-100 mb-2">
              Indulge in heartwarming love stories and romantic journeys. Fall
              in love all over again with <br /> our collection of romantic
              movies.
            </p>
            <p className="text-gray-100">Release: 2020</p>
            <Link to="/allMovies">
              <button className="mt-5 px-5 py-1 md:px-8 md:py-3 bg-lime-500 text-white font-semibold rounded-lg shadow-md hover:bg-lime-600 transition">
                Explore All Movies
              </button>
            </Link>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="relative">
          <img
            className="w-full md:h-[550px] h-96 object-cover"
            src={slider3}
          />
          <div className="bg-black/75 absolute inset-0 z-10"></div>
          <div className="absolute top-[20%] left-[5%] md:left-[15%] z-20">
            <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold font-CinzelDecorative text-white mb-1">
              Comedy Hits
            </h3>
            <p className="text-gray-100 mb-2">
              Lighten up your day with a good laugh. Discover the best comedic
              films that <br /> promise non-stop humor and fun.
            </p>
            <p className="text-gray-100">Release: 2016</p>
            <Link to="/allMovies">
              <button className="mt-5 px-5 py-1 md:px-8 md:py-3 bg-lime-500 text-white font-semibold rounded-lg shadow-md hover:bg-lime-600 transition">
                Explore All Movies
              </button>
            </Link>
          </div>
        </div>
      </SwiperSlide>
    </Swiper>
  );
};

export default Banner;
