import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layouts/MainLayout";
import Home from "../Layouts/Home";
import Login from "../components/Auth components/Login";
import Register from "../components/Auth components/Register";
import AddMovie from "../components/AddMovie/AddMovie";
import AllMovies from "../components/AllMovies/AllMovies";
import MyFavourite from "../components/MyFavourite/MyFavourite";
import PrivateRoute from "../components/PrivateRoute";
import MovieDetail from "../components/MovieDetail/MovieDetail";
import ErrorPage from "../components/ErrorPage";
import UpdateMovie from "../components/UpdateMovie/UpdateMovie";
import AboutUs from "../components/AboutUS/AboutUS";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/addMovie",
        element: (
          <PrivateRoute>
            <AddMovie></AddMovie>
          </PrivateRoute>
        ),
      },
      {
        path: "/allMovies",
        element: <AllMovies></AllMovies>,
        loader: () => fetch("https://movie-flix-server.vercel.app/movies"),
      },
      {
        path: "/myFavourite",
        element: (
          <PrivateRoute>
            <MyFavourite></MyFavourite>
          </PrivateRoute>
        ),
        loader: () => fetch("https://movie-flix-server.vercel.app/favorites"),
      },
      {
        path: "/movieDetails/:id",
        element: (
          <PrivateRoute>
            <MovieDetail></MovieDetail>
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(
            `https://movie-flix-server.vercel.app/movieDetails/${params.id}`
          ),
      },
      {
        path: "/updateMovie/:id",
        element: (
          <PrivateRoute>
            <UpdateMovie></UpdateMovie>
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`https://movie-flix-server.vercel.app/movies/${params.id}`),
      },
      {
        path: "/aboutUs",
        element: <AboutUs></AboutUs>,
      },
    ],
  },
]);

export default router;
