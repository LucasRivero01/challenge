const {response} = require('express');
const itinerary = require('../../../models/itineraryModel');

const itineraryRepository = require('../../../repositories/itineraryRepository');

// consulto todos los clientes que existen
const getItinerary = async(req, res = response)=>{
   try{
      const itinerarys = await itineraryRepository.getAll();
      const count = await itineraryRepository.count();
      if (!itinerarys){
         return res.status(404).json({
            message: 'Not found',
         })
      }
      res.status(200).json({
         message: 'itinerarys',
         response: itinerarys,
         total: count
      })
   }catch(error){
      res.status(500).json({
         message:'Error interno del Servidor',
         err: error
      })
   }
}

// consulto un cliente por id
const getItineraryById = async(req, res = response)=>{
   const id = req.params.id;
   try{
      const itinerary = await itineraryRepository.getOne(id);
      if (!itinerary){
         return res.status(404).json({
            message: 'Not found',
         })
      }
      res.status(200).json({
         message: 'itinerary',
         data: itinerary,
      })
   }catch(error){
      res.status(500).json({
         message:'Error interno del Servidor',
         err: error
      })
   }
}

module.exports = {
   getItineraryById,
   getItinerary
}