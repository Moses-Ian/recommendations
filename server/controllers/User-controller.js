const { User } = require('../models');

const userController = {
	getAllUser(req, res) {
		console.log("get all users");
			// .then(dbUserData => res.json(dbUserData))
			// .catch(err => {
				// console.log(err);
				// res.status(400).json(err);
			// });
		res.status(200).send();
		return;
	},

	getUserById({ params }, res) {
			// .then(dbUserData => {
				// if (!dbUserData) {
					// res.status(404).json({ message: 'No user found with this id!' });
					// return;
				// }
				// res.json(dbUserData);
			// })
			// .catch(err => {
				// console.log(err);
				// res.status(400).json(err);
			// });
	},
		
	createUser({ body }, res) {
			// .then(dbUserData => res.json(dbUserData))
			// .catch(err => res.status(400).json(err));
	},

	updateUser({ params, body }, res) {
			// .then(dbUserData => {
				// if (!dbUserData) {
					// res.status(404).json({ message: 'No user found with this id!' });
					// return;
				// }
				// res.json(dbUserData);
			// })
			// .catch(err => res.status(400).json(err));
	},	

	deleteUser({ params }, res) {
			// .then(dbUserData => {
				// if (!dbUserData) {
					// res.status(404).json({ message: 'No user found with this id!' });
					// return;
				// }
				// res.json(dbUserData);
			// })
			// .catch(err => res.status(400).json(err));
	}
};

module.exports = userController;