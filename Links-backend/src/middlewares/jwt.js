const { verifyJwt } = require("../helpers/jwt");

const checkJwt = (req, res, next) => {
	let token = req.headers["authorization"];
	token = token ? token.slice(7, token.length) : null;

	if (!token) {
		return res.jsonUnauthorized(null, "invalid token");
	}

	try {
		const decodedToken = verifyJwt(token);
		console.log(token, new Date(decodedToken.exp * 1000));
		req.accountId = decodedToken.id;
		next();
	} catch (error) {
		return res.jsonUnauthorized(null, "invalid token");
	}
};

module.exports = checkJwt;
