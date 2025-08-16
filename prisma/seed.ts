import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

await prisma.items.createMany({
  data: [{ name: "aaa", price: 11 }],
});
