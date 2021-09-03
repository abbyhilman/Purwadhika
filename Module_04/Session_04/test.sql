SELECT * FROM product;

-- Insert data product

Insert into product values 
(null, 'celana','jogger',200000);

-- Insert data by specific column
Insert into product (name, price) values ('jogger cokelat', 100000);

-- read data (basic query)
SELECT * FROM product;
-- or
Select * from db_emmerce.product;
Select name as Nama, price as Harga from product;

-- Read data (filtering)
Select * from product where price > 100000;
Select * from product where price > 100000 and id_product > 4;
SELECT * FROM product where price between 100000 and 130000;

-- Search by first character
Select * from product where name Like "KE%";

-- Search by last character
Select * from product where name Like "%A";

-- Search by middle character
Select * from product where name Like "%b%";

-- Search by range price min and max
Select min(price) from product;
Select max(price) from product;

-- Calculate data product using COUNT
Select count(*) from product where price > 200000;

-- Calculate data product using SUM
Select sum(price) as Harga_product from product;

-- Calculate data product using AVG
SELECT avg(price) as averange_price from product;

-- data grouping
Select category, count(*) as Jumlah from product group by category;

-- average product pada masing-masing category using having
Select category, avg(price) as RataRata_Price from product group by category having RataRata_Price > 100000;

-- sorting data
ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY 'root1234';

Select * from product order by price asc;
Select * from product order by price desc;

-- limited calling data
Select * from product limit 5;
Select * from product limit 2,2;

-- update data
Update product set name = "jogger loreng" where id_product = 12;

-- delete data
Delete from product where id_product = 16;

-- relationship fk table category and product for category
select * from category;
select * from product;

-- inner join one to one
Select p.id_product, p.name, p.price, p.image, c.nama
as Kategori from product p JOIN category c on p.id_category = c.id_category;

-- one to many 


