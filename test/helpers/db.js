const db = require('../../src/models/db/db');

function truncateTable() {
  return db.none('TRUNCATE contacts RESTART IDENTITY;');
}

function loadTable() {
  return db.none(`
    INSERT INTO
    contacts (first_name, last_name)
  VALUES
    ('Jared', 'Grippe'),
    ('Tanner', 'Welsh'),
    ('NeEddra', 'James')
  ;`);
}

function resetDB() {
  return truncateTable().then(() => {
    return loadTable();
  });
}


module.exports = resetDB;
