const fs = require('fs');
const inquirer = require('inquirer');

// Array of questions for user input
const questions = [
  { Title: 'What is the title of your project ?' },
  { Descr: 'Provide a description of your project..' },
  { TableCont: 'What would you like to add to your table of contents ? If Not Leave Leave Blank' },
  { Install: 'How do you install this application ?' },
  { Credit: 'Who/What do you credit for creating this app ?' },
  { Badges: 'Add Any Badge You May Have by pasting its link !' },
  { Features: 'List all your cool Features !' },
  { Contribute: 'How Can Others Contribute ? If Not Sure Visit "[Contributor Covenant](https://www.contributor-covenant.org/) "'},
  { licenses: 'What licenses Did You Use ?'},
  { Tests: 'Have you done any tests ? If so provide examples'},
];

const [
  { Title: title },
  { Descr: description },
  { TableCont: tableOfContentsContent },
  { Install: installation },
  { Credit: credits },
  { Badges: Badges },
  { Features: Feature},
  { Contribute: Contribute},
  { licenses: licenses},
  { Tests: test},
] = questions;

inquirer
  .prompt([
    {
      type: 'input',
      message: title,
      name: 'title',
    },
    {
      type: 'input',
      message: description,
      name: 'Description',
    },
    {
        type: 'input',
        message: tableOfContentsContent,
        name: 'TableContent',
      },
      {
        type: 'input',
        message: installation,
        name: 'install',
      },
      {
        type: 'input',
        message: credits,
        name: 'credits',
      },
      {
        type: 'checkbox',
        message: licenses,
        choices: [
          'None',
          'Apache License 2.0',
          'GNU General Public License v3.0',
          'MIT License',
          'BSD 2-Clause "Simplified" License',
          'BSD 3-Clause "New" or "Revised" License',
          'Boost Software License 1.0',
          'Creative Commons Zero v1.0 Universal',
          'Eclipse Public License 2.0',
          'GNU Affero General Public License v3.0',
          'GNU General Public License v2.0',
          'GNU Lesser General Public License v2.1',
          'Mozilla Public License 2.0',
          'The Unlicense'
        ],
        name: 'licenses',
      },
      {
        type: 'input',
        message: Badges,
        name: 'badges',
      },
      {
        type: 'input',
        message: Feature,
        name: 'features',
      },
      {
        type: 'input',
        message: Contribute,
        name: 'contribute?',
      },
      {
        type: 'input',
        message: test,
        name: 'tests',
      },
  ])
  .then((answers) => {
    fs.writeFile('bruh.md', JSON.stringify(answers), (err) =>
    err ? console.error(err) : console.log('written yipee!')
  );
  })
  .catch((error) => {
    if (error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
    } else {
      // Something else went wrong
    }
  });