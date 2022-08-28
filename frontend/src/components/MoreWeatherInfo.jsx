import Col from 'react-bootstrap/Col'

const MoreWeatherInfo = ({ data, hourData }) => {
  return (
    <>
      <Col className="text-end py-1" xs={6} sm={3}>
        <span>
          <i className="bi bi-wind"></i>{' '}
          {Math.round(data.wind.speed * 3.6 * 10) / 10}km/h
        </span>
      </Col>
      <Col className="text-start py-1" xs={6} sm={3}>
        <span>
          <i className="bi bi-umbrella"></i> {Math.round(hourData.list[0].pop * 100)}%
        </span>
      </Col>
      <Col className="text-end py-1" xs={6} sm={3}>
        <span>
          <i className="bi bi-moisture"></i>{' '}
          {parseFloat(data.main.humidity).toFixed(1)}%
        </span>
      </Col>
      <Col className="text-start py-1" xs={6} sm={3}>
        <span>
          <i className="bi bi-eye"></i> {(data.visibility/1000).toFixed(2)}km
        </span>
      </Col>
    </>
  )
}

export default MoreWeatherInfo
