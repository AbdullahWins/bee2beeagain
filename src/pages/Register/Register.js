import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthProvider";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import NavBar from "../Shared/NavBar/NavBar";
import logup from "../../assets/background/loginup.png";
import logdn from "../../assets/background/logdown.png";
import logo from "../../assets/logo/logob2b.png";

const Register = () => {
  const { createNewUserEmail, updateUser } = useContext(AuthContext);

  const [error, setError] = useState("");

  const errorToast = () => toast(`${error}`);
  const successToast = () => toast(`'Account Created!'`);

  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    createNewUserEmail(email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        setError("");
        form.reset();
        successToast();
        handleUpdate(name);
        navigate("/");
      })
      .catch((error) => {
        setError(error.message);
        errorToast();
      });
  };

  const handleUpdate = (name) => {
    const profile = {
      displayName: name,
    };
    updateUser(profile)
      .then(() => {})
      .catch(() => {});
  };

  return (
    <div>
      <NavBar></NavBar>
      <div
        style={{
          backgroundImage: `url(${logup}), url(${logdn})`,
          backgroundPosition: "top, bottom",
        }}
        className="flex w-full h-full bg-white justify-center items-center bg-no-repeat bg-top bg-contain rounded-xl py-6"
      >
        <div className="relative">
          <div className=" px-6 m-auto lg:max-w-xl">
            <div className="flex gap-2 align-center p-6">
              <div className="w-12">
                <img src={logo} alt="b2b logo" />
              </div>
              <p className=" text-sm font-semibold">
                BEE <br />2 <br />
                BEE
              </p>
            </div>
            <form onSubmit={handleSubmit} className="mt-1">
              <p className="font-semibold m-0">Sign Up</p>
              <div className="mb-2">
                <label className="block text-sm font-semibold text-gray-800">
                  Full Name
                </label>
                <input
                  type="text"
                  name="name"
                  className="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
                />
              </div>
              <div className="mb-2">
                <label className="block text-sm font-semibold text-gray-800">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  className="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
                />
              </div>
              <div className="mb-2">
                <label className="block text-sm font-semibold text-gray-800">
                  Password
                </label>
                <input
                  type="password"
                  name="password"
                  className="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
                />
              </div>
              <div className="flex align-center justify-start">
                <input
                  type="checkbox"
                  className="checkbox checkbox-warning checkbox-sm"
                />
                <span className="text-sm mx-2">Remember me</span>
              </div>
              <p className="text-xs font-semibold my-2">
                By continuing you agree to our
                <span className="text-red-600">
                  Terms of Service and Privacy Policy
                </span>
              </p>
              <div className="mt-2 flex align-middle justify-center">
                <button
                  type="submit"
                  className="w-2/3 py-2 tracking-wide text-white transition-colors duration-200 transform bg-amber-400 rounded-full hover:bg-purple-600 focus:outline-none focus:bg-purple-600"
                >
                  Sign Up
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Register;
