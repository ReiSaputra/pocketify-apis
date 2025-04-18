import { describe, it, beforeAll, expect } from "@jest/globals";
import { prisma } from "../../src/database.js";

describe("When creating users", () => {
  beforeAll(async () => {
    await prisma.personBadge.deleteMany();
    await prisma.categoriesPerUser.deleteMany();
    await prisma.pocket.deleteMany();
    await prisma.badge.deleteMany();
    await prisma.category.deleteMany();
    await prisma.user.deleteMany();
  });

  it("should be able to create one user", async () => {
    const result = await prisma.user.create({
      data: {
        name: "Fathurraihan Saputra",
        email: "fthrn.s14@gmail.com",
        password: "123456",
      },
    });

    console.info(result);

    expect(result).not.toBeNull();
    expect(result).toMatchObject({
      name: "Fathurraihan Saputra",
      email: "fthrn.s14@gmail.com",
      password: "123456",
    });
  });

  it.failing("should not be able to create duplicate user", async () => {
    const result = await prisma.user.create({
      data: {
        name: "Rafal Saputra",
        email: "fthrn.s14@gmail.com",
        password: "123456",
      },
    });

    console.info(result);

    expect(result).toBeNull();
  });

  it("should be able to create many users", async () => {
    const result = await prisma.user.createMany({
      data: [
        {
          name: "Jolenta Saputra",
          email: "joolen31@gmail.com",
          password: "123456",
        },
        {
          name: "Nowak Saputra",
          email: "nowak53@gmail.com",
          password: "123456",
        },
      ],
    });

    console.info(result);

    expect(result).not.toBeNull();
    expect(result).toMatchObject({
      count: 2,
    });
  });

  it("should be able to create one user with relations", async () => {
    const result = await prisma.user.create({
      data: {
        name: "Easti Damayanti",
        email: "easti.damayanti@gmail.com",
        password: "123456",
        categories: {
          create: {
            category: {
              create: {
                name: "Shopping",
              },
            },
          },
        },
        pockets: {
          create: {
            name: "Goal 1",
          },
        },
        badges: {
          create: {
            badge: {
              create: {
                name: "Badge 1",
              },
            },
          },
        },
        point: 100,
      },
      include: {
        badges: true,
        categories: true,
        pockets: true,
      }
    });

    console.info(result);
  });

  it("should be able to find one user", async () => {
    const result = await prisma.user.findU
  })
});
