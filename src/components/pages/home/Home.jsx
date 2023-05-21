import React, { useContext, useState } from "react";
import Banner from "./Banner";
import Gallery from "./Gallery";
import Category from "./Category";
import TProduct from "./TProduct";
import DeleveryInfo from "./DeleveryInfo";
import Latest from "./Latest";
import { ToyContext } from "../../../App";
import { Link } from "react-router-dom";

const Home = () => {
  const toysData = useContext(ToyContext);

  const galItm = toysData.toys.slice(0, 4);
  const lstItm = toysData.toys.slice(0, 1);
  const topItm = toysData.toys.slice(0, 4);

  return (
    <div>
      <Banner />
      <div>
        <h1 className="text-center text-3xl lg:text-4xl mb-10 font-bold text-green-500">
          Gallery
        </h1>
        <div className="grid lg:grid-cols-4 gap-3">
          {galItm.map((toy) => (
            <Gallery toy={toy} key={toy._id} />
          ))}
        </div>
        <div className="text-center my-5">
          <Link to={`/all_toys`}>
            <button className="btn mx-auto  btn-primary">Show All</button>
          </Link>
        </div>
      </div>

      <Category toysData={toysData.toys} />
      <DeleveryInfo />

      <div>
        <h1 className="text-center text-4xl mb-10 text-black font-bold text-green-500">
          Latest Blog
        </h1>
        <div>
          {lstItm.map((lst) => (
            <Latest lastItm={lst} key={lst._id} />
          ))}
        </div>
      </div>

      <div className="my-10">
        <h1 className="text-center text-4xl mb-10 font-bold text-green-500">
          Top Products
        </h1>
        <TProduct topItm={topItm} />
      </div>
    </div>
  );
};

export default Home;
