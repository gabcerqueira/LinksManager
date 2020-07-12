const express = require("express");
const db = require("./models/index");
const authController = require("./controllers/auth");
const linkController = require("./controllers/link");
const response = require("./middlewares/response");

const app = express();
app.use(response);

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/auth", authController);
app.use("/link", linkController);

app.get("/", (req, res) => {
	return res.json({
		message: "hello world",
	});
});

db.sequelize.sync().then(() => {
	app.listen(3001, () => {
		console.log("listening on port 3001");
	});
});
