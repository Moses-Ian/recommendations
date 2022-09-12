const router = require('express').Router();

const {
  getAllUser,
  getUserById,
  createUser,
  updateUser,
  deleteUser,
	login
} = require('../../controllers/User-controller');

// /api/User
router
  .route('/')
  .get(getAllUser)
  .post(createUser);
	
// /api/User/login
router
	.route('/login')
	.post(login);
	
// /api/User/:id
router
  .route('/:id')
  .get(getUserById)
  .put(updateUser)
  .delete(deleteUser);

module.exports = router;