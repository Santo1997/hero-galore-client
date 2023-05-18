import React, { useState } from "react";
import useTitle from "../../../hooks/useTitle";

const Addtoys = () => {
  const [isChecked, setIsChecked] = useState(false);
  useTitle("Add Toys");

  const handleCheckboxChange = (event) => {
    setIsChecked(event.target.checked);
  };
  return (
    <div className="hero ">
      <div className="hero-content flex-col w-full lg:w-3/6  ">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold">Add A toy</h1>
        </div>
        <div className="card w-full shadow-2xl border">
          <form className="card-body ">
            <div className="form-control">
              <label className="label">
                <span className="label-text  text-black text-lg font-bold">
                  Image Url:
                </span>
              </label>
              <input
                type="text"
                placeholder="Image Url"
                className="input input-bordered setInput"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text  text-black text-lg font-bold">
                  Name
                </span>
              </label>
              <input
                type="text"
                placeholder="Name"
                className="input input-bordered setInput "
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text  text-black text-lg font-bold">
                  Seller Name
                </span>
              </label>
              <input
                type="text"
                placeholder="Seller Name"
                className="input input-bordered setInput"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text text-black text-lg font-bold">
                  Seller Email
                </span>
              </label>
              <input
                type="text"
                placeholder="Seller Email"
                className="input input-bordered setInput"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text text-black text-lg font-bold">
                  Name
                </span>
              </label>
              <input
                type="text"
                placeholder="Name"
                className="input input-bordered setInput"
                required
              />
            </div>
            <div className="grid grid-cols-5 gap-3 mt-3  text-lg font-bold">
              <p className="col-span-2">Select Category:</p>
              <div className="form-control ">
                <label className="label cursor-pointer">
                  <span className="label-text text-black">Cate 1</span>
                  <input
                    type="radio"
                    name="radio-10"
                    className="radio checked:bg-green-500"
                    onChange={handleCheckboxChange}
                  />
                </label>
              </div>
              <div className="form-control">
                <label className="label cursor-pointer ">
                  <span className="label-text  text-black">Cate 2</span>
                  <input
                    type="radio"
                    name="radio-10"
                    className="radio checked:bg-green-500"
                    onChange={handleCheckboxChange}
                  />
                </label>
              </div>
              <div className="form-control">
                <label className="label cursor-pointer ">
                  <span className="label-text  text-black">Cate 3</span>
                  <input
                    type="radio"
                    name="radio-10"
                    className="radio checked:bg-green-500"
                    onChange={handleCheckboxChange}
                  />
                </label>
              </div>
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text text-black text-lg font-bold">
                  Price
                </span>
              </label>
              <input
                type="text"
                placeholder="Price"
                className="input input-bordered setInput"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text text-black text-lg font-bold">
                  Rating
                </span>
              </label>
              <input
                type="text"
                placeholder="Rating"
                className="input input-bordered setInput"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text text-black text-lg font-bold">
                  Available
                </span>
              </label>
              <input
                type="text"
                placeholder="Available"
                className="input input-bordered setInput"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text text-black text-lg font-bold">
                  Details
                </span>
              </label>

              <textarea
                name=""
                placeholder="Details"
                className="input input-bordered setInput"
              ></textarea>
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary w-fit">Submit</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Addtoys;
