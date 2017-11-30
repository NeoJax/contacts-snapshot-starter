const {
  create,
  findAll,
  findById,
  destroy,
  search,
} = require('../../../src/models/contacts.js');

/*  NOTE: Test for whether they are a function, whether they return an error
    correctly, and maybe other stuff that I have not thought of yet */

/* NOTE: contacts = {first_name, last_name} */

describe ('database functions', function () {
  describe ('create', function () {
    it ('should make something', function () {
      const contact = {first_name: 'Jack', last_name: 'Lubaway'};
      expect(create(contact)).to.not.be.an('error');
    });
    it ('should be in the database', function () {

    });
    it ('should have a validId', function () {

    });
  });
  describe ('findAll', function () {
    it ('should grab all contacts', function () {

    });
    it ('should have specific contacts', function () {

    });
    it ('should have all of these contacts', function () {

    });
  });
  describe ('findById', function () {
    it ('should grab a specific contact', function () {

    });
  });
  describe ('destroy', function () {
    it ('should remove a contact', function () {

    });
    it ('should not exist in the database', function () {

    });
  });
  describe ('search', function () {
    it ('should grab all contacts that contain the string', function () {

    });
    it ('should grab no contacts', function () {

    });
  });
});
