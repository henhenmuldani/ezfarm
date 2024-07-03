-- CreateTable
CREATE TABLE "Plant" (
    "id" TEXT NOT NULL,
    "name" VARCHAR(255) NOT NULL,
    "scientificName" VARCHAR(255) NOT NULL,
    "sunlight" VARCHAR(255) NOT NULL,
    "watering" VARCHAR(255) NOT NULL,
    "harvestTime" VARCHAR(255) NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Plant_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Category" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(255) NOT NULL,
    "description" VARCHAR(255) NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Category_pkey" PRIMARY KEY ("id")
);
