const { verifyJwt, getTokenFromHeaders } = require("../helpers/jwt");

const checkJwt = (req, res, next) => {
	const { url: path } = req;

	const excludedPaths = ["/auth/sign-in", "/auth/sign-up", "/auth/refresh"];
	const isExcluded = !!excludedPaths.find((p) => p.startsWith(path));

	if (isExcluded) return next();

	const token = getTokenFromHeaders(req.headers);

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
