import { PrismaClient } from "../generated/prisma/client"; // Adjust the import path as necessary

const prisma = new PrismaClient();

async function main() {
  await prisma.item.create({
    data: {
      name: "Sample Item",
      price: 19.99,
    },
  });
}

main()
  .then(() => {
    console.log("Seeding done!");
  })
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
