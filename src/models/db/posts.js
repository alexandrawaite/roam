/* eslint-disable */
const db = require('./db');

const findByUserId = id => {
  return db.any(
    `
      SELECT * FROM
        posts
      WHERE user_id =$1
    `,
    [id]
  )
  .catch( error => {
    console.error({ message: 'Error occurred while executing posts.findByUserId',
    arguments: arguments })
  });
};

const findById = id => {
  return db.oneOrNone(
    `
      SELECT * FROM
        posts
      WHERE id = $1
    `,
    [id]
  )
  .catch( error => {
    console.error({ message: 'Error occurred while executing posts.findById',
    arguments: arguments })
  });
}

module.exports = {
  findByUserId,
  findById
};
