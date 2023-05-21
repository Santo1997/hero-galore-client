import React, { createContext } from "react";
import "./App.css";
import Header from "./components/base/Header";
import { Outlet, useLoaderData, useLocation } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import useTitle from "./hooks/useTitle";

export const ToyContext = createContext();

function App() {
  const toys = useLoaderData();
  const location = useLocation();

  const webTitle = () => {
    if (location.pathname === "/") {
      return useTitle("Home");
    } else if (location.pathname === "/all_toys") {
      return useTitle("All Toys");
    } else if (location.pathname === "/add_toy") {
      return useTitle("Add A Toy");
    } else if (location.pathname === "/my_toys") {
      return useTitle("My Toys");
    } else if (location.pathname === "/blog") {
      return useTitle("Blog");
    } else if (location.pathname === "/login") {
      return useTitle("Login");
    } else if (location.pathname === "/signup") {
      return useTitle("Sign Up");
    }
  };

  return (
    <>
      {webTitle()}
      <ToyContext.Provider value={toys}>
        <Header />
        <div className="pt-28 mx-3 lg:mx-14">
          <Outlet />
        </div>
        <Toaster />
      </ToyContext.Provider>
    </>
  );
}

export default App;
