class Shape {
    constructor(shapeColor, textColor, textInput) {
        this.shapeColor = shapeColor;
        this.textColor = textColor;
        this.textInput = textInput;
    }
}

class Circle extends Shape {
    constructor(shapeColor,textColor,textInput) {
        super(shapeColor,textColor,textInput)
    }

    render() {
        return `<svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="300" height="200">
        <circle cx="150" cy="100" r="80" fill="${this.shapeColor}"/>
        <text x="150" y="125" font-size="60" text-anchor="middle" fill="${textColor}">${this.textInput}</text>
        </svg>`
    }
}
class Triangle extends Shape {
    constructor(shapeColor,textColor,textInput) {
        super(shapeColor,textColor,textInput)
    }

    render() {
        return `<svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="300" height="200">
        <polygon points="160,10 290,200 10,200" cy="100" fill="${this.shapeColor}"/>
        <text x="150" y="125" font-size="60" text-anchor="middle" fill="${textColor}">${this.textInput}</text>
        </svg>`
    }
}
class Square extends Shape {
    constructor(shapeColor,textColor,textInput) {
        super(shapeColor,textColor,textInput)
    }

    render() {
        return `<svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="300" height="200">
        <rect width="200" height="200" fill="${this.shapeColor}"/>
        <text x="150" y="125" font-size="60" text-anchor="middle" fill="${textColor}">${this.textInput}</text>
        </svg>`
    }
}

module.exports = { Circle, Triangle, Square}