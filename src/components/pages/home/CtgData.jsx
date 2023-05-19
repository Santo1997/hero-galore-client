import React from "react";
import { Link } from "react-router-dom";

const CtgData = ({ data }) => {
  const { _id, img, toyName, category, price, rating, quantity, description } =
    data;

  let log =
    "https://cdn.cdnparenting.com/articles/2018/08/576897157-H-1-1024x700.jpg";
  return (
    <>
      <div className="card w-96 shadow-xl">
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
              <div className="btn btn-sm btn-info text-white">View Details</div>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default CtgData;
