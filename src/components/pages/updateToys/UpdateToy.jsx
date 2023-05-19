import React from "react";
import useTitle from "../../../hooks/useTitle";
import { useLoaderData } from "react-router-dom";

const UpdateToy = () => {
  useTitle("Update Toys");
  const toyData = useLoaderData();
  const {
    _id,
    img,
    toyName,
    price,
    rating,
    quantity,
    category,
    description,
    seller,
  } = toyData;

  const handleCheckboxChange = (event) => {
    setIsChecked(event.target.checked);
  };

  const handleUpdateToys = (event) => {
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
    const updateToyItm = {
      img,
      toyName,
      category,
      price,
      rating,
      quantity,
      description,
      seller,
    };

    fetch(`http://localhost:5000/toys/${_id}`, {
      method: "PUT",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(updateToyItm),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      });
  };

  return (
    <div className="hero ">
      <div className="hero-content flex-col w-full lg:w-3/6  ">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold">Update Toy: {toyName}</h1>
        </div>
        <div className="card w-full shadow-2xl border">
          <form onSubmit={handleUpdateToys} className="card-body ">
            <div className="form-control grid grid-cols-4">
              <label className="label">
                <span className="label-text  text-black text-lg font-bold">
                  Image Url:
                </span>
              </label>
              <input
                name="imgUrl"
                type="text"
                defaultValue={img}
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
                defaultValue={toyName}
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
                defaultValue={seller.name}
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
                defaultValue={seller.email}
                placeholder="Seller Email"
                className="input input-bordered setInput col-span-2"
              />
            </div>
            <div className="form-control grid grid-cols-3">
              <label className="label">
                <span className="label-text text-black text-lg font-bold">
                  Cetegory:
                </span>
              </label>
              <input
                name="category"
                type="text"
                defaultValue={category}
                placeholder="Seller Email"
                className="input input-bordered setInput col-span-2"
              />
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
                defaultValue={price}
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
                defaultValue={rating}
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
              <button className="btn btn-primary w-fit">Update</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default UpdateToy;
