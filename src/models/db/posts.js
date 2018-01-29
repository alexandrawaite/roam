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
      ORDER BY
        post_id DESC
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
      ($1::int, $2::text, $3::text)
    RETURNING
      posts.id
  `,
  [post.user_id, post.title, post.body, post.id])
  .catch( error => {
    console.error({ message: 'Error occurred while executing posts.create',
    arguments: arguments });
    throw error;
  });
};

const updateCitiesPost = (city, post) => {
  return db.query(`
    INSERT INTO
      cities_posts (city_id, post_id)
    VALUES
      ($1::int, $2::int)
    RETURNING
      post_id
  `, [city, post])
  .catch( error => {
    console.error({ message: 'Error occurred while executing posts.updateCitiesPost',
    arguments: arguments });
    throw error;
  })
}

const updatePostById = (title, body, id) =>
  db.oneOrNone(`
    UPDATE
      posts
    SET
      title = $1,
      body = $2
    WHERE
      id = $3
    RETURNING
      id
    `,
    [title, body, id]
  )

const destroy = id => {
  return db.none(`
    DELETE FROM
      posts
    WHERE
      posts.id = $1
  `,
  [id])
  .catch( error => {
    console.error({ message: 'Error occurred while executing posts.destroy',
    arguments: arguments });
    throw error;
  })
};

const destroyCitiesPosts = id => {
  return db.none(`
    DELETE FROM
      cities_posts
    WHERE
      cities_posts.post_id = $1::int
  `,
  id)
  .catch( error => {
    console.error({ message: 'Error occurred while executing posts.destroyCitiesPosts',
    arguments: arguments });
    throw error;
  })
};

module.exports = {
  findByUserId,
  findById,
  findByCity,
  create,
  updateCitiesPost,
  updatePostById,
  destroy,
  destroyCitiesPosts
};
