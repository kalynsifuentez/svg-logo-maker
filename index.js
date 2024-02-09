//Declared variables for ffile system, inquirer, shapes, and questions
const fs = require("fs");
const inquirer = require("inquirer");
const { Circle } = require("./lib/shapes.js");
const { Triangle } = require("./lib/shapes.js");
const { Square } = require("./lib/shapes.js");

const questions = [
  {
    type: "list",
    name: "shape",
    message: "What shape would you like?",
    choices: ["Square", "Triangle", "Circle"],
  },
  {
    type: "input",
    name: "shapecolor",
    message: "What color would you like this shape to be?",
  },
  {
    type: "input",
    name: "letters",
    message: "Enter 3 letters:",
  },
  {
    type: "input",
    name: "textcolor",
    message: "What color would you like the text to be?",
  },
];

//Function to write files
function writeToFile(fileName, data) {
  return fs.writeFileSync(fileName, data);
}

//Function provides prompts for questions about the type of logo user wants to create then writes the svg file.
function init() {
  inquirer
    .prompt(questions)
    // json data is accepted as user and logged to the console
    .then((answers) => {
      if (answers.shape === "Circle") {
        const circle = new Circle(
          answers.shapecolor,
          answers.letters,
          answers.textcolor
        );
        writeToFile("logo.svg", circle.render());
      } else if (answers.shape === "Square") {
        const square = new Square(
          answers.shapecolor,
          answers.letters,
          answers.textcolor
        );
        writeToFile("logo.svg", square.render());
      } else if (answers.shape === "Triangle") {
        const triangle = new Triangle(
          answers.shapecolor,
          answers.letters,
          answers.textcolor
        );
        writeToFile("logo.svg", triangle.render());
      }
    });
}
init();
