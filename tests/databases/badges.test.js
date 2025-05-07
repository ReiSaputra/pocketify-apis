import { beforeAll, describe, expect, it } from "@jest/globals";
import { prisma } from "../../src/database.js";
import { deleteTables } from "../helpers/helpers.js";

describe("When creating badges", () => {
  beforeAll(async () => {
    await deleteTables();
  });

  it("should be able to create one badge", async () => {
    const result = await prisma.badge.create({
      data: {
        id: "beginner_saver",
        name: "Journey starts here!",
        description: "Create your first Pocket",
        icon: "./public/assets/beginner_saver.png",
      },
    });

    console.info(result);

    expect(result.id).toBe("beginner_saver");
    expect(result.name).toBe("Journey starts here!");
    expect(result.description).toBe("Create your first Pocket");
    expect(result.icon).toBe("./public/assets/beginner_saver.png");
  });

  it.failing("should not be able to create duplicate badge", async () => {
    const result = await prisma.badge.create({
      data: {
        id: "beginner_saver",
        name: "Journey starts here!",
        description: "Create your first Pocket",
        icon: "./public/assets/beginner_saver.png",
      },
    });

    console.info(result);
  });

  it("should be able to create many badges", async () => {
    const result = await prisma.badge.createMany({
      data: [
        {
          id: "streak_saver_7d",
          name: "Diligent Adventurer",
          description: "Save 7 days in a row",
          icon: "./public/assets/streak_saver_7d.png",
        },
        {
          id: "gold_hoarder",
          name: "Treasure Collector",
          description: "Achieve 1.000.000 points.",
          icon: "./public/assets/gold_hoarder.png",
        },
      ],
    });

    console.info(result);

    expect(result.count).toBe(2);
  });

  it("should be able to find one badge", async () => {
    const result = await prisma.badge.findUnique({
      where: {
        id: "beginner_saver",
      },
    });

    console.info(result);

    expect(result.name).toBe("Journey starts here!");
    expect(result.description).toBe("Create your first Pocket");
    expect(result.icon).toBe("./public/assets/beginner_saver.png");
  });

  it("should be able to find many badges", async () => {
    const result = await prisma.badge.findMany();

    console.info(result);

    expect(result.length).toBe(3);
  });

  it("should be able to insert badge on user", async () => {
    const resultName = await prisma.user.create({
      data: {
        name: "Fathurraihan Saputra",
        email: "fthrn.s14@gmail.com",
        password: "123456",
      },
    });

    const result = await prisma.personBadge.create({
      data: {
        userId: resultName.id,
        badgeId: "beginner_saver",
      },
    });

    console.info(result);

    expect(result.userId).toBe(resultName.id);
    expect(result.badgeId).toBe("beginner_saver");
  });

  it("should be able to find users who has badges", async () => {
    const result = await prisma.personBadge.findMany({
      select: {
        userId: true,
        badgeId: true,
      },
    });

    console.info(result);
  });
});
