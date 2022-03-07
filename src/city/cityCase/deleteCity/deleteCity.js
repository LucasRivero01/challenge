const {response} = require('express');
const city = require('../../../models/cityModel');

const cityRepository = require('../../../repositories/cityRepository');

const deleteCity = async(req, res = response)=>{
   const id = req.params.id;
   try{
      const city = await cityRepository.deleteOne(id);
      if (!city){
         return res.status(404).json({
            message: 'Not found',
         })
      }
      res.status(200).json({
         message: 'La ciudad se borro correctamente',
         data: city,
      })
   }catch(error){
      console.log(error);
      res.status(500).json({
         message:'Error interno del Servidor',
         err: error
      })
   }
}

module.exports = {deleteCity};