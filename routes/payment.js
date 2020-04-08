const express = require('express');
const router = express.Router();


const config = require('config-lite')(__dirname)

const keyPublishable = config.keyPublishable
const keySecret = config.keySecret

const Stripe = require("stripe");



// rest api , return json data
router.get('/token', async (req, res) => {
    try {
        const stripe = Stripe(keySecret);
        stripe.tokens.create({
                card: {  
                    number: '4242424242424242',
                    exp_month: 9,
                    exp_year: 2021,
                    cvc: '123',
                },
            },
            function (err, token) {
                if (err) {
                    res.json({
                        code: 001,
                        msg: err
                    })
                } else {
                    let _tk = token.id;
                    res.json({
                        code: 0,
                        data: token
                    })
                }
            }
        );

    } catch (error) {
        res.json({
            code: 001,
            msg: error
        })
    }
})

router.get('/pay', async (req, res) => {
    const token = req.query.token;
    try {
        const stripe = Stripe(keySecret);
        const charge = await stripe.charges.create({
            amount: 51,
            currency: 'cad',
            description: 'Live Li. Debit Card',
            source: token,
        });
        res.json({
            code: 0,
            data: charge
        })
    } catch (error) {
        res.json({
            code: 001,
            msg: error
        })
    }
})

module.exports = router;