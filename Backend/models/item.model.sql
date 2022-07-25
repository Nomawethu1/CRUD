-- creating items table

CREATE TABLE item  IF NOT EXISTS(
    ID serial primary key,
    itemname varchar(255) NOT NULL,
   	description varchar(255) NOT NULL,
    duedate date NOT NULL
);

--  adding items to the table
INSERT INTO item (itemname, description, duedate)
VALUES ('test', 'testing', '2022-07-25');

INSERT INTO item (itemname, description, duedate)
VALUES ('verify', 'making sure that the insert works', '2022-07-26');


-- getting everything from the table
SELECT * FROM item;