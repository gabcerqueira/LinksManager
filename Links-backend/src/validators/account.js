const Joi = require("@hapi/joi");
const { getValidatorError } = require("../helpers/validator");

const validationRules = {
	email: Joi.string().email().required(),
	password: Joi.string().pattern(new RegExp("^[a-zA-Z-0-9]{6,30}$")),
	password_confirmation: Joi.string().valid(Joi.ref("password")).required(),
};
const options = { abortEarly: false };

const accountSignUp = (req, res, next) => {
	const { email, password, password_confirmation } = req.body;

	const schema = Joi.object({
		email: validationRules.email,
		password: validationRules.password,
		password_confirmation: validationRules.password_confirmation,
	});

	const { error } = schema.validate(
		{ email, password, password_confirmation },
		options
	);

	if (error) {
		const messages = getValidatorError(error, "accountSignUp");

		return res.jsonBadRequest(null, null, {
			error: messages,
		});
	}

	next();
};

const accountSignIn = (req, res, next) => {
	const { email, password } = req.body;

	const schema = Joi.object({
		email: validationRules.email,
		password: validationRules.password,
	});

	const { error } = schema.validate({ email, password }, options);

	if (error) {
		const messages = getValidatorError(error, "accountSignIn");

		return res.jsonBadRequest(null, null, {
			error: messages,
		});
	}

	next();
};

module.exports = {
	accountSignUp,
	accountSignIn,
};
