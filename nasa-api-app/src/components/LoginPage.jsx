import { useState } from "react";
import Swal from "sweetalert2";
import axios from "axios";
import { Link } from "react-router-dom";

const LoginPage = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      // Make an HTTP POST request to your backend API endpoint for login
      const response = await axios.post(
        "https://nasa-backend-production-6b08.up.railway.app/api/users/login",
        {
          username,
          password,
        }
      );

      // Extract the JWT token from the response

      const { token } = response.data;
      console.log("Token Is", token);

      // Store the JWT token in local storage for future authenticated requests
      localStorage.setItem("token", token);
      localStorage.setItem("isLoggedIn", true);

      // Display success message using SweetAlert
      Swal.fire({
        icon: "success",
        title: "Login Successful!",
        text: "You have successfully logged in.",
      });
      window.location.href = "/api/apod";
    } catch (error) {
      // Display error message if login fails
      Swal.fire({
        icon: "error",
        title: "Login Error",
        text: error.response.data.message, // Assuming your backend sends error messages in the response
      });
    }
  };

  return (
    <div
      className="flex items-center justify-center min-h-screen bg-center bg-cover"
      style={{
        backgroundImage: `url('https://d2pn8kiwq2w21t.cloudfront.net/original_images/1-5000-exoplanets-lead-JPL.jpg')`,
      }}
    >
      <div className="w-full max-w-md p-8 space-y-8 bg-white rounded-lg shadow-lg">
        <div>
          <h2 className="italic font-mono mt-6 text-3xl font-extrabold text-center text-blue-900">
            Login
          </h2>
        </div>
        <form className="mt-8 space-y-6" onSubmit={handleLogin}>
          <div className="-space-y-px rounded-md shadow-sm">
            <div>
              <label htmlFor="username" className="sr-only">
                Username
              </label>
              <input
                id="username"
                name="username"
                type="text"
                autoComplete="username"
                required
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="relative block w-full px-3 py-2 mb-5 text-gray-900 placeholder-gray-500 border border-gray-300 rounded-none appearance-none rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Username"
              />
            </div>
            <div>
              <label htmlFor="password" className="sr-only">
                Password
              </label>
              <input
                id="password"
                name="password"
                type="password"
                autoComplete="current-password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="relative block w-full px-3 py-2 mb-5 text-blue-900 placeholder-gray-500 border border-gray-300 rounded-none appearance-none focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Password"
              />
            </div>
          </div>

          <div>
            <button
              type="submit"
              className="relative flex justify-center w-full px-4 py-2 text-sm font-medium text-white bg-blue-900 border border-transparent rounded-md group hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Login
            </button>
          </div>
        </form>
        <p className="mt-2 text-sm text-center text-gray-600">
          Don't have an account?{" "}
          <Link to="/api/register">
            <button className="font-medium text-blue-900 hover:text-indigo-500">
              Register
            </button>
          </Link>
        </p>
      </div>
    </div>
  );
};

export default LoginPage;
