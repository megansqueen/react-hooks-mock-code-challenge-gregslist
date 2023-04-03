import React from "react";
import ListingCard from "./ListingCard";

function ListingsContainer({ listings, setListings }) {

  function handleDelete(id) {
    const updatedItems = listings.filter((listing) => {
      if (listing.id !== id) {
        return listing
      }
    })
    setListings(updatedItems)
  }

  
  return (
        <div className="Card">
          {listings.map((listing) => (
           <ListingCard 
              key={listing.id} 
              id={listing.id}
              listing={listing.description} 
              image={listing.image}
              location={listing.location}
              handleDelete={handleDelete}
            />
            ))}
        </div>
  );
}

export default ListingsContainer;

// "id": 1,
// "description": "heater",
// "image": "./images/heater.jpg",
// "location": "BROOKLYN"
