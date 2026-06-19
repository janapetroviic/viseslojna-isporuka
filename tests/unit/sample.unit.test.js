function saberi(a, b) {
  return a + b;
}

describe("Unit Tests", () => {
  test("Sabiranje dva broja ispravno radi", () => {
    expect(saberi(2, 3)).toBe(5);
  });
});
