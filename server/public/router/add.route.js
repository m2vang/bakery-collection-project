const express = require('express');
const router = express.Router();
const pool = require('../modules/pool');

//Posting new bakery item
router.post('/addItem', (req, res) => {
    console.log('in POST-add route', req.body);
    const newItem = req.body;
    const query = `INSERT INTO "baked_goods" ("name", "baked_date", "eat_by", "image_url", "baked_types_id")
                    VALUES ($1, $2, $3, $4, $5);`;
    pool.query(query, [newItem.name, newItem.baked_date, newItem.eat_by, 
                        newItem.image_url, newItem.baked_types_id])
    .then((results) => {
        console.log(results);
        res.sendStatus(200);
    }).catch((error) => {
        console.log('error in POST item', error);
        res.sendStatus(500);
    });
}); //end of POST

//Getting all bakery items
router.get('/add', (req, res) => {
    console.log('in GET-add route');
    const query = `SELECT "baked_goods"."id", "name", "baked_types"."types", "baked_date", "eat_by", "image_url" 
                    FROM "baked_goods" 
                    JOIN "baked_types" 
                    ON "baked_types"."id" = "baked_goods"."baked_types_id";`;
    pool.query(query)
    .then((results) => {
        console.log(results);
        res.send(results.rows);
    }).catch((error) => {
        console.log('error in GET-items', error);
        res.sendStatus(500);
    });
}); //end of GET

//Getting all types of bakery items by their name alphabetically 
router.get('/type', (req, res) => {
    console.log('in GET-type-add route');
    const query = `SELECT "baked_types"."id", "baked_types"."types"
                    FROM "baked_types" 
                    LEFT JOIN "baked_goods" 
                    ON "baked_goods"."baked_types_id" = "baked_types"."id" 
                    GROUP BY "baked_types"."id", "baked_types"."types" ORDER BY "baked_types"."types";`;
    pool.query(query)
        .then((results) => {
            console.log(results);
            res.send(results.rows);
        }).catch((error) => {
            console.log('error in GET-types-add', error);
            res.sendStatus(500);
        });
}); //end of GET

//Deleting bakery item by its id
router.delete('/delete/:id', (req, res) => {
    console.log('in delete-add route', req.params.id);
    const idToDelete = req.params.id;
    const query = `DELETE FROM "baked_goods" WHERE "id" = $1;`;
    pool.query(query, [idToDelete])
    .then((results) => {
        res.sendStatus(200);
    }).catch((error) => {
        console.log('error in delete-add', error);
        res.sendStatus(500);
    });
}); //end of DELETE

module.exports = router;