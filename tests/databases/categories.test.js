import { afterAll, beforeAll, describe, test } from "@jest/globals";
import { prisma } from "../../src/database.js";

describe("When creating categories", () => {
  beforeAll(async () => {
    await prisma.categoriesPerUser.deleteMany();
    await prisma.category.deleteMany();
    await prisma.user.deleteMany();
  });

  it("should be able to create category with relations", async () => {
    const result = await prisma.category.create({
      data: {
        name: "Shopping",
        users: {
          create: {
            user: {
              create: {
                name: "Fathurraihan Saputra",
                email: "fthrn.s14@gmail.com",
                password: "123456",
              },
            },
          },
        },
      },
    });

    console.info(result);
  });
});
