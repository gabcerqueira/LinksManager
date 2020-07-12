const express = require("express");
const { Account } = require("../models");
const bcrypt = require("bcrypt");
const { accountSignUp, accountSignIn } = require("../validators/account");
const { getMessage } = require("../helpers/messages");
const { generateJwt, generateRefreshJwt } = require("../helpers/jwt");

const router = express.Router();
const saltRounds = 10;

router.post("/sign-in", accountSignIn, async (req, res) => {
	const { email, password } = req.body;

	const account = await Account.findOne({ where: { email } });

	//              <-- account validation -->

	const match = account ? bcrypt.compareSync(password, account.password) : null;

	if (!match) {
		return res.jsonBadRequest(null, getMessage("accountSignIn.email.invalid"));
	}

	const token = generateJwt({ id: account.id });
	const refreshToken = generateRefreshJwt({ id: account.id });

	return res.jsonOK(account.email, getMessage("accountSignIn.sucess"), {
		token,
		refreshToken,
	});
});

router.post("/sign-up", accountSignUp, async (req, res) => {
	const { email, password } = req.body;

	// --> Verify email
	const account = await Account.findOne({ where: { email } });

	if (account) {
		return res.jsonBadRequest(
			null,
			getMessage("accountSignUp.email.string.exists")
		);
	}

	const hash = bcrypt.hashSync(password, saltRounds);

	const newAccount = await Account.create({
		email,
		password: hash,
	});

	const token = generateJwt({ id: newAccount.id });
	const refreshToken = generateRefreshJwt({ id: newAccount.id });

	return res.jsonOK(newAccount, getMessage("accountSignUp.success"), {
		token,
		refreshToken,
	});
});

module.exports = router;
