const fs = require('fs');
const inquirer = require('inquirer');
const { join } = require('path');

class CLI {
    constructor() {
        this.textEl = [];

    }
    //this.textEl = `<text x="150" y="125" font-size="60" text-anchor="middle" fill="${color}">${this.textEl}</text>`

    run() {
        return inquirer
            //return `<svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="300" height="200">${this.shapeEl}${this.textEl}</svg>`
            .prompt(


        [
            {
                type: 'input',
                name: 'text-input',
                message: 'Enter 3 Characters'
            },
            {
                type: 'input',
                name: 'text-color',
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
                name: 'shape-color',
                message: 'Enter a color keyword (OR a hexadecimal number)'
            }
        ]);
    }
}

module.exports = CLI       