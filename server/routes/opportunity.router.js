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

// router.post('/opportunity', async (req, res) => {
//     const client = await pool.connect();
//     try {
//         const {
//             name,
//             description,
//             contact,
//             email,
//             phone,
//             web_address,
//             social,
//             street_address,
//             city,
//             zip
//         } = req.body;
//         await client.query('BEGIN')
//         const orderInsertResults = await client.query(`
//             INSERT INTO "opportunity" 
//             ("name", "description", "contact", "email", "phone", "web_address", "social", "street_address", "city", "zip", "date_added")
//             VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, 'now()')`
//             // [customer_name, street_address, city, zip, type, total]
//         );
//         // const orderId = orderInsertResults.rows[0].id;

//         // await Promise.all(pizzas.map(pizza => {
//         //     const insertLineItemText = `INSERT INTO "line_item" ("order_id", "pizza_id", "quantity") VALUES ($1, $2, $3)`;
//         //     const insertLineItemValues = [orderId, pizza.id, pizza.quantity];
//         //     return client.query(insertLineItemText, insertLineItemValues);
//         // }
//         ));
//         await client.query('COMMIT')
//         res.sendStatus(201);
//     } catch (error) {
//         await client.query('ROLLBACK')
//         console.log('Error POST /api/order', error);
//         res.sendStatus(500);
//     } finally {
//         client.release()
//     }
// });

// });

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