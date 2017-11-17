DROP DATABASE IF EXISTS burgerBoyz_DB;
CREATE DATABASE burgerBoyz_DB;

USE burgerBoyz_DB;

CREATE TABLE burgers (
    id INT NOT NULL AUTO_INCREMENT,
    burger_name VARCHAR (100) NOT NULL,
    devoured BOOLEAN DEFAULT false,
    ts TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    PRIMARY KEY (id)

);

INSERT INTO burgers (burger_name)
VALUES ("turdaburger");

INSERT INTO burgers (burger_name)
VALUES ("buffalo");

INSERT INTO burgers (burger_name)
VALUES ("sriracha");