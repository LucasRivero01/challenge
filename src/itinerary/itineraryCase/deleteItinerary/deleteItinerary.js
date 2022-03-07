const {response} = require('express');
const itinerary = require('../../../models/itineraryModel');

const itineraryRepository = require('../../../repositories/itineraryRepository');

const deleteItinerary = async(req, res = response)=>{
   const id = req.params.id;
   try{
      const itinerary = await itineraryRepository.deleteOne(id);
      if (!itinerary){
         return res.status(404).json({
            message: 'Not found',
         })
      }
      res.status(200).json({
         message: 'El itinerario se borro correctamente',
         data: itinerary,
      })
   }catch(error){
      res.status(500).json({
         message:'Error interno del Servidor',
         err: error
      })
   }
}

module.exports = {deleteItinerary};