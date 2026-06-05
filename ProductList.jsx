import React from "react";
import CartItem from "./CartItem";

function ProductList() {
  const locations = [
    {
      id: 1,
      name: "Computer Science Department",
      block: "Block A"
    },
    {
      id: 2,
      name: "Library",
      block: "Block B"
    },
    {
      id: 3,
      name: "Canteen",
      block: "Block C"
    }
  ];

  return (
    <div>
      <h2>Campus Locations</h2>

      {locations.map(location => (
        <CartItem
          key={location.id}
          location={location}
        />
      ))}
    </div>
  );
}

export default ProductList;
