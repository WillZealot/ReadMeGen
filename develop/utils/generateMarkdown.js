  function getLicenseBadge(data) {
    let badge = '';
    const license = Array.isArray(data.licenses) ? data.licenses[0] : data.licenses;
    switch (license) {
      case 'None':
        break;
      case 'Apache License 2.0':
        badge = `[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`;
        break;
      case 'GNU General Public License v3.0':
        badge = `[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)`;
        break;
      case 'MIT License':
        badge = `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`;
        break;
      case 'BSD 2-Clause "Simplified" License':
        badge = `[![License](https://img.shields.io/badge/License-BSD_2--Clause-orange.svg)](https://opensource.org/licenses/BSD-2-Clause)`;
        break;
      case 'BSD 3-Clause "New" or "Revised" License':
        badge = `[![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)`;
        break;
      case 'Boost Software License 1.0':
        badge = `[![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)`;
        break;
      case 'Creative Commons Zero v1.0 Universal':
        badge = `[![License: CC0-1.0](https://licensebuttons.net/l/zero/1.0/80x15.png)](http://creativecommons.org/publicdomain/zero/1.0/)`;
        break;
      case 'Eclipse Public License 2.0':
        badge = `[![License](https://img.shields.io/badge/License-EPL_1.0-red.svg)](https://opensource.org/licenses/EPL-1.0)`;
        break;
      case 'Mozilla Public License 2.0':
        badge = `[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)`;
        break;
      case 'The Unlicense':
        badge = `[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)`;
        break;
      default:
        break;
    }
  
    return badge;
  }

function renderLicenseLink(data) {
  if(data.licenses == 'None'){
    return ``;
   } else {
    return `- [Licenses](#licenses)`
   }
}


function renderLicenseSection(data) {
  console.log('License:', data.licenses);
 if(data.licenses == 'None'){
  return ``;
 } else {
  const Badge = getLicenseBadge(data);
  return `## Licenses
${Badge}  
This project is licensed under the ${data.licenses}.
`;
 }
}

function generateMarkdown(data) {
  const Badge = getLicenseBadge(data);
  return `# ${data.title} 
${Badge}

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

## Tests
${data.tests}

${renderLicenseSection(data)}

## Questions
${data.GitHub}
${data.Email}
`;
}

module.exports = generateMarkdown;
