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
const { Console } = require("console");

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
//Update proffesionals
const updatePro = async (req, res) => {
	try {
		await client.connect();
		const _id = req.params._id;
		console.log(_id);
		const db = client.db("Menthal_DB");
		const { formData } = req.body;
		if (!formData.fullname) delete formData.fullname;
		if (!formData.email) delete formData.email;
		if (!formData.province) delete formData.province;
		if (!formData.address) delete formData.address;
		if (!formData.country) delete formData.country;
		if (!formData.phone) delete formData.phone;
		if (!formData.permit) delete formData.permit;
		if (!formData.title) delete formData.title;
		if (!formData.desc) delete formData.desc;
		if (!formData.city) delete formData.city;
		console.log(formData);

		const result = await db
			.collection("professionals")
			.updateOne({ _id }, { $set: { ...formData } });
		res
			.status(200)
			.json({ status: 200, _id, result, message: "Professional updated" });
	} catch (error) {
		console.log(error);
	}

	client.close();
	console.log("disconnected!");
};
//delete proffesionals
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
//remove appointment from professionals
const deleteAppointment = async (req, res) => {
	try {
		await client.connect();
		const _id = req.body._id;
		const db = client.db("Menthal_DB");
		// const profData = req.body;
		console.log(_id);
		const buscar = await db.collection("professionals").findOne({ _id });
		delete buscar.appointment;
		console.log("este es buscar", buscar);
		const result = await db
			.collection("professionals")
			.updateOne({ _id: buscar._id }, { $set: { ...buscar, appointment: [] } });

		res.status(200).json({ status: 200, message: "professional updated" });
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

const addClient = async (req, res) => {
	try {
		await client.connect();
		const email = req.params.email;

		const db = client.db("Menthal_DB");
		const buscar = await db.collection("clients").findOne({ email });

		if (buscar.email === email) {
			res.status(302).json({ status: 302, message: "Client exist" });
		} else {
			const cliInfo = { ...req.body, _id: uuidv4(), email };
			const dbProf = await db.collection("clients").insertOne(cliInfo);
			res
				.status(201)
				.json({ status: 201, data: req.body, message: "Customer added." });
		}
	} catch (error) {
		console.log(error);
	}
	// client.close();
	// console.log("disconnected!");
};

const updateClient = async (req, res) => {
	try {
		await client.connect();
		const email = req.params.email;
		const db = client.db("Menthal_DB");
		const clientData = req.body;

		const buscar = await db.collection("clients").findOne({ email });

		const result_Client = await db
			.collection("clients")
			.updateOne({ _id: buscar._id }, { $set: { ...clientData } });

		res
			.status(200)
			.json({ status: 200, result_Client, message: "client updated" });
	} catch (error) {
		console.log(error);
	}

	// client.close();
	// console.log("disconnected!");
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
// 		await db.collection("clients").insertOne({
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
	addClient,
	updateClient,
	deleteAppointment,
};
// batchImport();
