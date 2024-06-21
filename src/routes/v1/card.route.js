const express = require('express');

const {fileUploadService} = require('../../microservices');

const router = express.Router();
const cardController = require('../../controllers/card.controller');

router.get('/all', cardController.getAllCards);

router.post('/create', fileUploadService.multerUpload.single('image'), cardController.createCard);

module.exports = router;
