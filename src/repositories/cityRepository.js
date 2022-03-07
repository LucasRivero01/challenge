const City = require('../models/cityModel');

const getAll = async ()     => await City.find();
const getOne = async (id)   => await City.findById(id);
const count  = async ()     => await City.count();

const findOne = async (name) => await City.findOne({'name': name})
const deleteOne = async (id)  => await City.findByIdAndRemove(id);
const updateOne = async (id, body)  => await City.findByIdAndUpdate(id, body);

// guardo la nueva ciudad
const save   = async (body) => {
   const city = new City({
      name   : body.name,
      phrase : body.phrase,
      img    : body.img,
      country: body.country
   })

   await city.save();
   return city;
}

module.exports = {
   getAll,
   getOne,
   count,
   save,
   deleteOne,
   findOne,
   updateOne
}