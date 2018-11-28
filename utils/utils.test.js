const utils = require('./utils');

it('should add two numbers', () => {
    res = utils.add(33, 11);
    if (res !== 44) {
        throw new Error(`Expected 44, returned ${res}`);
    }
});

it('should square a number', () => {
    res = utils.square(9);
    if (res !== 81) {
        throw new Error(`Expected 81, returned ${res}`);
    }
})