import React from "react";

const Banner = () => {
  return (
    <div
      className="hero lg:h-[calc(75vh)] rounded-xl mb-10 overflow-hidden"
      data-aos="zoom-in"
      style={{
        backgroundImage: `url("https://i.ibb.co/drZ4QRC/fotor-2023-5-20-13-13-2.jpg")`,
      }}
    >
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content text-center text-neutral-content">
        <div className="max-w-2xl">
          <h2 className="mb-5 text-3xl font-bold text-white">Welcome to</h2>
          <h1 className="mb-5 text-5xl font-bold text-green-500">
            Hero Galore
          </h1>
          <p className="mb-5 text-white">
            HeroGalore, your ultimate destination for all things superhero! Step
            into a world where Marvels, DC, Transformers, and a wide range of
            action-packed super heroes come to life. Explore our extensive
            collection of action figures, collectibles, and accessories
            featuring your favorite characters from these iconic universes.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Banner;
