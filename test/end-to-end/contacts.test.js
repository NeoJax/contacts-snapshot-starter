const chai = require('chai');
const chaiHttp = require('chai-http');
const app = require('../../src/server.js');

chai.use(chaiHttp);

describe('Client to Server', function() {
  describe('GET /', function () {
    it ('should grab the homepage', function (done) {
      chai.request(app).get('/').end(function (err, res) {
        done();
      });
    });
  });
  describe('GET /contacts/new', function () {
    it ('should grab the new contact page', function () {

    });
  });
  describe('POST /contacts/', function () {
      it ('should make a new contact', function () {

      });
  });
  describe('GET /contacts/:contactId', function () {
    it ('should grab the contact with the same ID', function () {

    });
  });
  describe('DELETE /contacts/:contactId', function () {
    it ('should delete the contact with the same ID', function () {

    });
  });
  describe('GET /contacts/search/', function () {
    it ('should grab the right search results', function () {

    });
  });
  describe('GET /contacts/test/', function () {
    it ('should grab page not found', function () {

    });
  });
});
