import React from "react";
import { Link } from "react-router-dom";

const CtgData = ({ data }) => {
  const { _id, name, description, price, rating } = data;

  let log =
    "https://cdn.cdnparenting.com/articles/2018/08/576897157-H-1-1024x700.jpg";
  return (
    <>
      <div className="card w-96 bg-base-100 shadow-xl">
        <figure>
          <img src={log} />
        </figure>
        <div className="card-body">
          <h2 className="card-title">
            {name}
            <div className="badge badge-secondary">{rating}</div>
          </h2>
          <p>Price: ${price}</p>
          <div className="card-actions justify-end">
            <Link to={`/toy/${_id}`}>
              <div className="badge badge-outline">View Details</div>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default CtgData;
