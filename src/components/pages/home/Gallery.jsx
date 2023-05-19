import React from "react";
import { Link } from "react-router-dom";

const Gallery = ({ toy }) => {
  const { _id, img, toyName, price, rating, description } = toy;
  let log =
    "https://cdn.cdnparenting.com/articles/2018/08/576897157-H-1-1024x700.jpg";
  return (
    <>
      <div className="card card-compact w-fit  shadow-xl">
        <figure>
          <img src={log} />
        </figure>
        <div className="card-body">
          <h2 className="card-title">
            {toyName}
            <div className="badge badge-secondary">{rating}</div>
          </h2>

          <p>{description}</p>
          <p>Price: ${price}</p>
          <div className="card-actions justify-end">
            <Link to={`/toy/${_id}`}>
              <button className="btn btn-sm btn-info rating text-white">
                View Details
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Gallery;
