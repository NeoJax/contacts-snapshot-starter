/* eslint-disable func-names, prefer-arrow-callback, no-undef */
const {
  create,
  findAll,
  findById,
  destroy,
  search,
} = require('../../../src/models/contacts.js');
const resetDB = require('../../helpers/db.js');

describe('Database functions', function () {
  beforeEach((done) => {
    resetDB().then(() => {
      done();
    });
  });
  describe('create', function () {
    it('should make something', function () {
      const contact = { first_name: 'Test', last_name: 'Man' };
      create(contact).then(() => {
        findAll().then((data) => {
          let check = false;
          for (let i = 0; i < data.length; i++) {
            if (data[i].first_name === 'Test') {
              check = true;
            }
          }
          return expect(check).to.be.true;
        }).catch((error) => {
          console.log(error);
        });
      });
    });
  });
  describe('findAll', function () {
    it('should grab all contacts', function () {
      findAll().then((data) => {
        expect(data.length).to.be.equal(3);
      }).catch((error) => {
        console.log(error);
      });
    });
    it('should have specific contacts', function () {
      findAll().then((data) => {
        expect(data[0].first_name).to.be.equal('Jared');
      }).catch((error) => {
        console.log(error);
      });
    });
    it('should have all of these contacts', function () {
      findAll().then((data) => {
        expect(data[0].first_name).to.be.equal('Jared');
        expect(data[1].first_name).to.be.equal('Tanner');
        expect(data[2].first_name).to.be.equal('NeEddra');
      }).catch((error) => {
        console.log(error);
      });
    });
  });
  describe('findById', function () {
    it('should grab a specific contact', function () {
      findById(2).then((data) => {
        expect(data.first_name).to.be.equal('Tanner');
      }).catch((error) => {
        console.log(error);
      });
    });
  });
  describe('destroy', function () {
    it('should remove a contact', function () {
      findAll().then((data) => {
        expect(data.length).to.be.equal(3);
      }).catch((error) => {
        console.log(error);
      });
      destroy(3).then(() => {
        findAll().then((data) => {
          expect(data.length).to.be.equal(2);
        }).catch((error) => {
          console.log(error);
        });
      }).catch((error) => {
        console.log(error);
      });
    });
  });
  describe('search', function () {
    it('should grab all contacts that contain the string', function () {
      search('Ja').then((data) => {
        expect(data[0].last_name).to.be.equal('Grippe');
        expect(data[1].last_name).to.be.equal('James');
      }).catch((error) => {
        console.log(error);
      });
      search('W').then((data) => {
        expect(data[0].last_name).to.be.equal('Welsh');
      }).catch((error) => {
        console.log(error);
      });
    });
    it('should grab no contacts', function () {
      search('z').then((data) => {
        expect(data[0]).to.undefined;
      })
    });
  });
});
