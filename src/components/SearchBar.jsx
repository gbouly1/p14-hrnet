import React from "react";

const SearchBar = ({
  searchTerm,
  setSearchTerm,
  placeholder = "Search...",
}) => {
  return (
    <input
      type="text"
      placeholder={placeholder}
      className="p-2 border rounded w-full md:w-64"
      value={searchTerm}
      onChange={(e) => setSearchTerm(e.target.value)}
    />
  );
};

export default SearchBar;
