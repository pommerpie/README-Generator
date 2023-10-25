// TODO: Include packages needed for this application
const inquirer = require('inquirer')
const fs = require('fs')
const generateMarkdown = require('./utils/generateMarkdown')

// TODO: Create an array of questions for user input
const questions = [{
    type: 'input',
    message: 'What is the title of your project?',
    name: 'title',
    validate: input => (input.trim() === '') ? 'This answer is required, Please enter the title of your project!!' : true
},
{
    type: 'input',
    message: 'Write a description for your project.',
    name: 'desc'
},
{
    type: 'input',
    message: 'What installations are necessary for this program to run?',
    name: 'install'
},
{
    type: 'list',
    message: 'What license is being used?',
    choices: ['MIT', 'Apache', 'Mozilla Public license', 'GNU general public license v3.0', 'BDS 3-clause license'],
    name: 'license'
},
{
    type: 'input',
    message: 'How do you use this app?',
    name: 'usage'
},
{
    type: 'input',
    message: 'Who contributed to this project?',
    name: 'cont'
},
{
    type: 'input',
    message: 'How would you test your app?',
    name: 'test'
},
{
    type: 'input',
    message: 'What is your Github username?',
    name: 'username',
    validate: input => (input.trim() === '') ? 'This answer is required, Please enter the title of your project!!' : true
},
{
    type: 'input',
    message: 'What is your email?',
    name: 'email',
    validate: input => (!input.includes('@'))? 'Not a valid email' : true
}
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
