import { PrismaClient } from "../generated/prisma/client"; // Adjust the import path as necessary

const prisma = new PrismaClient();

import * as XLSX from "xlsx";

// Load the Excel file
const workbook = XLSX.readFile("./prisma/Data.xlsx");

// Pick the first sheet
const sheetName = workbook.SheetNames[0];
const sheet = workbook.Sheets[sheetName];

// Convert sheet to JSON
const data = XLSX.utils.sheet_to_json(sheet);

console.log(data);

// async function main() {
//   await prisma.item.create({
//     data: {
//       name: "Sample Item",
//       price: 19.99,
//     },
//   });
// }

await prisma.item.createMany({
  data: data as any[], // Ensure the data matches your Prisma schema),
});

// main()
//   .then(() => {
//     console.log("Seeding done!");
//   })
//   .catch((e) => {
//     console.error(e);
//     process.exit(1);
//   })
//   .finally(async () => {
//     await prisma.$disconnect();
//   });
