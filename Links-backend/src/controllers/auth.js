const express = require("express");
const { Account } = require("../models");
const bcrypt = require("bcrypt");
const { accountSignUp, accountSignIn } = require("../validators/account");
const { getMessage } = require("../helpers/messages");
const {
	generateJwt,
	generateRefreshJwt,
	getTokenFromHeaders,
	verifyRefreshJwt,
} = require("../helpers/jwt");

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
	const refreshToken = generateRefreshJwt({
		id: account.id,
		version: account.jwtVersion,
	});

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
	const refreshToken = generateRefreshJwt({
		id: newAccount.id,
		version: newAccount.jwtVersion,
	});

	return res.jsonOK(newAccount, getMessage("accountSignUp.success"), {
		token,
		refreshToken,
	});
});

router.post("/refresh", async (req, res) => {
	const token = getTokenFromHeaders(req.headers);

	if (!token) {
		return res.jsonUnauthorized(null, "invalid token");
	}

	try {
		const decodedToken = verifyRefreshJwt(token);
		const account = await Account.findByPk(decodedToken.id);
		if (!account) return res.jsonUnauthorized(null, "invalid token");

		if (decodedToken.version !== account.jwtVersion) {
			return res.jsonUnauthorized(null, "invalid token");
		}

		const meta = {
			token: generateJwt({ id: account.id }),
		};

		return res.jsonOK(null, null, meta);
	} catch (error) {
		return res.jsonUnauthorized(null, "invalid token");
	}
});

module.exports = router;
