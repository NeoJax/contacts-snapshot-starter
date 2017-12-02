const Nightmare = require('nightmare');

describe('UI Testing', () => {
  setTimeout(function () {

  }, '30s');

  let nightmare = null;
  beforeEach(() => {
    nightmare = new Nightmare()
  });
  describe('contacts/new (new contact page)', () => {
    it('should load without error', (done) => {
      nightmare
        .goto('http://localhost:3000/contacts/new')
        .end()
        .then((result) => { done(); })
        .catch(done);
    });
    it('should make a new contact and redirect me', () => {
      nightmare
        .goto('http://localhost:3000/contacts/new')
        .type('#first_name_bar', 'Young')
        .type('#last_name_bar', 'Man')
        .click('#new_contact_submit')
        .wait('#zero_click_wrapper .c-info__title a')
        .evaluate(() =>
          document.querySelector('#zero_click_wrapper .c-info__title a').href
        )
        .end()
        .then((link) => {
          console.log(link);
          expect(link).to.equal('http://localhost:3000/contacts/4');
        })
    });
  });
  describe('/ (home page)', () => {
    it('should load without error', (done) => {
      nightmare
        .goto('http://localhost:3000/contacts/new')
        .end()
        .then((result) => { done(); })
        .catch(done);
    });
    it('should show me a list of contacts', () => {
      
    });
    it('should delete a contact', () => {

    });
  });
  describe('/contacts/search: (search page)', () => {
    it('should show me a list of contacts', () => {

    });
  });
});
