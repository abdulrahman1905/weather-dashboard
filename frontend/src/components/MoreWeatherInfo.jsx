import Col from 'react-bootstrap/Col'

const MoreWeatherInfo = () => {
  return (
    <>
      <Col className="text-end py-1" xs={6} sm={3}>
        <span>
          <i className="bi bi-person"></i> 30&deg;C
        </span>
      </Col>
      <Col className="text-start py-1" xs={6} sm={3}>
        <span>
          <i className="bi bi-umbrella"></i> 85%
        </span>
      </Col>
      <Col className="text-end py-1" xs={6} sm={3}>
        <span>
          <i className="bi bi-wind"></i> 25km/h
        </span>
      </Col>
      <Col className="text-start py-1" xs={6} sm={3}>
        <span>
          <i className="bi bi-water"></i> 87.0%
        </span>
      </Col>
    </>
  )
}

export default MoreWeatherInfo
