const expect = require('expect');
const rewire = require('rewire');

var app = rewire('./app');

describe('app', () => {

    var db = {
        saveUser: expect.createSpy()
    };
    app.__set__('db', db);

    it('should call the spy correctly', () => {
        var spy = expect.createSpy();
        spy();
        expect(spy).toHaveBeenCalled();
    });

    it('should call saveUser with user object', () => {
        var email = 'larry.tubbs@somemail.com';
        var password = "123456";

        app.handleSignup(email, password);
        expect(db.saveUser).toHaveBeenCalledWith({
            email: email,
            password: password
        });
    });

});