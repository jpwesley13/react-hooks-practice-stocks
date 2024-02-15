import React from "react";

function SearchBar({sortBy, handleToggleSort, handleFilter, filterBy}) { //good to have the filterBy here to have a value property on the element, for controlled element.
  return (
    <div>
      <strong>Sort by:</strong>
      <label>
        <input
          type="radio"
          value="Alphabetically"
          name="sort"
          checked={sortBy === "Alphabetically"}
          onChange={handleToggleSort}
        />
        Alphabetically
      </label>
      <label>
        <input
          type="radio"
          value="Price"
          name="sort"
          checked={sortBy === "Price"}
          onChange={handleToggleSort}
        />
        Price
      </label>
      <br />
      <label>
        <strong>Filter:</strong> 
        <select onChange={handleFilter} value={filterBy}>
          <option value="">Select One</option>
          <option value="Tech">Tech</option>
          <option value="Sportswear">Sportswear</option>
          <option value="Finance">Finance</option>
        </select>
      </label>
    </div>
  );
}

export default SearchBar;
