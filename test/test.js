var request = require('supertest');
var app = require('../index.js');
describe('GET /will', function() {
    it('respond with hello world', function(done) {
        request(app).get('/will').expect('{ "response": "Great! It works! You are on will-page" }', done);
    });
});
