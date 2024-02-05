const fs = require('fs');
const inquirer = require("inquirer");
const shapes = require("./lib/shapes.js");
const questions = [
{
    type: "list",
    name: "shape",
    message: "What shape would you like?",
    choices: ["Square", "Triangle", "Circle"],
},
{
    type: "input",
    name: "color",
    message: "What color would you like?",
    // Ask what would I put here as an expected answer?
    choices: ["Square", "Triangle", "Circle"],
},
{
    type: "input",
    name: "letters",
    message: "Enter 3 letters:",
    // How can I ensure the letters 
    input: [" ", " ", " "],
},
];

function writeToFile(fileName, data) {
    return fs.writeFileSync(fileName, data);
}

function init() {
    inquirer.prompt(questions).then((data) => {
        console.log(data);
        console.log("Create a Professional READ.md File...");
        writeToFile("./dist/", generateMarkdown(responses));
    });
}
init();