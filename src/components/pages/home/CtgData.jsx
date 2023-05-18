import React from "react";

const CtgData = () => {
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
            Shoes!
            <div className="badge badge-secondary">12</div>
          </h2>
          <p>Price: $12</p>
          <div className="card-actions justify-end">
            <div className="badge badge-outline">View Details</div>
          </div>
        </div>
      </div>

      <div className="card w-96 bg-base-100 shadow-xl">
        <figure>
          <img src={log} />
        </figure>
        <div className="card-body">
          <h2 className="card-title">
            Shoes!
            <div className="badge badge-secondary">12</div>
          </h2>
          <p>Price: $12</p>
          <div className="card-actions justify-end">
            <div className="badge badge-outline">View Details</div>
          </div>
        </div>
      </div>
      <div className="card w-96 bg-base-100 shadow-xl">
        <figure>
          <img src={log} />
        </figure>
        <div className="card-body">
          <h2 className="card-title">
            Shoes!
            <div className="badge badge-secondary">12</div>
          </h2>
          <p>Price: $12</p>
          <div className="card-actions justify-end">
            <div className="badge badge-outline">View Details</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CtgData;
