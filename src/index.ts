import { Hono } from "hono";

const app = new Hono();

import { dataPlants } from "./data/plants";

app.get("/", (c) => {
  return c.json({ message: "This is EzFarm API" });
});

app.get("/plants", (c) => {
  return c.json(dataPlants);
});

app.get("/plants/:id", (c) => {
  const id = c.req.param("id");

  if (!id) {
    return c.json({ message: "Invalid ID" });
  }

  const plant = dataPlants.find((plant) => plant.id === parseInt(id));

  if (!plant) {
    return c.json({ message: "Plant not found" });
  }

  return c.json(plant);
});

console.log("Server is running on port 3000");

export default app;
