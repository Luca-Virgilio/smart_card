const express = require('express');
const router = express.Router();
// const ctrlMain = require('../controllers/main');
const ctrlVote = require('../controllers/vote');

/* GET home page. */
// router.get('/', ctrlMain.homepageController);

// router.get('/login', ctrlMain.loginController);
// router.get('/result', ctrlMain.resultController);
// router.get('/login/question', ctrlMain.questionController);

router.post('/', ctrlVote.votingController);

module.exports = router;
