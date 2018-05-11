-- create users table
CREATE TABLE IF NOT EXISTS users (
  id SERIAL PRIMARY KEY,
  name varchar(255),
  email text,
  type varchar(255),
password varchar(255),
  creation_date timestamp DEFAULT CURRENT_TIMESTAMP,
  last_login timestamp,
  account_status varchar(255)
);
