const { Media } = require('../models');
const fetch =require('node-fetch');

const url = id => `https://api.themoviedb.org/3/movie/${id}?api_key=${process.env.TMDB_API_KEY}&append_to_response=releases`;
const videoUrl = id => `https://api.themoviedb.org/3/movie/${id}/videos?api_key=${process.env.TMDB_API_KEY}&language=en-US`;

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
	
	async getVideosById(req, res) {
		const { id } = req.params;
		const result = await fetch(videoUrl(id),
		{
			method: 'GET',
			headers: { 'Content-Type': 'application/json' }
		});
		
		const data = await result.json();
		console.log(data);
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