import { Hono } from "hono";
import { type Plant, dataPlants } from "./data/plants";

let plants = dataPlants;

const app = new Hono();

app.get("/", (c) => {
  return c.json({
    message: "This is EzFarm API",
    plants: "/plants",
  });
});

app.get("/plants", (c) => {
  if (plants.length === 0) {
    return c.json({ message: "No plants found" });
  }

  return c.json(plants);
});

app.get("/plants/:id", (c) => {
  const id = c.req.param("id");

  if (!id) {
    return c.json({ message: "Invalid ID" });
  }

  const plant = plants.find((plant) => plant.id === parseInt(id));

  if (!plant) {
    return c.json({ message: "Plant not found" });
  }

  return c.json(plant);
});

app.delete("/plants", (c) => {
  plants = [];
  return c.json({ message: "All plants are deleted", plants });
});

app.post("/plants", async (c) => {
  const body = await c.req.json();

  if (!body) {
    return c.json({ message: "Invalid body" });
  }

  const newPlant: Plant = {
    id: plants.length + 1,
    name: body.name,
    scientificName: body.scientificName,
    type: body.type,
    sunlight: body.sunlight,
    watering: body.watering,
    harvestTime: body.harvestTime,
  };

  console.log(newPlant);

  plants = [...plants, newPlant];

  return c.json({ message: "Plant added", plant: newPlant });
});

app.delete("/plants/:id", (c) => {
  const id = c.req.param("id");

  if (!id) {
    return c.json({ message: "Invalid ID" });
  }

  const plant = plants.find((plant) => plant.id === parseInt(id));

  if (!plant) {
    return c.json({ message: "Plant not found" });
  }

  plants = plants.filter((plant) => plant.id !== parseInt(id));

  return c.json({ message: `Plant with ${id} has been deleted` });
});

app.put("/plants/:id", async (c) => {
  const id = c.req.param("id");

  if (!id) {
    return c.json({ message: "Invalid ID" });
  }

  const plant = plants.find((plant) => plant.id === parseInt(id));

  if (!plant) {
    return c.json({ message: "Plant not found" });
  }

  const body = await c.req.json();
  const newPlant: Plant = {
    id: plant.id,
    name: body.name,
    scientificName: body.scientificName,
    type: body.type,
    sunlight: body.sunlight,
    watering: body.watering,
    harvestTime: body.harvestTime,
  };

  const updatedPlant = plants.map((plant) => {
    if (plant.id === parseInt(id)) {
      return newPlant;
    }
    return plant;
  });

  plants = updatedPlant;

  return c.json({
    message: `Plant with ${id} has been updated`,
    plant: newPlant,
  });
});

console.log("Server is running on port 3000");

export default app;
