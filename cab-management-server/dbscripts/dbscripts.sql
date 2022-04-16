DROP DATABASE IF EXISTS cabmanagement;
CREATE DATABASE cabmanagement;
use cabmanagement;
CREATE TABLE customer (
    cust_id int NOT NULL AUTO_INCREMENT,
    lastName varchar(255),
    firstName varchar(30),
    address varchar(100),
	email varchar(50) UNIQUE,
	mobileNumber varchar(12),
	password varchar(50),
	is_active BOOLEAN,
	CONSTRAINT customer_pk PRIMARY KEY (cust_id)
);

INSERT INTO customer ( last_Name, first_Name, address, email,mobile_Number, password, is_active) VALUES ( "nigam", "Akash","NOrth t.t. nagar", "akash@gmail.com","8904285945","123456",true);

CREATE TABLE admin (
    admin_id int NOT NULL AUTO_INCREMENT,
    last_Name varchar(255),
    first_Name varchar(30),
    address varchar(100),
	email varchar(50) UNIQUE,
	mobile_Number varchar(12),
	password varchar(50),
	CONSTRAINT admin_pk PRIMARY KEY (admin_id)
);

INSERT INTO admin ( last_Name, first_Name, address, email, mobile_Number, password) VALUES ( "nigam", "Akash","NOrth t.t. nagar", "akash@gmail.com","8904285945","123456");

CREATE TABLE driver (
    driver_id int NOT NULL AUTO_INCREMENT,
    last_Name varchar(255),
    first_Name varchar(30),
    address varchar(100),
	email varchar(50) UNIQUE,
	mobile_Number varchar(12),
	password varchar(50),
	is_active BOOLEAN,
	avg_rating int(1),
	CONSTRAINT driver_pk PRIMARY KEY (driver_id)
	
);

INSERT INTO driver ( last_Name, first_Name, address, email ,mobile_Number ,password, is_active, avg_rating) VALUES ( "nigam", "Akash","NOrth t.t. nagar", "akash@gmail.com","8904285945","123456",true,4);

CREATE TABLE cab (
    cab_id int NOT NULL AUTO_INCREMENT,
	registration_no varchar(50),
	car_brand varchar(50),
	model varchar(50),
	seater int(1),
	color varchar(50),
	city varchar(25),
    fuel_type ENUM('PETROL','CNG','DIESEL'),
    per_KM_charge int,
	admin_id int NOT NULL,
	CONSTRAINT cab_pk PRIMARY KEY (cab_id),
	CONSTRAINT `fk_cab_admin`
    FOREIGN KEY (admin_id) REFERENCES admin (admin_id)
    ON DELETE CASCADE
    ON UPDATE RESTRICT
);

INSERT INTO cab ( registration_no, car_brand, model, seater, color, city, fuel_type,per_KM_charge ,admin_id ) 
VALUES ( "MP04R20192121212w", "BMW","X1", "5","BLACK","BHOPAL","PETROL",20,1);



