const express = require('express')

const router = express.Router()

const {getCityCoordinates, getCurrentWeather, getHourForcast} = require('../controllers/weatherController')

router.get('/geolocate/:city', getCityCoordinates)
router.get('/current/:lat/:lon', getCurrentWeather)
router.get('/hourly/:lat/:lon', getHourForcast)

module.exports = router