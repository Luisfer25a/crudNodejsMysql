
-- to create a new database
CREATE DATABASE crudnodejsmysql;

-- to use database
use crudnodejsmysql;

-- creating a new table
CREATE TABLE pelicula (
id INT(6) UNSIGNED AUTO_INCREMENT PRIMARY KEY,
nombre VARCHAR(50) NOT NULL,
genero VARCHAR(100) NOT NULL,
categoria VARCHAR(15)
);

-- to show all tables
show tables;

-- to describe table
describe customer;
