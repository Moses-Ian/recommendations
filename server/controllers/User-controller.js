const { User } = require('../models');
const { ObjectId } = require('mongodb');
const bcrypt = require('bcrypt');
const { DateTime } = require('luxon');
const { signToken, loggedIn } = require('../utils/auth');

// I'd like to not need to pass the request object in, but I don't really know how to avoid that
const users = req => 
	req.client.db(process.env.db_name).collection("users");
const createToken = user => {
	user.lastLogin = DateTime.now();
	user.password = null;
	const token = signToken(user);
	return token;
}


const userController = {
	async getAllUser(req, res) {
		if (!req.token) {
			res.status(401).send();
			return;
		}
		if (req.user.username !== "imoses2") {
			res.status(403).send();
			return;
		}
		const userList = await users(req).find({}).toArray();
		res.json(userList);
	},

	async getUserById(req, res) {
		// need to guard this route
		const _id = new ObjectId(req.params.id);
		
		const user = await users(req).find({_id}).toArray();
		res.json(user);
	},
		
	async createUser(req , res) {
		// need to block this if the user is already created
		req.body.password = await bcrypt.hash(req.body.password, 10);
		const user = await users(req).insertOne(req.body);
		const _id = user.insertedId.toString();
		const token = createToken({ _id });
		res.json({ token });
	},

	async updateUser(req, res) {
		if (!req.token) {
			res.status(401).send();
			return;
		}
		const _id = new ObjectId(req.user._id);
		
		const result = await users(req).updateOne(
			{ _id },
			{	$set: req.body }
		);
		res.status(200).send();
	},	

	async deleteUser(req, res) {
		if (!req.token) {
			res.status(401).send();
			return;
		}
		const _id = new ObjectId(req.user._id);

		const result = await users(req).remove({ _id });
		res.status(200).send();
	},
	
	async login(req, res) {
		const { username } = req.body;
		const user = await users(req).findOne({ username });
		if (!user) {
			res.status(401).send();
			return;
		}
		const valid = await bcrypt.compare(req.body.password, user.password);
		if (!valid) {
			res.status(401).send();
			return;
		}
		const token = createToken(user);
		res.json({ token });
	}
};

module.exports = userController;