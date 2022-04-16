DROP DATABASE IF EXISTS cabmanagement;
CREATE DATABASE cabmanagement;
use cabmanagement;
CREATE TABLE customer (
    cust_id int,
    lastName varchar(255),
    firstName varchar(30),
    address varchar(100),
	email varchar(50),
	mobileNumber varchar(12),
	password varchar(50)
);

INSERT INTO customer (cust_id, lastName, firstName, address,email,mobileNumber,password) VALUES (1, "nigam", "Akash","NOrth t.t. nagar", "akash@gmail.com","8904285945","123456");