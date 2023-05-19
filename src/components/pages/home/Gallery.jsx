import React from "react";
import { Link } from "react-router-dom";

const Gallery = ({ toy }) => {
  const { _id, name, description, price } = toy;
  let log =
    "https://cdn.cdnparenting.com/articles/2018/08/576897157-H-1-1024x700.jpg";
  return (
    <>
      <div className="card card-compact w-fit bg-base-100 shadow-xl">
        <figure>
          <img src={log} />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{name}</h2>
          <p>{description}</p>
          <div className="card-actions justify-end">
            <Link to={`/toy/${_id}`}>
              <button className="btn btn-primary">View Details</button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Gallery;
