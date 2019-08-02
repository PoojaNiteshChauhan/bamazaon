DROP DATABASE IF EXISTS bamazon_DB;
CREATE DATABASE bamazon_DB;
USE bamazon_DB;

CREATE TABLE products(
  item_id INTEGER(11) AUTO_INCREMENT NOT NULL,
  product_name varchar(100),
  department_name varchar(100),
  price integer (11),
  stock_quantity integer(11),
  PRIMARY KEY (item_id)
);

insert into products (product_name, department_name, price, stock_quantity)
values ("T.V","Electronic", 900, 50);

insert into products (product_name, department_name, price, stock_quantity)
values ("Apple Mobile","Electronic",1500,100);

insert into products (product_name, department_name, price, stock_quantity)
values ("Dress","Women's Clothing", 35, 40);

insert into products (product_name, department_name, price, stock_quantity)
values ("jeans","Women's Clothing", 45, 20);

insert into products (product_name, department_name, price, stock_quantity)
values ("Earrings","Women's jewelry", 12, 30);

insert into products (product_name, department_name, price, stock_quantity)
values ("Rings","Women's jewelry", 20, 10);

insert into products (product_name, department_name, price, stock_quantity)
values ("Baby Diapers","in Baby", 37, 80);

insert into products (product_name, department_name, price, stock_quantity)
values ("Baby Wipes","in Baby", 11, 50);

insert into products (product_name, department_name, price, stock_quantity)
values ("Men Sneakers","Men's", 45, 20);

insert into products (product_name, department_name, price, stock_quantity)
values ("Men Socks","Men's", 15, 25);



select price, stock_quantity  from products where product_name = "T.V";
select * from products;

select price, stock_quantity where product_name =  'Dress';

update product set stock_quantity = 60 where product_name = 'dress';