import prisma from "./prisma.js";

async function main() {
  await prisma.item.deleteMany();
  await prisma.item.createMany({
    data: [
      {
        title: "Homes protected baseline",
        amount: 8000,
        status: "verified",
        wallet: "system",
      },
      {
        title: "Sponsor resilient housing pilot queue",
        amount: 3360,
        status: "pending",
        wallet: "system",
      },
    ],
  });
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (error) => {
    console.error(error);
    await prisma.$disconnect();
    process.exit(1);
  });
