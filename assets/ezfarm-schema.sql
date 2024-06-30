CREATE TABLE "plants" (
  "id" integer PRIMARY KEY,
  "name" varchar(100),
  "scientificName" varchar(100),
  "sunlight" varchar(100),
  "watering" varchar(100),
  "harvestTime" varchar(100),
  "created_at" datetime,
  "updated_at" datetime,
  "category_id" integer
);

CREATE TABLE "categories" (
  "id" integer PRIMARY KEY,
  "name" varchar(100),
  "description" varchar(100),
  "created_at" datetime,
  "updated_at" datetime
);

ALTER TABLE "plants" ADD FOREIGN KEY ("category_id") REFERENCES "categories" ("id");
