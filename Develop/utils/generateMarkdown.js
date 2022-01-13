// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  const MIT = '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)'
  const GPL = '[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)'
  const APACHE = '[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)'

  if (license === 'MIT') {
    return MIT;
  } else if (license === 'GPL 3.0') {
    return GPL;
  } else if (license === 'APACHE') {
    return APACHE;
  } else if (license === 'None') {
    return '';
  }

}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {


}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license) {
    return `This project is licensed through ${license} license.`;
  } else {
    return '';
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  ${renderLicenseBadge(data.license)}
## Description
  ${data.discription}
## Table of Contents
  * [Installation](#installation)
  * [Usage](#usage)
  * [Contributing](#contributing)
  * [Tests](#tests)
  * [Questions](#questions)
## Installation
  ${data.installation}
## Usage
  ${data.usage}
${renderLicenseSection(data.license)}
## Contributing
  ${data.contribute}
## Tests
  ${data.tests}
## Questions
Github: ${data.github}
Contact me on my email for any questions: ${data.email}

`;
}

module.exports = generateMarkdown;
