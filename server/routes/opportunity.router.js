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
        .catch(error => {
            console.log(error);
            res.sendStatus(500)
        })
})

/**
 * POST route template
 */
router.post('/', (req, res) => {
    console.log('in /opportunity POST:', req.body);
    let queryText = `
        INSERT INTO "opportunity" 
        ("name", "description", "contact", "email", "phone", "web_address", "social", "street_address", "city", "zip", "date_added")
        VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11);`;
    let values = [req.body.name, req.body.description, req.body.contact, req.body.email, req.body.phone, req.body.web_address, req.body.social, req.body.street_address, req.body.city, req.body.zip, 'now()'];
    pool.query(queryText, values).then((result) => {
        res.sendStatus(201);
    }).catch((error) => {
        console.log('error in opportunity POST', error);
        res.sendStatus(500);
    })
});

/**
 * DELETE route template
 */
router.delete('/:id', (req, res) => {
    console.log(req.params.id);
    pool.query('DELETE FROM "opportunity" WHERE id=$1', [req.params.id]).then((result) => {
        res.sendStatus(200);
    }).catch((error) => {
        console.log('Error DELETE /api/opportunity', error);
        res.sendStatus(500);
    })
});

/**
 * PUT route template
 */
router.put('/', (req, res) => {

});

module.exports = router;