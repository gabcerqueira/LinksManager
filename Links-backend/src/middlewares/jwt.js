const { verifyJwt } = require("../helpers/jwt");

const checkJwt = (req, res, next) => {
	const { url: path } = req;

	const excludedPaths = ["/auth/sign-in", "/auth/sign-up"];
	const isExcluded = !!excludedPaths.find((p) => p.startsWith(path));

	if (isExcluded) return next();

	let token = req.headers["authorization"];
	token = token ? token.slice(7, token.length) : null;

	if (!token) {
		return res.jsonUnauthorized(null, "invalid token");
	}

	try {
		const decodedToken = verifyJwt(token);
		req.accountId = decodedToken.id;
		next();
	} catch (error) {
		return res.jsonUnauthorized(null, "invalid token");
	}
};

module.exports = checkJwt;
