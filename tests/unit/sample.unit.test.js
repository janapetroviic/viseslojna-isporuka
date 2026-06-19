const { isValidText } = require("../../server");

function saberi(a, b) {
  return a + b;
}

describe("Unit Tests", () => {
  test("Sabiranje dva broja ispravno radi", () => {
    expect(saberi(2, 3)).toBe(5);
  });

  test("isValidText vraća true za validan string", () => {
    expect(isValidText("DevOps")).toBe(true);
  });

  test("isValidText vraća false za prekratak string ili pogrešan tip", () => {
    expect(isValidText("ok")).toBe(false);
    expect(isValidText(123)).toBe(false);
  });
});
