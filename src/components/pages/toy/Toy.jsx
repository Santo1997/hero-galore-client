import React from "react";
import useTitle from "../../../hooks/useTitle";

const Toy = () => {
  useTitle("Toy Details");

  let log =
    "https://cdn.cdnparenting.com/articles/2018/08/576897157-H-1-1024x700.jpg";
  return (
    <div className="text-black ">
      <img src={log} className="w-3/6" />
      <h1 className=" text-3xl font-bold my-3">Name of the picture</h1>
      <ul className="ms-3 list-disc list-inside">
        <li>Seller: Seller</li>
        <li>Seller Email: Email</li>
        <li>Price: $12</li>
        <li>Rating: 10</li>
        <li>Available: 10</li>
      </ul>

      <p className="my-5 w-3/4">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut nam
        veritatis dignissimos eveniet. Harum animi provident vitae, tenetur quo
        quos ipsam maiores atque dicta dolore optio, culpa ullam eveniet
        delectus nostrum similique quaerat quod iusto consequatur consectetur
        incidunt aliquid asperiores repellendus. Nisi quos consequatur quasi,
        placeat cupiditate quisquam provident fugit.
      </p>
    </div>
  );
};

export default Toy;
