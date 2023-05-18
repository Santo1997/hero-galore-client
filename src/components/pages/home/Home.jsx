import React, { useContext, useState } from "react";
import Banner from "./Banner";
import Gallery from "./Gallery";
import Category from "./Category";
import TProduct from "./TProduct";
import DeleveryInfo from "./DeleveryInfo";
import Latest from "./Latest";
import { ToyContext } from "../../../App";

const Home = () => {
  const toysData = useContext(ToyContext);

  const galToysShow = toysData.toys.slice(0, 4);
  console.log(galToysShow);

  return (
    <div>
      <Banner />
      <div>
        <h1 className="text-center text-4xl mb-10 text-black font-bold">
          Gallery
        </h1>
        <div className="grid grid-cols-4 gap-3">
          {galToysShow.map((toy) => (
            <Gallery toy={toy} key={toy._id} />
          ))}
        </div>
        <div className="text-center my-5">
          <button className="btn mx-auto  ">Show All</button>
        </div>
      </div>
      <Category />
      <DeleveryInfo />
      <Latest />
      <div className="my-10">
        <h1 className="text-center text-4xl mb-10 text-black font-bold">
          Top Products
        </h1>
        <TProduct />
      </div>
    </div>
  );
};

export default Home;
