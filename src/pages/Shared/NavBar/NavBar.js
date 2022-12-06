import React, { useContext } from "react";
import "./NavBar.css";
import logo from "../../../assets/logo/logob2b.png";
import { AuthContext } from "../../../contexts/AuthProvider";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const NavBar = ({ cartItems }) => {
  const { user, logout } = useContext(AuthContext);

  const toastMessage = (message) => {
    toast(`${message}`, {
      position: "top-center",
      autoClose: 1200,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  };

  return (
    <div className="mx-6">
      <div className="navbar bg-base-100">
        <div className="flex-1 gap-2">
          <img className="w-12" src={logo} alt="b2b logo" />
          {!user ? (
            <p className="text-sm font-bold">
              BEE <br />2 <br />
              BEE
            </p>
          ) : (
            <div>
              <i class="fa-solid fa-location-crosshairs"> {user.email}</i>
            </div>
          )}
        </div>
        <div className="flex-none gap-2">
          {!user ? (
            <label
              htmlFor="login-drawer"
              className="drawer-button btn rounded-full"
            >
              Login/Signup
            </label>
          ) : (
            <div>
              <ul className="menu menu-horizontal p-0 flex flex-col md:flex-row items-end">
                <li>
                  <div className="form-control">
                    <form
                      onSubmit={(e) => {
                        e.preventDefault();
                        toastMessage(e.target.searchNav.value);
                      }}
                      className="input-group input-group-sm"
                    >
                      <input
                        type="text"
                        name="searchNav"
                        placeholder="Search…"
                        className="input input-bordered input-sm"
                      />
                      <button
                        type="submit"
                        className="btn btn-square btn-sm btn-ghost"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-6 w-6"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                          />
                        </svg>
                      </button>
                    </form>
                  </div>
                </li>

                <li>
                  <Link>
                    <button
                      onClick={() => {
                        toastMessage("No Ongoing Offers Available!");
                      }}
                    >
                      <i class="fa-solid fa-percent"></i>Offers
                    </button>
                  </Link>
                </li>

                <li>
                  <Link>
                    <div className="indicator">
                      <span className="indicator-item badge badge-primary">
                        {cartItems}
                      </span>
                      <button>
                        <i class="fa-solid fa-cart-shopping"></i>Cart
                      </button>
                    </div>
                  </Link>
                </li>
                <li tabIndex={0}>
                  <p>
                    <i class="fa-regular fa-user"></i>
                    Profile
                    <svg
                      className="fill-current"
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                    >
                      <path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" />
                    </svg>
                  </p>
                  <ul className="p-2 bg-base-100">
                    <li>
                      <button>
                        <i class="fa-solid fa-user-pen"></i>Edit Profile
                      </button>
                    </li>

                    <li>
                      <button onClick={logout}>
                        <i class="fa-solid fa-right-from-bracket"></i>Sign Out
                      </button>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
          )}
        </div>
      </div>
      <ToastContainer
        position="top-right"
        autoClose={1200}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </div>
  );
};

export default NavBar;
