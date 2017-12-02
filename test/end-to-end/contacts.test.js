/* eslint-disable func-names, prefer-arrow-callback, no-undef */
const chai = require('chai');
const chaiHttp = require('chai-http');
const app = require('../../src/server');
const resetDB = require('../helpers/db.js');

chai.use(chaiHttp);

global.expect = chai.expect;
global.request = chai.request;

describe('Client to Server', () => {
  beforeEach((done) => {
    resetDB().then(() => {
      done();
    });
  });
  describe('GET /', () => {
    it('should grab the homepage', function (done) {
      chai.request(app)
        .get('/')
        .end(function (err, res) {
          expect(err).to.be.null;
          expect(res).to.be.html;
          expect(res).to.have.status(200);
          done();
        });
    });
  });
  describe('GET /contacts/new', () => {
    it('should grab the new contact page', function (done) {
      chai.request(app)
        .get('/contacts/new')
        .end(function (err, res) {
          expect(err).to.be.null;
          expect(res).to.be.html;
          expect(res).to.have.status(200);
          done();
        });
    });
  });
  describe('POST /contacts/', function () {
    it('should make a new contact', function (done) {
      chai.request(app)
        .post('/contacts/')
        .set('content-type', 'application/x-www-form-urlencoded')
        .send({
          first_name: 'test',
          last_name: 'dood',
        })
        .end(function (err, res) {
          expect(err).to.be.null;
          expect(res).to.be.html;
          expect(res).to.have.status(200);
          done();
        });
    });
  });
  describe('GET /contacts/:contactId', function() {
    it('should grab the contact with the same ID', function (done) {
      chai.request(app)
        .get('/contacts/1')
        .end(function (err, res) {
          expect(err).to.be.null;
          expect(res).to.be.html;
          expect(res).to.have.status(200);
          done();
        });
    });
  });
  describe('DELETE /contacts/:contactId', function () {
    it('should delete the contact with the same ID', function (done) {
      chai.request(app)
        .delete('/contacts/3')
        .end(function(err, res) {
          expect(err).to.be.null;
          expect(res).to.be.html;
          expect(res).to.have.status(200);
          done();
        })
    });
  });
  describe('GET /contacts/search/', function () {
    it('should grab the right search results', function (done) {
      chai.request(app)
        .get('/contacts/search/?q=lol')
        .end(function (err, res) {
          expect(err).to.be.null;
          expect(res).to.be.html;
          expect(res).to.have.status(200);
          done();
        });
    });
  });
  describe('GET /contacts/test/', function () {
    it('should grab page not found', function (done) {
      chai.request(app)
        .get('/contacts/test')
        .end(function (err, res) {
          expect(err).to.be.an('error');
          expect(res).to.have.status(404);
          done();
        });
    });
  });
});
