const inquirer = require('inquirer');
const Person = require('')


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
            choices: ['Employee', 'Manager', 'Engineer', 'Intern']
        })
    }

}

module.exports = Questions;