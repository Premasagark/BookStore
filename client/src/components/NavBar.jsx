import React, { useContext } from "react";
import { assets } from "../assets/assets";
import { AppContext } from "../context/AppContext";
import { useNavigate } from "react-router-dom";

const NavBar = () => {
  const { setShowLogin, user, token, logout } = useContext(AppContext);
  const navigate = useNavigate();

  const isLoggedIn = !!token; // or !!user

  return (
    <nav className="h-20 bg-transparent flex justify-between items-center px-6! md:px-12!">
      {/* Brand / Logo */}
      <h1
        className="text-3xl font-bold text-primary-btn cursor-pointer"
        onClick={() => navigate("/")}
      >
        Book
      </h1>

      {/* Right Section */}
      <ul className="flex items-center gap-6">
        {/* Search Bar */}
        <div className="hidden sm:flex items-center bg-white/80 backdrop-blur-md border border-gray-300 rounded-full px-4! py-1.5! w-40 md:w-60 transition-all">
          <input
            type="text"
            placeholder="Search"
            className="bg-transparent outline-none w-full text-sm"
          />
        </div>

        {/* Wishlist Icon */}
        <li>
          <img
            src={assets.favorite_icon}
            alt="wishlist"
            className="h-6 cursor-pointer hover:scale-110 transition"
          />
        </li>

        {/* Cart Icon */}
        <li>
          <img
            src={assets.shopping_bag}
            alt="cart"
            className="h-6 cursor-pointer hover:scale-110 transition"
          />
        </li>

        {/* Auth Section */}
        {isLoggedIn ? (
          <>
            <li className="text-sm font-semibold text-gray-700">
              {user? (user.name):("User")}
            </li>
            <li>
              <button
                onClick={logout}
                className="bg-zinc-900 text-white font-semibold px-5! py-1.5! rounded-full text-sm hover:bg-primary-btn transition cursor-pointer"
              >
                Logout
              </button>
            </li>
          </>
        ) : (
          <li>
            <button
              onClick={() => setShowLogin(true)}
              className="bg-zinc-900 text-white font-semibold px-5! py-1.5! rounded-full text-sm hover:bg-primary-btn transition cursor-pointer"
            >
              Login
            </button>
          </li>
        )}
      </ul>
    </nav>
  );
};

export default NavBar;
