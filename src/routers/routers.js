const { Router } = require('express');
const router = new Router();

const {getCity,
      createCity,
      deleteCity,
      updateCity} = require('../city/cityCase/cityController')

const {getItinerary,
      createItinerary,
      deleteItinerary,
      updateItinerary} = require('../itinerary/itineraryCase/itineraryController')

// rutas para cities
// consulta por id
router.get('/city/:id', getCity.getCityById);
// consulta todos
router.get('/all', getCity.getCity);
// creacion de city
router.post('/city', createCity.createCity);
// borrado de city
router.delete('/city/:id', deleteCity.deleteCity);
// actualizacion de city
router.put('/city/:id', updateCity.updateCity);

// rutas para itinerarys
// consulta por id
router.get('/itinerary/:id', getItinerary.getItineraryById);
// consulta todos
router.get('/itinerary', getItinerary.getItinerary);
// creacion de itinerary
router.post('/itinerary', createItinerary.createItinerary);
// actualizacion de itinerary
router.delete('/itinerary/:id', deleteItinerary.deleteItinerary);
// actualizacion de itinerary
router.put('/itinerary/:id', updateItinerary.updateItineary);


module.exports = router;