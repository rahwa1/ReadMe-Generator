// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
const questions = [
    {
        name: 'installation',
        message: 'What are the steps required to install your project?',
        type: 'input'
    },
    {
        name: 'discription',
        message: 'Describe your application.',
        type: 'input'
    },
    {
        name: 'title',
        message: 'Provide the title of your project',
        type: 'input'
    },
    {
        name: 'usage',
        message: 'Provide instructions and examples for use:',
        type: 'input'
    },
    {
        name: 'credits',
        message: 'List your collaborators, if any',
        type: 'input'
    },
    {
        name: 'license',
        message: 'Choose a license for your project:',
        choices: ['MIT', 'Apache_2.0', 'GPL_3.0', 'None'],
        type: 'list'
    },
    {
        name: 'tests',
        message: 'Provide examples on how run some test for your application',
        type: 'input'
    },
    {
        name: 'contribute',
        message: 'Want other to contribute? Enter guidelines to do so.',
        type: 'input'
    },
    {
        name: 'github',
        message: 'What is your GitHub username?',
        type: 'input'
    },
    {
        name: 'email',
        message: 'What is your email address?',
        type: 'input'
    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {

    fs.writeFile(fileName, data, (err) =>

        err ? console.error(err) : console.log('You have successfully created your README File!')
    );
}

// TODO: Create a function to initialize app
function init() {
    inquirer
        .prompt(questions)
        .then(answers => {
            console.log(answers);
            const markDown = generateMarkdown(answers);
            writeToFile('NEW-README.md', markDown);
        })

}

// Function call to initialize app
init();
