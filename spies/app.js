
var db = require('./db');

module.exports.handleSignup = (email, password) => {
    // check if the email exists
    // save the user to the db
    db.saveUser({
        email: email,
        password: password
    });
    // send welcome email
};