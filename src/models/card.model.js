const mongoose = require('mongoose');
const {paginate} = require('./plugins/paginate');
const Schema = mongoose.Schema;

// Define the schema
const cardSchema = new Schema({
  id: {type: String, required: true},
  title: {type: String, required: true},
  keywords: {type: [String], required: true},
  figmaLink: {type: String, required: true},
  platform: {type: String, required: true},
  imageUrl: {type: String, required: true},
});

cardSchema.plugin(paginate);

// Create a model based on the schema
const Card = mongoose.model('Card', cardSchema);

module.exports = {Card};
