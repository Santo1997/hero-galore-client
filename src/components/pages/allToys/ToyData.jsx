import React from "react";

const ToyData = () => {
  let log =
    "https://i.ibb.co/f27tYN5/depositphotos-411005388-stock-photo-profile-picture-of-smiling-30s.webp";

  return (
    <tr>
      <td className="bg-gray-500">
        <div className="flex items-center space-x-3">
          <div className="avatar">
            <div className="mask mask-squircle w-12 h-12">
              <img src={log} />
            </div>
          </div>
        </div>
      </td>
      <td className="bg-gray-500">
        <div className="font-bold"></div>
      </td>
      <td className="bg-gray-500">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ea, mollitia.
      </td>
      <td className="bg-gray-500">Categoty</td>
      <td className="bg-gray-500">Price</td>
      <td className="bg-gray-500">Rating</td>
      <td className="bg-gray-500">Quantity</td>
      <td className="bg-gray-500">
        <button className="btn btn-xs btn-outline btn-info">
          View Details
        </button>
      </td>
    </tr>
  );
};

export default ToyData;
