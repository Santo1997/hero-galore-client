import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../provider/AuthProvider";

const Mytoys = () => {
  const { user } = useContext(AuthContext);
  const [myToy, setMyToy] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5000/usertoy?user=${user.email}`)
      .then((res) => res.json())
      .then((data) => setMyToy(data));
  }, []);

  const handleDelete = (id) => {
    fetch(`http://localhost:5000/toys/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.deletedCount > 0) {
          const rest = myToy.filter((toys) => toys._id != id);
          setMyToy(rest);
        }
      });
  };

  let log =
    "https://i.ibb.co/f27tYN5/depositphotos-411005388-stock-photo-profile-picture-of-smiling-30s.webp";
  return (
    <div className="overflow-x-auto w-full pb-5">
      <table className="table text-white  w-full ">
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
        <tbody>
          {myToy.map((toy) => (
            <tr key={toy._id}>
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
                <div className="font-bold">{toy.toyName}</div>
              </td>
              <td className="bg-gray-500">
                {toy.description.slice(0, 35) + "...."}
              </td>
              <td className="bg-gray-500">{toy.category}</td>
              <td className="bg-gray-500">{toy.price}</td>
              <td className="bg-gray-500">{toy.rating}</td>
              <td className="bg-gray-500">{toy.quantity}</td>
              <td className="grid gap-3 bg-gray-500">
                <button className="btn btn-xs btn-outline  btn-success">
                  Update
                </button>
                <button
                  onClick={() => handleDelete(toy._id)}
                  className="btn btn-xs btn-outline  btn-error "
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Mytoys;
