import React from "react";
import { Link } from "react-router-dom";

const ToyData = ({ itm }) => {
  const { _id, img, toyName, category, price, rating, quantity, description } =
    itm;

  return (
    <tr>
      <td className="bg-gray-500 w-0">
        <div className="flex items-center space-x-3">
          <div className="avatar">
            <div className="mask mask-squircle w-12 h-12">
              <img src={img} />
            </div>
          </div>
        </div>
      </td>
      <td className="bg-gray-500 w-0">
        <h1 className="font-bold">{toyName}</h1>
      </td>
      <td className="bg-gray-500">{description.slice(0, 40) + "..."}</td>
      <td className="bg-gray-500 ">{category}</td>
      <td className="bg-gray-500">${price}</td>
      <td className="bg-gray-500">{rating}</td>
      <td className="bg-gray-500">{quantity}</td>
      <td className="bg-gray-500">
        <Link to={`/toy/${_id}`}>
          <button className="btn btn-xs btn-outline btn-info">
            View Details
          </button>
        </Link>
      </td>
    </tr>
  );
};

export default ToyData;
