// installations
const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown");

// licenses
const apache = { text: "Licensed under the [Apache License](https://spdx.org/licenses/Apache-2.0.html).", badge: '[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)' };
const gnu    = { text: "Licensed under the [GNU GPLv3 License](https://spdx.org/licenses/GPL-3.0-or-later.html).", badge: '[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)'};
const mit    = { text: "Licensed under the [MIT License](https://spdx.org/licenses/MIT.html).", badge: '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)'};
const isc    = { text: "Licensed under the [ISC License](https://spdx.org/licenses/ISC.html).", badge: '[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)'};

// contributors
const yesContributors = "If you would like to contribute to this project, please follow the [Contributor Covenant Code of Conduct](https://www.contributor-covenant.org/version/2/0/code_of_conduct/) guidelines."
const noContributors  = "This project is currently not accepting any contributions."

// array of questions for user
const questions = [
    {
        type: "input",
        name: "name",
        message: "Enter your name:"
    },
    {
        type: "input",
        name: "title",
        message: "Enter the title of your project:"
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
    },
    {
        type: "input",
        name: "github",
        message: "Enter your GitHub username: "
    },
    {
        type: "input",
        name: "email",
        message: "Enter your email: "
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

    // check for which license the user picked
    if(answers.license === "Apache License 2.0"){
        answers.license = apache;
    } else if(answers.license === "GNU GPLv3"){
        answers.license = gnu;
    } else if(answers.license === "MIT"){
        answers.license = mit;
    } else if(answers.license === "ISC"){
        answers.license = isc;
    } else {
        answers.license = "This project is currently not licensed."
    }

    // check to see if user wants contributors
    if(answers.contributors === "Yes"){
        answers.contributors = yesContributors;
    } else {
        answers.contributors = noContributors;
    }

    writeToFile("goodREADME.md", answers)
}
)};
// function call to initialize program
init();
