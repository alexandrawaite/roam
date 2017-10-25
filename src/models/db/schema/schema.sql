DROP TABLE IF EXISTS users;
DROP TABLE IF EXISTS cities;
DROP TABLE IF EXISTS posts;
DROP TABLE IF EXISTS users_posts;

CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  email VARCHAR(255) UNIQUE NOT NULL,
  encrypted_password VARCHAR(255) NOT NULL,
  image VARCHAR(255),
  join_date DATE NOT NULL,
  current_city VARCHAR(255) NOT NULL
);

CREATE TABLE cities (
  id SERIAL PRIMARY KEY,
  name VARCHAR(255) NOT NULL
);

CREATE TABLE posts (
  id SERIAL PRIMARY KEY,
  user_id INTEGER REFERENCES users,
  title TEXT NOT NULL,
  body TEXT NOT NULL
);

CREATE TABLE cities_posts (
  city_id INTEGER REFERENCES cities,
  post_id INTEGER REFERENCES posts
);

CREATE TABLE users_cities (
  user_id INTEGER REFERENCES users,
  city_id INTEGER REFERENCES cities
);