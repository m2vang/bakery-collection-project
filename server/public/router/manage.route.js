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

module.exports = router;