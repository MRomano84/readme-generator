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
            name: 'usage',
            message: 'How will your project be used?'
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
            name: 'contributing',
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
* [How to Contribute](#contributing)
* [Questions](#questions)

----------------------------------

## Usage
${answers.usage}

## Installation
${answers.installation}

## License
NOTICE: This application is covered by ${answers.license}.

## Want to Contribute?
${answers.contributing}

## Questions
If you have any questions, I can be reached at [${answers.email}](${answers.email})

Or find me on [GitHub](${answers.github})`;

const init = () => {
    promptUser()
    .then((answers) => writeFileAsync(`${answers.title}.md`, generateReadMe(answers)))
    .then(() => console.log('Successfully wrote to README.md'))
    .catch((err) => console.error(err))
};

init();
