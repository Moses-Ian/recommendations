const { User } = require('../models');
const { ObjectId } = require('mongodb');

// I'd like to not need to pass the request object in, but I don't really know how to avoid that
const users = req => 
	req.client.db(process.env.db_name).collection("users");

const userController = {
	async getAllUser(req, res) {
		const userList = await users(req).find({}).toArray();
		res.json(userList);
	},

	async getUserById(req, res) {
		const _id = new ObjectId(req.params.id);
		
		const user = await users(req).find({_id}).toArray();
		res.json(user);
	},
		
	async createUser(req , res) {
		const result = await users(req).insertOne(req.body)
		res.status(200).send();
	},

	async updateUser(req, res) {
		const _id = new ObjectId(req.params.id);
		
		const result = await users(req).updateOne(
			{ _id },
			{	$set: req.body }
		);
		res.status(200).send();
	},	

	async deleteUser(req, res) {
		const _id = new ObjectId(req.params.id);

		const result = await users(req).remove({ _id });
		res.status(200).send();
	}
};

module.exports = userController;