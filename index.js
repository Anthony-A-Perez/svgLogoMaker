const fs = require('fs');
const inquirer = require('inquirer');
const { Circle, Triangle, Square } = require('./lib/shapes');
const SVG = require(('./lib/svg'))



inquirer
    .prompt([
        {
            type: 'input',
            name: 'text',
            message: 'Enter 3 Characters'
        },
        {
            type: 'input',
            name: 'texColor',
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

    .then((data) => {
        console.log(data);
        let shape;
        if (data.shape === 'Circle') {
            shape = new Circle
        }
        if (data.shape === 'Triangle') {
            shape = new Triangle
        }
        if (data.shape === 'Square') {
            shape = new Triangle
        }

        shape.setColor(data.shapeColor)
        const svg = new SVG;
        svg.setText(data.text, data.textColor)
        svg.setShape(shape)
        fs.writeFileSync('logo.svg', svg.render())
    })
