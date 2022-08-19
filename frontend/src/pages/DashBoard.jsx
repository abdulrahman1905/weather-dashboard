import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import SearchForm from '../components/SearchForm'
import LocationInfo from '../components/LocationInfo'
import WeatherIcon from '../components/WeatherIcon'
import CurrentWeatherInfo from '../components/CurrentWeatherInfo'
import MoreWeatherInfo from '../components/MoreWeatherInfo'
import HourInfo from '../components/HourInfo'

const DashBoard = () => {
  return (
    <Container>
        <Row className='mt-lg-5'>
          <Col className="py-4 px-4" lg>
            <SearchForm />
            <LocationInfo />

            <Row className="pb-3">
              <Col className="p-0 ps-2">
                <WeatherIcon />
              </Col>
              <Col className="p-0 pe-2 center-vertically">
                <CurrentWeatherInfo />
              </Col>
            </Row>

            <Row>
              <MoreWeatherInfo />
            </Row>
          </Col>

          <Col className="py-4 px-4" lg>
            <Row className="pb-2">
              <Col xs={3}>
                <HourInfo />
              </Col>
              <Col xs={3}>
                <HourInfo />
              </Col>
              <Col xs={3}>
                <HourInfo />
              </Col>
              <Col xs={3}>
                <HourInfo />
              </Col>
            </Row>
<hr />
            <Row className="pt-2">
              <Col xs={3}>
                <HourInfo />
              </Col>
              <Col xs={3}>
                <HourInfo />
              </Col>
              <Col xs={3}>
                <HourInfo />
              </Col>
              <Col xs={3}>
                <HourInfo />
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
  )
}

export default DashBoard