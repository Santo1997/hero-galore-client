import React from "react";
import { Link } from "react-router-dom";

const TProduct = ({ topItm }) => {
  const leftItm = topItm.slice(0, 3);
  const rightItm = topItm.slice(3, 4);

  return (
    <div className="grid grid-cols-2 gap-5 ">
      <div className="grid grid-cols-1 gap-3 h-full ">
        {leftItm.map((left) => (
          <div
            className="card h-72 shadow-xl image-full overflow-hidden"
            key={left._id}
          >
            <figure>
              <img src={left.img} />
            </figure>
            <div className="card-body p-14">
              <h2 className="card-title text-white">
                {left.toyName}
                <div className="badge badge-secondary">{left.rating}</div>
              </h2>
              <p className="text-white">{left.description}</p>
              <p className="text-white">Price: ${left.price}</p>
              <div className="card-actions justify-end">
                <Link to={`toy/${left._id}`}>
                  <button className="btn btn-sm btn-info text-white">
                    View Details
                  </button>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>

      {rightItm.map((right) => (
        <div className="card w-fit shadow-xl" key={right._id}>
          <div className="card-body">
            <h2 className="card-title">
              {right.toyName}
              <div className="badge badge-secondary">{right.rating}</div>
            </h2>
            <p>{right.description}</p>
            <p>Price: ${right.price}</p>
            <div className="card-actions justify-end">
              <Link to={`/toy/${right._id}`}>
                <button className="btn btn-md btn-info text-white">
                  View Details
                </button>
              </Link>
            </div>
          </div>
          <figure>
            <img src={right.img} />
          </figure>
        </div>
      ))}
    </div>
  );
};

export default TProduct;
