const { response } = require('express');
const itineraryRepository = require ('../../../repositories/itineraryRepository');

const createItinerary = async (req, res = response) => {
   const price = req.body.price;
   try{
      console.log(price);
      if (price >= 6 || price <= 0){
         return res.status(500).json({
            message: 'Price no esta dentro del rango de 1 a 5',
         })
      }
      const itinerary = await itineraryRepository.save(req.body);
      return res.status(201).json({
         message: 'El itinerario se agregó correctamente',
         response: itinerary
      })
   }catch (error){
      console.log(error);
      return res.status(500).json({
         message: 'Error interno del servidor',
         err: error
      })
   }
}

module.exports = {createItinerary};