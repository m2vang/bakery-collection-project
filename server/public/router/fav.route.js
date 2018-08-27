const express = require('express');
const router = express.Router();
const pool = require('../modules/pool');

router.get('/', (req, res) => {
    console.log('in GET-addFav route');
    const query = `SELECT "baked_favs"."id",  "baked_favs"."baked_goods_id", "baked_goods"."name", "baked_types"."types", "baked_goods"."image_url" 
                    FROM "baked_goods" 
                    JOIN "baked_favs" 
                    ON "baked_favs"."baked_goods_id" = "baked_goods"."id" 
                    JOIN "baked_types" 
                    ON "baked_types"."id" = "baked_goods"."baked_types_id";`;
    pool.query(query)
        .then((results) => {
            console.log(results);
            res.send(results.rows);
        }).catch((error) => {
            console.log('error in GET-FAVitems', error);
            res.sendStatus(500);
        });
}); //end of GET

//Deleting bakery item by its id
router.delete('/deleteFavs/:id', (req, res) => {
    console.log('in delete-fav route', req.params.id);
    const idToDelete = req.params.id;
    const query = `DELETE FROM "baked_favs" WHERE "id" = $1;`;
    pool.query(query, [idToDelete])
        .then((results) => {
            res.sendStatus(200);
        }).catch((error) => {
            console.log('error in delete-fav', error);
            res.sendStatus(500);
        });
}); //end of DELETE

module.exports = router;