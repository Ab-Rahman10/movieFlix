import { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";

const Login = () => {
  const { signInUser, setUser, signInWithGoogle } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  // console.log(location.state);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (formData) => {
    signInUser(formData.email, formData.password)
      .then((result) => {
        setUser(result.user);
        navigate(`${location?.state ? location.state : "/"}`);
        toast.success("Login successful! Welcome back to your account.");
      })
      .catch((error) => {
        // console.log("ERROR", error);
        toast.error("Incorrect username or password. Please try again.");
      });
  };

  //   sign in with google
  const handleGoogleSignIn = () => {
    signInWithGoogle()
      .then((result) => {
        setUser(result.user);
        navigate(`${location?.state ? location.state : "/"}`);
        toast.success(
          "Congratulations! Your account has been created successfully."
        );
      })
      .catch((error) => {
        // console.log("ERROR", error);
        toast.error("Incorrect username or password. Please try again.");
      });
  };
  return (
    <div className="flex items-center justify-center min-h-screen">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-full max-w-sm bg-white p-6 rounded-lg shadow-lg"
      >
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">
          Sign In
        </h2>

        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-600 mb-2">
            Email
          </label>
          <input
            {...register("email")}
            type="email"
            id="email"
            name="email"
            placeholder="Enter your email"
            required
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-lime-500 focus:border-lime-500 text-black"
          />
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-600 mb-2">
            Password
          </label>
          <input
            {...register("password")}
            type="password"
            id="password"
            name="password"
            placeholder="Enter your password"
            required
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-lime-500 focus:border-lime-500 text-black"
          />
        </div>

        <div className="mb-4 text-right">
          <a href="#" className="text-sm text-lime-500 hover:underline">
            Forget Password?
          </a>
        </div>

        <button
          type="submit"
          className="w-full bg-lime-600 text-white py-2 px-4 rounded-lg hover:bg-lime-700 focus:outline-none focus:ring-2 focus:ring-lime-500 focus:ring-offset-2 mb-4"
        >
          Sign In
        </button>

        <div className="flex items-center justify-center mb-4">
          <hr className="w-full border-gray-300" />
          <span className="px-2 text-sm text-gray-500">or</span>
          <hr className="w-full border-gray-300" />
        </div>

        <button
          onClick={handleGoogleSignIn}
          type="button"
          className="w-full flex items-center justify-center border border-gray-300 py-2 px-4 rounded-lg hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-300 focus:ring-offset-2 text-black"
        >
          <img
            src="https://www.google.com/favicon.ico"
            alt="Google"
            className="h-5 w-5 mr-2"
          />
          Continue with Google
        </button>
        <p className="text-center text-sm mt-3 text-black">
          Don't have an account?
          <Link className="underline text-lime-500 ml-1" to="/register">
            Register
          </Link>
        </p>
      </form>
    </div>
  );
};

export default Login;
