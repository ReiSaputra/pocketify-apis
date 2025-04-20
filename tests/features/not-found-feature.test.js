import { describe, expect, it } from "@jest/globals";
import supertest from "supertest";
import app from "../../src/index.js";

describe("when a user wants to access a route that does not exist", () => {
  it("should return 404 when GET", async () => {
    const response = await supertest(app).get("/api/auth/not-found");

    console.info(response.body);

    expect(response.status).toBe(404);
    expect(response.body).toEqual({
      status: 404,
      message: "Resource not found",
    });
  });

  it("should return 404 when POST", async () => {
    const response = await supertest(app).post("/api/auth/not-found").send({
      email: "fathurraihan@gmail.com",
      password: "lowbeforeknow",
    });

    console.info(response.body);

    expect(response.status).toBe(404);
    expect(response.body).toEqual({
      status: 404,
      message: "Resource not found",
    });
  });

  it("should return 404 when PUT", async () => {
    const response = await supertest(app).put("/api/auth/not-found").send({
      email: "fathurraihan@gmail.com",
      password: "lowbeforeknow",
    });

    console.info(response.body);

    expect(response.status).toBe(404);
    expect(response.body).toEqual({
      status: 404,
      message: "Resource not found",
    });
  });

  it("should return 404 when PATCH", async () => {
    const response = await supertest(app).put("/api/auth/not-found").send({
      email: "fathurraihan@gmail.com",
      password: "lowbeforeknow",
    });

    console.info(response.body);

    expect(response.status).toBe(404);
    expect(response.body).toEqual({
      status: 404,
      message: "Resource not found",
    });
  });

  it("should return 404 when DELETE", async () => {
    const response = await supertest(app).delete("/api/auth/not-found");

    console.info(response.body);

    expect(response.status).toBe(404);
    expect(response.body).toEqual({
      status: 404,
      message: "Resource not found",
    });
  });
});
