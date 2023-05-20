import React, { useState } from "react";

const SearchBar = ({ onSearch }) => {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = (event) => {
    const search = event.target.value;
    setSearchQuery(search);
    onSearch(search);
  };

  return (
    <div className="text-right">
      <input
        type="text"
        value={searchQuery}
        onChange={handleSearch}
        placeholder="Search..."
        className="input input-bordered setInput my-5 w-96"
      />
    </div>
  );
};

export default SearchBar;
