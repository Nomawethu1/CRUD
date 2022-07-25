--creating a user table 

CREATE TABLE users IF NOT EXISTS(
    ID serial primary key,
    userName varchar(255) NOT NULL UNIQUE,
   	password varchar(255) NOT NULL,
);

--  adding users to the table
INSERT INTO users (userName, password)
VALUES ('Tester', 'test12345');

INSERT INTO users (userName, password)
VALUES ('User1', 'pass12345');


-- getting all users from the table
SELECT * FROM users;