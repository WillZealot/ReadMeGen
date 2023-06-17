// TODO: Create a function that returns a license badge based on which license is passed in
function getLicenseBadge(license) {
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(data) {
  if(data.licenses == 'None'){
    return ``;
   } else {
    return `- [License](#license)`
   }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(data) {
 if(data.licenses == 'None'){
  return ``;
 } else {
  return `## Licenses
  ${data.licenses}`
 }
}

function generateMarkdown(data) {
  return `# ${data.title}

## Description

${data.description}

## Table of Contents

${data.tableOfContentsContent}
- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [Tests](#tests)
- [Credits](#credits)
${renderLicenseLink(data)}
- [Questions](#questions)

## Installation
${data.installation}

## Usage
${data.usage}

## Credits
${data.credits}

## Contributing
${data.contribute}

${renderLicenseSection(data)}

## Tests
${data.tests}

## Questions
${data.GitHub}
${data.Email}
`;
}

module.exports = generateMarkdown;
