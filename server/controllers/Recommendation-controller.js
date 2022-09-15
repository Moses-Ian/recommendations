const { Recommendation } = require('../models');
const { ObjectId } = require('mongodb');

// I'd like to not need to pass the request object in, but I don't really know how to avoid that
const users = req => 
	req.client.db(process.env.db_name).collection("users");

const recommendationController = {
	async getUserReceivedRecommendation(req, res) {
		if (!req.token) {
			res.status(401).send();
			return;
		}
		const _id = new ObjectId(req.user._id);
		const user = await users(req).findOne({ _id });
		if (!user || !user.received) {
			res.json([]);
			return;
		}
		
		res.json(user.received);
		
	},

	async getUserSentRecommendation(req, res) {
		if (!req.token) {
			res.status(401).send();
			return;
		}
		const _id = new ObjectId(req.user._id);
		const user = await users(req).findOne({ _id });
		res.json(user.sent);
	},
	

	async getRecommendationById(req, res) {
	},
		
	async createRecommendation(req, res) {
		if (!req.token) {
			res.status(401).send();
			return;
		}
		
		// get the 'to' field
		// get the 'from' field
		const { to, from, ...recommendation } = req.body;
		
		// put in the 'to' user's 'received' list
		// need to make this atomic
		const toUser = await users(req).findOneAndUpdate(
			{ username: to },
			{ $push: { received: recommendation } }
		);
		
		// put in the 'from' user's 'sent' list
		const fromUser = await users(req).findOneAndUpdate(
			{ username: from },
			{ $push: { sent: recommendation } }
		);
		
		res.status(200).send();
	},

	async updateRecommendation(req, res) {
	},	

	async deleteRecommendation(req, res) {
	}
};

module.exports = recommendationController;