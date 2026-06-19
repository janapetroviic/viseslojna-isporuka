const request = require("supertest");
const { app } = require("../../server");

describe("Integration Tests", () => {
  test("GET / vraća status 200", async () => {
    const res = await request(app).get("/");
    expect(res.statusCode).toEqual(200);
    expect(res.text).toBe("Aplikacija radi uspešno!");
  });

  test("GET /api/provera sa dobrim parametrom vraća 200 i JSON", async () => {
    const res = await request(app).get("/api/provera?unos=Testiranje");
    expect(res.statusCode).toEqual(200);
    expect(res.body.status).toBe("uspeh");
  });

  test("GET /api/provera sa lošim parametrom vraća 400", async () => {
    const res = await request(app).get("/api/provera?unos=ne");
    expect(res.statusCode).toEqual(400);
    expect(res.body.status).toBe("greska");
  });
});
