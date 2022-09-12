const { Media } = require('../models');

// I'd like to not need to pass the request object in, but I don't really know how to avoid that
const media = req => 
	req.client.db(process.env.db_name).collection("media");

const mediaController = {
	async getAllMedia(req, res) {
		const mediaList = await media(req).find({}).toArray();
		res.json(mediaList);
	},

	async getMediaById(req, res) {
		const _id = new ObjectId(req.params.id);
		const media = await media(req).find({ _id }).toArray();
		res.json(media);
	},
		
	async createMedia(req, res) {
		const result = await media(req).insertOne(req.body);
		res.status(200).send();
	},

	async updateMedia(req, res) {
		const _id = new ObjectId(req.params.id);
		const result = await media(req).updateOne(
			{ _id },
			{ $set: req.body }
		);
		res.status(200).send();
	},	

	async deleteMedia(req, res) {
		const _id = new ObjectId(req.params.id);
		const result = await media(req).remove({ _id });
		res.status(200).send();
	}
};

module.exports = mediaController;