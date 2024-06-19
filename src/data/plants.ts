export type Plant = {
  id: number;
  name: string;
  scientificName: string;
  type: "Vegetable" | "Herb" | "Fruit";
  sunlight: string;
  watering: string;
  harvestTime: string;
};

export const dataPlants: Plant[] = [
  {
    id: 1,
    name: "Tomato",
    scientificName: "Solanum lycopersicum",
    type: "Vegetable",
    sunlight: "Full sun",
    watering: "Regular",
    harvestTime: "60-80 days",
  },
  {
    id: 2,
    name: "Red Chili",
    scientificName: "Capsicum annuum",
    type: "Vegetable",
    sunlight: "Full sun",
    watering: "Moderate",
    harvestTime: "70-90 days",
  },
  {
    id: 3,
    name: "Eggplant",
    scientificName: "Solanum melongena",
    type: "Vegetable",
    sunlight: "Full sun",
    watering: "Moderate",
    harvestTime: "100-150 days",
  },
  {
    id: 4,
    name: "Ginger",
    scientificName: "Zingiber officinale",
    type: "Herb",
    sunlight: "Partial shade",
    watering: "Regular",
    harvestTime: "8-10 months",
  },
  {
    id: 5,
    name: "Lemongrass",
    scientificName: "Cymbopogon citratus",
    type: "Herb",
    sunlight: "Full sun",
    watering: "Moderate",
    harvestTime: "75-100 days",
  },
  {
    id: 6,
    name: "Guava",
    scientificName: "Psidium guajava",
    type: "Fruit",
    sunlight: "Full sun",
    watering: "Moderate",
    harvestTime: "2-4 years",
  },
  {
    id: 7,
    name: "Bok Choy",
    scientificName: "Brassica rapa subsp. chinensis",
    type: "Vegetable",
    sunlight: "Partial shade",
    watering: "Regular",
    harvestTime: "30-45 days",
  },
  {
    id: 8,
    name: "Water Spinach",
    scientificName: "Ipomoea aquatica",
    type: "Vegetable",
    sunlight: "Full sun to partial shade",
    watering: "Regular",
    harvestTime: "30-60 days",
  },
  {
    id: 9,
    name: "Bird's Eye Chili",
    scientificName: "Capsicum frutescens",
    type: "Vegetable",
    sunlight: "Full sun",
    watering: "Moderate",
    harvestTime: "90-120 days",
  },
  {
    id: 10,
    name: "Pandan",
    scientificName: "Pandanus amaryllifolius",
    type: "Herb",
    sunlight: "Partial shade",
    watering: "Regular",
    harvestTime: "6-12 months",
  },
];
