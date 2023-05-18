import React, { createContext } from "react";
import "./App.css";
import Header from "./components/base/Header";
import { Outlet, useLoaderData } from "react-router-dom";
import { Toaster } from "react-hot-toast";

export const ToyContext = createContext();

function App() {
  const toys = useLoaderData();

  return (
    <>
      <ToyContext.Provider value={toys}>
        <Header />
        <div className="mx-10">
          <Outlet />
        </div>
        <Toaster />
      </ToyContext.Provider>
    </>
  );
}

export default App;
