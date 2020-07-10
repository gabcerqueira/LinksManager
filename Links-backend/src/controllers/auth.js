const express = require('express');
const {
    Account
} = require('../models');
const bcrypt = require('bcrypt');
const {
    accountSignUp
} = require('../validators/account');
const {
    getMessage
} = require('../helpers/messages');

const router = express.Router();
const saltRounds = 10;

router.get('/sign-in', (req, res) => {
    return res.jsonOK(null);
});

router.post('/sign-up', accountSignUp, async (req, res) => {

    const {
        email,
        password
    } = req.body;

    // --> Verify email
    const account = await Account.findOne({
        where: {
            email
        }
    });

    if (account) {
        return res.jsonBadRequest(null, getMessage('accountSignUp.email.string.exists'));
    }

    const hash = bcrypt.hashSync(password, saltRounds);
    const newAccount = await Account.create({
        email,
        password: hash
    });

    return res.jsonOK(newAccount, getMessage('accountSignUp.success'));
});


module.exports = router;