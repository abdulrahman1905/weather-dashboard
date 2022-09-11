import Container from 'react-bootstrap/Container'
import Button from 'react-bootstrap/Button'

const About = () => {
  return (
    <Container>
      <div className="w-md-50 m-md-5 m-4 lh-lg p-md-5 p-4 bg-light rounded-3">
        <h2>About Weather Dashboard</h2>
        <p className="passage">
          The app displays weather information of any city as required by the
          user. All weather data used for the app are fetched from an
          OpenWeatherMap API free subscription which includes the current
          weather data API and 5 Days Forecast in 3 hours steps. The weather
          information displayed on the app for any particular location include
          local time and date of the location, current weather condition, and
          hourly forecast for the next 24 hours in 3 hours steps.
        </p>

        <p>
          On first load, the app request access to users current location. The
          weather information of current location is then displayed if location
          access is allowed by user. The weather information of a city can also
          be viewd through a search with the city name.
        </p>

        <p>
          Future update will include an feature where user can select a city
          from a list of search result obtained from the search.
        </p>

        <Button
          href="https://github.com/abdulrahman1905/weather-dashboard"
          target="_blank"
          variant="outline-dark"
          size='lg'
        >
          <i className="bi bi-github"></i> View on GitHub
        </Button>
      </div>
    </Container>
  )
}

export default About
