const router = require('express').Router();

router.use('/user', require('./user-routes'));
router.use('/recommendation', require('./recommendation-routes'));
router.use('/media', require('./media-routes'));

module.exports = router;