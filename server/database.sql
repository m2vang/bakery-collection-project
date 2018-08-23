CREATE TABLE "baked_types" (
	id SERIAL PRIMARY KEY,
	types VARCHAR(100) not null);

CREATE TABLE "baked_goods" (
	id SERIAL PRIMARY KEY,
	name VARCHAR(50) not null,
	baked_date DATE not null,
	eat_by DATE not null,
	image_url VARCHAR(250) not null,
	baked_types_id INT REFERENCES "baked_types");
	
INSERT INTO "baked_types" ("types")
VALUES ('Cake'), ('Cupcake'), ('Cookies'), ('Bread'), ('Pie'), ('Brownies'), ('Donuts'), ('Tart'), ('Croissant');

INSERT INTO "baked_goods" ("name", "baked_date", "eat_by", "image_url", "baked_types_id")
VALUES ('Banana Bread', '2018-08-22', '2018-08-25', 'https://c1.staticflickr.com/6/5138/5529538337_86e82ce346_b.jpg', 4);

INSERT INTO "baked_goods" ("name", "baked_date", "eat_by", "image_url", "baked_types_id")
VALUES ('Strawberry Cake', '2018-08-21', '2018-08-25', 'https://cdn.pixabay.com/photo/2018/01/25/09/35/dessert-3105761_960_720.jpg', 1);