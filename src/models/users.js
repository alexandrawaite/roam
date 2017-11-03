/* eslint-disable */

const bcrypt = require('bcrypt')
const db = require('./db/users');

const encryptPassword = (password) => {
  const saltRounds = 10;
  return bcrypt.hash(password, saltRounds);
};

const create = (user) => {
  return encryptPassword(user.password)
  .then((hash) => {
    user.encrypted_password = hash
    return db.create(user);
  })
  .catch( error => {
    console.log('Error occurred while executing users.encryptPassword',
    error);
  });
};

const verify = (email, password) => {
  return db.findByEmail(email)
  .then((validUser) => {
    if (validUser) {
      return bcrypt.compare(password, validUser.encrypted_password)
      .then((result) => {
        if (result) {
          return validUser.id;//for session to login the user
        } else if (!validUser) {
          throw new Error('Invalid password or username');
        }
      });
    } else if (!validUser) {
      throw new Error('Invalid username or password');
    }
  })
  .catch( error => {
    console.log('Error!', error);
  });
};

module.exports = {
  create,
  encryptPassword,
  verify
};
