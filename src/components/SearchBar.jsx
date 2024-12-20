import React from "react";

function SearchBar({ onSearch }) {
  return (
    <input
      type="text"
      placeholder="Search PDFs..."
      className="border p-2 w-full rounded mb-8"
      onChange={(e) => onSearch(e.target.value)}
    />
  );
}

export default SearchBar;
