const fs = require("fs");
const path = require('path');
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");

// array of questions for user
const questions = [

{name:'title', 
message: 'What is the title of your project?',
type: 'input'},

{name:'description', 
message: 'What is the description of your project?',
type: 'input'},

{name:'installation', 
message: 'how to install your project?',
type: 'input'},

{name:'usage', 
message: 'how to use your project?',
type: 'input'},

{name:'license', 
message: 'what is the license of your project?',
type: 'list',
choices: ['Apache', 'BSD', 'MIT',  'Mozilla', 'None']},

{name:'contributing', 
message: 'how to contribute to your project?',
type: 'input'},

{name:'tests', 
message: 'how to test your project?',
type: 'input'},

{name:'github', 
message: 'what is your github?',
type: 'input'},

{name:'email', 
message: 'what is your email?',
type: 'email'},


];


inquirer.prompt(questions).then((answers) => {
    console.log(answers);
   const data = generateMarkdown(answers);
   fs.writeFileSync(`${answers.title}.md`, data)
})