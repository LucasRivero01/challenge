const mongoose = require('mongoose');

const itinerarySchema = new mongoose.Schema({
  photo:      { type: String, required: true },
  name:       { type: String, required: true },
  price:      { type: Number, required: true },
  duration:   { type: String, required: true },
  likes:      { type: Number, default: 0},
  hashtag:    [{type: String}],
  comments:   [{type: String}],
  city:       {type: mongoose.Schema.Types.ObjectId, ref: 'cities', autopopulate: false},
  //activities: [{type: mongoose.Schema.Types.ObjectId, ref: 'activitie', autopopulate: true}],
  })

itinerarySchema.plugin(require('mongoose-autopopulate'));
module.exports = mongoose.model('itinerary', itinerarySchema);