import React, { useState } from "react";

function ListingCard({
    listing, 
    image,
    location,
    handleDelete,
    id
}) {

  const[liked, setLiked] = useState("false")

  function handleDeleteClick() {
    fetch(`http://localhost:6001/listings/${id}`, {
      method: "DELETE",
    })
      .then((r) => r.json())
      .then(() => handleDelete(id))
  }

  function handleLike() {
    if(liked === false) {
      setLiked(true)
  } else {
    setLiked(false)
  }
}

  return (
    <div className="card">
      <div className="image">
        <span className="price">$0</span>
        <img src={image} alt={"description"} />
      </div>
      <div className="details">
        {liked ? (
          <button onClick={handleLike}className="emoji-button favorite active">★</button>
        ) : (
          <button onClick={handleLike}className="emoji-button favorite">☆</button>
        )}
        <li>{listing}</li>
        <li>{location}</li>
        <button onClick={handleDeleteClick}className="emoji-button delete">🗑</button>
      </div>
    </div>
  );
}

export default ListingCard;
