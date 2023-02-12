import { signOut } from "firebase/auth";
import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link, NavLink } from "react-router-dom";
import auth from "../../firebase.init";
import Loading from "./Loading";
import img from "../../assets/image/logo-removebg-preview.png";
const Navbar = () => {
  const [user, loading, error] = useAuthState(auth);
  const logout = () => {
    signOut(auth);
  };
  if (loading) {
    return <Loading></Loading>;
  }
  const menuItem = (
    <>
      <li className="active:bg-slate-400">
      <NavLink to="/">
            {({ isActive }) => (
              <span
                className={
                  isActive ? undefined : undefined
                }
              >
                Home
              </span>
            )}
          </NavLink>
      </li>
      <li>
        <NavLink to="/blogs">
            {({ isActive }) => (
              <span
                className={
                  isActive ? undefined : undefined
                }
              >
                Blogs
              </span>
            )}
          </NavLink>
      </li>
      <li>
        <NavLink to="/portfolio">
            {({ isActive }) => (
              <span
                className={
                  isActive ? undefined : undefined
                }
              >
                Portfolio
              </span>
            )}
          </NavLink>
      </li>
      {user && (
        <li>
          <NavLink to="/dashboard">
            {({ isActive }) => (
              <span
                className={
                  isActive ? undefined : undefined
                }
              >
                Dashboard
              </span>
            )}
          </NavLink>
        </li>
      )}
      <li>
        {user ? (
          <Link to="/" onClick={logout}>
            Sign out
          </Link>
  
        ) : (
          <NavLink to="/login">
            {({ isActive }) => (
              <span
                className={
                  isActive ? undefined : undefined
                }
              >
                Login
              </span>
            )}
          </NavLink>
        )}
      </li>
    </>
  );
  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex="0" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex="0"
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            {menuItem}
          </ul>
        </div>
        <Link
          to="/"
          className="btn flex items-center justify-center btn-ghost normal-case text-xl"
        >
          <img src={img} className="h-[30px] sm:h-[50px]" alt="logo-of-motorbike-fragments"></img>
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal p-0">{menuItem}</ul>
      </div>
      <div className="navbar-end">
        <label
          tabIndex="0"
          htmlFor="my-drawer-2"
          className="btn btn-ghost lg:hidden"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h8m-8 6h16"
            />
          </svg>
        </label>
      </div>
    </div>
  );
};

export default Navbar;
