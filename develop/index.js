const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('../develop/utils/generateMarkdown');

// Array of questions for user input
const questions = [
  { name: 'title', message: 'What is the title of your project?' },
  { name: 'description', message: 'Provide a description of your project.' },
  { name: 'usage', message: 'How do you use this application?' },
  { name: 'tableOfContentsContent', message: 'What would you like to add to your table of contents? If not, leave blank and press enter.' },
  { name: 'installation', message: 'How do you install this application?' },
  { name: 'credits', message: 'Who/What do you credit for creating this app?' },
  { name: 'features', message: 'List all your cool features!' },
  { name: 'contribute', message: 'How can others contribute? If not sure, visit "[Contributor Covenant](https://www.contributor-covenant.org/)"' },
  { name: 'licenses', message: 'What licenses did you use? if none just press enter !', type: 'checkbox', choices: [
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
  ]},
  { name: 'tests', message: 'Have you done any tests? If so, provide examples.' },
  { name: 'GitHub' ,message : 'Paste a link to your github profile so people can check you out!'},
  { name: 'Email' , message : 'Add your email with info on how anybody can reach you !'}
];

inquirer
  .prompt(questions)
  .then((answers) => {
    const markdownContent = generateMarkdown(answers);
    // You can do something with the generated markdown content here,
    // such as writing it to a file using fs.writeFile() or displaying it in the console.
    console.log(markdownContent);
    fs.writeFile('README.md', markdownContent, (err) => {
      if (err) {
        console.error('Error writing file:', err);
      } else {
        console.log('README.md file has been successfully generated.');
      }
    });
  })
  .catch((error) => {
    if (error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
    } else {
      // Something else went wrong
    }
  });