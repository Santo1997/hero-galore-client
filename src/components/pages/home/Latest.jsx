import React from "react";

const Latest = () => {
  let log =
    "https://cdn.cdnparenting.com/articles/2018/08/576897157-H-1-1024x700.jpg";
  return (
    <div className="mb-10">
      <h1 className="text-3xl text-center text-black mb-10 font-bold">
        Latest Products
      </h1>
      <div className="carousel w-full">
        <div id="slide1" className="carousel-item relative w-full h-full">
          <div className="grid grid-cols-2 text-black">
            <div>
              <img src={log} />
            </div>
            <div className="border p-5">
              <h1 className="text-2xl mb-5">
                Bedroom Accessories For Your Kid
              </h1>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Cupiditate distinctio at reiciendis cum repellat beatae
                dignissimos vitae, eum voluptatem, doloremque incidunt rem?
                Autem id laborum amet omnis earum esse ut non numquam
                voluptatibus quia! Amet aut autem molestiae blanditiis
                architecto ullam. Ipsam quam dolores quas numquam, quis
                consequatur labore totam?
              </p>
              <p>
                <span className="me-5">Price: $12</span>
                <span className="">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-5 h-5 inline me-2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
                    />
                  </svg>
                  Romit Gabani
                </span>
              </p>
              <button className="btn btn-primary mt-10 mx-20">View More</button>
            </div>
          </div>
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide3" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide2" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide2" className="carousel-item relative w-full h-full">
          <div className="grid grid-cols-2 text-black">
            <div>
              <img src={log} />
            </div>
            <div className="border p-5">
              <h1 className="text-2xl mb-5">
                Bedroom Accessories For Your Kid
              </h1>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Cupiditate distinctio at reiciendis cum repellat beatae
                dignissimos vitae, eum voluptatem, doloremque incidunt rem?
                Autem id laborum amet omnis earum esse ut non numquam
                voluptatibus quia! Amet aut autem molestiae blanditiis
                architecto ullam. Ipsam quam dolores quas numquam, quis
                consequatur labore totam?
              </p>
              <p>
                <span className="me-5">Price: $12</span>
                <span className="">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-5 h-5 inline me-2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
                    />
                  </svg>
                  Romit Gabani
                </span>
              </p>
              <button className="btn btn-primary mt-10 mx-20">View More</button>
            </div>
          </div>
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide1" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide3" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide3" className="carousel-item relative w-full h-full">
          <div className="grid grid-cols-2 text-black">
            <div>
              <img src={log} />
            </div>
            <div className="border p-5">
              <h1 className="text-2xl mb-5">
                Bedroom Accessories For Your Kid
              </h1>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Cupiditate distinctio at reiciendis cum repellat beatae
                dignissimos vitae, eum voluptatem, doloremque incidunt rem?
                Autem id laborum amet omnis earum esse ut non numquam
                voluptatibus quia! Amet aut autem molestiae blanditiis
                architecto ullam. Ipsam quam dolores quas numquam, quis
                consequatur labore totam?
              </p>
              <p>
                <span className="me-5">Price: $12</span>
                <span className="">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-5 h-5 inline me-2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
                    />
                  </svg>
                  Romit Gabani
                </span>
              </p>
              <button className="btn btn-primary mt-10 mx-20">View More</button>
            </div>
          </div>
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide2" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide1" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Latest;
