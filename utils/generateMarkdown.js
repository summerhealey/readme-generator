// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title} ${data.license.badge}
  
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
  ${data.license.text}
  # Contributions
  ${data.contributors}
  # Questions
  For additional information, please e-mail the project manager [${data.name}](https://github.com/${data.github}/): ${data.email}.  
  
`;
}

module.exports = generateMarkdown;
