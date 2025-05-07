import { afterAll, beforeAll, describe, expect, it } from "@jest/globals";
import { prisma } from "../../src/database.js";
import supertest from "supertest";
import app from "../../src/index.js";
import { createBadges, deleteTables, disconnectDatabase } from "../helpers/helpers.js";

describe("when a user wants to access dashboard", () => {
  beforeAll(async () => {
    await deleteTables();
    await createBadges();
  });

  afterAll(async () => {
    await disconnectDatabase();
  });

  it("should be able to access dashboard and get data", async () => {
    const registerResponse = await supertest(app).post("/api/auth/register").send({
      email: "hansaputra14@gmail.com",
      password: "iyanjirhaha",
    });

    console.info(registerResponse.body);

    expect(registerResponse.status).toBe(200);
    expect(registerResponse.body).toEqual({
      status: 200,
      message: "Register Success",
      data: {
        id: expect.any(String),
        name: expect.any(String),
        email: "hansaputra14@gmail.com",
      },
    });

    const loginResponse = await supertest(app).post("/api/auth/login").send({
      email: "hansaputra14@gmail.com",
      password: "iyanjirhaha",
    });

    console.info(loginResponse.body);

    expect(loginResponse.status).toBe(200);
    expect(loginResponse.body).toEqual({
      status: 200,
      message: "Login Success",
      data: {
        id: expect.any(String),
        email: "hansaputra14@gmail.com",
        name: expect.any(String),
        token: expect.any(String),
      },
    });

    const setUserBadge = await prisma.user.update({
      where: {
        email: "hansaputra14@gmail.com",
      },
      data: {
        badges: {
          createMany: {
            data: [
              {
                badgeId: "badge_first_save",
              },
              {
                badgeId: "badge_saving_streak",
              },
            ],
          },
        },
      },
    });

    console.info(setUserBadge);

    const userId = loginResponse.body.data.id;

    const dashboardResponse = await supertest(app).get(`/api/users/${userId}/dashboard`).set("Authorization", `Bearer ${loginResponse.body.data.token}`);
  });

  it.todo("should not be able to access dashboard without authorization headers and without userId");
  it.todo("should not be able to access dashboard without authorization headers but with correct userId");
  it.todo("should not be able to access dashboard with wrong authorization value but with correct userId");
  it.todo("should not be able to access dashboard if the token is valid but belongs to a different user");
  it.todo("should not be able to access dashboard if the token is expired");
  it.todo("should not be able to access dashboard if the user does not exist");
  it.todo("should return 500 Internal Server Error if something goes wrong in the server");
});
