import React from "react";
import PlantCard from "./PlantCard";

function PlantList({ plants, markAsSoldOut }) {
  return (
    <ul className="cards">
      {plants.map(plant => (
        <PlantCard 
          key={plant.id || plant.name} 
          plant={plant} 
          markAsSoldOut={markAsSoldOut} 
        />
      ))}
    </ul>
  );
}

export default PlantList;
