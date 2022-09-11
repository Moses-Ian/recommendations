const router = require('express').Router();

const {
  getAllRecommendation,
  getRecommendationById,
  createRecommendation,
  updateRecommendation,
  deleteRecommendation
} = require('../../controllers/recommendation-controller');

// /api/recommendation
router
  .route('/')
  .get(getAllRecommendation)
  .post(createRecommendation);

// /api/recommendation/:id
router
  .route('/:id')
  .get(getRecommendationById)
  .put(updateRecommendation)
  .delete(deleteRecommendation);

module.exports = router;