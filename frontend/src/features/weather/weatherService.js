import axios from 'axios'

const getWeatherData = async (lat, lon) => {
    const config = {
        method: 'get',
        url: '/weather',
        baseURL: 'https://api.openweathermap.org/data/2.5',
        params: {
            lat: lat,
            lon: lon,
            appid: process.env.API_KEY 
        }
    }

    const response = await axios(config)
    return response.data
}

const weatherService = {
    getWeatherData
}

export default weatherService