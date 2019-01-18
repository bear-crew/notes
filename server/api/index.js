const bodyParser = require('body-parser');
const router = require('express').Router();

router.use(bodyParser.json());
router.use(require('./user'));
router.use(require('./login'));
router.use(require('./account'));
router.use(require('./note'));

module.exports = router;