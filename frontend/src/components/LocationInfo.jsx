import Stack from 'react-bootstrap/Stack'

const LocationInfo = () => {
  return (
    <Stack className="pb-4">
      <div className="text-center">
        <h2 className="fw-light">
          <i className="bi bi-geo-alt"></i> Espoo, Finland
        </h2>
      </div>
      <div className="text-center">
        <p className="mb-0">Wednesday, 17 August</p>
      </div>
      <div className="text-center">
        <h3 className="fw-light">9:45:00 PM</h3>
      </div>
    </Stack>
  )
}

export default LocationInfo
