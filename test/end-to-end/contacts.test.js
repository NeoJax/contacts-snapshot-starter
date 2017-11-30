const chai = require('chai');
const chaiHttp = require('chai-http');
const app = require('../../src/server');

const expect = chai.expect();

chai.use(chaiHttp);

describe('Client to Server', () => {
  describe('GET /', () => {
    it ('should grab the homepage', function (done) {
      chai.request(app)
        .get('/')
        .end(function (err, res) {
          expect(err).to.be.null;
          expect(res).to.have.status(200);
          done();
        });
    });
  });
  describe('GET /contacts/new', () => {
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
