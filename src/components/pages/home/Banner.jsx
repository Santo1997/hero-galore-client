import React from "react";

const Banner = () => {
  let log =
    "https://cdn.cdnparenting.com/articles/2018/08/576897157-H-1-1024x700.jpg";
  return (
    <div
      className="hero h-[calc(75vh)] rounded-xl mb-10 overflow-hidden"
      style={{
        backgroundImage: `url("https://cdn.cdnparenting.com/articles/2018/08/576897157-H-1-1024x700.jpg")`,
      }}
    >
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content text-center text-neutral-content">
        <div className="max-w-md">
          <h1 className="mb-5 text-5xl font-bold">Hello there</h1>
          <p className="mb-5">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Banner;
