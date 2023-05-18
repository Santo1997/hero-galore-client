import React from "react";
import Activelink from "./Activelink";

const Links = () => {
  return (
    <>
      <li>
        <Activelink to="/">Home</Activelink>
      </li>
      <li>
        <Activelink to="/all_toys">All Toys</Activelink>
      </li>
      <li>
        <Activelink to="/">My Toys</Activelink>
      </li>
      <li>
        <Activelink to="/add_toy">Add A Toy</Activelink>
      </li>
      <li>
        <Activelink to="/">Blogs</Activelink>
      </li>
      <li>
        <Activelink to="/login">Login</Activelink>
      </li>
      <li>
        <Activelink to="/signup">Sign Up</Activelink>
      </li>
    </>
  );
};

export default Links;
