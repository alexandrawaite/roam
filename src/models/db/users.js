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
    console.error({ message: 'Error occurred while executing users.findUser',
    arguments: arguments })
  });
};

module.exports = {
  create,
  findByEmail
};
