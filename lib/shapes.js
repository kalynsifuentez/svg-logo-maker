class Shape {
  constructor(shapeColor, textColor, letters) {
    this.shapeColor = shapeColor;
    this.textColor = textColor;
    this.letters = letters;
  }
}

class Circle extends Shape {
  render() {
    return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"><circle cx="150" cy="100" r="80" fill="${this.shapeColor}" /><text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.letters}">${this.textColor}</text></svg>`;
  }
}

class Triangle extends Shape {
  render() {
    return `<svg version="1.1" width="300" height="300" xmlns="http://www.w3.org/2000/svg"><polygon points="150,10 290,190 20,190" fill="${this.shapeColor}"/><text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.letters}">${this.textColor}</text></svg>`;
  }
}

class Square extends Shape {
  render() {
    return `<svg version="1.1" width="300" height="300" xmlns="http://www.w3.org/2000/svg"><rect x="50" y="10" width="200" height="200" fill="${this.shapeColor}"/><text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.letters}">${this.textColor}</text></svg>`;
  }
}

module.exports = { Circle, Triangle, Square };
