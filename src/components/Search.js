import React, { useState } from "react";

function Search({ onSearch }) {
  const[search, setSearch] = useState("")

  function handleOnSearch(e) {
    e.preventDefault()
    onSearch(search)
  }

  return (
    <form className="searchbar">
      <input
        type="text"
        id="search"
        placeholder="search free stuff"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <button onClick={handleOnSearch}type="submit">🔍</button>
    </form>
  );
}

export default Search;
