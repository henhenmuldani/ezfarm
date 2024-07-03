import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  const newCategory = await prisma.category.create({
    data: {
      name: "Fruits",
      description: "This is Fruits category",
    },
  });
  console.log({ newCategory });

  const allCategories = await prisma.category.findMany();
  console.log(allCategories);
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
