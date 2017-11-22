const db = require("./db");

const findByCity = () => {
  return db.query(
      `
      SELECT * FROM
        cities
    `,
      []
    )
    .catch(error => {
      console.error({
        message: "Error occurred while executing posts.findByCity",
        arguments: arguments
      });
    });
};

const findById = id => {
  return db.oneOrNone(
      `
      SELECT * FROM
        cities
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

const findByPostId = id => {
  return db.oneOrNone(
      `
      SELECT * FROM
        cities_posts
      WHERE
        post_id = $1
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

const findByIdForCitiesPosts = id => {
  return db.many(
      `
      SELECT * FROM
        cities
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

module.exports = {
  findByCity,
  findById,
  findByPostId,
  findByIdForCitiesPosts
};
