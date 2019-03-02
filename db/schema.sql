
CREATE DATABASE burgers_db;

USE burgers_db;

CREATE TABLE burgers (
id integer(40) not null auto_increment,
burger_name varchar(50) not null,
devoured boolean not null default false,
primary key(id)
);
