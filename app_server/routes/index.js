const express = require('express');
const router = express.Router();
const ctrlMain = require('../controllers/main');

/* GET home page. */
router.get('/', ctrlMain.homepageController);

router.get('/login', ctrlMain.loginController);
router.get('/result', ctrlMain.resultController);
router.get('/login/question', ctrlMain.questionController);

module.exports = router;
