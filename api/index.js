const router = require('express').Router();
const peoplecars = require('./peoplecars');

router.use('/peoplecars', peoplecars);

module.exports = router;