const express = require('express');
const router = express.Router();
const pool = require('../modules/pool');

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

module.exports = router;