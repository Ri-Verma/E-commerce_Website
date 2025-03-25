import React, { useState } from "react";

const SearchBar = ({ data }) => {
  const [query, setQuery] = useState("");
  const [filteredData, setFilteredData] = useState([]);

  const handleSearch = (event) => {
    const searchQuery = event.target.value.toLowerCase();
    setQuery(searchQuery);

    if (searchQuery === "") {
      setFilteredData([]);
      return;
    }

    const results = data.filter((item) =>
      item.name.toLowerCase().includes(searchQuery)
    );

    setFilteredData(results);
  };

  return (
    <div className="relative w-full">
      {/* Search Input */}
      <input
        type="text"
        placeholder="Search products..."
        value={query}
        onChange={handleSearch}
        className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
      />

      {/* Dropdown Results */}
      {filteredData.length > 0 && (
        <ul className="absolute left-0 w-full mt-1 bg-white border rounded-lg shadow-lg z-10">
          {filteredData.map((item) => (
            <li key={item._id} className="p-2 hover:bg-gray-200 cursor-pointer">
              {item.name}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default SearchBar;
