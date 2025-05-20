import { afterAll, beforeAll, describe, expect, it } from "@jest/globals";
import { prisma } from "../../src/database.js";
import supertest from "supertest";
import app from "../../src/index.js";
import { createBadges, deleteTables, disconnectDatabase } from "../helpers/helpers.js";

describe("when a user wants to access pockets page", () => {
  beforeAll(async () => {
    await deleteTables();
    await createBadges();
  });

  afterAll(async () => {
    await deleteTables();
  });

  it("should be able to access pockets page and get data", async () => {
    const registerResponse = await supertest(app).post("/api/auth/register").send({
      email: "yukato@gmail.com",
      password: "yukasion",
    });

    const loginResponse = await supertest(app).post("/api/auth/login").send({
      email: "yukato@gmail.com",
      password: "yukasion",
    });

    const dashboardResponse = await supertest(app).get(`/api/users/${loginResponse.body.data.id}/dashboard`).set("Authorization", `Bearer ${loginResponse.body.data.token}`);

    console.info(dashboardResponse.body);

    const addPocketResponse1 = await supertest(app).post(`/api/users/${loginResponse.body.data.id}/pockets`).set("Authorization", `Bearer ${loginResponse.body.data.token}`).send({
      name: "My Pocket 1",
      description: "My Pocket 1 Description",
      balance: 0,
      targetDate: new Date(),
    });

    const addPocketResponse2 = await supertest(app).post(`/api/users/${loginResponse.body.data.id}/pockets`).set("Authorization", `Bearer ${loginResponse.body.data.token}`).send({
      name: "My Pocket 2",
      description: "My Pocket 2 Description",
      balance: 0,
      targetDate: new Date(),
    });

    const addPocketResponse3 = await supertest(app).post(`/api/users/${loginResponse.body.data.id}/pockets`).set("Authorization", `Bearer ${loginResponse.body.data.token}`).send({
      name: "My Pocket 3",
      description: "My Pocket 3 Description",
      balance: 0,
      targetDate: new Date(),
    });

    const addPocketResponse4 = await supertest(app).post(`/api/users/${loginResponse.body.data.id}/pockets`).set("Authorization", `Bearer ${loginResponse.body.data.token}`).send({
      name: "My Pocket 4",
      description: "My Pocket 4 Description",
      balance: 0,
      targetDate: new Date(),
    });

    const addPocketResponse5 = await supertest(app).post(`/api/users/${loginResponse.body.data.id}/pockets`).set("Authorization", `Bearer ${loginResponse.body.data.token}`).send({
      name: "My Pocket 5",
      description: "My Pocket 5 Description",
      balance: 0,
      targetDate: new Date(),
    });

    const addPocketResponse6 = await supertest(app).post(`/api/users/${loginResponse.body.data.id}/pockets`).set("Authorization", `Bearer ${loginResponse.body.data.token}`).send({
      name: "My Pocket 6",
      description: "My Pocket 6 Description",
      balance: 0,
      targetDate: new Date(),
    });

    const addPocketResponse7 = await supertest(app).post(`/api/users/${loginResponse.body.data.id}/pockets`).set("Authorization", `Bearer ${loginResponse.body.data.token}`).send({
      name: "My Pocket 7",
      description: "My Pocket 7 Description",
      balance: 0,
      targetDate: new Date(),
    });

    const addPocketResponse8 = await supertest(app).post(`/api/users/${loginResponse.body.data.id}/pockets`).set("Authorization", `Bearer ${loginResponse.body.data.token}`).send({
      name: "My Pocket 8",
      description: "My Pocket 8 Description",
      balance: 0,
      targetDate: new Date(),
    });

    const addPocketResponse9 = await supertest(app).post(`/api/users/${loginResponse.body.data.id}/pockets`).set("Authorization", `Bearer ${loginResponse.body.data.token}`).send({
      name: "My Pocket 9",
      description: "My Pocket 9 Description",
      balance: 0,
      targetDate: new Date(),
    });

    const addPocketResponse10 = await supertest(app).post(`/api/users/${loginResponse.body.data.id}/pockets`).set("Authorization", `Bearer ${loginResponse.body.data.token}`).send({
      name: "My Pocket 10",
      description: "My Pocket 10 Description",
      balance: 0,
      targetDate: new Date(),
    });

    console.info(addPocketResponse1.body);
    console.info(addPocketResponse2.body);
    console.info(addPocketResponse3.body);
    console.info(addPocketResponse4.body);
    console.info(addPocketResponse5.body);
    console.info(addPocketResponse6.body);
    console.info(addPocketResponse7.body);
    console.info(addPocketResponse8.body);
    console.info(addPocketResponse9.body);
    console.info(addPocketResponse10.body);

    const pocketResponse = await supertest(app).get(`/api/users/${loginResponse.body.data.id}/pockets`).set("Authorization", `Bearer ${loginResponse.body.data.token}`);

    console.info(pocketResponse.body);

    expect(pocketResponse.status).toBe(200);
    expect(pocketResponse.body).toMatchObject({
      status: 200,
      message: "Get User's pockets data Success",
    });
  });
});
