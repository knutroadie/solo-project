const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();
const { rejectUnauthenticated } = require('../modules/authentication-middleware');

// GET for landing page, ranks entries based on likes
router.get('/', (req, res) => {
    let queryText = `
        SELECT "opportunity".*, COUNT(*) as likes FROM "opportunity"
        JOIN "user_opportunity" on "user_opportunity".opportunity_id = "opportunity".id
        GROUP BY "opportunity".id
        ORDER BY likes DESC;`
    pool.query(queryText)
        .then(response => {
            res.send(response.rows)
        })
        .catch(err => {
            console.log(err);
            res.sendStatus(500)
        })
})

// GET for the details of the item we clicked on
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

// POST for a new submission
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

// DELETE from the table targeting the ID of the item we clicked on
router.delete('/:id', (req, res) => {
    console.log(req.params.id);
    pool.query('DELETE FROM "opportunity" WHERE id=$1', [req.params.id]).then((result) => {
        res.sendStatus(200);
    }).catch((error) => {
        console.log('Error DELETE /api/opportunity', error);
        res.sendStatus(500);
    })
});

// UPDATES table at targeted ID
router.put('/:id', rejectUnauthenticated, (req, res) => {
    console.log('in router PUT', req.body);
    let sqlText = `
    UPDATE "opportunity" 
    SET "image_url"=$1, "name"=$2, "description"=$3, "contact"=$4, "email"=$5, "phone"=$6, "web_address"=$7, "social"=$8, "street_address"=$9, "city"=$10, "zip"=$11 WHERE "id"=${req.params.id};`;
    let values = [req.body.img_url, req.body.name, req.body.description, req.body.contact, req.body.email, req.body.phone, req.body.web_address, req.body.social, req.body.street_address, req.body.city, req.body.zip];
    pool.query(sqlText, values)
    .then((result) => {
        res.sendStatus(200);
    }).catch((error) => {
        console.log(error);
        res.sendStatus(500);
    });
});

module.exports = router;