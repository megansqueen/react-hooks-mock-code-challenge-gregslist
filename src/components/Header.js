import React from "react";
import Search from "./Search";

function Header({ listings, setListings }) {

  function handleSearch(search) {
    const searchedArray = listings.filter((listing) => {
      if(listing.description.toLowerCase().includes(search.toLowerCase())) {
        return listing
      }
    })
    setListings(searchedArray)
  }

  return (
    <header>
      <h1>
        <span className="logo" role="img">
          ☮
        </span>
        gregslist
      </h1>
      <Search onSearch={handleSearch}setListings={setListings}/>
    </header>
  );
}

export default Header;
