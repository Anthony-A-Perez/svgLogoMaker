class SVG {
    constructor() {
        this.text = '';
        this.shape = '';
    }
    render() {
        return `<svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="300" height="200">${this.text}${this.shape}</svg>`
    }
    setText(characters, color) {
        this.text = `<text x="150" y="125" font-size="60" text-anchor="middle" fill="${color}">${characters}</text>`
    }

    setShape(shape) {
        this.shape = shape.render();
    }
}

module.exports = SVG