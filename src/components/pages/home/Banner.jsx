import React from "react";

const Banner = () => {
  return (
    <div
      className="hero h-[calc(75vh)] rounded-xl mb-10 overflow-hidden"
      style={{
        backgroundImage: `url("https://i.ibb.co/drZ4QRC/fotor-2023-5-20-13-13-2.jpg")`,
      }}
    >
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content text-center text-neutral-content">
        <div className="max-w-md">
          <h1 className="mb-5 text-5xl font-bold text-green-600">
            Hello there
          </h1>
          <p className="mb-5 text-white">
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
