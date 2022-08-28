import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import weatherService from './weatherService'

const initialState = {
  currentWeatherData: null,
  hourlyWeatherData: null,
  isLoading: false,
  isSuccess: false,
  isError: false,
  message: '',
}

export const getWeatherData = createAsyncThunk(
  'weather/getWeatherData',
  async (city, thunkAPI) => {
    let coord = null
    let currentWeatherData = null
    let hourlyWeatherData = null
    try {
      if (city) {
        coord = await weatherService.getCityCoordinates(city)
        console.log(coord)
        console.log('By city name')
      } else {
        const position = await weatherService.getCoordinates()
        coord = {
          lat: position.coords.latitude,
          lon: position.coords.longitude
        }
        console.log(coord)
        console.log('HTML5 Geolocation API')
      }
      if(coord){
        currentWeatherData = await weatherService.getCurrentWeatherData(coord)
        console.log(currentWeatherData)
        hourlyWeatherData = await weatherService.getHourlyWeatherData(coord)
        console.log(hourlyWeatherData)
        console.log({currentWeatherData, hourlyWeatherData})
        return {currentWeatherData, hourlyWeatherData}
      }
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString()
      return thunkAPI.rejectWithValue(message)
    }
  }
)

export const weatherSlice = createSlice({
  name: 'weather',
  initialState,
  reducers: {
    reset: (state) => initialState
  },

  extraReducers: (builder) => {
    builder
    .addCase(getWeatherData.pending, (state) => {
      state.isLoading = true
    })
    .addCase(getWeatherData.fulfilled, (state, action) => {
      state.isLoading = false
      state.isSuccess = true
      state.currentWeatherData = action.payload.currentWeatherData
      state.hourlyWeatherData = action.payload.hourlyWeatherData
    })
    .addCase(getWeatherData.rejected, (state, action) => {
      state.isLoading = false
      state.isError = true
      state.message = action.payload
    })
  },
})

export const { reset } = weatherSlice.actions

export default weatherSlice.reducer
