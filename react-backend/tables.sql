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
  from_user varchar(255),
  pickup_location varchar(255),
  pickup_country varchar(255),
  pickup_zip varchar(255),
  pickup_time varchar(255),
  estimated_delivery_date timestamp,
  to_user varchar(255),
  delivery_location varchar(255),
  delivery_country varchar(255),
  delivery_zip varchar(255),
  delivery_time varchar(255),
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
--dummy users
INSERT INTO users (name, email, type, password, account_status) VALUES ('admin', 'admin@email.com', 'admin', '$2b$04$GavlFC2j6KhYcSjM6V0Kxeher2MGGCni9EOMs28T5.lda7UTYx9ki', 'active');
INSERT INTO users (name, email, type, password, account_status) VALUES ('customer 1', 'customer1@email.com', 'customer', '$2b$04$0A/hTD0thGnkOck.scYlIOxBMJ4MPsnHdPjf5Heani7TFZC/xsb9e', 'active');
INSERT INTO users (name, email, type, password, account_status) VALUES ('customer 2', 'customer2@email.com', 'customer', '$2b$04$L1pGHx1fvzwXNyPX9uXxgOZESsGSb4MEg0ktg7ksKfMj5F/3Fvdqm', 'active');
INSERT INTO users (name, email, type, password, account_status) VALUES ('customer 3', 'customer3@email.com', 'customer', '$2b$04$cckQU59slt0Jxlsc40fdAuMxoTGtezHUyVJH.gfbdiAiOsmR0HRaK', 'active');
INSERT INTO users (name, email, type, password, account_status) VALUES ('customer 4', 'customer4@email.com', 'customer', '$2b$04$PkqjOm2C7eK5GZemCHAawet1eSSY4xq/OIisXoAJuS2189FnI5Ypq', 'active');
INSERT INTO users (name, email, type, password, account_status) VALUES ('courier 1', 'courier1@email.com', 'courier', '$2b$04$F7pKqPGPZRy7cus6/JAjQ.DlaA.gZr1wQNY4UK4RGO1pn8Qr6hhIu', 'active');
INSERT INTO users (name, email, type, password, account_status) VALUES ('courier 2', 'courier2@email.com', 'courier', '$2b$04$SE6R37ICyrzAiCYgPwW8kOffAVsPGwZTBrmZO1T31xYkyxnCtkUbC', 'active');
INSERT INTO users (name, email, type, password, account_status) VALUES ('courier 3', 'courier3@email.com', 'courier', '$2b$04$YCpUU/I2eZvKdxMVrDXjheRw0yVAMqayvsr3NVTQzj1CTc2tjTuyi', 'active');

--dummy locations
INSERT INTO locations (name, country, state, address, postal_code, contact, status) VALUES ('Checkpoint A', 'Singapore', 'Singapore', 'AAA Checkpoint Road', 123492, 91234566, 'internal');
INSERT INTO locations (name, country, state, address, postal_code, contact, status) VALUES ('Checkpoint B', 'Thailand', 'Thailand', 'BBB Checkpoint Street', 1213292, 12351266, 'internal');
INSERT INTO locations (name, country, state, address, postal_code, contact, status) VALUES ('Customer 1 location', 'Thailand', 'Bangkok', 'Customer 1 Avenue', 11123292, 89761266, 'customer');
INSERT INTO locations (name, country, state, address, postal_code, contact, status) VALUES ('Customer 2 location', 'Singapore', 'Singapore', 'Customer 2 Rise', 112376892, 34523266, 'customer');
INSERT INTO locations (name, country, state, address, postal_code, contact, status) VALUES ('Customer 3 location', 'Thailand', 'Pattaya', 'Customer 3 Loop', 43576892, 789523266, 'customer');
INSERT INTO locations (name, country, state, address, postal_code, contact, status) VALUES ('Customer 4 location', 'Singapore', 'Singapore', 'Customer 4 Hill', 897376892, 213423266, 'customer');

--dummy schedules
INSERT INTO schedules (name) VALUES ('28 May 2018 1000 HRS');
INSERT INTO schedules (name) VALUES ('28 May 2018 1400 HRS');
INSERT INTO schedules (name) VALUES ('28 May 2018 1600 HRS');
INSERT INTO schedules (name) VALUES ('29 May 2018 1000 HRS');
INSERT INTO schedules (name) VALUES ('29 May 2018 1400 HRS');
INSERT INTO schedules (name) VALUES ('29 May 2018 1600 HRS');
INSERT INTO schedules (name) VALUES ('30 May 2018 1000 HRS');
INSERT INTO schedules (name) VALUES ('30 May 2018 1400 HRS');
INSERT INTO schedules (name) VALUES ('30 May 2018 1600 HRS');
INSERT INTO schedules (name) VALUES ('31 May 2018 1000 HRS');
INSERT INTO schedules (name) VALUES ('31 May 2018 1400 HRS');
INSERT INTO schedules (name) VALUES ('31 May 2018 1600 HRS');
INSERT INTO schedules (name) VALUES ('1 Jun 2018 1000 HRS');
INSERT INTO schedules (name) VALUES ('1 Jun 2018 1400 HRS');
INSERT INTO schedules (name) VALUES ('1 Jun 2018 1600 HRS');

--dummy deliveries
INSERT INTO deliveries (delivery_number, from_user, pickup_location, pickup_time, to_user, delivery_location, delivery_time, current_location, status, assigned_courier) VALUES (1, 2, 3, 1, 3, 4, 11, 1, 'delivery in progress', 6);
INSERT INTO deliveries (delivery_number, from_user, pickup_location, pickup_time, to_user, delivery_location, delivery_time, current_location, status, assigned_courier) VALUES (2, 3, 4, 2, 2, 3, 12, 2, 'delivery in progress', null);
INSERT INTO deliveries (delivery_number, from_user, pickup_location, pickup_time, to_user, delivery_location, delivery_time, current_location, status, assigned_courier) VALUES (3, 4, 5, 3, 5, 6, 15, 1, 'delivery in progress', null);
INSERT INTO deliveries (delivery_number, from_user, pickup_location, pickup_time, to_user, delivery_location, delivery_time, current_location, status, assigned_courier) VALUES (4, 5, 6, 4, 2, 3, 13, 1, 'delivery in progress', 7);
INSERT INTO deliveries (delivery_number, from_user, pickup_location, pickup_time, to_user, delivery_location, delivery_time, current_location, status, assigned_courier) VALUES (5, 3, 4, 5, 2, 3, 10, 2, 'delivery in progress', 8);
INSERT INTO deliveries (delivery_number, from_user, pickup_location, pickup_time, to_user, delivery_location, delivery_time, current_location, status, assigned_courier) VALUES (6, 4, 5, 2, 3, 4, 14, 2, 'delivery in progress', 7);
INSERT INTO deliveries (delivery_number, from_user, pickup_location, pickup_time, to_user, delivery_location, delivery_time, current_location, status, assigned_courier) VALUES (7, 5, 6, 3, 3, 4, 10, 2, 'delivery in progress', 8);
INSERT INTO deliveries (delivery_number, from_user, pickup_location, pickup_time, to_user, delivery_location, delivery_time, current_location, status, assigned_courier) VALUES (8, 2, 3, 5, 4, 5, 12, 1, 'delivery in progress', null);
INSERT INTO deliveries (delivery_number, from_user, pickup_location, pickup_time, to_user, delivery_location, delivery_time, current_location, status, assigned_courier) VALUES (9, 3, 4, 1, 5, 6, 11, 1, 'delivery in progress', null);
