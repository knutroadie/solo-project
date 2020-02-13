const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

/**
 * GET route template
 */
router.get('/', (req, res) => {
    let queryText = `SELECT * FROM "opportunity"`
    pool.query(queryText)
        .then(response => {
            res.send(response.rows)
        })
        .catch(err => {
            console.log(err);
            res.sendStatus(500)
        })
})

router.get('/:id', (req, res) => {
    let queryText = `SELECT * FROM "opportunity" WHERE "id" = ${req.params.id}`
    pool.query(queryText)
        .then(response => {
            res.send(response.rows)
        })
        .catch(err => {
            console.log(err);
            res.sendStatus(500)
        })
})

/**
 * POST route template
 */
router.post('/', (req, res) => {

});

/**
 * DELETE route template
 */
router.delete('/', (req, res) => {

});

/**
 * PUT route template
 */
router.put('/', (req, res) => {

});

module.exports = router;