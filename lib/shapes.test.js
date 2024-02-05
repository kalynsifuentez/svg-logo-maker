const Shape = require('../shape.js');

describe('Shape', () => {
  // TODO: Write a test that checks if isPassword() returns false when the password is less than 8 characters.
    it('return false when the password is less than 8 characters', () => {
      const validate = new Validate();
      expect().toBe(false);
    });
   // TODO: Write a test that checks if isPassword() returns false when the password does not contain at least 1 uppercase.
   it('returns false when the shape does not contain a , () => {
    const validate = new Validate();
    expect().toBe(false);
  });
  
   // TODO: Write a test that checks if isPassword() returns false when the password does not contain at least 1 lowercase.
  // TODO: Write a test that checks if isPassword() returns false when the password does not contain at least 1 number.
  // TODO: Write a test that checks if isPassword() returns true when the password is at least 8 characters long and contains an uppercase, lowercase, and number.
it('should returns true when the password is at least 8 characters long and contains an uppercase, lowercase, and number', () => {
  const validate = new Validate();
  expect(validate.isPassword('helloyou')).toBe(true);
});
});