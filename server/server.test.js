const request = require('supertest');
const expect = require('expect');

var app = require('./server').app;

describe('server', () => {
    describe('GET /', () => {
        it('should return hello world response', (done) => {
            request(app)
            .get('/')
            .expect('Hello world')
            .end(done);
        });    
    });
    
    describe('GET /users', () => {
        it('should return a user named Larry and be status 200', (done) => {
            request(app)
            .get('/users')
            .expect(200)
            .expect((res) => {
                expect(res.body).toInclude({
                    name: 'Larry',
                    age: 50
                });
            })
            .end(done);
        });
    });
});
