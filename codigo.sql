CREATE DATABASE cadastroapi;

CREATE TABLE users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    age INT (50) NOT NULL
);

INSERT INTO users(name, age) VALUES("Ana", 23);
