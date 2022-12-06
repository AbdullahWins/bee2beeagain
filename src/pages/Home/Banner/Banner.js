import React, { useContext, useState } from "react";
import banner1 from "../../../assets/images/banner1.png";
import banner2 from "../../../assets/images/banner2.png";
import banner3 from "../../../assets/images/banner3.png";
import homeup from "../../../assets/background/homeup.png";
import { AuthContext } from "../../../contexts/AuthProvider";

const Banner = () => {
  const { user } = useContext(AuthContext);
  const [location, setLocation] = useState("");

  function showPosition(position) {
    setLocation(
      `"Latitude:" ${position.coords.latitude} , "Longitude:" ${position.coords.longitude}`
    );
  }

  const getLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(showPosition);
    } else {
      setLocation("Geolocation is not supported by this browser.");
    }
  };

  return (
    <div>
      {!user ? (
        <div className="grid grid-cols-1 lg:grid-cols-2 overflow-hidden bg-white justify-center items-center rounded-xl mr-0">
          <section className="flex justify-center w-full">
            <div className="flex flex-col justify-center">
              <div className="text-center md:text-left">
                <p className="text-5xl font-bold">Begin your business</p>
                <p className="text-2xl my-2">
                  Welcome to redsoft, Order from your favorite stores.
                </p>
              </div>
              <form>
                <label
                  htmlFor="default-search"
                  className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
                >
                  Search
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                    <svg
                      aria-hidden="true"
                      className="w-5 h-5 text-gray-500"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                      ></path>
                    </svg>
                  </div>
                  <input
                    type="search"
                    id="default-search"
                    className="block w-full p-2 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50"
                    placeholder="Search..."
                    defaultValue={location}
                    required
                  />
                  <button
                    onClick={() => {
                      getLocation();
                    }}
                    className="absolute right-4 bottom-0.5 font-medium rounded-lg text-sm p-2"
                  >
                    <p>
                      <i className="fa-solid fa-location-crosshairs"></i>
                      Locate me
                    </p>
                  </button>
                </div>
              </form>
            </div>
          </section>
          <section>
            <div className="carousel carousel-center max-w-96 h-80 p-4 bg-light space-x-3 rounded-xl">
              <div className="carousel-item">
                <img
                  alt=""
                  src={banner1}
                  className="rounded-box max-w-xl max-h-xs"
                />
              </div>
              <div className="carousel-item">
                <img
                  alt=""
                  src={banner2}
                  className="rounded-box  max-w-xl max-h-xs"
                />
              </div>
              <div className="carousel-item">
                <img
                  alt=""
                  src={banner3}
                  className="rounded-box  max-w-xl max-h-xs"
                />
              </div>
            </div>
          </section>
        </div>
      ) : (
        <div
          style={{
            backgroundImage: `url(${homeup})`,
          }}
          className=" bg-no-repeat bg-top bg-cover mb-20"
        >
          <div className="carousel carousel-center max-h-xs py-20 ml-12 bg-light space-x-7 rounded-xl">
            <div className="carousel-item">
              <img
                alt=""
                src={banner1}
                className="rounded-box max-w-3xl max-h-xs"
              />
            </div>
            <div className="carousel-item">
              <img
                alt=""
                src={banner2}
                className="rounded-box  max-w-3xl max-h-xs"
              />
            </div>
            <div className="carousel-item">
              <img
                alt=""
                src={banner3}
                className="rounded-box  max-w-3xl max-h-xs"
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Banner;
