import React from "react";
import { Link, useRouteError } from "react-router-dom";
import useTitle from "../../../hooks/useTitle";

const Error = () => {
  useTitle("Error");

  return (
    <div className="h-screen">
      <div className="container text-center mx-auto py-20">
        <img
          src="https://i.ibb.co/SfNY7Kj/162-1622413-4chan-404-pages-hd-png-download.png"
          className="w-full border border-sky-400 mb-5 rounded-md"
        />
        <Link
          to="/"
          className="btn rounded btn-primary bg-sky-500 border-sky-500 text-white"
        >
          Back to homepage
        </Link>
      </div>
    </div>
  );
};
export default Error;
