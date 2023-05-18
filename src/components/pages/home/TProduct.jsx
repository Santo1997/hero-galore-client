import React from "react";

const TProduct = () => {
  let log =
    "https://cdn.cdnparenting.com/articles/2018/08/576897157-H-1-1024x700.jpg";
  return (
    <div className="grid grid-cols-2 h-fit gap-5">
      <div className="grid grid-cols-1 gap-3 h-full ">
        <div className="card h-72 shadow-xl image-full overflow-hidden">
          <figure>
            <img src={log} className="w-full" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Shoes!</h2>
            <p>If a dog chews shoes whose shoes does he choose?</p>
            <div className="card-actions justify-end">
              <button className="btn btn-primary">Buy Now</button>
            </div>
          </div>
        </div>
        <div className="card h-72 shadow-xl image-full overflow-hidden">
          <figure>
            <img src={log} className="w-full" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Shoes!</h2>
            <p>If a dog chews shoes whose shoes does he choose?</p>
            <div className="card-actions justify-end">
              <button className="btn btn-primary">Buy Now</button>
            </div>
          </div>
        </div>
      </div>
      <div className="card w-fit shadow-xl">
        <div className="card-body">
          <h2 className="card-title">Shoes!</h2>
          <p>If a dog chews shoes whose shoes does he choose?</p>
        </div>
        <figure>
          <img src={log} />
        </figure>
      </div>
    </div>
  );
};

export default TProduct;
