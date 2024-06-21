const Joi = require('joi');
const {fileSchema} = require('./custom.validation');
const {imageTypes, imgTypeToExtension} = require('../constants');

const createCard = {
  file: Joi.object()
    .keys(fileSchema('image', imageTypes, Object.values(imgTypeToExtension)))
    .required(),
  body: Joi.object().keys({
    id: Joi.string().required(),
    title: Joi.string().required(),
    keywords: Joi.string(),
    figmaLink: Joi.string().required(),
    platform: Joi.string().required(),
  }),
};

module.exports = {
  createCard,
};
