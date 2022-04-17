DROP DATABASE IF EXISTS cabmanagement;
CREATE DATABASE cabmanagement;
use cabmanagement;
CREATE TABLE customer (
    cust_id int NOT NULL AUTO_INCREMENT,
    last_Name varchar(255),
    first_Name varchar(30),
    address varchar(100),
	email varchar(50) UNIQUE,
	mobile_Number varchar(12),
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

CREATE TABLE schedule (
    sch_id int NOT NULL AUTO_INCREMENT,
	cab_id int NOT NULL,
	driver_id int NOT NULL,
	alloc_start_date DATE,
	alloc_end_date DATE,
	CONSTRAINT schedule_pk PRIMARY KEY (sch_id,cab_id,driver_id),
	CONSTRAINT `fk_schedule_cab`
    FOREIGN KEY (cab_id) REFERENCES cab (cab_id)
    ON DELETE CASCADE
    ON UPDATE RESTRICT,
	CONSTRAINT `fk_schedule_driver`
    FOREIGN KEY (driver_id) REFERENCES driver (driver_id)
    ON DELETE CASCADE
    ON UPDATE RESTRICT
);

INSERT INTO schedule ( cab_id, driver_id, alloc_start_date, alloc_end_date) 
VALUES ( 1, 1,"2010-01-12", "2010-01-12");

CREATE TABLE booking (
    booking_id int NOT NULL AUTO_INCREMENT,
	cab_id int NOT NULL,
	cust_id int NOT NULL,
	trip_rating int(1),
	distance int,
	date_of_booking DATE,
	booking_status ENUM('COMPLETED','ONGOING','SCHEDULE','CANCELLED'),
	from_location varchar(20),
	to_location varchar(20),
	CONSTRAINT booking_pk PRIMARY KEY (booking_id,cab_id,cust_id),
	CONSTRAINT `fk_booking_cab`
    FOREIGN KEY (cab_id) REFERENCES cab (cab_id)
    ON DELETE CASCADE
    ON UPDATE RESTRICT,
	CONSTRAINT `fk_booking_cust`
    FOREIGN KEY (cust_id) REFERENCES customer (cust_id)
    ON DELETE CASCADE
    ON UPDATE RESTRICT
);

INSERT INTO booking ( cab_id, cust_id, trip_rating, distance, date_of_booking, booking_status, from_location, to_location) 
VALUES ( 1, 1,5,10,"2010-01-12", 'COMPLETED',"bangalore","salem");

CREATE TABLE pays (
    payment_id int NOT NULL AUTO_INCREMENT,
	driver_id int NOT NULL,
	cust_id int NOT NULL,
	amount int,
	is_success BOOLEAN,
	date_of_pay DATE,
	booking_id int NOT NULL,
	CONSTRAINT pays_pk PRIMARY KEY (payment_id,driver_id,cust_id),
	CONSTRAINT `fk_pays_driver`
    FOREIGN KEY (driver_id) REFERENCES driver (driver_id)
    ON DELETE CASCADE
    ON UPDATE RESTRICT,
	CONSTRAINT `fk_pays_cust`
    FOREIGN KEY (cust_id) REFERENCES customer (cust_id)
    ON DELETE CASCADE
    ON UPDATE RESTRICT,
	CONSTRAINT `fk_pays_booking`
    FOREIGN KEY (booking_id) REFERENCES booking (booking_id)
    ON DELETE CASCADE
    ON UPDATE RESTRICT
);

INSERT INTO pays ( driver_id, cust_id, amount, is_success, date_of_pay, booking_id) 
VALUES ( 1, 1,100,true,"2010-01-12", 1);

