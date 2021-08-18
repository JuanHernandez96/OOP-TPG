const fs = require('fs')
const inquirer = require('inquirer');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');

const { writeFile } = require('./generated-site');
const createTeam = require('./src/team-site');


let teamMemb = [];

const makeManagers = () => {
    return inquirer
    .prompt ([
        {
            type: 'input',
            name: 'mName',
            message: "What is the manager's name?",
            validate: (mName) => {
                if (mName) {
                    return true;
                } else {
                    console.log("Please enter the manager's name.")
                }
            }
        },
        {
            type: 'input',
            name: 'mEmail',
            message: "What is your manager's email?",
            validate: (mEmail) => {
                if (mEmail) {
                return true;
                } else {
                    console.log("Please enter the manager's email.");
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'mId',
            message: "What is the manager's id?",
            validate: (mId) => {
                if (mId) {
                    return true;
                } else {
                    console.log("Please enter the manager's id.");
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: "mOfficeNumber",
            message: "What is the manager's office number?",
            validate: (mOfficeNumber) => {
                if (mOfficeNumber) {
                    return true;
                } else {
                    console.log("Please enter the manager's office number.")
                    return false;
                }
            }
        },
    ])
    .then(({ mName, mEmail, mId, mOfficeNumber }) => {
        let manager = new Manager( mName, mEmail, mId, mOfficeNumber);
        teamMemb.push(manager);
    });
};
const addEmployee = () => {
    console.log(`Add another employee`);

    return inquirer
    .prompt({
        type: 'list',
        name: 'addEmployee',
        message: "Would you like to add an employee? if so what is their title?",
        choices: ["Engineer", "Intern", "No thanks"]
    })
    .then((titleType) => {
        if (titleType.addEmployee === "Engineer") {
            return inquirer
            .prompt ([
                {
                    type: 'input',
                    name: "eName",
                    message: "What is your engineer's name?",
                    validate: (eName) => {
                        if (eName) {
                            return true;
                        } else {
                            console.log("Please enter your engineers name.")
                            return false;
                        }
                    }
                },
                {
                    type: 'input',
                    name: "eEmail",
                    message: "What is your engineer's email?",
                    validate: (eEmail) => {
                        if (eEmail) {
                            return true;
                        } else {
                            console.log("Please enter your engineer's email")
                            return false;
                        }
                    }
                },
                {
                    type: 'input',
                    name: 'eId',
                    message: "What is your engineer's ID?",
                    validate: (eId) => {
                        if (eId) {
                            return true;
                        } else {
                            console.log("Please enter your engineer's ID");
                            return false;
                        }
                    }
                },
                {
                    type: 'input',
                    name: 'eGithub',
                    message: "What is the engineer's Github username?",
                    validate: (eGithub) => {
                        if (eGithub) {
                            return true;
                        } else {
                            console.log("Please enter the engineer's Github username.")
                            return false;
                        }
                    }
                },
            ])
            .then(({ eName, eEmail, eId, eGithub }) => {
                let engineer = new Engineer(eName, eEmail, eId, eGithub);
                teamMemb.push(engineer);
                return addEmployee();
            });
        } else if(titleType.addEmployee === 'Intern') {
            return inquirer
            .prompt([
                {
                    type: "input",
                    name: "iName",
                    message: "What is the intern's name?",
                    validate: (iName) => {
                        if (iName) {
                        return true;
                        } else {
                            console.log("Please enter the intern's name")
                            return false;
                        }
                    } 
                },
                {
                    type: 'input',
                    name: 'iEmail',
                    message: "What is the intern's email?",
                    validate: (iEmail) => {
                        if (iEmail) {
                            return true;
                        } else {
                            console.log("Please enter the intern's email");
                            return false;
                        }
                    }
                },
                {
                    type: 'input',
                    name: 'iId',
                    message: "What is the intern's ID?",
                    validate: (iId) => {
                        if (iId) {
                            return true;
                        } else {
                            console.log("Please enter the intern's ID");
                            return false;
                        }
                    }
                },
                {
                    type: 'input',
                    name: 'iSchool',
                    message: "What is the name of the intern's school?",
                    validate: (iSchool) => {
                        if (iSchool) {
                            return true;
                        } else {
                            console.log("Please enter the intern's school name");
                            return false;
                        }
                    }
                },
            ])
            .then(({ iName, iEmail, iId, iSchool }) => {
                let intern = new Intern( iName, iEmail, iId, iSchool );
                teamMemb.push(intern);
                return addEmployee();
            });
        } else {
            return teamMemb;
        }
    });
};

makeManagers()
    .then(addEmployee)
    .then((teamMemb) => {
        return createTeam(teamMemb);
    })
    .then((pageHtml) => {
        return writeFile(pageHtml);
    })
    .then((returnResponse) => {
        console.log(returnResponse);
    })
    .catch((err) => {
        console.log(err);
    });

// class Questions {
//     whatName() {
//         inquirer
//         .prompt({
//             type: 'text',
//             name: 'name',
//             message: 'what is this employees name?'
//         })
//         .then(({ name })=> {
//             this.person = new Person(name);

//             this.whatRank();
//         })
//     }

//     whatRank() {
//         inquirer
//         .prompt({
//             type: 'list',
//             name: 'rank',
//             message: 'what is this employees rank?',
//             choices: ['Manager', 'Engineer', 'Intern']
//         })
//     }

// }

