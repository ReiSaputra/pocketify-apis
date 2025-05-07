import { describe, it, beforeAll, expect } from "@jest/globals";
import { prisma } from "../../src/database.js";
import { deleteTables } from "../helpers/delete-tables.js";

describe("When creating users", () => {
  beforeAll(async () => {
    await deleteTables();
    await createBadges();
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
          createMany: {
            data: [
              {
                name: "Pocket 1",
              },
              {
                name: "Pocket 2",
              },
            ],
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
        badges: {
          include: {
            badge: true,
          },
        },
        categories: {
          include: {
            category: true,
          },
        },
        pockets: true,
      },
    });

    console.info(JSON.stringify(result));

    expect(result).toMatchObject({
      name: "Easti Damayanti",
      email: "easti.damayanti@gmail.com",
      password: "123456",
      point: 100,
    });
  });

  it("should be able to find one user", async () => {
    const result = await prisma.user.findUnique({
      where: {
        email: "easti.damayanti@gmail.com",
      },
      include: {
        badges: {
          include: {
            badge: true,
          },
        },
        categories: {
          include: {
            category: true,
          },
        },
        pockets: true,
      },
    });

    console.info(JSON.stringify(result));

    expect(result).toMatchObject({
      name: "Easti Damayanti",
      email: "easti.damayanti@gmail.com",
      password: "123456",
      point: 100,
    });
  });

  it("should be able to find many users", async () => {
    const result = await prisma.user.findMany({
      include: {
        badges: {
          include: {
            badge: true,
          },
        },
        categories: {
          include: {
            category: true,
          },
        },
        pockets: true,
      },
    });

    console.info(result);
  });

  it("should be able to update one user", async () => {
    const result = await prisma.user.update({
      where: {
        email: "easti.damayanti@gmail.com",
      },
      data: {
        email: "eastId@gmail.com",
      },
    });

    console.info(result);

    expect(result).toMatchObject({
      email: "eastId@gmail.com",
    });
  });

  it.failing("should not be able to delete one user", async () => {
    const result = await prisma.user.delete({
      where: {
        email: "eastId@gmail.com",
      },
    });

    console.info(result);
  });

  it("should be able to delete one user", async () => {
    const result1 = await prisma.personBadge.deleteMany({
      where: {
        user: {
          email: "eastId@gmail.com",
        },
      },
    });

    const result2 = await prisma.pocket.deleteMany({
      where: {
        user: {
          email: "eastId@gmail.com",
        },
      },
    });

    const result3 = await prisma.categoriesPerUser.deleteMany({
      where: {
        user: {
          email: "eastId@gmail.com",
        },
      },
    });

    const result4 = await prisma.user.delete({
      where: {
        email: "eastId@gmail.com",
      },
    });

    console.info(result4);
  });
});
