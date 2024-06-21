const {cardService} = require('../services');
const catchAsync = require('../utils/catchAsync');
const {getPaginateConfig} = require('../utils/queryPHandler');

const getAllCards = catchAsync(async (req, res) => {
  try {
    const {filters, options} = getPaginateConfig(req.query);

    const result = await cardService.getCards(filters, options);

    res.status(200).json(result);
  } catch (error) {
    console.error('Error fetching cards:', error);
    res.status(500).json({error: 'Internal server error'});
  }
});

const createCard = catchAsync(async (req, res) => {
  try {
    const {title, id, keywords, figmaLink, imageUrl, platform} = req.body;

    const cardObj = {
      title,
      id,
      keywords: JSON.parse(keywords),
      figmaLink,
      imageUrl,
      platform,
    };

    const result = await cardService.createCard(cardObj, req.file);
    res.status(201).json(result);
  } catch (error) {
    console.error('Error creating card:', error);
    res.status(500).json({error: 'Internal server error'});
  }
});

module.exports = {
  getAllCards,
  createCard,
};
