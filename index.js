const express = require("express");
require("dotenv").config();

const app = express();
const port = process.env.PORT || 8000;
const db = require("./config/mongoose");

const cors = require("cors");

//enables cors
app.options("*", cors());
app.use(
	cors({
		origin: "*",
		methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
		preflightContinue: false,
	})
);

app.use(express.json());

app.use("/", require("./routes"));

// make server listen
app.listen(port, function (err) {
	if (err) {
		console.log(`Error in running server: ${err}`);
		return;
	}
	console.log(`Server is up and running on port: ${port}`);
});
