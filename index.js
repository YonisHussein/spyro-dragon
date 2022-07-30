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
        console.log("TEAM ARRAY",teamArray);
        return teamArray
    })}


    function createPage (teamArray){
        

        teamArray.forEach(employee =>{
            let name =employee.name;
            let id= employee.id;
            let email= employee.email;
            if (employee.getRole() ==="Manager"){
                let role = "Manager";
                let officeNumber = employee.officeNumber
            

           const managerDiv = `
            <div>
                <h2>${name}</h2>
                <h2>${role}</h2>
            </div>
            <div>
                <p>ID: ${id}</p>
                <p>Email: ${email}/p>
                <p>Office Number: ${officeNumber}</p>
            </div>`
        
        



        return data =`
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <div>
        <h1>Team Profile</h1>
    </div>
   ${managerDiv}
    <div>
        <h2>Engineer's Name</h2>
        <h2>Engineer</h2>
    </div>
    <div>
        <p>ID: 222222</p>
        <p>Email: engineering@gmail.com</p>
        <p>github: github.com</p>
    </div>
    <div>
        <h2>Intern's Name</h2>
        <h2>Intern</h2>
    </div>
    <div>
        <p>ID: 333333</p>
        <p>Email: Intern@gmail.com</p>
        <p>School: UofT</p>
    </div>
</body>
        `
    }

})

}
        


        function writeFile(){
              
                    fs.writeFileSync('./index.html', data)
                    
                    // , (err) => {
                    //     if(err) {
                    //         console.log(err);
                    //         return
                    //     };
                    //     console.log('The team profile is created!')
                    // }
                    
                }
            
    



addManager().then(addEngineer).then(addIntern).then(teamArray =>createPage(teamArray)).then(writeFile)
    
