const express = require("express");
const { Link } = require("../models");

const router = express.Router();

router.get("/", async (req, res) => {
	const { accountId } = req;

	const getLinks = await Link.findAll({
		where: { accountId: accountId },
	});

	if (!getLinks) return res.jsonNotFound();

	return res.jsonOK(getLinks);
});

router.get("/edit/:id", async (req, res) => {
	const { accountId } = req;
	const { id } = req.params;

	const getLink = await Link.findOne({
		where: { id: id, accountId: accountId },
	});

	if (!getLink) return res.jsonNotFound(null, "Não achou");

	return res.jsonOK(getLink);
});

router.post("/", async (req, res) => {
	const { accountId, body } = req;
	const { label, url, isSocial } = body;

	const image = "https://google.com/image.jsp";

	const NewLink = await Link.create({ label, url, image, isSocial, accountId });

	return res.jsonOK(NewLink);
});

router.put("/edit/:id", async (req, res) => {
	const { accountId, body } = req; //req.id
	const { id } = req.params;

	const fields = ["label", "url", "isSocial"];

	const editedLink = await Link.findOne({
		where: { id: id, accountId: accountId },
	});

	if (!editedLink) return res.jsonNotFound();

	fields.map((field) => {
		const fieldValue = body[field];
		if (fieldValue != undefined) {
			editedLink[field] = fieldValue;
		}
	});

	await editedLink.save();

	return res.jsonOK(editedLink);
});

router.delete("/:id", async (req, res) => {
	const { id } = req.params;
	const { accountId } = req;
	const deleteLink = await Link.findOne({
		where: { id: id, accountId: accountId },
	});

	if (!deleteLink) return res.jsonNotFound();

	await deleteLink.destroy();

	return res.jsonOK(deleteLink);
});

module.exports = router;
