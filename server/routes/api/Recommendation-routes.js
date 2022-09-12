const router = require('express').Router();

const {
  getUserReceivedRecommendation,
	getUserSentRecommendation,
  getRecommendationById,
  createRecommendation,
  updateRecommendation,
  deleteRecommendation
} = require('../../controllers/recommendation-controller');

// /api/recommendation
router
  .route('/')
  .post(createRecommendation);
	
// /api/recommendation/received/:id
router
	.route('/received/:id')
	.get(getUserReceivedRecommendation);

// /api/recommendation/sent/:id
router
	.route('/sent/:id')
	.get(getUserSentRecommendation);

// /api/recommendation/:id
router
  .route('/:id')
  .get(getRecommendationById)
  .put(updateRecommendation)
  .delete(deleteRecommendation);

module.exports = router;