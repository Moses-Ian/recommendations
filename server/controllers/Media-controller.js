const { Media } = require('../models');

const mediaController = {
	getAllMedia(req, res) {
			.then(dbMediaData => res.json(dbMediaData))
			.catch(err => {
				console.log(err);
				res.status(400).json(err);
			});
	},

	getMediaById({ params }, res) {
			.then(dbMediaData => {
				if (!dbMediaData) {
					res.status(404).json({ message: 'No media found with this id!' });
					return;
				}
				res.json(dbMediaData);
			})
			.catch(err => {
				console.log(err);
				res.status(400).json(err);
			});
	},
		
	createMedia({ body }, res) {
			.then(dbMediaData => res.json(dbMediaData))
			.catch(err => res.status(400).json(err));
	},

	updateMedia({ params, body }, res) {
			.then(dbMediaData => {
				if (!dbMediaData) {
					res.status(404).json({ message: 'No media found with this id!' });
					return;
				}
				res.json(dbMediaData);
			})
			.catch(err => res.status(400).json(err));
	},	

	deleteMedia({ params }, res) {
			.then(dbMediaData => {
				if (!dbMediaData) {
					res.status(404).json({ message: 'No media found with this id!' });
					return;
				}
				res.json(dbMediaData);
			})
			.catch(err => res.status(400).json(err));
	}
};

module.exports = mediaController;