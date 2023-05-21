import React from "react";
import { Link } from "react-router-dom";

const Latest = ({ lastItm }) => {
  const { _id, img, toyName, description, price, rating, seller } = lastItm;

  return (
    <div className=" relative w-full lg:h-80">
      <div className="grid lg:grid-cols-2 text-black">
        <div data-aos="fade-right">
          <img src={img} className="w-full h-80" />
        </div>
        <div className="border p-5" data-aos="fade-left">
          <h1 className="text-2xl mb-5">
            {toyName}
            <div className="badge badge-secondary ms-10">{rating}</div>
          </h1>
          <p>{description}</p>
          <p>
            <span className="me-5">Price: ${price}</span>
            <span className="">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-5 h-5 inline me-2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
                />
              </svg>
              {seller.name}
            </span>
          </p>
          <div className="text-center lg:text-left">
            <Link to={`/toy/${_id}`}>
              <button className="btn btn-info text-white mt-10 lg:mx-5">
                View More
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Latest;
