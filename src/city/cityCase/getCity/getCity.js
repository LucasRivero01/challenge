const {response} = require('express');
const city = require('../../../models/cityModel');

const cityRepository = require('../../../repositories/cityRepository');

// consulto todos los clientes que existen
const getCity = async(req, res = response)=>{
   try{
      const citys = await cityRepository.getAll();
      const count = await cityRepository.count();
      if (!citys){
         return res.status(404).json({
            message: 'Not found',
         })
      }
      res.status(200).json({
         message: 'City',
         response: citys,
         total: count
      })
   }catch(error){
      console.log(error)
      res.status(500).json({
         message:'Error interno del Servidor',
         err: error
      })
   }
}

// consulto un cliente por id
const getCityById = async(req, res = response)=>{
   const id = req.params.id;
   try{
      const city = await cityRepository.getOne(id);
      if (!city){
         return res.status(404).json({
            message: 'Not found',
         })
      }
      res.status(200).json({
         message: 'city',
         data: city,
      })
   }catch(error){
      res.status(500).json({
         message:'Error interno del Servidor',
         err: error
      })
   }
}

module.exports = {
   getCityById,
   getCity
}