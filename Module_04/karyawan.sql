SELECT * FROM karyawan;

-- Insert data karyawan

Insert into karyawan values 
(null, 'Abby', 23, 'abby@gmail.com', 86.2, 'Jakarta', 2021, 'Programmer'), 
(null, 'Ade', 26, 'ade@gmail.com', 60.5, 'Tangerang', 2015, 'Manager'),
(null, 'Abdi', 30, 'abdi@gmail.com', 78.2, 'Surabaya', 2019, 'Head Engineer'),
(null, 'Andrew', 23, 'andrew@gmail.com', 80.2, 'Jakarta', 2014, 'Engineer'),
(null, 'Alex', 26, 'alex@gmail.com', 60.5, 'Tangsel', 2021, ' Designeer'),
(null, 'Maulana', 20, 'maulana@gmail.com', 64.3, 'Tangerang', 2015, 'Manager'),
(null, 'Felix', 35, 'felix@gmail.com', 65.2, 'Banten', 2013, 'Programmer'),
(null, 'Alvin', 22, 'alvin@gmail.com', 68.3, 'Bandung', 2013, 'Programmer');

-- read data (basic query)
SELECT * FROM product;
-- or
Select * from db_emmerce.product;
Select nama as Nama, posisi as Jabatan from karyawan;

-- Read data (filtering)
Select * from karyawan where usia > 24;
Select * from karyawan where usia > 24 and id_karyawan > 4;
SELECT * FROM karyawan where usia between 23 and 30;

-- Search by first character
Select * from karyawan where nama Like "AB%";

-- Search by last character
Select * from karyawan where nama Like "%A";

-- Search by middle character
Select * from karyawan where nama Like "%b%";

-- Search by range price min and max
Select min(usia) from karyawan;
Select max(usia) from karyawan;

-- Calculate data karyawan using COUNT
Select count(*) from karyawan where usia > 23;

-- Calculate data karyawan using SUM
Select sum(berat) as Berat_Karyawan from karyawan;

-- Calculate data karyawan using AVG
SELECT avg(berat) as averange_berat from karyawan;

-- data grouping
Select posisi, count(*) as Jumlah from karyawan group by posisi;

-- average product pada masing-masing category using having
Select category, avg(price) as RataRata_Price from product group by category having RataRata_Price > 100000;

-- sorting data
Select * from product order by price asc;
Select * from product order by price desc;

-- limited calling data
Select * from product limit 5;
Select * from product limit 2,2;

-- update data
Update karyawan set id_posisi = 6 where id_karyawan = 8;

-- relationship fk table posisi and karyawan for posisi
select * from posisi;
select * from karyawan;

-- inner join one to one
Select k.id_karyawan, k.nama, k.email, k.tahun, p.nama
as Jabatan from karyawan k JOIN posisi p on k.id_karyawan = p.id_posisi;

-- one to many 
Select * from karyawan k 
JOIN posisi p on k.id_posisi = p.id_posisi
JOIN job_task jt on k.id_karyawan = jt.id_karyawan;

