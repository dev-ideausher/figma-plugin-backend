const Joi = require('joi');
const {fileSchema} = require('./custom.validation');
const {imageTypes, imgTypeToExtension} = require('../constants');

const createCard = {
  body: Joi.object().keys({
    image: fileSchema('icon', imageTypes, Object.values(imgTypeToExtension)),
    id: Joi.string().required(),
    title: Joi.string().required(),
    keywords: Joi.string(),
    figmaLink: Joi.string().required(),
  }),
};

module.exports = {
  createCard,
};
