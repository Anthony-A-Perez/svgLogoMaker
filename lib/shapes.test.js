const { Circle, Square, Triangle} = require('./shapes.js')


describe('Circle', () => {
    test ('Should render a blue circle', () => {
    const shape = new Circle();
    let color = ('blue')
    shape.setColor(color);
    expect(shape.render()).toEqual(`<circle cx='150' cy='100' r='80' fill='${color}'/>`)
    console.log(color);
    })
});
describe('Square', () => {
    test ('Should render a blue square', () => {
    const shape = new Square();
    let color = ('blue')
    shape.setColor(color);
    expect(shape.render()).toEqual(`<rect x='50' height='200' width='200' fill='${color}'/>`)
    console.log(color);
    })
});
describe('Triangle', () => {
    test ('Should render a blue triangle', () => {
    const shape = new Triangle();
    let color = ('blue')
    shape.setColor(color);
    expect(shape.render()).toEqual(`<polygon points='160,10 290,200 10,200' fill='${color}'/>`)
    console.log(color);
    })
});