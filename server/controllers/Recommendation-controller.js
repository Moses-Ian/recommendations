const { Recommendation } = require('../models');

const recommendationController = {
	getAllRecommendation(req, res) {
			.then(dbRecommendationData => res.json(dbRecommendationData))
			.catch(err => {
				console.log(err);
				res.status(400).json(err);
			});
	},

	getRecommendationById({ params }, res) {
			.then(dbRecommendationData => {
				if (!dbRecommendationData) {
					res.status(404).json({ message: 'No recommendation found with this id!' });
					return;
				}
				res.json(dbRecommendationData);
			})
			.catch(err => {
				console.log(err);
				res.status(400).json(err);
			});
	},
		
	createRecommendation({ body }, res) {
			.then(dbRecommendationData => res.json(dbRecommendationData))
			.catch(err => res.status(400).json(err));
	},

	updateRecommendation({ params, body }, res) {
			.then(dbRecommendationData => {
				if (!dbRecommendationData) {
					res.status(404).json({ message: 'No recommendation found with this id!' });
					return;
				}
				res.json(dbRecommendationData);
			})
			.catch(err => res.status(400).json(err));
	},	

	deleteRecommendation({ params }, res) {
			.then(dbRecommendationData => {
				if (!dbRecommendationData) {
					res.status(404).json({ message: 'No recommendation found with this id!' });
					return;
				}
				res.json(dbRecommendationData);
			})
			.catch(err => res.status(400).json(err));
	}
};

module.exports = recommendationController;