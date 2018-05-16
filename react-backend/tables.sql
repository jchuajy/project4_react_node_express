--clear all tables
DROP TABLE IF EXISTS users;
DROP TABLE IF EXISTS deliveries;
DROP TABLE IF EXISTS parcels;
DROP TABLE IF EXISTS locations;
DROP TABLE IF EXISTS schedules;



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

-- create deliveries table
CREATE TABLE IF NOT EXISTS deliveries (
  id SERIAL PRIMARY KEY,
  delivery_number varchar(255),
  pickup_date timestamp,
  estimated_delivery_date timestamp,
  pickup_address varchar(255),
  delivery_address varchar(255),
  pickup_schedule integer,
  delivery_schedule integer,
  customer_id integer,
  current_location varchar(255),
  status varchar(255),
  assigned_courier integer,
  creation_date timestamp DEFAULT CURRENT_TIMESTAMP
);

-- create parcels table
CREATE TABLE IF NOT EXISTS parcels (
  id SERIAL PRIMARY KEY,
  delivery_id varchar(255),
  content_description varchar(255),
  weight varchar(255),
  creation_date timestamp DEFAULT CURRENT_TIMESTAMP
);

-- create locations table
CREATE TABLE IF NOT EXISTS locations (
  id SERIAL PRIMARY KEY,
  name varchar(255),
  country varchar(255),
  state varchar(255),
  address varchar(255),
  postal_code varchar(255),
  latitude varchar(255),
  longtitude varchar(255),
  contact varchar(255),
  status varchar(255),
  creation_date timestamp DEFAULT CURRENT_TIMESTAMP
);

-- create schedules table
CREATE TABLE IF NOT EXISTS schedules (
  id SERIAL PRIMARY KEY,
  name varchar(255),
  courier_id integer,
  status varchar(255),
  location integer,
  creation_date timestamp DEFAULT CURRENT_TIMESTAMP
);

--dummy seed data
INSERT INTO users (name, email, type, password, account_status) VALUES ('admin', 'admin@email.com', 'admin', '$2b$04$GavlFC2j6KhYcSjM6V0Kxeher2MGGCni9EOMs28T5.lda7UTYx9ki', 'active');
INSERT INTO users (name, email, type, password, account_status) VALUES ('customer 1', 'customer1@email.com', 'customer', '$2b$04$0A/hTD0thGnkOck.scYlIOxBMJ4MPsnHdPjf5Heani7TFZC/xsb9e', 'active');
INSERT INTO users (name, email, type, password, account_status) VALUES ('customer 2', 'customer2@email.com', 'customer', '$2b$04$L1pGHx1fvzwXNyPX9uXxgOZESsGSb4MEg0ktg7ksKfMj5F/3Fvdqm', 'active');
INSERT INTO users (name, email, type, password, account_status) VALUES ('customer 3', 'customer3@email.com', 'customer', '$2b$04$cckQU59slt0Jxlsc40fdAuMxoTGtezHUyVJH.gfbdiAiOsmR0HRaK', 'active');
INSERT INTO users (name, email, type, password, account_status) VALUES ('customer 4', 'customer4@email.com', 'customer', '$2b$04$PkqjOm2C7eK5GZemCHAawet1eSSY4xq/OIisXoAJuS2189FnI5Ypq', 'active');
INSERT INTO users (name, email, type, password, account_status) VALUES ('courier 1', 'courier1@email.com', 'courier', '$2b$04$F7pKqPGPZRy7cus6/JAjQ.DlaA.gZr1wQNY4UK4RGO1pn8Qr6hhIu', 'active');
INSERT INTO users (name, email, type, password, account_status) VALUES ('courier 2', 'courier2@email.com', 'courier', '$2b$04$SE6R37ICyrzAiCYgPwW8kOffAVsPGwZTBrmZO1T31xYkyxnCtkUbC', 'active');
INSERT INTO users (name, email, type, password, account_status) VALUES ('courier 3', 'courier3@email.com', 'courier', '$2b$04$YCpUU/I2eZvKdxMVrDXjheRw0yVAMqayvsr3NVTQzj1CTc2tjTuyi', 'active');


