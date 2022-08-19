import Stack from 'react-bootstrap/Stack'
import WeatherIcon from './WeatherIcon'

const HourInfo = () => {
  return (
    <Stack>
      <div className="text-center">
        <h6>06:00</h6>
      </div>
      <WeatherIcon />
      <div className="text-center pt-1">
        <h6>18&deg;C</h6>
      </div>
    </Stack>
  )
}

export default HourInfo
