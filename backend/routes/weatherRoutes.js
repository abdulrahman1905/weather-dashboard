const express = require('express')

const router = express.Router()

const {getCityCoordinates, getCurrentWeather, getHourForcast} = require('../controllers/weatherController')

router.get('/geolocate/:city', getCityCoordinates)
router.get('/current', getCurrentWeather)
router.get('/hourly', getHourForcast)

module.exports = router