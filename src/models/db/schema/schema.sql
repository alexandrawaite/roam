DROP TABLE IF EXISTS users CASCADE;
DROP TABLE IF EXISTS cities CASCADE;
DROP TABLE IF EXISTS posts CASCADE;
DROP TABLE IF EXISTS cities_posts CASCADE;

CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  full_name VARCHAR(255) NOT NULL,
  email VARCHAR(255) UNIQUE NOT NULL,
  encrypted_password VARCHAR(255) NOT NULL,
  join_date DATE DEFAULT current_date,
  current_city VARCHAR(255) DEFAULT 'Enter current city here'
);

CREATE TABLE cities (
  id SERIAL PRIMARY KEY,
  name VARCHAR(255) UNIQUE NOT NULL,
  description TEXT NOT NULL,
  image VARCHAR(255) NOT NULL
);

CREATE TABLE posts (
  id SERIAL PRIMARY KEY,
  user_id INTEGER REFERENCES users,
  title VARCHAR(200) NOT NULL,
  body TEXT NOT NULL,
  post_date timestamp DEFAULT current_date
);

CREATE TABLE cities_posts (
  city_id INTEGER REFERENCES cities,
  post_id INTEGER REFERENCES posts
);
