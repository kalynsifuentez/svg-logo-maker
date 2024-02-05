const fs = require("fs");
const inquirer = require("inquirer");
const { Circle } = require("./lib/shapes.js");

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
    // Ask what would I put here as an expected answer? Would you use inquirer?
  },
  {
    type: "input",
    name: "letters",
    message: "Enter 3 letters:",
    // How can I ensure the letters
  },
  {
    type: "input",
    name: "textcolor",
    message: "What color would you like the text to be?",
    // Ask what would I put here as an expected answer? Would you use inquirer?
  },
];

function writeToFile(fileName, data) {
  return fs.writeFileSync(fileName, data);
}

function init() {
  inquirer
    .prompt(questions)
    // json data is accepted as user and logged to the console
    .then((answers) => {
      if (answers.shape === "Circle") {
        const circle = new Circle(answers.shapecolor, );

        writeToFile("logo.svg", circle.render());
      } else if (answers.shape === "Square"){
        console.log("no square shapes available");
      }else{
        console.log("no triangle shapes available");
      }
    });
}
init();
