const inquirer = require('inquirer');
const fs = require('fs');

const teamArray = [];

const addManager = () =>{
    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'Enter the name of the manager.'
        },
        {
            type: 'input',
            name: 'id',
            message: 'Enter the ID of the manager.'
        },
        {
            type: 'input',
            name: 'email',
            message: 'Enter the email of the manager.'
        },
        {
            type: 'input',
            name:'officeNumber',
            message: 'Enter the office number of the manager.'
        }
    ])
    .then(managerInfo => {
        const {name, id, email, offcieNumber} = managerInfo;
        const manager = new Manager(name, id, email, officerNumber);
        teamArray.push(manager);
        console.log(manager);
    });
}

const addEngineer = () => {
    return inquiere.prompt
}