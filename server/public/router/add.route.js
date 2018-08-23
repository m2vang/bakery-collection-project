const express = require('express');
const router = express.Router();
const pool = require('../modules/pool');

//Posting new bakery item
router.post('/addItem', (req, res) => {
    console.log('in POST-add route', req.body);
    const updatedItem = req.body;
    const query = `INSERT INTO "baked_goods" ("name", "baked_date", "eat_by", "image_url", "baked_types_id")
                    VALUES ($1, $2, $3, $4, $5);`;
    pool.query(query, [updatedItem.name, updatedItem.baked_date, updatedItem.eat_by, 
                        updatedItem.image_url, updatedItem.baked_types_id])
    .then((results) => {
        console.log(results);
        res.sendStatus(200);
    }).catch((error) => {
        console.log('error posting item', error);
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