const { response } = require('express');
const cityRepository = require ('../../../repositories/cityRepository');

const createCity = async (req, res = response) => {
   const name = req.body.name;
   try{ 
      const cityConsultar = await cityRepository.findOne(name);
      if (cityConsultar){
         return res.status(202).json({
            message: 'La ciudad ya existe',
            response: cityConsultar
         })
      }
      const city = await cityRepository.save(req.body);
      return res.status(201).json({
         message: 'La ciudad se agrego correctamente',
         response: city
      })
   }catch (error){
      return res.status(500).json({
         message: 'Error interno del servidor',
         err: error
      })
   }
}

module.exports = {createCity};