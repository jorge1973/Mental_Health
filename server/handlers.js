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

//Admin fetch site
//Get the list of all professsional in the DB
const getListOfPro = async (req, res) => {
	try {
		await client.connect();
		const db = client.db("Menthal_DB");
		const dbProf = await db.collection("professionals").find().toArray();
		dbProf
			? res.status(200).json({ status: 200, data: dbProf })
			: res.status(404).json({ status: 404, data: "Not Found" });
	} catch (error) {
		console.log(error);
	}
	client.close();
	console.log("disconnected!");
};
//Add professionals to the DB
const addPro = async (req, res) => {
	try {
		await client.connect();
		const profInfo = { ...req.body, _id: uuidv4() };
		console.log(profInfo);
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

const updatePro = async (req, res) => {
	await client.connect();
	const _id = req.params._id;
	const db = client.db("Menthal_DB");
	const hello = req.body.hello;
	if (hello != undefined) {
		const result = await db
			.collection("professionals")
			.updateOne({ _id }, { $set: { hello } });
		res
			.status(200)
			.json({ status: 200, _id, result, message: "Professional updated" });
	} else {
		res.status(404).json({ status: 404, _id, data: " Not Found" });
	}

	client.close();
	console.log("disconnected!");
};

const deletePro = async (req, res) => {
	try {
		await client.connect();
		const _id = req.params._id;
		const db = client.db("Menthal_DB");
		const result = await db.collection("professionals").deleteOne({ _id });
		result
			? res.status(204).json({ status: 204, message: "Deleted!" })
			: res.status(404).json({ status: 404, _id, data: "Not Found" });
	} catch (error) {
		console.log(error);
	}
	client.close();
	console.log("disconnected!");
};

//Customer fetch functions
const getProfessionals = async (req, res) => {
	try {
		await client.connect();
		const db = client.db("Menthal_DB");
		const dbProf = await db.collection("professionals").find().toArray();
		dbProf
			? res.status(200).json({ status: 200, data: dbProf })
			: res.status(404).json({ status: 404, data: "Not Found" });
	} catch (error) {
		console.log(error);
	}
	client.close();
	console.log("disconnected!");
};

const getProfDetails = async (req, res) => {
	await client.connect();
	const db = client.db("Menthal_DB");
	const _id = req.params.id;
	const result = await db.collection("professionals").findOne({ _id });
	console.log(result);
	result
		? res.status(200).json({ status: 200, _id, data: result })
		: res
				.status(404)
				.json({ status: 404, _id, data: "Professional Not Found" });

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

module.exports = {
	addPro,
	getListOfPro,
	getProfessionals,
	getProfDetails,
	updatePro,
	deletePro,
};
// batchImport();
