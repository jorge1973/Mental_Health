const express = require("express");
const app = express();
const PORT = 8000;

app.get("/", (req, res) => {
	res.status(200).json({ status: 200, message: "Hello World!" });
});

app.listen(PORT, () => {
	console.log(`Server listening on port ${PORT}`);
});