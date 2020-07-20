export const tokenHandler = (token) => {
	if (!token) return 0;
	try {
		const [, tokenPayload] = token.split(".");
		const data = JSON.parse(atob(tokenPayload));
		const expires = data ? data.exp : 0;
		return expires;
	} catch (e) {
		return 0;
	}
};
