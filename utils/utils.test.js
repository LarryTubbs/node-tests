const expect = require('expect');

const utils = require('./utils');

describe('utils', () => {
    describe('#add', () => {
        it('should add two numbers', () => {
            res = utils.add(33, 11);
            expect(res).toBe(44).toBeA('number');
        });    
    })
    
    it('should add two numbers asynchronously', (done) => {
        utils.asyncAdd(4, 3, (sum) => {
            expect(sum).toBe(7).toBeA('number');
            done();
        })
    });
    
    it('should square a number asynchronously', (done) => {
        utils.asyncSquare(4, (res) => {
            expect(res).toBe(16).toBeA('number');
            done();
        })
    });
    
    it('should square a number', () => {
        res = utils.square(9);
        expect(res).toBe(81).toBeA('number');
    });    
});

it('should parse fullName and set firstName and lastName on the user', () => {
    var user = {
        age: 50,
        location: 'North Richland Hills'
    };
    var returnedUser =  utils.setName(user, 'Larry Tubbs');
    expect(returnedUser).toInclude({
        firstName: 'Larry',
        lastName: 'Tubbs'
    });
});

// it('should expect some stuff', () => {

//     // you can check for inequality with "Not" versions of toBe and toEqual
//     expect(5).toNotBe(4);

//     // equality of internal objects use toEqual rather than toBe
//     expect({name: 'Larry'}).toEqual({name: 'Larry'});

//     // you can determine if stuff contains stuff (toExclude to check for non-existance)
//     expect([1, 2, 3]).toInclude(2);
//     expect([1, 2, 3]).toExclude(5);

//     // these work on objects too!
//     expect({
//         name: 'Larry',
//         age: 50,
//         location: 'North Richland Hills'
//     }).toInclude({
//         age: 50
//     });
// });