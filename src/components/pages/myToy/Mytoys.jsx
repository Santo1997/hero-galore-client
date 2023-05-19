import React from "react";

const Mytoys = () => {
  let log =
    "https://i.ibb.co/f27tYN5/depositphotos-411005388-stock-photo-profile-picture-of-smiling-30s.webp";
  return (
    <div className="overflow-x-auto w-full pb-5">
      <table className="table text-white  w-full ">
        {/* head */}
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
          {/* row 1 */}
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
              <div className="font-bold">Hart Hagerty</div>
            </td>
            <td className="bg-gray-500">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ea,
              mollitia.
            </td>
            <td className="bg-gray-500">Categoty</td>
            <td className="bg-gray-500">Price</td>
            <td className="bg-gray-500">Rating</td>
            <td className="bg-gray-500">Quantity</td>
            <td className="grid gap-3 bg-gray-500">
              <button className="btn btn-xs btn-outline  btn-success">
                Update
              </button>
              <button className="btn btn-xs btn-outline  btn-error ">
                Delete
              </button>
            </td>
          </tr>
          {/* row 2 */}
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
              <div className="font-bold">Hart Hagerty</div>
            </td>
            <td className="bg-gray-500">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ea,
              mollitia.
            </td>
            <td className="bg-gray-500">Categoty</td>
            <td className="bg-gray-500">Price</td>
            <td className="bg-gray-500">Rating</td>
            <td className="bg-gray-500">Quantity</td>
            <td className="bg-gray-500">
              <button>Update</button>
              <button>Delete</button>
            </td>
          </tr>
          {/* row 3 */}
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
              <div className="font-bold">Hart Hagerty</div>
            </td>
            <td className="bg-gray-500">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ea,
              mollitia.
            </td>
            <td className="bg-gray-500">Categoty</td>
            <td className="bg-gray-500">Price</td>
            <td className="bg-gray-500">Rating</td>
            <td className="bg-gray-500">Quantity</td>
            <td className="bg-gray-500">
              <button>Update</button>
              <button>Delete</button>
            </td>
          </tr>
          {/* row 4 */}
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
              <div className="font-bold">Hart Hagerty</div>
            </td>
            <td className="bg-gray-500">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ea,
              mollitia.
            </td>
            <td className="bg-gray-500">Categoty</td>
            <td className="bg-gray-500">Price</td>
            <td className="bg-gray-500">Rating</td>
            <td className="bg-gray-500">Quantity</td>
            <td className="bg-gray-500">
              <button>Update</button>
              <button>Delete</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Mytoys;
