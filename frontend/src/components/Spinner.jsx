import Spinner from 'react-bootstrap/Spinner'

const LoadSpinner = () => {
  return (
    <div className="d-flex justify-content-center mt-5">
      <Spinner animation="border" role="status">
        <span className="visually-hidden">Loading...</span>
      </Spinner>
    </div>
  )
}

export default LoadSpinner
