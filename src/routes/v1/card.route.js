const express = require('express');

const {fileUploadService} = require('../../microservices');

const router = express.Router();
const cardController = require('../../controllers/card.controller');
const validate = require('../../middlewares/validate');
const {cardValidation} = require('../../validations/index');

router.get('/all', cardController.getAllCards);

router.post(
  '/create',
  fileUploadService.multerUpload.single('image'),
  validate(cardValidation.createCard),
  cardController.createCard
);

module.exports = router;
