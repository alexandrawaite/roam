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
    .catch(error => {
      console.error({
        message: "Error occurred while executing posts.findByUserId",
        arguments: arguments
      });
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
    .catch(error => {
      console.error({
        message: "Error occurred while executing posts.findById",
        arguments: arguments
      });
    });
};

const findByCity = id => {
  return db.any(
      `
      SELECT * FROM
        cities_posts
      JOIN posts ON posts.id = post_id
      WHERE city_id = $1
    `,
      [id]
    )
    .catch(error => {
      console.error({
        message: "Error occurred while executing posts.findByCity",
        arguments: arguments
      });
    });
};

const create = post => {
  return db.query(`
    INSERT INTO
      posts (user_id, title, body)
    VALUES
      ($1::text, $2::text, $3::text)
  `,
  [post.user_id, post.title, post.body])
  .catch( error => {
    console.error({ message: 'Error occurred while executing posts.create',
    arguments: arguments });
    throw error;
  });
};

module.exports = {
  findByUserId,
  findById,
  findByCity,
  create
};
