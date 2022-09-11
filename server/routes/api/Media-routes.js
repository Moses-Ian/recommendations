const router = require('express').Router();

const {
  getAllMedia,
  getMediaById,
  createMedia,
  updateMedia,
  deleteMedia
} = require('../../controllers/media-controller');

// /api/media
router
  .route('/')
  .get(getAllMedia)
  .post(createMedia);

// /api/media/:id
router
  .route('/:id')
  .get(getMediaById)
  .put(updateMedia)
  .delete(deleteMedia);

module.exports = router;