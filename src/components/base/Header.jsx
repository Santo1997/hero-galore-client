import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import "./header.css";
import Links from "./Links";

const Header = () => {
  return (
    <>
      <div className="navbar  bg-white text-black mb-5 font-bold">
        <div className="navbar-start">
          <div className=" dropdown bg-white">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
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
            <ul
              tabIndex={0}
              className="menu menu-compact bg-slate bg-white dropdown-content mt-3 p-2 shadow rounded-box w-52 overflow-hidden"
            >
              <Links></Links>
            </ul>
          </div>
          <h1 className="btn btn-ghost normal-case text-3xl">
            <Link to={"/"}>Toy Market</Link>
          </h1>
        </div>
        <div className="navbar-end hidden lg:flex text-md">
          <ul className="menu menu-horizontal px-1">
            <Links></Links>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Header;
