const { Media } = require('../models');
const fetch =require('node-fetch');

const url = id => `https://api.themoviedb.org/3/movie/${id}?api_key=${process.env.TMDB_API_KEY}&append_to_response=releases`;

const mediaController = {
	async getAllMedia(req, res) {
	},

	async getMediaById(req, res) {
		// consider trimming the data before sending it
		const { id } = req.params;
		const result = await fetch(url(id), 
		{
			method: 'GET',
			headers: { 'Content-Type': 'application/json' }
		});
		
		// this...seems silly?
		const data = await result.json();
		res.json(data);
	},
		
	async createMedia(req, res) {
	},

	async updateMedia(req, res) {
	},	

	async deleteMedia(req, res) {
	}
};

module.exports = mediaController;