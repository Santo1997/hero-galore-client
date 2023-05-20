import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../provider/AuthProvider";
import { Link } from "react-router-dom";
import useTitle from "../../../hooks/useTitle";

const Mytoys = () => {
  useTitle("My Toys");
  const { user } = useContext(AuthContext);
  const [myToy, setMyToy] = useState([]);
  const [loader, setLoader] = useState(true);

  useEffect(() => {
    fetch(`http://localhost:5000/usertoy?user=${user.email}`)
      .then((res) => res.json())
      .then((data) => {
        setMyToy(data);
        setLoader(false);
      });
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

  return (
    <>
      {loader ? (
        <progress className="progress w-56"></progress>
      ) : (
        <>
          {myToy.length == 0 ? (
            <>
              <div className="hero">
                <div className="hero-content text-center">
                  <div className="max-w-md">
                    <h1 className="text-5xl font-bold">No Toy Added</h1>
                    <p className="my-10">
                      <progress className="progress w-56"></progress>
                    </p>
                    <button className="btn btn-info btn-md text-white">
                      <Link to="/add_toy">Add A toy</Link>
                    </button>
                  </div>
                </div>
              </div>
            </>
          ) : (
            <>
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
                  <tbody className="text-center">
                    {myToy.map((toy) => (
                      <tr key={toy._id}>
                        <td className="bg-gray-500">
                          <div className="flex items-center space-x-3">
                            <div className="avatar">
                              <div className="mask mask-squircle w-12 h-12">
                                <img src={toy.img} />
                              </div>
                            </div>
                          </div>
                        </td>
                        <td className="bg-gray-500">
                          <div className="font-bold">{toy.toyName}</div>
                        </td>
                        <td className="bg-gray-500">
                          {toy.description.slice(0, 40) + "..."}
                        </td>
                        <td className="bg-gray-500">{toy.category}</td>
                        <td className="bg-gray-500">${toy.price}</td>
                        <td className="bg-gray-500">{toy.rating}</td>
                        <td className="bg-gray-500">{toy.quantity}</td>
                        <td className="grid gap-3 bg-gray-500">
                          <button className="btn btn-xs btn-outline  btn-success">
                            <Link to={`/update_toy/${toy._id}`}>Update</Link>
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
            </>
          )}
        </>
      )}
    </>
  );
};

export default Mytoys;
