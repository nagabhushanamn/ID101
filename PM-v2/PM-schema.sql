

create database pm;
use pm;
create table pm.PRODUCTS(
	id int primary key,
	name varchar(30),
	price double,
	make_date date,
	description varchar(256)
);
insert into pm.PRODUCTS values(1,'Laptop',198000.00,'2017/12/12','New Mac pro');
select * from pm.PRODUCTS;
