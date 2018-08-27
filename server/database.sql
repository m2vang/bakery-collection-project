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

CREATE TABLE "baked_favs" (
	id SERIAL PRIMARY KEY,
	baked_goods_id INT REFERENCES "baked_goods");
	
INSERT INTO "baked_types" ("types")
VALUES ('Cake'), ('Cupcake'), ('Cookies'), ('Bread'), ('Pie'), ('Brownies'), ('Donuts'), ('Tart'), ('Croissant');