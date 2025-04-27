import React, { useState, useEffect } from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

function PlantPage() {
  const [plants, setPlants] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  // Fetch plants from the API when component mounts
  useEffect(() => {
    fetch("http://localhost:6001/plants")
      .then(response => response.json())
      .then(data => setPlants(data))
      .catch(error => console.error("Error fetching plants:", error));
  }, []);

  // Function to add a new plant
  const addPlant = (newPlant) => {
    fetch("http://localhost:6001/plants", {
      method: "POST",
      headers: {
        "Content-Type": "Application/JSON"
      },
      body: JSON.stringify(newPlant)
    })
    .then(response => response.json())
    .then(data => {
      setPlants([...plants, data]);
    })
    .catch(error => console.error("Error adding plant:", error));
  };

  // Function to mark a plant as sold out
  const markAsSoldOut = (plantId) => {
    // Update the UI immediately (optimistic UI update)
    setPlants(plants.map(plant => 
      plant.id === plantId ? {...plant, inStock: false} : plant
    ));
  };

  // Filter plants based on search term
  const filteredPlants = plants.filter(plant => 
    plant.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <main>
      <NewPlantForm addPlant={addPlant} />
      <Search searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      <PlantList plants={filteredPlants} markAsSoldOut={markAsSoldOut} />
    </main>
  );
}

export default PlantPage;