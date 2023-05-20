import React, { useContext } from "react";
import { ToyContext } from "../../../App";
import { Link } from "react-router-dom";
import useTitle from "../../../hooks/useTitle";
import ToyData from "./toyData";

const Alltoys = () => {
  const { toys } = useContext(ToyContext);
  useTitle("All Toys");

  return (
    <div className="overflow-x-auto w-full pb-5">
      <table className="table table-zebra text-white  w-full ">
        <thead className="text-center">
          <tr>
            <th className="bg-black">Toy Image</th>
            <th className="bg-black">Toy Name</th>
            <th className="bg-black">Description</th>
            <th className="bg-black">Category</th>
            <th className="bg-black">Price</th>
            <th className="bg-black">Rating</th>
            <th className="bg-black">Quantity</th>
            <th className="bg-black">Action</th>
          </tr>
        </thead>
        <tbody className="text-center">
          {toys.map((itm) => (
            <ToyData itm={itm} key={itm._id} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Alltoys;
