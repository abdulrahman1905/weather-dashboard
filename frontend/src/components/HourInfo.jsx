import Stack from 'react-bootstrap/Stack'
import Col from 'react-bootstrap/Col'
import WeatherIcon from './WeatherIcon'

const HourInfo = ({data}) => {
  return (
    <Col xs={3}>
      <Stack>
        <div className="text-center">
          <h6>{data.dt_txt.split(' ')[1].substring(0, 5)}</h6>
        </div>
        <WeatherIcon icon={data.weather[0].icon}/>
        <div className="text-center pt-1">
          <h6>{Math.round(data.main.temp)}&deg;C</h6>
        </div>
      </Stack>
    </Col>
  )
}

export default HourInfo
