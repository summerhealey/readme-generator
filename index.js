const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./generateMarkdown");

// array of questions for user
const questions = [
    {
        type: "input",
        name: "title",
        message: "What is the name of your project?"
    },
    {
        type: "input",
        name: "description",
        message:  "Please provide a brief description of your project."
    },
    {
        type: "input",
        name: "installation",
        message:  "What do you need to install in order for your application to work?"
    },
    {
        type: "input",
        name: "usage",
        message:  "How do you use your application?"
    },
    {
        type: "input",
        name: "tests",
        message:  "How would you run tests on this project?"
    },
    {
        type: "list",
        name: "license",
        message: "Choose a license (if project is open sourced, please choose 'none' from the list below).",
        choices: [
            "Apache License 2.0",
            "GNU GPLv3",
            "MIT",
            "ISC",
            "None"
        ]
    },
    {
        type: "list",
        name: "contributors",
        message: "Would you like other developers to contribute to your project?",
        choices: [
            "Yes",
            "No"
        ]
    }
];

// function to write README file
function writeToFile(fileName, data) {
    fs.writeFileSync(fileName, generateMarkdown(data));

}

// function to initialize program
function init() {
inquirer.prompt(questions).then(function(answers){
    console.log(answers);
    writeToFile("README.md", answers)
}
)};
// function call to initialize program
init();
