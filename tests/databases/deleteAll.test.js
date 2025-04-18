import { beforeAll, describe, test } from "@jest/globals";
import { prisma } from "../../src/database.js";

describe("when deleting all datas on tables", () => {
  test("should be able to delete all datas", async () => {
    await prisma.categoriesPerUser.deleteMany();
    await prisma.personBadge.deleteMany();
    await prisma.badge.deleteMany();
    await prisma.category.deleteMany();
    await prisma.pocket.deleteMany();
    await prisma.user.deleteMany();
  });
});
