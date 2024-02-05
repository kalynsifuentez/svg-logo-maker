const { Circle } = require("./shapes");
//

describe("Circle", () => {
  it("returns the circle svg", () => {
    const circle = new Circle('blue', 'white', 'KS')
    expect(circle.render()).toBe(`<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"><circle cx="150" cy="100" r="80" fill="blue" /><text x="150" y="125" font-size="60" text-anchor="middle" fill="white">SVG</text></svg>`);
  });
});
//   // TODO: Write a test that checks if isPassword() returns false when the password is less than 8 characters.
//     it('return false when the password is less than 8 characters', () => {
//       const validate = new Validate();
//       expect().toBe(false);
//     });
//    // TODO: Write a test that checks if isPassword() returns false when the password does not contain at least 1 uppercase.
//    it('returns false when the shape does not contain a , () => {
//     const validate = new Validate();
//     expect().toBe(false);
//   });

//    // TODO: Write a test that checks if isPassword() returns false when the password does not contain at least 1 lowercase.
//   // TODO: Write a test that checks if isPassword() returns false when the password does not contain at least 1 number.
//   // TODO: Write a test that checks if isPassword() returns true when the password is at least 8 characters long and contains an uppercase, lowercase, and number.
// it('should returns true when the password is at least 8 characters long and contains an uppercase, lowercase, and number', () => {
//   const validate = new Validate();
//   expect(validate.isPassword('helloyou')).toBe(true);
// });
// });
