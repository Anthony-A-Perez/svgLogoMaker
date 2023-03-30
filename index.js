const fs = require('fs');
const inquirer = require('inquirer');
const shapes = require('./lib/shapes.js');



const questions = [
    {
        type: 'input',
        name: 'texInput',
        message: 'Enter 3 Characters'
    },
    {
        type: 'input',
        name: 'texColor',
        message: 'Enter a color keyword (OR a hexadecimal number)'
    },
    {
        type: 'list',
        name: 'shape',
        message: 'Choose a shape)',
        choices: ['Circle', 'Square', 'Triangle']
    },
    {
        type: 'input',
        name: 'shapeColor',
        message: 'Enter a color keyword (OR a hexadecimal number)'
    },
]
const writeToFile = data => {
    fs.writeFile('logo.svg', data, (err) => {
        if (err) {
            console.error(err);
        } else {
            console.log('Generated logo.svg')
        }
    })
}




//function to initialize app
const init = () => {
    return inquirer.prompt(questions);
}

//function call to initialize app
init()
    .then(answers => {
        return shapes(answers);
    })

    .then(data => {
        return writeToFile(data);
    })