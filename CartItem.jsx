import React from "react";

function CartItem({ location }) {
  return (
    <div className="location-card">
      <h3>{location.name}</h3>
      <p>{location.block}</p>

      <button>
        Find Location
      </button>
    </div>
  );
}

export default CartItem;
