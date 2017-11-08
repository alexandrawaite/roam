const db = require('./db');

const create = user => {
  return db.query(`
    INSERT INTO
      users (full_name, email, encrypted_password)
    VALUES
      ($1::text, $2::text, $3::text)
  `,
  [user.full_name, user.email, user.encrypted_password])
  .catch( error => {
    console.error({ message: 'Error occurred while executing users.create',
    arguments: arguments });
    throw error;
  });
};

const findByEmail = email => {
  return db.oneOrNone(
    `
      SELECT * FROM
        users
      WHERE email =$1
    `,
    [email]
  )
  .catch( error => {
    console.error({ message: 'Error occurred while executing users.findByEmail',
    arguments: arguments })
  });
};

const findById = id => {
  return db.oneOrNone(
    `
      SELECT * FROM
        users
      WHERE id = $1
    `,
    [id]
  )
  .catch( error => {
    console.error({ message: 'Error occurred while executing users.findById',
    arguments: arguments })
  });
};

const updateProfileById = (full_name, current_city, id) =>
  db.oneOrNone(`
    UPDATE
      users
    SET
      full_name = $1,
      current_city = $2
    WHERE
      id = $3
    `,
    [full_name, current_city, id]
  )

module.exports = {
  create,
  findByEmail,
  findById,
  updateProfileById
};
