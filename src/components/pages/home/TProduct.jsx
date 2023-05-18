import React from "react";
import { Link } from "react-router-dom";

const TProduct = ({ topItm }) => {
  const leftItm = topItm.slice(0, 2);
  const rightItm = topItm.slice(2, 3);

  let log =
    "https://cdn.cdnparenting.com/articles/2018/08/576897157-H-1-1024x700.jpg";
  return (
    <div className="grid grid-cols-2 h-fit gap-5">
      <div className="grid grid-cols-1 gap-3 h-full ">
        {leftItm.map((left) => (
          <div
            className="card h-72 shadow-xl image-full overflow-hidden"
            key={left._id}
          >
            <figure>
              <img src={log} className="w-full" />
            </figure>
            <div className="card-body">
              <h2 className="card-title">{left.name}</h2>
              <p>{left.description}</p>
              <div className="card-actions justify-end">
                <Link to={`toy/ ${left._id}`}>
                  <button className="btn btn-primary">View Details</button>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>

      {rightItm.map((right) => (
        <div className="card w-fit shadow-xl" key={right._id}>
          <div className="card-body">
            <h2 className="card-title">{right.name}</h2>
            <p>{right.description}</p>
            <div className="card-actions justify-end">
              <Link to={`/toy/ ${right._id}`}>
                <button className="btn btn-primary">View Details</button>
              </Link>
            </div>
          </div>
          <figure>
            <img src={log} />
          </figure>
        </div>
      ))}
    </div>
  );
};

export default TProduct;
