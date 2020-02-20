const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

// GET for newly added
router.get('/', (req, res) => {
    let queryText = `
        SELECT * FROM "opportunity"
        ORDER BY "date_added" DESC
        LIMIT 3;`
    pool.query(queryText)
        .then(response => {
            res.send(response.rows)
        })
        .catch(err => {
            console.log(err);
            res.sendStatus(500)
        })
})

module.exports = router;