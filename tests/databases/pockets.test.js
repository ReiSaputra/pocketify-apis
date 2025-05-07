import { beforeAll, describe, expect, test } from "@jest/globals";
import { createUsers, deleteTables } from "../helpers/helpers.js";
import { prisma } from "../../src/database.js";

describe("when creating pockets", () => {
  let userId;

  beforeAll(async () => {
    await deleteTables();
    await createUsers();
  });

  it("should be able to create one pocket with histories in it", async () => {
    const result = await prisma.pocket.create({
      data: {
        name: "Pocket 1",
        balance: 0,
        user: {
          connect: {
            email: "kimad4@gmail.com",
          },
        },
        pocketHistories: {
          create: {
            amount: 10000,
            type: "INCOME",
            description: "Salary",
          },
        },
      },
      include: {
        pocketHistories: true,
      },
    });

    console.info(result);

    expect(result).toMatchObject({
      id: expect.any(String),
      name: "Pocket 1",
      balance: 0,
      userId: expect.any(String),
      pocketHistories: [
        {
          id: expect.any(String),
          amount: 10000,
          type: "INCOME",
          description: "Salary",
          createdAt: expect.any(Date),
          pocketId: expect.any(String),
        },
      ],
    });

    userId = result.userId;
  });

  it("should be able to create two pockets with the same name and with the same user", async () => {
    const result = await prisma.pocket.createMany({
      data: [
        {
          name: "Pocket 2",
          balance: 0,
          userId: userId,
        },
        {
          name: "Pocket 2",
          balance: 0,
          userId: userId,
        },
      ],
    });

    console.info(result);

    expect(result.count).toBe(2);
  });
});
