DROP TABLE IF EXISTS users;
DROP TABLE IF EXISTS cities;
DROP TABLE IF EXISTS posts;
DROP TABLE IF EXISTS cities_posts;

CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  full_name VARCHAR(255) NOT NULL,
  email VARCHAR(255) UNIQUE NOT NULL,
  encrypted_password VARCHAR(255) NOT NULL,
  join_date timestamp DEFAULT current_date,
  current_city VARCHAR(255) DEFAULT 'Enter current city here'
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
