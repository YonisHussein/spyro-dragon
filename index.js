const inquirer = require('inquirer');
const fs = require('fs');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const Manager = require('./lib/Manager')

const teamArray = [];

const addManager = () =>{
    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'Enter the name of the manager'
        },
        {
            type: 'input',
            name: 'id',
            message: 'Enter the ID of the manager'
        },
        {
            type: 'input',
            name: 'email',
            message: 'Enter the email of the manager'
        },
        {
            type: 'input',
            name:'officeNumber',
            message: 'Enter the office number of the manager'
        }
    ])
    .then(managerInfo => {
        const {name, id, email, officeNumber} = managerInfo;
        const manager = new Manager(name, id, email, officeNumber);
        teamArray.push(manager);
        console.log(manager);
    });
}

const addEngineer = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'Enter the name of the engineer',
        },
        {
            type: 'input',
            name: 'email',
            message: 'Enter the email of the engineer'
        },
        {
            type: 'input',
            name: 'email',
            message: 'Enter the Github of the engineer'
        },
    ])
    .then (engineerInfo => {
        const {name, id, email, github} = engineerInfo;
        const engineer = new Engineer(name, id, email, github);
        teamArray.push(engineer);
        console.log(engineer);
    });
}

const addIntern = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'Enter the name of the intern'
        },
        {
            type: 'input',
            name:'id',
            message: 'Enter the id of the intern'
        },
        {
            type:'input',
            name: 'email',
            message: 'Enter the email of the intern'
        },
        {
            type: 'input',
            name: 'school',
            message: 'Enter the school of the intern'
        }
    ])
    .then(internInfo => {
        const {name, id, email, school} = internInfo;
        const intern = new Intern(name, id, email, school);
        teamArray.push(intern);
        console.log(intern);
        console.log(teamArray);
        return teamArray
    }).then(
        // teamArray =>
            
        //     //return data}
            );
};

const writeFile = data => {
    fs.writeFile('./index.html', data, (err) => {
        if(err) {
            console.log(err);
            return
        };
        console.log('The team profile is created!')
    })
}


addManager()
    .then(addEngineer)
    .then(addIntern)
    .then(teamArray => {
        return writeFile(teamArray);
    })
    
