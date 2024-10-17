const express = require('express');
const router = express.Router();
const { getStories, addContribution } = require('./controllers');

router.get('/stories', getStories);
router.post('/contributions', addContribution);

module.exports = router;