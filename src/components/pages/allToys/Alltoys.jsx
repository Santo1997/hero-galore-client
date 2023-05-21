import React, { useEffect, useState } from "react";
import ToyData from "./toyData";
import SearchBar from "./SearchBar";

const Alltoys = () => {
  const [toys, setToys] = useState([]);
  const [filteredToys, setFilteredToys] = useState([]);
  const [loader, setLoader] = useState(true);
  const [limit, setLimit] = useState(20);

  useEffect(() => {
    fetch(`https://assign11-toys-server.vercel.app/all_toys?limit=${limit}`)
      .then((res) => res.json())
      .then((data) => {
        setToys(data);
        setFilteredToys(data);
        setLoader(false);
      });
  }, [limit]);

  const handleSearch = (query) => {
    const filtered = toys.filter((toy) =>
      toy.toyName.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredToys(filtered);
  };

  return (
    <>
      {loader ? (
        <>
          <progress className="progress w-56"></progress>
        </>
      ) : (
        <>
          <div className="overflow-x-auto w-full pb-5">
            <SearchBar onSearch={handleSearch} />
            <table className="table table-zebra text-white w-full ">
              <thead className="text-center text-green-500">
                <tr>
                  <th className="bg-black">SL/No</th>
                  <th className="bg-black">Toy Image</th>
                  <th className="bg-black">Toy Name</th>
                  <th className="bg-black">Seller</th>
                  <th className="bg-black">Category</th>
                  <th className="bg-black">Price</th>
                  <th className="bg-black">Quantity</th>
                  <th className="bg-black">Action</th>
                </tr>
              </thead>
              <tbody className="text-center">
                {filteredToys.map((itm, index) => (
                  <ToyData itm={itm} key={itm._id} index={index} />
                ))}
              </tbody>
            </table>
            <div className="text-center ">
              {limit !== "all" && (
                <>
                  <button
                    onClick={() => setLimit("all")}
                    className="btn btn-md w-52 btn-info m-5"
                  >
                    View All
                  </button>
                </>
              )}
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default Alltoys;
