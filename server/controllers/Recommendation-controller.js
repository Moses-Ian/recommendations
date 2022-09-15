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
		// i'm sure this can be done in an aggegate pipeline easily
		// replace the whole document?! i have no idea whether this is better than just updating the received/sent arrays
		// you can't update a subdocument that's in an array. you have to replace the whole array
		// need to make this a loop for when to and from have multiple entries
		if (!req.token) {
			res.status(401).send();
			return;
		}
		
		// get the 'to' field
		// get the 'from' field
		const { to, from } = req.body;
		
		// see if the user has already been recommended this movie
		const user = await users(req).findOne({ username: to[0] });
		const filtered = user.received.filter(r => r.tmdb_id === req.body.tmdb_id);
		const recommendation = filtered[0];
		
		if (recommendation.length !== 0 ) {
			recommendation.from.push(from[0]);
			const result = await users(req).replaceOne(
				{ username: to[0] },
				user
			);
		} else {
			// put in the 'to' user's 'received' list
			// need to make this atomic
			const toUser = await users(req).findOneAndUpdate(
				{ username: to[0] },
				{ $push: { received: req.body } }
			);
		}
		
		// see if the user has already recommended this movie
		const otherUser = await users(req).findOne({ username: from[0] });
		const otherFiltered = otherUser.sent.filter(r => r.tmdb_id === req.body.tmdb_id);
		const otherRecommendation = otherFiltered[0];

		if (otherRecommendation.length !== 0) {
			otherRecommendation.to.push(to[0]);
			const result = await users(req).replaceOne(
				{ username: from[0] },
				otherUser
			);
		} else {
			// put in the 'from' user's 'sent' list
			const fromUser = await users(req).findOneAndUpdate(
				{ username: from[0] },
				{ $push: { sent: req.body } }
			);
		}
		res.status(200).send();
	},

	async updateRecommendation(req, res) {
	},	

	async deleteRecommendation(req, res) {
	}
};

module.exports = recommendationController;