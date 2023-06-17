// TODO: Create a function that returns a license badge based on which license is passed in
function getLicenseBadge(license) {

}
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
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
- [Badges](#badges)
- [License](#license)
- [Credits](#credits)

## Installation
${data.installation}

## Usage
${data.usage}

## Credits
${data.credits}

## License
${data.licenses}

## Badges
${data.badges}

## Contributing
${data.contribute}

## Tests
${data.tests}
`;
}

module.exports = generateMarkdown;

module.exports = generateMarkdown;
