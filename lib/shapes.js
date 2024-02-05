class Shape {
    constructor(shapeColor, textColor, letters) {
      this.shapeColor = shapeColor
      
    }
  }

  class Circle extends Shape{
    render(){
      return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"><circle cx="150" cy="100" r="80" fill="${this.shapeColor}" /><text x="150" y="125" font-size="60" text-anchor="middle" fill="white">SVG</text></svg>`
    }
  }

  class Triangle extends Shape{

  }

  class Square extends Shape{

  }

  // const circle = new Circle('blue', 'white', 'KS')
 

  // console.log(circle.render());

    //     if (//////) {

    
    module.exports = {Circle};
       
