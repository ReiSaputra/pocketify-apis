import { describe, expect, it, beforeAll, afterAll } from "@jest/globals";
import app from "../../src/index.js";
import supertest from "supertest";
import { prisma } from "../../src/database.js";

describe("when a new user wants to register", () => {
  beforeAll(async () => {
    await prisma.categoriesPerUser.deleteMany();
    await prisma.personBadge.deleteMany();
    await prisma.badge.deleteMany();
    await prisma.category.deleteMany();
    await prisma.pocket.deleteMany();
    await prisma.user.deleteMany();
  });
  it("should be able to create one user", async () => {
    const response = await supertest(app).post("/api/auth/register").send({
      email: "fathurraihan@gmail.com",
      password: "lowbeforeknow",
    });

    console.info(response.body);

    expect(response.body).toEqual({
      status: 200,
      message: "Register Success",
      data: {
        id: expect.any(String),
        email: "fathurraihan@gmail.com",
      },
    });
  });

  it("should not be able to create one user just only email", async () => {
    const response = await supertest(app).post("/api/auth/register").send({
      email: "hansaputra@gmail.com",
    });

    console.info(response.body);

    expect(response.body).toEqual({
      status: 400,
      message: '"password" is required',
    });
  });

  it("should not be able to create one user just only password", async () => {
    const response = await supertest(app).post("/api/auth/register").send({
      password: "1234567",
    });

    console.info(response.body);

    expect(response.body).toEqual({
      status: 400,
      message: '"email" is required',
    });
  });

  it("should not be able to create one user with duplicate email", async () => {
    const response = await supertest(app).post("/api/auth/register").send({
      email: "fathurraihan@gmail.com",
      password: "duplicate",
    });

    console.info(response.body);

    expect(response.body).toEqual({
      status: 400,
      message: "User already exists",
    });
  });

  it("should not be able to create one user with not valid password (min length)", async () => {
    const response = await supertest(app).post("/api/auth/register").send({
      email: "fathurrai@gmail.com",
      password: "123",
    });

    console.info(response.body);

    expect(response.body).toEqual({
      status: 400,
      message: '"password" length must be at least 7 characters long',
    });
  });

  it("should not be able to create one user with not valid password (max length)", async () => {
    const response = await supertest(app).post("/api/auth/register").send({
      email: "fathurraihan@gmail.com",
      password: "123naslkdansdlkndlndlknsalsanfldalvml vsfmv mv dcandsadnsakjdnsadjnsd",
    });

    console.info(response.body);

    expect(response.body).toEqual({
      status: 400,
      message: '"password" length must be less than or equal to 50 characters long',
    });
  });

  it("should not be able to create one user with not valid password (just '')", async () => {
    const response = await supertest(app).post("/api/auth/register").send({
      email: "eastiii@gmail.com",
      password: "",
    });

    console.info(response.body);

    expect(response.body).toEqual({
      status: 400,
      message: '"password" is not allowed to be empty',
    });
  });

  it("should not be able to create one user with not valid email (not email)", async () => {
    const response = await supertest(app).post("/api/auth/register").send({
      email: "fathurraihan",
      password: "12345678",
    });

    console.info(response.body);

    expect(response.body).toEqual({
      status: 400,
      message: expect.stringContaining('"email" must be a valid email'),
    });
  });

  it("should not be able to create one user with not valid email (just '')", async () => {
    const response = await supertest(app).post("/api/auth/register").send({
      email: "",
      password: "12345678",
    });

    console.info(response.body);

    expect(response.body).toEqual({
      status: 400,
      message: '"email" is not allowed to be empty',
    });
  });
});

describe("when a user wants to login", () => {
  it.todo("should be able to login");
  it.todo("should not be able to login with wrong email and password");
  it.todo("should not be able to login with wrong email");
  it.todo("should not be able to login with wrong password");
  it.todo("should not be able to login without email and password");
  it.todo("should not be able to login without email");
  it.todo("should not be able to login without password");
  it.todo("should not be able to login with not valid email (not email)");
  it.todo("should not be able to login with not valid email (just '')");
  it.todo("should not be able to login with not valid password (min length)");
  it.todo("should not be able to login with not valid password (max length)");
  it.todo("should not be able to login with not valid password (just '')");
});
