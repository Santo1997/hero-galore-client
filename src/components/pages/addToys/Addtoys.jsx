import React, { useContext, useState } from "react";
import useTitle from "../../../hooks/useTitle";
import { postToDB } from "../../../utilities/apiFetch";
import { AuthContext } from "../../../provider/AuthProvider";

const Addtoys = () => {
  const { user } = useContext(AuthContext);
  const [isChecked, setIsChecked] = useState(false);
  useTitle("Add Toys");

  const handleCheckboxChange = (event) => {
    setIsChecked(event.target.checked);
  };

  const handleAddToys = (event) => {
    event.preventDefault();
    const form = event.target;
    const img = form.imgUrl.value;
    const toyName = form.toyName.value;
    const name = form.seller.value;
    const email = form.sellerMail.value;
    const category = form.category.value;
    const price = parseInt(form.price.value);
    const rating = parseInt(form.rating.value);
    const quantity = parseInt(form.quantity.value);
    const description = form.description.value;
    const seller = { name, email };
    const newToyItm = {
      img,
      toyName,
      category,
      price,
      rating,
      quantity,
      description,
      seller,
    };

    postToDB(newToyItm);
    form.reset();
  };

  return (
    <div className="hero ">
      <div className="hero-content flex-col w-full lg:w-3/6  ">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold">Add A toy</h1>
        </div>
        <div className="card w-full shadow-2xl border">
          <form onSubmit={handleAddToys} className="card-body ">
            <div className="form-control grid grid-cols-4">
              <label className="label">
                <span className="label-text  text-black text-lg font-bold">
                  Image Url:
                </span>
              </label>
              <input
                name="imgUrl"
                type="text"
                placeholder="Image Url"
                className="input input-bordered setInput col-span-3"
                required
              />
            </div>
            <div className="form-control grid grid-cols-3">
              <label className="label">
                <span className="label-text  text-black text-lg font-bold">
                  Toy Name:
                </span>
              </label>
              <input
                name="toyName"
                type="text"
                placeholder="Name"
                className="input input-bordered setInput col-span-2"
                required
              />
            </div>
            <div className="form-control grid grid-cols-3">
              <label className="label">
                <span className="label-text  text-black text-lg font-bold">
                  Seller Name:
                </span>
              </label>
              <input
                name="seller"
                type="text"
                defaultValue={user.displayName}
                placeholder="Seller Name"
                className="input input-bordered setInput col-span-2"
              />
            </div>
            <div className="form-control grid grid-cols-3">
              <label className="label">
                <span className="label-text text-black text-lg font-bold">
                  Seller Email:
                </span>
              </label>
              <input
                name="sellerMail"
                type="email"
                defaultValue={user.email}
                placeholder="Seller Email"
                className="input input-bordered setInput col-span-2"
              />
            </div>
            <div className="grid grid-cols-6 gap-3 mt-3  text-lg font-bold">
              <p className="col-span-2">Select Category:</p>
              <div className="form-control ">
                <label className="label cursor-pointer">
                  <span className="label-text text-black">Marvel</span>
                  <input
                    type="radio"
                    required
                    name="category"
                    value="Marvel"
                    className="radio checked:bg-green-500"
                    onChange={handleCheckboxChange}
                  />
                </label>
              </div>
              <div className="form-control">
                <label className="label cursor-pointer ">
                  <span className="label-text  text-black">DC</span>
                  <input
                    type="radio"
                    required
                    name="category"
                    value="DC"
                    className="radio checked:bg-green-500"
                    onChange={handleCheckboxChange}
                  />
                </label>
              </div>
              <div className="form-control col-span-2">
                <label className="label cursor-pointer ">
                  <span className="label-text  text-black">Transformers</span>
                  <input
                    type="radio"
                    required
                    name="category"
                    value="Transformers"
                    className="radio checked:bg-green-500"
                    onChange={handleCheckboxChange}
                  />
                </label>
              </div>
            </div>
            <div className="form-control grid grid-cols-3">
              <label className="label ">
                <span className="label-text text-black text-lg font-bold">
                  Price:
                </span>
              </label>
              <input
                name="price"
                type="text"
                placeholder="Price"
                className="input col-span-2 input-bordered setInput"
                required
              />
            </div>
            <div className="form-control grid grid-cols-3">
              <label className="label">
                <span className="label-text text-black text-lg font-bold">
                  Rating:
                </span>
              </label>
              <input
                name="rating"
                type="text"
                placeholder="Rating"
                className="input input-bordered setInput col-span-2"
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
                placeholder="Details"
                className="input input-bordered h-28 setInput"
                required
              ></textarea>
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary w-fit">Add Toy</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Addtoys;
