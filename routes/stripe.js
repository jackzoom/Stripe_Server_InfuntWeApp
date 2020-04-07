const express = require('express');
const router = express.Router();


const config = require('config-lite')(__dirname)

const keyPublishable = config.keyPublishable
const keySecret = config.keySecret

const stripe = require("stripe")(keySecret);

// rest api , return json data
router.post('/stripePay/pay', async (req, res) => {
    const token = req.body.stripeToken1;
    try {
        const charge = await stripe.charges.create({
            amount: 999,
            currency: 'sgd',
            description: 'Example charge',
            source: token,
        });
        res.json({
            code: 0,
            msg: charge
        })
    } catch (error) {
        res.json({
            code: 001,
            msg: error
        })
    }

})


module.exports = router;