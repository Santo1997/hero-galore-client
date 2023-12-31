import React from "react";
import { useLoaderData } from "react-router-dom";
import useTitle from "../../../hooks/useTitle";

const Toy = () => {
  const toyData = useLoaderData();
  useTitle("Toy Dtails");
  const { img, toyName, price, rating, quantity, description, seller } =
    toyData;

  return (
    <div className="text-black ">
      <img src={img} className="w-3/6" />
      <h1 className=" text-3xl font-bold my-3 text-green-500">{toyName}</h1>
      <ul className="ms-3 list-disc list-inside">
        <li>Seller: {seller.name}</li>
        <li>Seller Email: {seller.email}</li>
        <li>Price: ${price}</li>
        <li>Rating: {rating}</li>
        <li>Available: {quantity}</li>
      </ul>

      <div>
        <h1 className=" text-3xl font-bold my-3 text-green-500">About</h1>
        <p className="my-5 w-3/4">{description}</p>
      </div>
    </div>
  );
};

export default Toy;
