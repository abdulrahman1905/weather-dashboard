const axios = require('axios')

// @Desc    Get location coordinates
// @Route   api/weather/geolocate/:city
// @Access  Public
const getCityCoordinates = async (req, res) => {
  const city = req.params.city
  const config = {
    url: '/direct',
    method: 'get',
    baseURL: 'http://api.openweathermap.org/geo/1.0',
    params: {
      q: city,
      appid: process.env.API_KEY,
    }
  }
  try {
    const response = await axios(config)

    if (response.data[0]) {
      const geoData = {
        name: response.data[0].name,
        country: response.data[0].country,
        lat: response.data[0].lat,
        lon: response.data[0].lon,
      }
      res.status(200).json(geoData)
    } else if (response.data.message) {
      res.status(400).json(response.data.message)
    } else {
      res.status(400).json({ message: 'City data not found' })
    }
  } catch (error) {
    res.status(400).json({
      message:
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString(),
    })
  }
}

// @Desc    Get current weather condition
// @Route   api/weather/current
// @Access  Public
const getCurrentWeather = async (req, res) => {
  const { lat, lon } = req.body

  const config = {
    url: '/weather',
    method: 'get',
    baseURL: 'https://api.openweathermap.org/data/2.5',
    params: {
      lat: lat,
      lon: lon,
      appid: process.env.API_KEY,
      units: 'metric',
    }
  }
  try {
    const response = await axios(config)

    if (response.data) {
      res.status(200).json(response.data)
    } else if (response.data.message) {
      res.status(400).json(response.data.message)
    } else {
      res.status(400).json({ message: 'No data found for the city' })
    }
  } catch (error) {
    res.status(400).json({
      message:
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString(),
    })
  }
}

// @Desc    Get hourly weather forcast 3 hours step for 24hrs
// @Route   api/weather/hourly
// @Access  Public
const getHourForcast = async (req, res) => {
    const { lat, lon } = req.body

    const config = {
      url: '/forecast',
      method: 'get',
      baseURL: 'https://api.openweathermap.org/data/2.5',
      params: {
        lat: lat,
        lon: lon,
        appid: process.env.API_KEY,
        units: 'metric',
        cnt: 8
      }
    }
    try {
      const response = await axios(config)
  
      if (response.data) {
        res.status(200).json(response.data)
      } else if (response.data.message) {
        res.status(400).json(response.data.message)
      } else {
        res.status(400).json({ message: 'No data found for the city' })
      }
    } catch (error) {
      res.status(400).json({
        message:
          (error.response &&
            error.response.data &&
            error.response.data.message) ||
          error.message ||
          error.toString(),
      })
    }
}

module.exports = {
  getCityCoordinates,
  getCurrentWeather,
  getHourForcast,
}
