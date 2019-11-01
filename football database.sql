CREATE DATABASE football;

USE football;
CREATE TABLE teams (
	id INT AUTO_INCREMENT,
location VARCHAR(255),
	mascot VARCHAR(255),
	abbreviation VARCHAR(255),
	conference ENUM('AFC', 'NFC'),
	division ENUM('North', 'South', 'East', 'West'),
	createdAt DATETIME DEFAULT NOW(),
	updatedAt DATETIME DEFAULT NOW() ON UPDATE NOW(),
	deletedAt DATETIME,
	PRIMARY KEY(id)
);

CREATE USER 'football'@'localhost' IDENTIFIED BY 'password';
GRANT ALL ON football.* TO 'football'@'localhost';
ALTER USER 'football'@localhost IDENTIFIED WITH mysql_native_password BY 'password';