const { expect } = require("@jest/globals");
const battleship = require("battleship");

test("Return a battleship object to coordonates x = 0, y = 0", () => {
  expect(battleship("destroyer", 0, 0)).toEqual(expect.objectContaining({
    ship: "destroyer",
    x: 0,
    y: 0
  }));
});