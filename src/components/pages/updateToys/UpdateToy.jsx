import React from "react";
import { useLoaderData } from "react-router-dom";
import { putToDB } from "../../../utilities/apiFetch";
import useTitle from "../../../hooks/useTitle";

const UpdateToy = () => {
  const toyData = useLoaderData();
  useTitle("Update Toy");
  const { _id, toyName, price, quantity, description } = toyData;

  const handleUpdateToys = (event) => {
    event.preventDefault();
    const form = event.target;
    const price = parseInt(form.price.value);
    const quantity = parseInt(form.quantity.value);
    const description = form.description.value;
    const updateToyItm = {
      price,
      quantity,
      description,
    };
    putToDB(_id, updateToyItm);
  };

  return (
    <div className="hero ">
      <div className="hero-content flex-col w-full lg:w-3/6  ">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold">Update Toy: {toyName}</h1>
        </div>
        <div className="card w-full shadow-2xl border">
          <form onSubmit={handleUpdateToys} className="card-body ">
            <div className="form-control grid grid-cols-3">
              <label className="label ">
                <span className="label-text text-black text-lg font-bold">
                  Price:
                </span>
              </label>
              <input
                name="price"
                type="text"
                defaultValue={price}
                placeholder="Price"
                className="input col-span-2 input-bordered setInput"
                required
              />
            </div>
            <div className="form-control grid grid-cols-3">
              <label className="label">
                <span className="label-text text-black text-lg font-bold">
                  Available:
                </span>
              </label>
              <input
                name="quantity"
                type="text"
                defaultValue={quantity}
                placeholder="Available"
                className="input input-bordered setInput col-span-2"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text text-black text-lg font-bold">
                  Details:
                </span>
              </label>
              <textarea
                name="description"
                defaultValue={description}
                placeholder="Details"
                className="input input-bordered h-28 setInput"
                required
              ></textarea>
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary w-fit">Update Toy</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default UpdateToy;
