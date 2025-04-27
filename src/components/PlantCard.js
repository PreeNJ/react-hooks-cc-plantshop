import React from "react";

function PlantCard({ plant, markAsSoldOut }) {
  // Check if inStock is undefined, assume it's true by default
  const inStock = plant.inStock !== undefined ? plant.inStock : true;
  
  return (
    <li className="card" data-testid="plant-item">
      <img src={plant.image} alt={plant.name} />
      <h4>{plant.name}</h4>
      <p>Price: {plant.price}</p>
      {inStock ? (
        <button 
          className="primary" 
          onClick={() => markAsSoldOut(plant.id)}
        >
          In Stock
        </button>
      ) : (
        <button>Out of Stock</button>
      )}
    </li>
  );
}

export default PlantCard;