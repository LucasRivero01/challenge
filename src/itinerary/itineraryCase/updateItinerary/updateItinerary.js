const {response} = require('express');
const itinerary = require('../../../models/cityModel');

const itineraryRepository = require('../../../repositories/itineraryRepository');

const updateItineary = async(req, res = response)=>{
   const id = req.params.id;
   const body = req.body;
   try{
      const itinerary = await itineraryRepository.updateOne(id, body);
      if (!itinerary){
         return res.status(404).json({
            message: 'Not found',
         })
      }
      res.status(200).json({
         message: 'El itinerario se actualizó correctamente',
         data: city,
      })
   }catch(error){
      res.status(500).json({
         message:'Error interno del Servidor',
         err: error
      })
   }
}

module.exports = {updateItineary};