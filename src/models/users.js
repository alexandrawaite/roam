const bcrypt = require('bcrypt');
const db = require('./db/users');

const encryptPassword = (password) => {
  const saltRounds = 10;
  return bcrypt.hash(password, saltRounds);
};

const create = (user) => {
  console.log("User::", user);
  return encryptPassword(user.password)
  .then((hash) => {
    user.encrypted_password = hash;
    return db.create(user);
  })
  .catch( error => {
    console.log('Error occurred while executing users.encryptPassword',
    error);
  })
}

module.exports = {
  create,
  encryptPassword
};