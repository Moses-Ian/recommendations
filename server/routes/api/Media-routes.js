const router = require('express').Router();

const {
  getAllMedia,
  getMediaById,
	getVideosById,
  createMedia,
  updateMedia,
  deleteMedia
} = require('../../controllers/media-controller');

// /api/media
router
  .route('/')
  .get(getAllMedia)
  .post(createMedia);
	
// /api/media/videos
router
	.route('/videos/:id')
	.get(getVideosById)

// /api/media/:id
router
  .route('/:id')
  .get(getMediaById)
  .put(updateMedia)
  .delete(deleteMedia);

module.exports = router;