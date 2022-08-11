"use strict";
require("dotenv").config();
const { MongoClient } = require("mongodb");
const { MONGO_URI } = process.env;
const options = {
	useNewUrlParser: true,
	useUnifiedTopology: true,
};

const client = new MongoClient(MONGO_URI, options);
const { v4: uuidv4 } = require("uuid");
const bcrypt = require("bcrypt");

const getListOfPro = async (req, res) => {
	try {
		await client.connect();
		const db = client.db("Menthal_DB");
		const dbProf = await db.collection("professionals").find().toArray();
	} catch (error) {
		console.log(error);
	}
	client.close();
	console.log("disconnected!");
};

const addPro = async (req, res) => {
	try {
		await client.connect();
		const profInfo = req.body;
		console.log(req.body);
		const db = client.db("Menthal_DB");
		const dbProf = await db.collection("professionals").insertOne(profInfo);
		res
			.status(201)
			.json({ status: 201, data: req.body, message: "Professional added." });
	} catch (error) {
		console.log(error);
	}
	client.close();
	console.log("disconnected!");
};

//Use just one time to create Admin user
// const batchImport = async () => {
// 	const client = new MongoClient(MONGO_URI, options);
// 	const _id = uuidv4();
// 	try {
// 		const salt = await bcrypt.genSalt();
// 		const hashedPassword = await bcrypt.hash("", salt);
// 		await client.connect();
// 		const db = client.db("Menthal_DB");
// 		await db.collection("users").insertOne({
// 			_id: _id,
// 			userType: "Administrator",
// 			email: "jediazf@protonmail.com",
// 			password: hashedPassword,
// 		});
// 	} catch (error) {
// 		console.log(error);
// 	}
// 	client.close();
// 	console.log("disconnected!");
// };

module.exports = { addPro, getListOfPro };
// batchImport();
