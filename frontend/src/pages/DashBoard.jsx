import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import SearchForm from '../components/SearchForm'
import LocationInfo from '../components/LocationInfo'
import WeatherIcon from '../components/WeatherIcon'
import CurrentWeatherInfo from '../components/CurrentWeatherInfo'
import MoreWeatherInfo from '../components/MoreWeatherInfo'
import HourInfo from '../components/HourInfo'
import { useEffect } from 'react'
import { getWeatherData } from '../features/weather/weatherSlice'
import { useSelector, useDispatch } from 'react-redux'
import LoadSpinner from '../components/Spinner'
import ErrorAlert from '../components/ErrorAlert'

const DashBoard = () => {
  const dispatch = useDispatch()
  const {
    currentWeatherData,
    hourlyWeatherData,
    isLoading,
    message,
  } = useSelector((state) => state.weather)

  useEffect(() => {

    dispatch(getWeatherData())

  }, [dispatch])

  if(isLoading){
    return <LoadSpinner />
  }
  
  return (
    <Container>
      <SearchForm />
      {(currentWeatherData && hourlyWeatherData) ? 
      <Row className="mt-lg-3">
        <Col className="py-4 px-4" lg>
          <LocationInfo data={currentWeatherData}/>
          
          <Row className="pb-3">
            <Col className="p-0 ps-2">
              <WeatherIcon icon={currentWeatherData.weather[0].icon}/>
            </Col>
            <Col className="p-0 pe-2 center-vertically">
              <CurrentWeatherInfo data={currentWeatherData}/>
            </Col>
          </Row>

          <Row>
            <MoreWeatherInfo data={currentWeatherData} hourData={hourlyWeatherData}/>
          </Row>
        </Col>

        <Col className="py-4 px-4" lg>
          <Row>
            <p className='text-center pb-2'>HOURLY FORECAST EVERY 3 HOURS</p>
          </Row>
          <Row className="pb-2">
            {hourlyWeatherData.list.map((data, index) => (
              index > 0 && index <= 4 && <HourInfo key={index} data={data} />
            ))}
          </Row>
          <hr />
          <Row className="pt-2">
            {hourlyWeatherData.list.map((data, index) => (
              index > 4 && <HourInfo key={index} data={data} />
            ))}
          </Row>
        </Col>
      </Row> : <ErrorAlert message={message}/> }
    </Container>
  )
}

export default DashBoard
