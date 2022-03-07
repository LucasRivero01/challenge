const mongoose = require('mongoose');

const citySchema = new mongoose.Schema({
  name:        { type: String, unique: true, required: true },
  phrase:      { type: String, required: true },
  img:         { type: String, required: true },
  country:     { type: String, required: true },
  itinerary:   [{type: mongoose.Schema.Types.ObjectId, ref: 'itinerary', autopopulate: true}],
  })

citySchema.plugin(require('mongoose-autopopulate'));
module.exports = mongoose.model('cities', citySchema);