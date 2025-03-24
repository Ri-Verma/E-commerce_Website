import React, { useState } from "react";

function SearchBar() {
  const [query, setQuery] = useState("");

  // this one is the data that will be searched useState(["React", "Redux", "Node.js", "Express", "MongoDB"])
  const [options] = useState(["React", "Redux", "Node.js", "Express", "MongoDB"]);

  // Filtered options based on query
  const filteredOptions = options.filter(option =>
    option.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="search-bar">
      <input
        type="text"
        placeholder="Search..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />

      {/* Show options only if there's a query */}
      {query && filteredOptions.length > 0 && (
        <ul className="search-options">
          {filteredOptions.map((option, index) => (
            <li key={index}>{option}</li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default SearchBar;
