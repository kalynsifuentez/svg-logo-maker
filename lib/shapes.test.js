const { Circle } = require("./shapes");
const { Triangle } = require("./shapes");
const { Square } = require("./shapes");

describe("Circle", () => {
  it("returns the circle svg", () => {
    const circle = new Circle()
    expect(circle.render()).toBe(`<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"><circle cx="150" cy="100" r="80" fill="${this.shapeColor}" /><text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.letters}">${this.textColor}</text></svg>`);
  });
});
describe("Triangle", () => {
  it("returns the triangle svg", () => {
    const triangle = new Triangle()
    expect(triangle.render()).toBe(`<svg version="1.1" width="300" height="300" xmlns="http://www.w3.org/2000/svg"><polygon points="150, 18 244, 182 56, 182" fill="${this.shapeColor}"/><text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.letters}">${this.textColor}</text></svg>`);
  });
});
describe("Square", () => {
  it("returns the square svg", () => {
    const square = new Square()
    expect(square.render()).toBe(`<svg version="1.1" width="300" height="300" xmlns="http://www.w3.org/2000/svg"><rect x="50" y="10" width="200" height="200" fill="${this.shapeColor}"/><text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.letters}">${this.textColor}</text></svg>`);
  });
});
