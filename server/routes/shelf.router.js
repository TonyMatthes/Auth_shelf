const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

/**
 * Get all of the items on the shelf
 */
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
router.post('/', (req, res) => {
    pool.query(`INSERT INTO "item" ("description", "image_url", "person_id")
                VALUES ($1, $2, $3)`, [req.body.description, req.body.image_url, req.body.person_id])
        .then(() => res.sendStatus(200))
        .catch((error) => {
            console.log('Error Adding Item: ', error)
            res.sendStatus(500);
        });
});


/**
 * Delete an item if it's something the logged in user added
 */
router.delete('/:id', (req, res) => {
    console.log (req)
    const queryText = 'DELETE FROM "item" WHERE id=$1';
  pool.query(queryText, [req.params.id])
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

});


/**
 * Return a specific item by id
 */
router.get('/:id', (req, res) => {

});

module.exports = router;