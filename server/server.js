"use strict";
const express = require("express");
const morgan = require("morgan");
const { allowedNodeEnvironmentFlags } = require("process");
const {
	getListOfPro,
	addPro,
	getProfessionals,
	getProfDetails,
	updatePro,
	deletePro,
	addClient,
	updateClient,
} = require("./handlers");
const app = express();
const PORT = 8000;

express()
	.use(morgan("tiny"))
	.use(express.static("public"))
	.use(express.json())
	.use(express.urlencoded({ extended: false }))
	.use("/", express.static(__dirname + "/"))

	//EndPoints
	.get("/", (req, res) => {
		res.status(200).json({ status: 200, message: "Hello World!" });
	})

	//Endpoint for UserAdmin to create,read,modify and delete professionals.
	.get("/admin/listofpro", getListOfPro)
	.post("/admin/addpro", addPro)
	.patch("/admin/updatepro/:_id", updatePro)
	.delete("/admin/deletepro/:_id", deletePro)

	//Endpoint for Customers
	.get("/pro/listpro", getProfessionals)
	.get("/pro/listpro/:id", getProfDetails)
	.post("/client/addclient", addClient)
	.patch("/client/updateClient/:_id", updateClient)

	.get("*", (req, res) => {
		res.status(404).json({
			status: 404,
			message: "This is not what you are looking for.",
		});
	})
	.listen(PORT, () => {
		console.log(`Server listening on port ${PORT}`);
	});
