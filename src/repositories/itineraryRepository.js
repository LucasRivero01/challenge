const Itinerary = require('../models/itineraryModel');
const City      = require('../models/cityModel');

const getAll = async ()       => await Itinerary.find();
const getOne = async (id)     => await Itinerary.findById(id);
const count  = async ()       => await Itinerary.count();
const deleteOne = async (id)  => await Itinerary.findByIdAndRemove(id);
const updateOne = async (id, body)  => await Itinerary.findByIdAndUpdate(id, body);

// guardo la nueva ciudad
const save   = async (body) => {
   const itinerary = new Itinerary({
      photo    : body.photo,
      name     : body.name,
      price    : body.price,
      duration : body.duration,
      likes    : body.likes,
      hashtag  : body.hashtag,
      city     : body.city
   })
   const newitinerary = await itinerary.save();
   const city = await City.findById(newitinerary.city);
   city.itinerary.push(newitinerary._id);

   await City.updateOne({_id: city._id}, {itinerary: city.itinerary});
   return itinerary;
}

module.exports = {
   getAll,
   getOne,
   count,
   save,
   deleteOne,
}