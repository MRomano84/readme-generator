const inquirer = require('inquirer');
const fs = require('fs');
const util = require('util');

const writeFileAsync = util.promisify(fs.writeFile);

const proptUser = () => {
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
