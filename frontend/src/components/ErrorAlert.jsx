import Alert from 'react-bootstrap/Alert'

const ErrorAlert = ({message}) => {
  return (
    <Alert variant="danger">
      <Alert.Heading>Oops! An error occured!</Alert.Heading>
      <p>
        {message}
      </p>
    </Alert>
  )
}

export default ErrorAlert
