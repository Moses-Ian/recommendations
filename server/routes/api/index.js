const router = require('express').Router();

router.use('/recommendation', require('./recommendation-routes'));
router.use('/media', require('./media-routes'));

module.exports = router;