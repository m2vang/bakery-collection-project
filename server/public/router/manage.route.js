const express = require('express');
const router = express.Router();
const pool = require('../modules/pool');

//Posting new bakery type
router.post('/addType', (req, res) => {
    console.log('in POST-manage route', req.body);
    const newType = req.body;
    const query = `INSERT INTO "baked_types" ("types")
                    VALUES ($1);`;
    pool.query(query, [newType.types])
    .then((results) => {
        console.log(results);
        res.sendStatus(200);
    }).catch((error) => {
        console.log('error in POST type', error);
        res.sendStatus(500);
    });
}); //end of POST

//Getting all types of bakery items
router.get('/', (req, res) => {
    console.log('in GET-type route');
    const query = `SELECT "baked_types"."types", count("baked_goods"."baked_types_id") 
                    FROM "baked_types" 
                    JOIN "baked_goods" 
                    ON "baked_goods"."baked_types_id" = "baked_types"."id" 
                    GROUP BY "baked_types"."types";`;
    pool.query(query)
    .then((results) => {
        console.log(results);
        res.send(results.rows);
    }).catch((error) => {
        console.log('error in GET-types', error);
        res.sendStatus(500);
    });
}); //end of GET

module.exports = router;