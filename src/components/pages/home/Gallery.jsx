import React from "react";

const Gallery = () => {
  let log =
    "https://cdn.cdnparenting.com/articles/2018/08/576897157-H-1-1024x700.jpg";
  return (
    <>
      <div className="card card-compact w-fit bg-base-100 shadow-xl">
        <figure>
          <img src={log} />
        </figure>
        <div className="card-body">
          <h2 className="card-title">Shoes!</h2>
          <p>If a dog chews shoes whose shoes does he choose?</p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">Buy Now</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Gallery;
