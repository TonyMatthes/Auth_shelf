const express = require('express');
const { rejectUnauthenticated } = require('../modules/authentication-middleware');
const pool = require('../modules/pool');
const router = express.Router();

/**
 * Get all of the items on the shelf
 */
router.get('/:id', (req, res) => {
    pool.query(`SELECT "item"."id", "description", "image_url", "person"."username" FROM "item"
                    JOIN "person" ON "person"."id" = "item"."person_id"
                    WHERE "person"."id" = ($1)`, [req.params.id])
        .then((result) => {
            res.send(result.rows)
        })
        .catch((error) => {
            console.log('error with item Select', error)
            res.sendStatus(500)
        })
});

router.get('/', (req, res) => {
    pool.query(`SELECT "item"."id", "description", "image_url", "person"."username" FROM "item"
                    JOIN "person" ON "person"."id" = "item"."person_id"`)
        .then((result) => {
            res.send(result.rows)
        })
        .catch((error) => {
            console.log('error with item Select', error)
            res.sendStatus(500)
        })
});


/**
 * Add an item for the logged in user to the shelf
 */
router.post('/', rejectUnauthenticated, (req, res) => {
    console.log(req.body)
    pool.query(`INSERT INTO "item" ("description", "image_url", "person_id")
                VALUES ($1, $2, $3)`, [req.body.description, req.body.image_url, req.body.user_id])
        .then(() => res.sendStatus(200))
        .catch((error) => {
            console.log('Error Adding Item: ', error)
            res.sendStatus(500);
        });
});


/**
 * Delete an item if it's something the logged in user added
 */
router.delete('/:id', rejectUnauthenticated, (req, res) => {
    console.log(req.user)
    const queryText = 'DELETE FROM "item" WHERE id=$1 AND person_id=$2';
    pool.query(queryText, [req.params.id, req.user.id])
        .then(() => { res.sendStatus(200); })
        .catch((err) => {
            console.log('Error in DELETE', err);
            res.sendStatus(500);
        });
});


/**
 * Update an item if it's something the logged in user added
 */
router.put('/:id', (req, res) => {

});


/**
 * Return all users along with the total number of items 
 * they have added to the shelf
 */
router.get('/count', (req, res) => {
    pool.query(`SELECT "person"."id", "person"."username", COUNT("item"."person_id") as "number_of_items"
                FROM "person"
                LEFT JOIN "item" ON "person"."id" = "item"."person_id"
                GROUP BY "person"."id";`)
        .then((result) => {
            res.send(result.rows)
        })
        .catch((error) => {
            console.log('error with item Select', error)
            res.sendStatus(500)
        })
});


/**
 * Return a specific item by id
 */
router.get('/:id', (req, res) => {

});

module.exports = router;