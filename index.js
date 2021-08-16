const fs = require('fs')
const inquirer = require('inquirer');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');

const { writeFile } = require('./generated-site');
const teamGen = require('./src/team-site');


class Questions {
    whatName() {
        inquirer
        .prompt({
            type: 'text',
            name: 'name',
            message: 'what is this employees name?'
        })
        .then(({ name })=> {
            this.person = new Person(name);

            this.whatRank();
        })
    }

    whatRank() {
        inquirer
        .prompt({
            type: 'list',
            name: 'rank',
            message: 'what is this employees rank?',
            choices: ['Manager', 'Engineer', 'Intern']
        })
    }

}

