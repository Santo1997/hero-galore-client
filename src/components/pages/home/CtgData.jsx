import React from "react";
import { Link } from "react-router-dom";

const CtgData = ({ data }) => {
  const { _id, img, toyName, price, rating, description } = data;

  return (
    <>
      <div className="card w-96 shadow-xl">
        <figure>
          <img src={img} />
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
              <button className="btn btn-sm btn-info text-white">
                View Details
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default CtgData;
