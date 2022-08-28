import React from 'react'
import service from '../extras/service'

const CurrentWeatherInfo = ({data}) => {
  return (
    <div>
      <div className="text-center">
        <h1 className="fw-normal">
          <i className="bi bi-thermometer"></i>{Math.round(data.main.temp)}&deg;C
        </h1>
      </div>
      <div className="text-center pb-1">
        <h6 className='fw-normal'>Feels like {Math.round(data.main.feels_like)}&deg;C</h6>
      </div>
      <div className="text-center">
        <h3 className="fw-light">{service.capitalize(data.weather[0].description)}</h3>
      </div>
    </div>
  )
}

export default CurrentWeatherInfo
