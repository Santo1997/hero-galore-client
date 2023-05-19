import React from "react";
import { Link } from "react-router-dom";

const ToyData = ({ itm }) => {
  const { _id, img, toyName, category, price, rating, quantity, description } =
    itm;
  let log =
    "https://i.ibb.co/f27tYN5/depositphotos-411005388-stock-photo-profile-picture-of-smiling-30s.webp";

  return (
    <tr>
      <td className="bg-gray-500 w-0">
        <div className="flex items-center space-x-3">
          <div className="avatar">
            <div className="mask mask-squircle w-12 h-12">
              <img src={log} />
            </div>
          </div>
        </div>
      </td>
      <td className="bg-gray-500 w-0">
        <div className="font-bold">{toyName}</div>
      </td>
      <td className="bg-gray-500">{description.slice(0, 35) + "...."}</td>
      <td className="bg-gray-500 ">{category}</td>
      <td className="bg-gray-500">${price}</td>
      <td className="bg-gray-500">{rating}</td>
      <td className="bg-gray-500">{quantity}</td>
      <td className="bg-gray-500">
        <button className="btn btn-xs btn-outline btn-info">
          <Link to={`/toy/${_id}`}>View Details</Link>
        </button>
      </td>
    </tr>
  );
};

export default ToyData;
