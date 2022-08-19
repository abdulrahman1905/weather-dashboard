import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import weatherService from './weatherService'

const initialState = {
  weatherData: null,
  lat: '',
  lon: '',
  isLoading: false,
  isSuccess: false,
  isError: false,
  message: '',
}

export const getWeatherData = createAsyncThunk(
  'weather/getWeatherData',
  async (lat, lon, thunkAPI) => {
    try {
      return await weatherService.getWeatherData(lat, lon)
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString()
        thunkAPI.rejectWithValue(message)
    }
  }
)

export const weatherSlice = createSlice({
  name: 'weather',
  initialState,
  reducers: {
    reset: (state) => initialState,
  },

  extraReducers: (builder) => {},
})

export const { reset } = weatherSlice.actions

export default weatherSlice.reducer
