import axios from 'axios'

const API_URL = '/api/weather/'

//HTML5 Geolocation API with Promise
const getCoordinates = () => {
    return new Promise( (resolve, reject) => {
        navigator.geolocation.getCurrentPosition(
            position => resolve(position),
            error => reject(error)
        )
    })
}

//Get city coordinates
const getCityCoordinates = async (city) => {
    const response = await axios.get(`${API_URL}geolocate/${city}`)

    return response.data
}

//Get current weather data only from coordinates
const getCurrentWeatherData = async (coord) => {
    const response = await axios.get(`${API_URL}current/${coord.lat}/${coord.lon}`)
    

    return response.data
}

//Get current weather data only from coordinates
const getHourlyWeatherData = async (coord) => {
    const response = await axios.get(`${API_URL}hourly/${coord.lat}/${coord.lon}`)

    return response.data
}



const weatherService = {
  getCoordinates,
  getCityCoordinates,
  getCurrentWeatherData,
  getHourlyWeatherData
}

export default weatherService
