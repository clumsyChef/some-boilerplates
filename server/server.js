const express = require("express");
const app = express();
const cors = require("cors");

// This is for react to fetch data.
app.use(cors());

app.get("/somedata", (req, res) => {
	const dataToSend = {
		firstName: "Sarthak",
		lastName: "Jha",
	};

	const stringified = JSON.stringify(dataToSend);

	res.send(stringified);
});

app.listen(5000, () => {
	console.log("Server is Running");
});
