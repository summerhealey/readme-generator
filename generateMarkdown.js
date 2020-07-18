// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  
  # Table of Contents
  * [Project Description](#project-description)
  * [Installation](#installation)
  * [Usage](#usage)
  * [Tests](#tests)
  * [License](#license)
  * [Contributions](#contributions)
  * [Questions](#questions)
  
  # Project Description
  ${data.description}
  
  # Installation
  ${data.installation}
  # Usage
  ${data.usage}
  # Tests
  ${data.tests}
  # License
  ${data.license}
  # Contributions
  ${data.contributors}
  # Questions
  If you have any questions, please contact the project owner by clicking on the email listed below.  
  
`;
}

module.exports = generateMarkdown;
