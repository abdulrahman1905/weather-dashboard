import Stack from 'react-bootstrap/Stack'
import service from '../extras/service'

const LocationInfo = ({data}) => {  
  return (
    <Stack className="pb-4">
      <div className="text-center">
        <h1 className="pb-2 fw-light">
          <i className="bi bi-geo-alt"></i> {data.name}, {data.sys.country}
        </h1>
      </div>
      <div className="text-center">
        <p className="mb-0">{service.getLocalDate(data.timezone)}</p>
      </div>
      <div className="text-center">
        <h4 className="fw-light">Local Time: {service.getLocalTime(data.timezone)}</h4>
      </div>
    </Stack>
  )
}

export default LocationInfo
