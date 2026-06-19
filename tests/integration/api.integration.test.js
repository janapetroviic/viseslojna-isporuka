const request = require("supertest");
const app = require("../../server");

describe("Integration Tests", () => {
  test("GET / vraća status 200", async () => {
    const res = await request(app).get("/");
    expect(res.statusCode).toEqual(200);
    expect(res.text).toBe("Aplikacija radi uspešno!");
  });
});
