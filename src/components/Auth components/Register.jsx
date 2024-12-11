import React, { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";
import { toast } from "react-toastify";

const Register = () => {
  const { createUser, setUser, updateUser, signInWithGoogle } =
    useContext(AuthContext);
  const navigate = useNavigate();
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const form = e.target;
    const name = form.name.value;
    const photo = form.photoURL.value;
    const email = form.email.value;
    const password = form.password.value;

    // password validation
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z]).{6,}$/;

    if (!passwordRegex.test(password)) {
      setErrorMessage(
        "Password must be at least 6 characters long, contain at least one uppercase letter, and one lowercase letter."
      );
      return;
    }

    createUser(email, password)
      .then((result) => {
        // console.log(result.user);

        // update user
        updateUser({ displayName: name, photoURL: photo })
          .then(() => {
            // console.log("User updated");
            setUser((prevUser) => {
              return { ...prevUser, displayName: name, photoURL: photo };
            });
            navigate("/");
            toast.success(
              "Congratulations! Your account has been created successfully."
            );
          })
          .catch((error) => {
            // console.log("ERROR", error);
          });
      })
      .catch((error) => {
        // console.log("ERROR", error);
        toast.error(
          "Registration failed. Make sure the email is unique and try again."
        );
      });
  };

  const handleGoogleSignIn = () => {
    signInWithGoogle()
      .then((result) => {
        setUser(result.user);
        navigate("/");
        toast.success(
          "Congratulations! Your account has been created successfully."
        );
      })
      .catch((error) => {
        // console.log("ERROR", error);
        toast.error("Something went wrong. Please try registering again.");
      });
  };
  return (
    <div className="flex items-center justify-center min-h-screen">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-sm bg-white p-6 rounded-lg shadow-lg"
      >
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">
          Register
        </h2>

        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-600 mb-2">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Enter your name"
            required
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-lime-500 focus:border-lime-500 text-black"
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-600 mb-2">
            Photo URL
          </label>
          <input
            type="text"
            name="photoURL"
            placeholder="Enter your photoURL"
            required
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-lime-500 focus:border-lime-500 text-black"
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-600 mb-2">
            Email
          </label>
          <input
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
            type="password"
            id="password"
            name="password"
            placeholder="Enter your password"
            required
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-lime-500 focus:border-lime-500 text-black"
          />
          {errorMessage && (
            <p className="text-xs text-red-500">{errorMessage}</p>
          )}
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
          Register
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
          Already have an account?
          <Link className="underline text-lime-500 ml-1" to="/login">
            Sign In
          </Link>
        </p>
      </form>
    </div>
  );
};

export default Register;
