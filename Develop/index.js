// TODO: Include packages needed for this application
const inquirer = require('inquirer')
const fs = require('fs')
const genMarkdown = require('./utils/generateMarkdown')


// TODO: Create an array of questions for user input
const questions = [{
    type: 'input',
    message: 'What is the title of your project?',
    name: 'title',
},
{
    type: 'input',
    message: 'Write a description of your project.',
    name: 'desc'
},
{
    type: 'input',
    message: 'What installations are necessary for your project to run?',
    name: 'install'
},
{
    type: 'input',
    message: 'How is this application used?',
    name: 'usage'
},
{
    type: 'input',
    message: 'Who else contributed to this project?',
    name: 'cont'
},
{
    type: 'input',
    message: 'How would you test this application?',
    name: 'test'
},
{
    type: 'list',
    message: 'Which license was used?',
    choices: ['MIT', 'Apache', 'Mozilla Public license', 'GNU general public license v3.0', 'BDS 3-clause license'],
    name: 'license'
},
{
    type: 'input',
    message: 'Please enter your Github username.',
    name: 'user',
},
{
    type: 'input',
    message: 'What is your email',
    name: 'email',
}
];


// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err)=> {
        if(err){
            console.log(err)
        } else {
            console.log('README generated successfully.')
        }
        
    })
 }

// TODO: Create a function to initialize app
function init() { 
    inquirer.prompt(questions)
    .then((answers) => {
        const fileName = 'README.md'
        const data = genMarkdown(answers)
        writeToFile(fileName, data)
    })
}

// Function call to initialize app
init();