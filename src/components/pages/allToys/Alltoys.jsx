import React from "react";

const Alltoys = () => {
  let log =
    "https://cdn.cdnparenting.com/articles/2018/08/576897157-H-1-1024x700.jpg";
  return (
    <div>
      <h1 className="text-3xl text-center font-bold my-10 text-black">
        All Toys
      </h1>

      <div className="grid grid-cols-4">
        <div className="text-center">
          <img src={log} className="w-fit" />
          <h2 className=" text-2xl m-3">Availability</h2>
          <div>
            <input
              type="search"
              name=""
              id=""
              className="px-3 py-1 bg-white rounded  border border-black"
              placeholder="Search"
            />
          </div>
        </div>
        <div className="col-span-3 p-3	border">
          <table class="table-fixed border-separate w-full text-center text-black">
            <thead>
              <tr>
                <th className="border border-slate-600">Seller</th>
                <th className="border border-slate-600">Toy Name</th>
                <th className="border border-slate-600">Category</th>
                <th className="border border-slate-600">Price</th>
                <th className="border border-slate-600">Available</th>
                <th className="border border-slate-600">Details</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-slate-600">Mr. Bones</td>
                <td className="border border-slate-600">Malcolm Lockyer</td>
                <td className="border border-slate-600">Cetegory</td>
                <td className="border border-slate-600">$12</td>
                <td className="border border-slate-600">10</td>
                <td className="border border-slate-600">View Details</td>
              </tr>
              <tr>
                <td className="border border-slate-600">Mr. Bones</td>
                <td className="border border-slate-600">Malcolm Lockyer</td>
                <td className="border border-slate-600">Cetegory</td>
                <td className="border border-slate-600">$12</td>
                <td className="border border-slate-600">10</td>
                <td className="border border-slate-600">View Details</td>
              </tr>
              <tr>
                <td className="border border-slate-600">Mr. Bones</td>
                <td className="border border-slate-600">Malcolm Lockyer</td>
                <td className="border border-slate-600">Cetegory</td>
                <td className="border border-slate-600">$12</td>
                <td className="border border-slate-600">10</td>
                <td className="border border-slate-600">View Details</td>
              </tr>
              <tr>
                <td className="border border-slate-600">Mr. Bones</td>
                <td className="border border-slate-600">Malcolm Lockyer</td>
                <td className="border border-slate-600">Cetegory</td>
                <td className="border border-slate-600">$12</td>
                <td className="border border-slate-600">10</td>
                <td className="border border-slate-600">View Details</td>
              </tr>
              <tr>
                <td className="border border-slate-600">Mr. Bones</td>
                <td className="border border-slate-600">Malcolm Lockyer</td>
                <td className="border border-slate-600">Cetegory</td>
                <td className="border border-slate-600">$12</td>
                <td className="border border-slate-600">10</td>
                <td className="border border-slate-600">View Details</td>
              </tr>
              <tr>
                <td className="border border-slate-600">Mr. Bones</td>
                <td className="border border-slate-600">Malcolm Lockyer</td>
                <td className="border border-slate-600">Cetegory</td>
                <td className="border border-slate-600">$12</td>
                <td className="border border-slate-600">10</td>
                <td className="border border-slate-600">View Details</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Alltoys;
