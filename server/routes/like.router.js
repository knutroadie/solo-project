const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

router.post('/', (req, res) => {
    console.log('in /like POST:', req.body);
    let queryText = `
        INSERT INTO "user_opportunity" 
        ("user_id", "opportunity_id")
        VALUES ($1, $2);`;
    let values = [req.user.id, req.body.id];
    pool.query(queryText, values).then((result) => {
        res.sendStatus(201);
    }).catch((error) => {
        console.log('error in opportunity POST', error);
        res.sendStatus(500);
    })
});

module.exports = router;