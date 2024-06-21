const {fileUploadService} = require('../microservices');
const {Card} = require('../models/card.model');

async function getCards(filters, options) {
  return Card.paginate(filters, options);
}

async function createCard(card, file) {
  const [image] = await fileUploadService.s3Upload([file], 'figma-card-thumbnails');
  return Card.create({...card, imageUrl: image.url});
}

module.exports = {
  getCards,
  createCard,
};
