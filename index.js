const fs = require('fs');
const inquirer = require('inquirer');
const SVG = require(('./lib/svg'))
const { Circle, Triangle, Square } = require('./lib/shapes');



// inquirer prompts present input questions in the command line to determine the svg attributes
inquirer
    .prompt([
        {
            type: 'input',
            name: 'text',
            message: 'Enter 3 Characters'
        },
        {
            type: 'input',
            name: 'textColor',
            message: 'Enter a text color keyword (OR a hexadecimal number)'
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
            message: 'Enter a shape color keyword (OR a hexadecimal number)'
        },
    ])
// the data then is used generate instances of selected Shapes class
    .then((data) => {
        
        let shape;
        if (data.shape === 'Circle') {
            shape = new Circle
        }
        if (data.shape === 'Triangle') {
            shape = new Triangle
        }
        if (data.shape === 'Square') {
            shape = new Square
        }
// the new Shape includes the input text, text color and shape color
        shape.setColor(data.shapeColor)
        const svg = new SVG;
        svg.setShape(shape)
        svg.setText(data.text, data.textColor)
        fs.writeFileSync('logo.svg', svg.render())
        console.log('Generated logo.svg');
    })
