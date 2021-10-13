const generateHTML = require('./src/generateHTML');

const Engineer = require('./lib/engineer');
const Intern = require('./lib/intern');
const Manager = require('./lib/manager');

const fs = require('fs');
const inquirer = require('inquirer');

const teamArray = [];

const addManager = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'Please enter the MANAGER NAME: ',
            validate: nameInput => {
                if(nameInput) {
                    return true;
                } else {
                    console.log('Not valid.  Try again. ');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'id',
            message: 'Please enter the EMPLOYEE ID: ',
            validate: idInput => {
                if(isNaN(idInput)) {
                    console.log('Not valid.  Try again. ');
                    return false;
                } else {
                    return true;
                }
            }
        },
        {
            type: 'input',
            name: 'email',
            message: 'Please enter the MANAGER EMAIL: ',
            validate: email => {
                valid = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email);
                if(valid) {
                    return true;
                } else {
                    console.log('Not valid.  Try again. ');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'officeNumber',
            message: 'Please enter the OFFICE NUMBER: ', 
            validate: officeNumberInput => {
                if(isNaN(officeNumberInput)) {
                    console.log('Not valid.  Try again. ');
                    return false;
                } else {
                    return true;
                }
            }
        }
    ])
    .then(managerInput => {
        const { name, id, email, officeNumber } = managerInput;
        const manager = new Manager(name, id, email, officeNumber);

        teamArray.push(manager);
        console.log(manager);
    })
};

const addEmployee = () => {
    console.log(`
    ADDING employees
    `);

    return inquirer.prompt([
        {
            type: 'list',
            name: 'role',
            message: 'ADD an ENGINEER or ADD an INTERN',
            choices: ['ENGINEER', 'INTERN']
        },
        {
            type: 'input',
            name: 'name',
            message: 'Please enter the EMPLOYEE NAME: ',
            validate: nameInput => {
                if(nameInput) {
                    return true;
                } else {
                    console.log('Not valid.  Try again. ');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'id',
            message: 'Please enter the EMPLOYEE ID: ',
            validate: idInput => {
                if(isNaN(idInput)) {
                    console.log('Not valid.  Try again. ');
                    return false;
                } else {
                    return true;
                }
            }            
        },
        {
            type: 'input',
            name: 'email',
            message: 'Please enter the EMPLOYEE EMAIL: ',
            validate: email => {
                valid = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email);
                if(valid) {
                    return true;
                } else {
                    console.log('Not valid.  Try again. ');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'gitHub',
            message: 'Please enter the EMPLOYEE GITHUB USERNAME: ',
            when: (input) => input.role === 'ENGINEER',
            validate: gitHubInput => {
                if(gitHubInput) {
                    return true;
                } else {
                    console.log('Not valid.  Try again. ');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'school',
            message: 'Please enter the EMPLOYEE SCHOOL: ',
            when: (input) => input.role === 'INTERN',
            validate: schoolInput => {
                if(schoolInput) {
                    return true;
                } else {
                    console.log('Not valid.  Try again. ');
                    return false;
                }
            }
        },
        {
            type: 'confirm',
            name: 'confirmAddEmployee',
            message: 'Would you like to add an additional EMPLOYEE?',
            default: false
        }
    ])
    .then(employeeInput => {
        let { name, id, email, role, gitHub, school, confirmAddEmployee } = employeeInput;
        let employee;

        if(role === 'ENGINEER') {
            employee = new Engineer(name, id, email, gitHub);
            console.log(employee);
        } else if (role === 'INTERN') {
            employee = new Intern(name, id, email, school);
            console.log(employee);
        }

        teamArray.push(employee);

        if(confirmAddEmployee) {
            return addEmployee(teamArray);
        } else {
            return teamArray;
        }
    })
};

const writeFile = data => {
    fs.writeFile('./dist/index.html', data, err => {
        if(err) {
            console.log(err);
            return;
        } else {
            console.log('index.html has been created.');
        }
    })
};

addManager()
.then(addEmployee)
.then(teamArray => {
    return generateHTML(teamArray);
})
.then(pageHTML => {
    return writeFile(pageHTML);
})
.catch(err => {
    console.log(err);
});