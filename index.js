const inquirer = require('inquirer');
const fs = require('fs');
const util = require('util');

const writeFileAsync = util.promisify(fs.writeFile);

const promptUser = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'title',
            message: 'Welcome to the README Generator! What is the title of your project?'
        },
        {
            type: 'input',
            name: 'description',
            message: 'Please describe your project.'
        },
        {
            type: 'input',
            name: 'tech',
            message: 'What technologies were used?'
        },
        {
            type: 'input',
            name: 'installation',
            message: 'How do you install your project/application?'
        },
        {
            type: 'list',
            name: 'license',
            message: 'Please choose your license type:',
            choices: [
                'Apache License v2.0',
                'MIT License',
                'GNU General Public License v3.0',
                'N/A'
            ],
        },
        {
            type: 'input',
            name: 'contribute',
            message: 'How can someone contribute to your project?'
        },
        {
            type: 'input',
            name: 'github',
            message: 'Enter your GitHub username:'
        },
        {
            type: 'input',
            name: 'email',
            message: 'Enter your email address:'
        },
    ]);
};

const generateReadMe = (answers) => 

`# ${answers.title}

## Description
${answers.description}

----------------------------------

## Table of Contents

* [Usage](#usage)
* [Installation](#installation)
* [License](#license)
* [How to Contribute](#How-to-Contribute)
* [Questions](#questions)

----------------------------------

## Technologies Used
${answers.tech}

## Installation
${answers.installation}

## License
NOTICE: This application is covered by ${answers.license}.

## How to Contribute
If you would like to contribute to this project, you can ${answers.contribute}.

## Questions
If you have any questions, I can be reached at [${answers.email}](${answers.email})

Or find me on [GitHub](${answers.github})`;

const init = () => {
    promptUser()
    .then((answers) => writeFileAsync(`${answers.title}.md`, generateReadMe(answers)))
    .then(() => console.log('That wasn\'t so bad! You successfully wrote to README.md'))
    .catch((err) => console.error(err))
};

init();




/*
I cannot figure out how to include a badge based on the users input... I made a switch/case 
that included badges but everytime I put it in my code, it would err and stop all
functionality.
*/

// switch(`${answers.license}`) {
//     case 'Apache License v2.0':
//         licenseBadge = "https://img.shields.io/badge/License-Apache%202.0-green.svg"
//         break;
//     case 'MIT License':
//         licenseBadge = "https://img.shields.io/badge/License-MIT-brightgreen.svg"
//         break;
//     case 'GNU General Public License v3.0':
//         licenseBadge = "https://img.shields.io/badge/License-GPLv3-blue.svg"
//         break;
//     case 'Boost Software License 1.0':
//         licenseBadge = "https://img.shields.io/badge/License-Boost%201.0-lightblue.svg"
//         break;

//         default: 'No License Badge Available'
// };


