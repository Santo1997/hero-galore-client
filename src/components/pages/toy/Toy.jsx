import React from "react";
import useTitle from "../../../hooks/useTitle";
import { useLoaderData } from "react-router-dom";

const Toy = () => {
  const toyData = useLoaderData();
  const { img, toyName, price, rating, quantity, description, seller } =
    toyData;

  useTitle("Toy Details");

  let log =
    "https://cdn.cdnparenting.com/articles/2018/08/576897157-H-1-1024x700.jpg";
  return (
    <div className="text-black ">
      <img src={log} className="w-3/6" />
      <h1 className=" text-3xl font-bold my-3">{toyName}</h1>
      <ul className="ms-3 list-disc list-inside">
        <li>Seller: {seller.name}</li>
        <li>Seller Email: {seller.email}</li>
        <li>Price: ${price}</li>
        <li>Rating: {rating}</li>
        <li>Available: {quantity}</li>
      </ul>

      <p className="my-5 w-3/4">{description}</p>
    </div>
  );
};

export default Toy;
