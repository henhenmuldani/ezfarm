import { Hono } from "hono";
import { prisma } from "./libs/prisma.js";

const app = new Hono();

app.get("/", (c) => {
  return c.json({
    message: "This is EzFarm API",
    plants: "/plants",
  });
});

app.get("/plants", async (c) => {
  const plants = await prisma.plant.findMany();

  return c.json(plants);
});

app.get("/plants/:id", async (c) => {
  const id = c.req.param("id");

  if (!id) {
    return c.json({ message: "Invalid ID" });
  }

  const plant = await prisma.plant.findUnique({
    where: {
      id: id,
    },
  });

  if (!plant) {
    c.status(404);
    return c.json({ message: "Plant not found" });
  }

  return c.json(plant);
});

app.delete("/plants", async (c) => {
  await prisma.plant.deleteMany();
  return c.json({ message: "All plants are deleted" });
});

app.post("/plants", async (c) => {
  const body = await c.req.json();

  if (!body) {
    return c.json({ message: "Invalid body" });
  }

  const newPlant = await prisma.plant.create({
    data: {
      name: String(body.name),
      scientificName: String(body.scientificName),
      sunlight: String(body.sunlight),
      watering: String(body.watering),
      harvestTime: String(body.harvestTime),
    },
  });

  return c.json({ message: "Plant added", plant: newPlant });
});

app.delete("/plants/:id", async (c) => {
  const id = c.req.param("id");

  if (!id) {
    return c.json({ message: "Invalid ID" });
  }

  const deletedPlant = await prisma.plant.delete({
    where: {
      id: id,
    },
  });

  return c.json({ message: `Plant with ${id} has been deleted`, deletedPlant });
});

app.put("/plants/:id", async (c) => {
  const id = c.req.param("id");

  if (!id) {
    return c.json({ message: "Invalid ID" });
  }

  const body = await c.req.json();
  const newPlant = await prisma.plant.update({
    where: {
      id: id,
    },
    data: {
      name: body.name ? String(body.name) : undefined,
      scientificName: body.scientificName
        ? String(body.scientificName)
        : undefined,
      sunlight: body.sunlight ? String(body.sunlight) : undefined,
      watering: body.watering ? String(body.watering) : undefined,
      harvestTime: body.harvestTime ? String(body.harvestTime) : undefined,
    },
  });

  return c.json({
    message: `Plant with ${id} has been updated`,
    plant: newPlant,
  });
});

app.post("/plants/seed", async (c) => {
  await prisma.plant.createMany({
    data: [
      {
        name: "Tomato",
        scientificName: "Solanum lycopersicum",
        sunlight: "Full Sun",
        watering: "Regular",
        harvestTime: "60-85 days",
      },
      {
        name: "Carrot",
        scientificName: "Daucus carota",
        sunlight: "Full Sun",
        watering: "Regular",
        harvestTime: "60-85 days",
      },
      {
        name: "Cucumber",
        scientificName: "Cucumis sativus",
        sunlight: "Full Sun",
        watering: "Regular",
        harvestTime: "50-70 days",
      },
    ],
  });

  return c.json({ message: "Plants have been seeded" });
});

console.log("Server is running on port 3000");

export default app;
